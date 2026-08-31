# Ontario Instagram locations app

_Started 2026-08-31 01:18 UTC_

---

## User

Design a mobile app for trending Ontario locations for Instagram and other social media reels.

## Assistant



## Assistant

I'll ask a few things before building.

_[tool: ask_user]_

Waiting on your answers — mainly the design direction, which screens, and whether discovery is feed-first or map-first.

## User

Answered — design_system: Picked a design system (now attached); audience: Casual travellers looking for photo spots, Content creators chasing views, Local Ontario weekenders, Tourists visiting Toronto/Niagara; core_value: Plan a shoot route for the day; screens: Trending feed, Map view, Spot detail, Search / filters, Saved collections, Shoot planner / itinerary, Creator profile, Onboarding, Camera framing guide; discovery: Both, tabbed; trend_signal: Reel/post volume this week, Rising fast (momentum), Seasonal peak (fall colours, ice, blooms), Crowd level right now, Creator co-signs, Newly d…

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: copy_starter_component]_

_[tool: grep]_

_[tool: read_file]_

_[tool: copy_starter_component]_

_[tool: dc_write]_

_[tool: dc_html_str_replace]_

_[tool: show_html]_

_[tool: ready_for_verification]_

**The Scout** — nine working screens in one prototype, set in Broadsheet (newsprint serif, cyan for touchable, magenta reserved for what's peaking; photos print as dot screen).

Notes:
- The screen list on the left jumps anywhere; inside the app, tabs, cards, pins, search and "Add to route" all work. Golden/blue-hour countdown ticks live off your clock against a fixed Sept 26 schedule.
- Tweaks: trend readout (bars / numeric / press plate), feed layout (ledger / editorial), and edition season.
- Hero and avatar are drop-in slots — drag real photos on. Everything else is striped placeholder.

Tell me which screen to push further, or which of the five variation axes you want three real options on.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Saved-list thumb strips fixed. (The bundle nudge is expected here — Design Components require inline styles, so the Broadsheet tokens are inlined literally rather than loaded as a stylesheet.)

## User

Convert this file to a public artifact

## Assistant

_[tool: read_skill_prompt]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: present_fs_item_for_download]_

Standalone file — fonts, icons and all screens inlined, works offline in any browser.

## User

Is there any similar app in the market already exists? I would like to see the design and details of that app. And also i would like you to suggest me and decide on adding additional screens and information to this app.

## User

Is there any similar app in the market already exists? I would like to see the design and details of that app. And also i would like you to suggest me and decide on adding additional screens and information to this app.

## Assistant

_[tool: dc_write]_

_[tool: web_search]_

_[tool: web_search]_

_[tool: web_search]_

_[tool: ready_for_verification]_

**Landscape and roadmap** — nine apps in three categories, wireframes of each category's shared UI pattern (my sketches, not screenshots), a capability matrix, and seven ranked recommendations.

The short version: PhotoPills and The Photographer's Ephemeris lead the light-planning category, but PhotoPills is described as superb but steep and Ephemeris keeps users because it opens straight onto a map rather than a menu. GoldenHour.One is the one that scores conditions rather than listing them. On discovery, Explorest carries GPS coordinates, hard-to-find access notes, transit instructions and weather — closest to your spot detail. And a new category has appeared: share a reel to Plotline and it extracts every place mentioned onto your map, over 1.5 million places from 500,000+ posts.

Nobody joins trend + light + access. That's the gap.

My decisions: build **Conditions**, **Light direction**, **Save from a reel**, **Before you go**, and **Go somewhere else**; add frame saturation to spot detail and weather re-plan + offline to the route. Skip photography calculators and any social feed.

Want me to build those five screens into the prototype now, or start with the top two?

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Matrix now distinguishes built (×) from planned (○) — sky forecast, light direction and reel import read as gaps, matching the recommendations. Also dropped Explorest's unsupported sun/moon and golden-hour marks, and gave the label column room.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Table is now `table-layout: fixed` with percentage columns, so the Scout column stays in view at any width. "Trending right now" is Scout-only, matching the prose.

## User

Found issues — fixing…

## Assistant

Root cause: with `table-layout: fixed`, each comparison `<th>` computes to 72px while the labels are unbreakable single tokens with no wrap allowed — so they paint over their neighbours.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Header labels now wrap inside their cells (30% capability column, 10% each for seven comparison columns, `overflow-wrap: anywhere`), and The Photographer's Ephemeris has its own column.

