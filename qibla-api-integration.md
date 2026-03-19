# AlAdhan Qibla API Integration Guide

## Table of Contents

1. [API Overview](#1-api-overview)
2. [Relevant Endpoints](#2-relevant-endpoints)
3. [Data We Can Retrieve](#3-data-we-can-retrieve)
4. [Useful Product Opportunities](#4-useful-product-opportunities)
5. [Recommended Implementation Scope](#5-recommended-implementation-scope)
6. [Implementation Ideas](#6-implementation-ideas)
7. [Caveats and Limitations](#7-caveats-and-limitations)
8. [Sources Reviewed](#8-sources-reviewed)

---

## 1. API Overview

The AlAdhan Qibla API is a very small API with one core job: given a latitude and longitude, return the Qibla direction and optionally generate a compass image for that location.

### Core capabilities

- Return a Qibla direction for a pair of coordinates.
- Return a pre-rendered compass PNG that marks the Qibla direction.
- Work without authentication.
- Support cross-origin browser requests.
- Return cacheable responses with ETags.

### Base URLs

The OpenAPI spec lists three servers:

- `https://api.aladhan.com/v1`
- `https://aladhan.api.islamic.network/v1/`
- `https://aladhan.api.alislam.ru/v1/`

Recommendation: use `https://api.aladhan.com/v1` as the canonical base URL and treat the others as mirrors or emergency fallbacks, not as first-class production dependencies unless we validate them separately.

### Transport and operational characteristics

- Auth: none.
- Response formats: JSON for direction, PNG for compass image.
- CORS: enabled (`Access-Control-Allow-Origin: *` observed on live responses).
- Cache headers: `Cache-Control: public,max-age=7200` observed.
- ETag: present on live responses.
- Compression: OpenAPI spec documents `Accept-Encoding` support for `gzip` and `zstd`.
- Rate limiting: not documented in the spec, but live responses expose per-second rate-limit headers. Observed values were `RateLimit-Limit: 12` and `RateLimit-Remaining` headers.

### What this API does well

- It is simple.
- It is enough for a generally reliable Qibla direction feature.
- It is easy to call directly from a browser or mobile app.
- It returns a deterministic result for a coordinate pair, so it is easy to cache aggressively on our side.

### What this API does not do

- It does not obtain the user's location for us.
- It does not read the device compass or heading for us.
- It does not calibrate for magnetic interference.
- It does not provide reverse geocoding, place names, or map context.
- It does not provide confidence scores or accuracy metadata.
- It does not provide mosque-specific alignment or local authority adjustments.

For our use case, that is fine. The API is sufficient as a Qibla-bearing source, but the UX quality will depend more on location permission flow, compass/orientation handling, and validation than on the API itself.

---

## 2. Relevant Endpoints

## 2.1 `GET /qibla/{latitude}/{longitude}`

Returns the Qibla direction for the provided coordinates.

### Parameters

| Parameter | Location | Type | Required | Notes |
|---|---|---|---|---|
| `latitude` | path | number | Yes | Coordinate latitude |
| `longitude` | path | number | Yes | Coordinate longitude |
| `Accept-Encoding` | header | string | No | `gzip` or `zstd` per spec |

### Example request

```text
GET https://api.aladhan.com/v1/qibla/43.6532/-79.3832
```

### Example response

```json
{
  "code": 200,
  "status": "OK",
  "data": {
    "latitude": 43.6532,
    "longitude": -79.3832,
    "direction": 54.58063724375705
  }
}
```

### Integration note

The docs describe this as the "Qibla angle on a compass." In practice, treat `data.direction` as a compass bearing in degrees from north. The sample values and live tests match expected bearings.

## 2.2 `GET /qibla/{latitude}/{longitude}/compass`

Returns a compass image marking the Qibla direction for the provided coordinates.

### Parameters

| Parameter | Location | Type | Required | Notes |
|---|---|---|---|---|
| `latitude` | path | number | Yes | Coordinate latitude |
| `longitude` | path | number | Yes | Coordinate longitude |
| `Accept-Encoding` | header | string | No | `gzip` or `zstd` per spec |

### Example request

```text
GET https://api.aladhan.com/v1/qibla/43.6532/-79.3832/compass
```

### Response

- Content type: `image/png`
- Observed output: `1000x1000` PNG with alpha channel
- Observed appearance: transparent background, built-in compass rose, numeric degree marks, and Kaaba icon

### Integration note

This is useful as a fallback or a low-effort static visual. It is not ideal as the main product UI because it is predesigned and not customizable through documented parameters.

---

## 3. Data We Can Retrieve

### 3.1 Direction endpoint payload

| Field | Type | Meaning |
|---|---|---|
| `code` | integer | HTTP-style status code in the payload |
| `status` | string | Human-readable status such as `OK` |
| `data.latitude` | number | Echo of the latitude the API used |
| `data.longitude` | number | Echo of the longitude the API used |
| `data.direction` | number | Qibla direction in degrees |

### 3.2 Compass endpoint payload

The compass endpoint returns binary image data, not JSON.

What we can use from it:

- A ready-to-display compass image.
- A stable image URL pattern for `<img>` tags or cached downloads.
- A lightweight fallback when we do not want to build a custom compass immediately.

### 3.3 Operational data observed from live responses

- `Cache-Control: public,max-age=7200`
- `ETag`
- `Access-Control-Allow-Origin: *`
- per-second rate-limit headers

This means we can call the API directly from the client if we want, but we should still add our own validation and caching layer.

### 3.4 What we cannot retrieve

- Heading from the device
- Magnetic declination data
- Map overlays
- nearby mosques
- "turn left/right" instructions
- quality/confidence metadata

---

## 4. Useful Product Opportunities

Even though the API is narrow, it supports several useful product experiences.

### Core user-facing features

- "Find Qibla" screen using live location
- simple bearing display such as `Qibla: 55 degrees`
- custom arrow that rotates toward the Qibla
- fallback static compass image
- last known Qibla direction for the user's saved location

### Supporting UX we should consider

- show whether the user is using current GPS location or a manually selected location
- show the coordinate source and last update time
- add a recalculation button instead of auto-refetching excessively
- optionally allow city/manual coordinate input when location permission is denied

### Additional data or behavior worth surfacing

- a short note that the direction is approximate and generally reliable
- a note that device compass quality depends on device sensors and calibration
- a small helper like "face roughly northeast" if we add our own cardinal-label layer

The API itself does not provide the last two items, but they are useful product layers on top of the returned bearing.

---

## 5. Recommended Implementation Scope

## 5.1 What we should implement

Recommended:

1. Use `GET /qibla/{latitude}/{longitude}` for the main feature.
2. Build our own UI arrow/compass around the returned angle.
3. Cache responses by rounded coordinates and only refresh when the user's location meaningfully changes.
4. Use the compass PNG endpoint only as a fallback, quick prototype, or shareable/static illustration.

## 5.2 Why this scope makes sense

- The JSON direction endpoint gives us the core data with minimal coupling to AlAdhan's visual style.
- A custom compass UI will integrate better with our design system, accessibility needs, and localization.
- The actual bearing does not change second to second. Only the user's heading changes. So we should fetch once per location change and handle UI rotation locally.

## 5.3 Product recommendation

For this product, the best path is:

- MVP: geolocation -> fetch bearing -> display custom arrow and bearing text
- phase 2: add device orientation for a live "point me toward Qibla" experience
- fallback: static PNG compass when orientation APIs are unavailable or denied

---

## 6. Implementation Ideas

## 6.1 Browser geolocation + API fetch

```ts
async function fetchQiblaDirection(lat: number, lon: number) {
  const response = await fetch(`https://api.aladhan.com/v1/qibla/${lat}/${lon}`);

  if (!response.ok) {
    throw new Error(`Qibla request failed: ${response.status}`);
  }

  const payload = await response.json();
  return payload.data.direction as number;
}
```

### Suggested flow

1. Request location permission.
2. Validate that latitude and longitude are real numbers in valid ranges.
3. Fetch the Qibla bearing once.
4. Store it in component state and local cache.
5. If device orientation is available, rotate the arrow locally based on current heading versus the fetched bearing.

## 6.2 Static compass fallback

```tsx
<img
  src={`https://api.aladhan.com/v1/qibla/${lat}/${lon}/compass`}
  alt="Qibla direction compass"
/>
```

Use this if:

- we need a very fast prototype
- device orientation APIs are unavailable
- we want a no-JS fallback image

## 6.3 Suggested caching strategy

- Round coordinates before caching or requesting to avoid cache fragmentation from GPS jitter.
- Re-fetch only when the user moves beyond a threshold such as 1 to 5 km, or when they manually refresh.
- Persist the last successful result locally for offline-ish fallback.

Why this is reasonable: in a live probe around Toronto, moving across a broad east-west span of the city changed the returned bearing by only about `0.23` degrees. That makes this API suitable for a generally reliable direction feature even when the location is not perfectly precise.

## 6.4 App-architecture recommendation

Because this repo is a Next.js + Capacitor app, either of these approaches is viable:

- direct client call to AlAdhan, since CORS is open
- internal route handler or service wrapper that validates input and centralizes caching

Recommendation: use a thin internal wrapper. It gives us a cleaner contract, lets us reject malformed coordinates, and avoids coupling UI components directly to a third-party API.

---

## 7. Caveats and Limitations

## 7.1 Input validation is weak on the API side

This is the biggest caveat from live testing.

Observed behavior:

- `GET /qibla/200/0` returned `200 OK` even though latitude `200` is invalid.
- `GET /qibla/notalat/0` returned `200 OK` and the API effectively treated the invalid latitude as `0`.

Implication: do not trust the API to validate coordinates. We must validate and sanitize coordinates before requesting.

## 7.2 Precision is not the same as user-perceived accuracy

The API returns many decimal places, but the real-world experience will usually be limited by:

- geolocation quality
- compass sensor quality
- device orientation permission
- magnetic interference
- user interpretation of the UI

In other words, the API is precise enough. The UX layer is where most error will come from.

## 7.3 The compass image is opinionated

The PNG is useful, but it is:

- visually opinionated
- not documented as customizable
- image-based rather than semantic UI

Use it as a fallback, not the main experience.

## 7.4 Rate limits mean we should not poll

Live responses exposed per-second rate limiting around 12 requests per second.

That is more than enough for normal use, but it is another reason not to re-call the API on every heading or animation frame. Fetch on location change only.

## 7.5 This API is deterministic enough to cache longer than the server suggests

The server advertises a 2-hour cache window, but the bearing from a coordinate to the Kaaba is effectively static. Product-side caching can be more aggressive as long as we invalidate when the user's location changes.

## 7.6 Long-term strategic note

This API is fine for initial integration. However, Qibla bearing is mathematically deterministic and relatively simple. If offline-first behavior becomes important, we could compute it locally later and keep the same UI contract.

---

## 8. Sources Reviewed

Official docs and specs:

- `https://aladhan.com/qibla-api#overview`
- `https://api.aladhan.com/v1/documentation/openapi/qibla/yaml`

Live endpoints tested during review:

- `https://api.aladhan.com/v1/qibla/43.6532/-79.3832`
- `https://api.aladhan.com/v1/qibla/43.6532/-79.3832/compass`
- `https://api.aladhan.com/v1/qibla/200/0`
- `https://api.aladhan.com/v1/qibla/notalat/0`

The recommendations above combine the documented contract with observed live-response behavior.
