# AlAdhan Prayer Times API — Integration Guide for Revert Guide

## Table of Contents

1. [API Overview](#1-api-overview)
2. [Complete Endpoint Reference](#2-complete-endpoint-reference)
3. [Data Available from the API](#3-data-available-from-the-api)
4. [Endpoints Most Relevant to Our Use Case](#4-endpoints-most-relevant-to-our-use-case)
5. [Calculation Methods & Parameters](#5-calculation-methods--parameters)
6. [Features We Can Build](#6-features-we-can-build)
7. [Implementation Considerations](#7-implementation-considerations)
8. [Limitations & Accuracy](#8-limitations--accuracy)
9. [Enhancement Opportunities](#9-enhancement-opportunities)
10. [Sample API Calls for Toronto](#10-sample-api-calls-for-toronto)

---

## 1. API Overview

**AlAdhan** (https://aladhan.com) provides a free, open RESTful API for Islamic prayer times and calendar data. It is maintained by the [Islamic Network](https://islamic.network/).

### Key characteristics

- **Base URL:** `https://api.aladhan.com/v1`
- **Authentication:** None required — fully open and free to use.
- **Response format:** JSON (all endpoints).
- **Protocol:** Available over both HTTP and HTTPS.
- **Compression:** Supports `gzip` and `zstd` via `Accept-Encoding` header.
- **Rate limiting:** No documented rate limits, but responsible usage is expected (cache responses, don't poll excessively).
- **Accuracy disclaimer:** The API explicitly states: *"Prayer timings might not always match your local mosque or government authority. Their timings are likely tuned or adjusted."* This means times serve as good general estimates — not authoritative replacements for local mosque schedules.

### What the API provides overall

| Category | Description |
|---|---|
| **Prayer Times** | Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha, and additional timings (Imsak, Sunset, Midnight, First Third, Last Third of the night) |
| **Hijri Calendar** | Full Hijri (Islamic) date information with every response, including month names in English and Arabic, weekday names, and year |
| **Islamic Holidays** | Holiday names returned in the Hijri date object (e.g., "Beginning of the holy months") |
| **Gregorian Calendar** | Complete Gregorian date metadata alongside Hijri data |
| **Next Prayer** | Dedicated endpoint to get only the next upcoming prayer |
| **Calculation Methods** | 24 recognized scholarly calculation methods from authorities worldwide, plus a custom option |
| **Juristic School Support** | Shafi and Hanafi Asr calculation |
| **Multiple Calendar Systems** | HJCoSA, Umm al-Qura, Diyanet, and Mathematical calendar calculation |
| **Location Flexibility** | Accept coordinates (lat/lng), free-text address, or city/country |

---

## 2. Complete Endpoint Reference

### Daily Prayer Times

| Endpoint | Method | Location Input | Description |
|---|---|---|---|
| `/timings/{date}` | GET | Latitude + Longitude | Prayer times for a specific Gregorian date |
| `/timingsByAddress/{date}` | GET | Address string | Prayer times for an address on a specific date |
| `/timingsByCity/{date}` | GET | City + Country (+ State) | Prayer times for a city on a specific date |

### Next Prayer

| Endpoint | Method | Location Input | Description |
|---|---|---|---|
| `/nextPrayer/{date}` | GET | Latitude + Longitude | Returns only the next upcoming prayer time |
| `/nextPrayerByAddress/{date}` | GET | Address string | Next prayer for an address |

### Monthly Calendar (Gregorian)

| Endpoint | Method | Location Input | Description |
|---|---|---|---|
| `/calendar/{year}/{month}` | GET | Latitude + Longitude | All prayer times for a Gregorian month |
| `/calendarByAddress/{year}/{month}` | GET | Address string | Monthly times for an address |
| `/calendarByCity/{year}/{month}` | GET | City + Country | Monthly times for a city |

### Monthly Calendar (Hijri)

| Endpoint | Method | Location Input | Description |
|---|---|---|---|
| `/hijriCalendar/{year}/{month}` | GET | Latitude + Longitude | Prayer times for a Hijri month |
| `/hijriCalendarByAddress/{year}/{month}` | GET | Address string | Hijri monthly times for an address |
| `/hijriCalendarByCity/{year}/{month}` | GET | City + Country | Hijri monthly times for a city |

### Yearly Calendar

| Endpoint | Method | Location Input | Description |
|---|---|---|---|
| `/calendar/{year}` | GET | Latitude + Longitude | Full Gregorian year of prayer times |
| `/calendarByAddress/{year}` | GET | Address string | Yearly times for an address |
| `/calendarByCity/{year}` | GET | City + Country | Yearly times for a city |
| `/hijriCalendar/{year}` | GET | Latitude + Longitude | Full Hijri year of prayer times |
| `/hijriCalendarByAddress/{year}` | GET | Address string | Hijri yearly times for an address |
| `/hijriCalendarByCity/{year}` | GET | City + Country | Hijri yearly times for a city |

### Date Range Calendar

| Endpoint | Method | Location Input | Description |
|---|---|---|---|
| `/calendar/from/{start}/to/{end}` | GET | Latitude + Longitude | Prayer times for a date range (max 11 months) |
| `/calendarByAddress/from/{start}/to/{end}` | GET | Address string | Date range times for an address |
| `/calendarByCity/from/{start}/to/{end}` | GET | City + Country | Date range times for a city |

### Utility

| Endpoint | Method | Description |
|---|---|---|
| `/methods` | GET | Returns all supported calculation methods with their parameters |

---

## 3. Data Available from the API

Every prayer time response returns a rich data object. Here is the complete data structure:

### 3.1 Prayer Timings Object

```json
{
  "Fajr": "05:23",
  "Sunrise": "06:47",
  "Dhuhr": "12:58",
  "Asr": "16:34",
  "Sunset": "19:09",
  "Maghrib": "19:09",
  "Isha": "20:33",
  "Imsak": "05:13",
  "Midnight": "00:58",
  "Firstthird": "22:22",
  "Lastthird": "03:35"
}
```

| Timing | Prayer? | Description |
|---|---|---|
| **Fajr** | Yes (1st) | Pre-dawn prayer — begins at true dawn |
| **Sunrise** | No | Sunrise time — Fajr ends here |
| **Dhuhr** | Yes (2nd) | Midday prayer — after sun passes zenith |
| **Asr** | Yes (3rd) | Afternoon prayer — timing varies by Shafi/Hanafi school |
| **Sunset** | No | Sunset time |
| **Maghrib** | Yes (4th) | Sunset prayer — begins at sunset |
| **Isha** | Yes (5th) | Night prayer — after twilight disappears |
| **Imsak** | No | Pre-Fajr reminder (traditionally 10 min before Fajr) — critical for Ramadan fasting |
| **Midnight** | No | Islamic midnight — calculated midpoint |
| **Firstthird** | No | End of first third of the night — relevant for night worship (Tahajjud) |
| **Lastthird** | No | Beginning of last third of the night — highly recommended time for extra prayers |

### 3.2 Hijri Date Object

```json
{
  "date": "01-07-1446",
  "format": "DD-MM-YYYY",
  "day": "1",
  "weekday": {
    "en": "Al Arba'a",
    "ar": "الاربعاء"
  },
  "month": {
    "number": 7,
    "en": "Rajab",
    "ar": "رَجَب",
    "days": 30
  },
  "year": "1446",
  "designation": {
    "abbreviated": "AH",
    "expanded": "Anno Hegirae"
  },
  "holidays": ["Beginning of the holy months"],
  "adjustedHolidays": [],
  "method": "HJCoSA"
}
```

**Key data points:**
- Full Hijri date with day/month/year
- Weekday name in **English and Arabic**
- Month name in **English and Arabic** with day count
- **Holidays array** — Islamic holidays/occasions for that date
- **Adjusted holidays** — holidays as per adjusted calendar methods
- Calendar method used (HJCoSA, UAQ, Diyanet, Mathematical)

### 3.3 Gregorian Date Object

```json
{
  "date": "01-01-2025",
  "format": "DD-MM-YYYY",
  "day": "01",
  "weekday": {
    "en": "Wednesday"
  },
  "month": {
    "number": 1,
    "en": "January"
  },
  "year": "2025",
  "designation": {
    "abbreviated": "AD",
    "expanded": "Anno Domini"
  }
}
```

### 3.4 Meta Object

Each response also includes metadata about the calculation used:
- Latitude and longitude used
- Timezone resolved
- Calculation method details (name, params for Fajr/Isha angles)
- Latitude adjustment method
- Midnight mode
- School (Shafi/Hanafi)
- Any tune offsets applied

---

## 4. Endpoints Most Relevant to Our Use Case

Given that Revert Guide is targeted at new Muslim converts in the **Toronto area**, here are the most relevant endpoints ranked by priority:

### Primary endpoints (must-have)

#### 1. `GET /timingsByAddress/{date}` — **Top recommendation**
- **Why:** Users enter a location (address, city name, or postal code) and get today's prayer times. This is the simplest, most user-friendly approach — no geocoding required on our end.
- **Example:** `/timingsByAddress/18-03-2026?address=Toronto, ON, Canada&method=2`
- **Note:** Without a `x7xapikey` from 7x.ax, the geocoded coordinates are masked in the response, but prayer times are still returned accurately.

#### 2. `GET /nextPrayerByAddress/{date}` — **High value**
- **Why:** Returns only the next upcoming prayer. Perfect for a "Next Prayer" countdown widget or banner.
- **Example:** `/nextPrayerByAddress/18-03-2026?address=Toronto, Canada&method=2`

#### 3. `GET /timingsByCity/{date}` — **Good fallback**
- **Why:** Uses city + country instead of full address. More forgiving of imprecise input. Good as a fallback if address geocoding fails.
- **Example:** `/timingsByCity/18-03-2026?city=Toronto&country=CA&state=Ontario&method=2`

### Secondary endpoints (nice-to-have)

#### 4. `GET /calendarByAddress/{year}/{month}` — **Monthly view**
- **Why:** Fetch an entire month of prayer times in one call. Useful for a monthly prayer timetable view or for pre-caching data for offline use.

#### 5. `GET /calendarByAddress/from/{start}/to/{end}` — **Ramadan schedule**
- **Why:** Fetch a date range (max 11 months). Perfect for generating a complete Ramadan schedule (Suhoor/Iftar times from Imsak and Maghrib).

#### 6. `GET /methods` — **Settings/preferences**
- **Why:** Fetch the list of all calculation methods to present in a user settings/preferences selector.

---

## 5. Calculation Methods & Parameters

### 5.1 Calculation Methods (24 options)

The `method` parameter controls the calculation authority used. For **Toronto (North America)**, the most relevant are:

| ID | Method | Notes |
|---|---|---|
| **2** | **Islamic Society of North America (ISNA)** | **Recommended default for Toronto.** Most widely used in N. America. Fajr/Isha angle: 15° |
| 3 | Muslim World League (MWL) | Common worldwide default. Fajr: 18°, Isha: 17° |
| 0 | Jafari / Shia Ithna-Ashari | For Shia users |
| 1 | University of Islamic Sciences, Karachi | Common in South Asian communities |
| 4 | Umm Al-Qura University, Makkah | Saudi Arabia standard |
| 5 | Egyptian General Authority of Survey | Common in Egypt and Middle East |
| 7 | Institute of Geophysics, University of Tehran | Iran |
| 8 | Gulf Region | GCC countries |
| 9 | Kuwait | Kuwait |
| 10 | Qatar | Qatar |
| 11 | Majlis Ugama Islam Singapura | Singapore |
| 12 | Union Organization Islamique de France | France |
| 13 | Diyanet İşleri Başkanlığı | Turkey |
| 14 | Spiritual Administration of Muslims of Russia | Russia |
| 15 | Moonsighting Committee Worldwide | Requires `shafaq` parameter (general/ahmer/abyad) |
| 16 | Dubai (experimental) | Dubai |
| 17 | JAKIM | Malaysia |
| 18 | Tunisia | Tunisia |
| 19 | Algeria | Algeria |
| 20 | KEMENAG | Indonesia |
| 21 | Morocco | Morocco |
| 22 | Comunidade Islamica de Lisboa | Portugal |
| 23 | Ministry of Awqaf, Jordan | Jordan |
| 99 | Custom | Allows specifying custom angles for Fajr/Isha |

### 5.2 Other Parameters

| Parameter | Values | Description |
|---|---|---|
| `school` | `0` (Shafi — default), `1` (Hanafi) | Affects Asr time calculation. Hanafi Asr is later. |
| `midnightMode` | `0` (Standard), `1` (Jafari) | Standard = midpoint sunset to sunrise. Jafari = midpoint sunset to Fajr. |
| `latitudeAdjustmentMethod` | `1` (Middle of Night), `2` (One Seventh), `3` (Angle Based) | Adjusts times at high latitudes (relevant for Toronto in summer/winter extremes). |
| `tune` | Comma-separated integers | Minute offsets for: Imsak, Fajr, Sunrise, Dhuhr, Asr, Maghrib, Sunset, Isha, Midnight. E.g., `0,0,0,2,0,0,0,0,0` adds 2 minutes to Dhuhr. |
| `timezonestring` | IANA timezone | E.g., `America/Toronto`. Auto-detected from coordinates if omitted. |
| `shafaq` | `general`, `ahmer`, `abyad` | Only for method 15 (Moonsighting Committee). Determines which type of twilight is used for Isha. |
| `calendarMethod` | `HJCoSA`, `UAQ`, `DIYANET`, `MATHEMATICAL` | Hijri calendar calculation method. Default: HJCoSA (High Judicial Council of Saudi Arabia). |
| `iso8601` | `true`/`false` | Returns times in ISO 8601 format (e.g., `2026-03-18T05:23:00-04:00`) instead of `HH:MM`. |
| `adjustment` | Integer | Day adjustment for MATHEMATICAL calendar method only. |

---

## 6. Features We Can Build

### 6.1 Core Feature: Today's Prayer Times

**Description:** User enters their city/address (defaulting to Toronto) and sees today's five prayer times plus sunrise.

**API call:** `GET /timingsByAddress/{today}?address={userInput}&method=2`

**UI elements:**
- Clean prayer time card for each of the 5 prayers + Sunrise
- Highlight the current/next prayer
- Display the Hijri date alongside the Gregorian date (both come in the response)
- Show Islamic holiday name if `holidays` array is non-empty

---

### 6.2 Next Prayer Countdown

**Description:** A prominent banner or widget showing "Next Prayer: Maghrib in 2h 15m" that updates in real-time.

**Implementation approach:**
- Use the `/nextPrayerByAddress/{date}` endpoint to get the next prayer, OR
- Fetch all daily times via `/timingsByAddress/{date}` and calculate the next prayer client-side by comparing times to the current time
- Client-side countdown timer updates every minute/second

---

### 6.3 Hijri Date Display

**Description:** Show today's Islamic date prominently. The API returns the full Hijri date with every prayer time response at no extra cost.

**Data available:**
- Hijri day, month (English + Arabic), year
- Weekday in Arabic
- Any Islamic holidays for today

**UI idea:** "Today is 18 Ramadan 1447 AH — الاربعاء" shown in a styled header.

---

### 6.4 Islamic Holiday Awareness

**Description:** The API's `holidays` and `adjustedHolidays` arrays in the Hijri date object return the names of Islamic occasions.

**What we can build:**
- Banner showing "Today is the beginning of Ramadan" or other occasions
- Upcoming holiday awareness by fetching a month's calendar and filtering dates with non-empty `holidays` arrays
- Special content/messages tied to Islamic holidays (Eid, Ramadan, Isra & Mi'raj, etc.)

---

### 6.5 Ramadan Fasting Schedule (Suhoor & Iftar)

**Description:** During Ramadan, new Muslims need to know when to stop eating (Suhoor/Imsak) and when to break fast (Iftar/Maghrib).

**API call:** Use the monthly or date-range endpoint to get the entire Ramadan month at once.

**Key timings:**
- **Suhoor ends at:** Imsak time (or Fajr time as a stricter cutoff)
- **Iftar begins at:** Maghrib time

**UI:** Table or scrollable list showing each day of Ramadan with Suhoor and Iftar times. Can highlight today's row.

---

### 6.6 Monthly Prayer Timetable

**Description:** A full-month view of prayer times in a table format.

**API call:** `GET /calendarByAddress/{year}/{month}?address=Toronto, Canada&method=2`

**UI:** Printable/downloadable timetable similar to what mosques distribute. One row per day, columns for each prayer.

---

### 6.7 Calculation Method Selector

**Description:** Allow users to select their preferred calculation method. New converts may be advised by their local mosque to use ISNA (method 2) or another method.

**API call:** `GET /methods` to fetch all available methods with names and parameters.

**UI:** Dropdown or radio button list in a settings/preferences panel. Store the selection in sessionStorage (per our no-persistence rule).

---

### 6.8 Juristic School Selection (Shafi vs. Hanafi)

**Description:** The Asr prayer time differs between Shafi and Hanafi schools. Let users select which they follow.

**Parameter:** `school=0` (Shafi, default) or `school=1` (Hanafi)

**UI:** Simple toggle in settings. Label clearly: "If your mosque follows the Hanafi school, Asr prayer will be slightly later."

---

### 6.9 Night Prayer Guidance (Tahajjud)

**Description:** The API returns `Firstthird` and `Lastthird` of the night times. The last third of the night is highly valued in Islamic tradition for voluntary prayer (Tahajjud).

**What we can build:**
- "Best time for night prayer (Tahajjud): [Lastthird] – [Fajr]"
- Educational content explaining the significance of the last third of the night, paired with the actual time for the user's location

---

### 6.10 Dual Calendar View (Gregorian + Hijri)

**Description:** Every API response includes both Gregorian and Hijri date objects. We can build a mini Islamic calendar showing both systems side by side.

**Bonus data:**
- Hijri month names in Arabic script (for language learning / familiarity)
- Weekday names in Arabic
- Number of days in each Hijri month

---

## 7. Implementation Considerations

### 7.1 Architecture & Offline Strategy

Since Revert Guide is **offline-first**, the prayer times feature requires careful handling:

**Online flow:**
1. User enters location (address/city) → call AlAdhan API
2. Display results and cache the response in `sessionStorage` (ephemeral, per project rules)
3. For Ramadan: fetch entire month in one call and cache

**Offline handling:**
- Prayer times require a network call (location → times calculation). Cannot be pre-cached statically because they vary by date and location.
- **Graceful degradation:** Show a friendly message: "Prayer times require an internet connection. Please connect to view times for your area."
- **Mitigation:** When online, fetch a week or month of times and store in `sessionStorage` so they persist for the browser session even if the user goes offline temporarily.
- Consider using the monthly endpoint (`/calendarByAddress/{year}/{month}`) to prefetch the current month's data in a single API call.

### 7.2 Location Input Design

**Recommended approach:**
1. **Text input** — User types their city, address, or postal code (e.g., "Toronto", "Scarborough, ON", "M5V 3C6")
2. Pass the input directly to `/timingsByAddress/{date}?address={input}`
3. The API handles geocoding internally — we do not need our own geocoding service

**Fallback:** If the address endpoint fails, try `/timingsByCity/{date}?city=Toronto&country=CA` as a fallback.

**Pre-filled default:** Since the app targets the Toronto area, default the location field to "Toronto, ON, Canada" so users see times immediately.

**x7xapikey note:** Address/city endpoints mention an optional `x7xapikey` from https://7x.ax for geocoding. Without it, coordinates are masked in the response but times still work. For MVP, we don't need this key.

### 7.3 Date Formatting

- The API expects dates in **DD-MM-YYYY** format (European style), **not** MM-DD-YYYY.
- When generating today's date for the API call, ensure proper formatting:
  ```typescript
  const now = new Date();
  const date = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;
  ```
- The `iso8601` parameter can be set to `true` to receive ISO-formatted times, which may be easier to parse programmatically.

### 7.4 Timezone Handling

- The API auto-detects timezone from coordinates. For address-based calls, this works automatically.
- Explicitly pass `timezonestring=America/Toronto` for certainty.
- Display times in the user's local time — the API handles this when timezone is set correctly.

### 7.5 Default Parameters for Toronto

```
method=2          (ISNA — standard for North America)
school=0          (Shafi — default; let user change)
timezonestring=America/Toronto
latitudeAdjustmentMethod=3  (Angle Based — recommended for Toronto's latitude ~43.65°N)
```

### 7.6 Caching Strategy

| Data | Cache Approach | Duration |
|---|---|---|
| Today's prayer times | `sessionStorage` | Until session ends or date changes |
| Monthly calendar | `sessionStorage` | Until session ends |
| Calculation methods list | Can pre-cache or hardcode | Static data, rarely changes |
| Hijri holidays | Extracted from calendar responses | Same as calendar cache |

### 7.7 Error Handling

The API returns `400` for bad requests. Handle:
- Invalid address / geocoding failure → show "We couldn't find that location. Try a different address or city name."
- Network failure → show offline fallback message
- Unexpected response → graceful fallback to default Toronto times

### 7.8 Performance

- Single daily prayer time call: very fast, small JSON payload (~2-3 KB)
- Monthly calendar: moderate payload (~60-90 KB for 30 days). Fetch once, cache.
- Yearly calendar: large payload (~700 KB+). **Avoid on mobile.** Fetch monthly instead.
- Use `Accept-Encoding: gzip` to reduce payload size.
- Date range endpoint (`/calendar/from/{start}/to/{end}`) limited to 11 months max.

### 7.9 Accessibility Considerations

- Prayer times should use semantic `<time>` elements or `<table>` for timetables
- Ensure sufficient color contrast for highlighted "current prayer" indicators
- Screen reader: announce next prayer and time clearly
- Support reduced motion for countdown animations
- Arabic text (weekday names, month names) must have `lang="ar"` and appropriate `dir="rtl"` attributes

### 7.10 Security

- API calls are made over HTTPS — no credentials exposed
- No API key required for the core endpoints (x7xapikey is optional)
- User-entered address is sent to a third-party API — include this in the Privacy Policy
- Sanitize user input before display (though we only display API response data, not raw user input)

---

## 8. Limitations & Accuracy

### 8.1 Known Limitations

| Limitation | Impact | Mitigation |
|---|---|---|
| **Times are estimates** | May differ from local mosque by a few minutes | Display disclaimer: "Times are approximate. Check with your local mosque for exact prayer schedules." |
| **No authentication** | No user-specific features, no saved preferences on API side | Acceptable for our no-login architecture |
| **No Qibla direction** | The prayer times API documentation does not expose a Qibla endpoint | Can be calculated client-side with a simple formula using lat/lng, or note for future direct endpoint exploration |
| **Address geocoding quality** | Depends on the API's internal geocoder (or 7x.ax) | Provide clear input guidance to users; offer city/country fallback |
| **Hijri date accuracy** | Hijri dates can differ by ±1-2 days from local moon sighting | Note this in the UI: "Hijri date is calculated. Actual dates may vary based on local moon sighting." |
| **No push notifications** | The API is pull-based, no webhook/push support | Would need to build client-side scheduling (future enhancement) |
| **Offline unavailable** | Requires network for fresh data | Pre-fetch and cache in sessionStorage; show offline message |
| **Calendar range limit** | Date range endpoint limited to 11 months | Sufficient for Ramadan schedule and monthly views |

### 8.2 Accuracy Notes

- Different calculation methods can produce Fajr/Isha times that differ by **5-20 minutes**.
- Asr time differs by **30-60 minutes** between Shafi and Hanafi schools.
- At high latitudes (above ~48°N), summer Fajr/Isha times can be anomalous. Toronto at ~43.65°N is generally fine, but the `latitudeAdjustmentMethod` parameter helps for edge cases.
- Sunrise/Sunset times are astronomically calculated and highly accurate.
- Dhuhr, Asr, and Maghrib are generally more precise than Fajr and Isha (which depend on twilight angle interpretation).

---

## 9. Enhancement Opportunities

### 9.1 Phase 1 — MVP Features

- [x] **Today's prayer times** by address (inputable/changeable by the user) (defaulting to Toronto)
- [x] **Hijri date display** with holiday awareness
- [x] **Calculation method selector** (default: ISNA)
- [x] Disclaimer about approximate nature of times
- [ ] **Next prayer countdown** widget with real-time timer
- [ ] **Ramadan fasting schedule** (Suhoor/Iftar times for the month)
- [ ] **Monthly timetable** view (printable)
- [ ] **Night prayer (Tahajjud) guidance** using Lastthird time data


### 9.4 Ideas Using the Hijri Holiday Data

The `holidays` array in each response provides automatic detection of significant Islamic dates. We could:
- Show **special banners** on Eid ul-Fitr, Eid ul-Adha, Laylat al-Qadr, etc.
- Provide **educational content** about the significance of each holiday, linked from the holiday banner
- Build an **upcoming Islamic events** section by scanning the next month's calendar for dates with non-empty holiday arrays
- Cross-reference holiday data with our **Topics** content (e.g., link Ramadan-related prayers to the Ramadan topic page)

### 9.5 Ideas Using Night Division Times

The `Midnight`, `Firstthird`, and `Lastthird` fields enable:
- **Tahajjud prayer guide:** "The best time for night prayer tonight is between [Lastthird] and [Fajr]"
- **Witr prayer reminder:** Encourage performing Witr before Fajr
- **Night worship educational content** for new Muslims learning about voluntary prayers

---

## 10. Sample API Calls for Toronto

### Today's prayer times (address-based)
```
GET https://api.aladhan.com/v1/timingsByAddress/18-03-2026?address=Toronto,%20ON,%20Canada&method=2&school=0&timezonestring=America/Toronto
```

### Today's prayer times (city-based)
```
GET https://api.aladhan.com/v1/timingsByCity/18-03-2026?city=Toronto&country=CA&state=Ontario&method=2
```

### Next prayer (address-based)
```
GET https://api.aladhan.com/v1/nextPrayerByAddress/18-03-2026?address=Toronto,%20Canada&method=2
```

### Monthly calendar (March 2026)
```
GET https://api.aladhan.com/v1/calendarByAddress/2026/3?address=Toronto,%20Canada&method=2
```

### Ramadan schedule (date range)
```
GET https://api.aladhan.com/v1/calendarByAddress/from/01-03-2026/to/01-04-2026?address=Toronto,%20Canada&method=2
```

### List all calculation methods
```
GET https://api.aladhan.com/v1/methods
```

### With ISO 8601 timestamps
```
GET https://api.aladhan.com/v1/timingsByAddress/18-03-2026?address=Toronto,%20Canada&method=2&iso8601=true
```

---

## Summary

The AlAdhan API is an excellent fit for Revert Guide's prayer times feature. It requires **no authentication**, handles **geocoding internally** via address/city parameters, returns **rich data** (prayer times + Hijri dates + Islamic holidays) in a single call, and supports the **ISNA calculation method** standard in North American mosques.

The primary consideration is our offline-first architecture — prayer times inherently need network access for fresh, location-specific data, but we can mitigate this by caching monthly data in `sessionStorage` during online sessions.

For Toronto-based new Muslim converts, defaulting to `method=2` (ISNA) with `school=0` (Shafi) covers the most common use case, while providing options for Hanafi users and other calculation methods respects the diversity of the Muslim community.
