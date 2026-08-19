# Privacy Policy

**Last updated: August 18, 2026**

This Privacy Policy explains what information the Territor.io mobile app ("Territor.io", "the app", "we", "us")
collects, why we collect it, who we share it with, and the choices and rights you have. Territor.io is
operated by **Joshua Abbott, doing business as Forsyte Studios** ("Forsyte Studios"). If you have any
questions, contact us at **forsyte.studios@gmail.com**.

By creating an account or using Territor.io, you agree to the collection and use of information as described
here.

## Who this policy covers

This policy applies to the Territor.io app on iOS and Android and the Territor.io backend service that supports it.
It does not cover third-party services that Territor.io relies on (such as Google, Apple, or map providers),
which have their own privacy policies — see [Third parties we share data with](#third-parties-we-share-data-with).

## The short version

- We use your **location** while you record a run so we can measure the loop you run and turn it into
  territory on the map.
- We use your **Google or Apple account** to sign you in. We never see or store your password.
- Other players can see your **username, profile color, captured area, and the shape of the loops you
  publish** — not your real name, email, or photo.
- We **do not sell your data**, and we don't run analytics or advertising trackers in the app today.
- You can **delete your account and data** at any time — see [Deleting your data](#deleting-your-data).

## Information we collect

### Account and profile information
When you sign in with **Google** or **Apple**, we receive and store a basic profile from that provider
via Firebase Authentication:

- a unique account identifier,
- your **email address**,
- your **display name**,
- your **profile photo URL** (if provided).

You also choose a **username** and a **profile color** inside Territor.io. Your username is how you appear to
other players.

> We never receive or store your Google or Apple password. Sign-in is handled entirely by Google,
> Apple, and Firebase Authentication.

### Location information
When you start recording a run, Territor.io collects **precise GPS location** from your device so it can trace
your route and calculate the area your loop encloses.

- Location is collected **only while a run is being recorded**, at high accuracy.
- On **iOS**, if you grant "Always" permission, recording can continue **in the background** so your run
  keeps tracking with the screen off. iOS shows the blue background-location indicator while this
  happens.
- On **Android**, a foreground service with a persistent notification keeps your run recording while
  the screen is off. We do **not** request Android's separate background-location permission
  (`ACCESS_BACKGROUND_LOCATION`), so location is never collected when you aren't recording a run.

> **What we store is minimized.** We do **not** keep the raw, point-by-point GPS trail of your run on
> our servers. After a run, the server extracts only the **enclosed loop's boundary shape** (simplified),
> plus its area, start/end times, and score. The detailed trail exists only on your device while the run
> is in progress or waiting to sync.

### Run and gameplay information
For each run you record and submit, we store:

- the **enclosed loop boundary** (a simplified polygon) and its **area**,
- **start and end times**,
- the **score** and any group(s) you publish it to,
- environmental **conditions captured for scoring** (for example temperature, precipitation, darkness,
  and elevation gain), which the server looks up for the time and place of your run.

### On-device information
If you finish a run while offline, the full run — including its track points — is stored **locally on
your device** until it can be submitted, then cleared. This data stays on your device and is not
readable by us until you submit the run.

### Information we do **not** collect today
Territor.io does **not** include the Firebase Analytics SDK, any crash-reporting SDK, or any advertising
SDK — the app ships with no analytics, telemetry, or advertising trackers of any kind. We do not request
access to your contacts, photos, camera, microphone, or health/fitness sensors.

### Planned features (not yet active)
Territor.io is under active development. Features described in our app materials but **not yet live** may, when
released, involve additional data — for example:

- a **live conditions multiplier** using richer weather, elevation, and time-of-run data;
- **public groups and discovery** that suggest groups based on where you run;
- **home-zone obfuscation** settings that let you hide or clip routes near a private area;
- **Territor.io Pro** subscriptions and **ad-supported** publishing, which involve a payment processor
  (Apple/Google) and, for ads, an advertising provider;
- optional **import from Strava, Apple Health, or Google Fit**.

We will update this policy before any such feature that changes what we collect goes live.

## How we use your information

We use the information above to:

- authenticate you and maintain your account and profile;
- record your runs, detect enclosed loops, and calculate area and score;
- place you and your territory on leaderboards and the map;
- look up weather and elevation for the conditions that affect your score;
- sync runs recorded offline;
- keep the game fair (detecting implausible speeds, GPS quality problems, and suspicious loops);
- respond to your support requests and comply with legal obligations.

We do **not** sell your personal information.

## What other players can see

Territor.io is a competitive, social game, so some information is shown to other players by design:

- On leaderboards and group member lists: your **username**, **profile color**, **captured area**, and
  **score**.
- On the territory map: your **username**, **color**, and the **boundary shape of loops you have
  published**.

> **Loop shapes can reveal where you run.** The outline of a published loop shows, on a map, the ground
> you covered — which may indicate where you live, work, or spend time. **Nothing is shared until you
> publish it**, and a run stays private to you until then. When publishing to a public or global board,
> Territor.io warns you before your run becomes visible to others. Planned **home-zone obfuscation** will let
> you hide or clip routes near a private area. Please avoid publishing loops that reveal personal
> locations you want to keep private.

Your **real name, email address, and profile photo are not shown to other players** on public boards or
the global map.

## Third parties we share data with

Territor.io relies on the following service providers ("sub-processors"). Each handles only what it needs to
provide its service:

| Provider | Purpose | What it receives |
|---|---|---|
| **Google Firebase Authentication** (Google LLC) | Sign-in and identity | Your Google/Apple account identity and tokens |
| **Google Sign-In / Apple Sign-In** | Authentication providers | Your account credentials (handled by them, not us) |
| **MapTiler / CARTO / OpenStreetMap** | Base map tiles | The map area (coordinates) your device is viewing |
| **Open-Meteo** | Weather & elevation for scoring | Run coordinates and times (sent by our server) |
| **Overpass API / OpenStreetMap** | Landmark data for the Landmark rules | Map-area coordinates (sent by our server, not by your device) |
| **Fly.io** and **Neon** (database) | Hosting and data storage | The account and run data described above |

When monetization ships, this list will also include the **Apple App Store / Google Play** payment
systems (for Territor.io Pro) and an **advertising provider** (for ad-supported publishing).

We may also disclose information if required by law, to enforce our terms, or to protect the rights,
safety, and security of our users and service.

## Where your data is processed

Territor.io's backend and database are hosted in the **United States** (Fly.io, primary region Dallas; Neon
database). If you use Territor.io from outside the United States, your information will be transferred to and
processed in the United States and other countries where our providers operate.

## Data retention and deletion

We keep your account and run data for as long as your account is active. You can delete your account and
associated data at any time — see [Account and Data Deletion](AccountAndDataDeletion.md).

### Deleting your data
When you delete your account, we remove your published loops, publications, and group memberships, and
we anonymize your account record (clearing your email, username, display name, and photo). Your sign-in
identity is deleted from Firebase Authentication as part of the process. Some information may be retained
where required for legal, security, or fraud-prevention reasons.

## Children's privacy

Territor.io is not intended for children under **13** years of age — or the minimum age required for
consent to data processing in your country, if that age is higher — and we do not knowingly collect
personal information from them. If you believe a child has provided us personal information, contact us
at **forsyte.studios@gmail.com** and we will delete it.

## Your rights and choices

Depending on where you live, you may have the right to access, correct, delete, or export your personal
information, to object to or restrict certain processing, and to withdraw consent. In particular:

- **Location:** You control location access in your device settings and can revoke it at any time
  (Territor.io can't record runs without it).
- **Access and deletion:** You can delete your account in-app or by contacting us. To request a copy of
  your data, email **forsyte.studios@gmail.com**.
- **EU/UK (GDPR)** and **California (CCPA/CPRA)** residents have additional rights, including the right
  not to receive discriminatory treatment for exercising them. We do not sell or "share" personal
  information for cross-context behavioral advertising.

To exercise any of these rights, contact **forsyte.studios@gmail.com**.

## Security

We use industry-standard measures to protect your information, including authenticated access, encrypted
transport (HTTPS), and minimizing what we store (we don't keep raw GPS trails). No method of transmission
or storage is completely secure, so we cannot guarantee absolute security.

## Changes to this policy

We may update this policy from time to time. When we do, we'll revise the "Last updated" date above and,
for material changes, provide a more prominent notice. Continued use of Territor.io after an update means you
accept the revised policy.

## Contact us

Questions or requests about this policy or your data:

**Joshua Abbott, doing business as Forsyte Studios**
**forsyte.studios@gmail.com**

---

See also: [Terms of Service](TermsOfService.md) · [Account and Data Deletion](AccountAndDataDeletion.md)
