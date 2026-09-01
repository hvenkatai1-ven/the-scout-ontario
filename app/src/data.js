export const DATA = [
  { name: 'Elora Gorge', region: 'Centre Wellington', drive: '1h 22m', posts: '4.1k reels', delta: 64, crowd: 'Low', hot: true, kicker: 'Peaking this week', note: 'Limestone walls hold the last warm light twenty minutes after the river goes flat. Shoot from the east lookout, not the bridge.', b: [22, 30, 28, 41, 55, 74, 96], access: 'Day pass required · lot fills by 09:00 on weekends.', bestAt: '18:40', sameAngle: 41, angleNote: 'Most reels shoot from the bridge — the east lookout is open.' },
  { name: 'Dundas Peak', region: 'Hamilton', drive: '58m', posts: '3.6k reels', delta: 41, crowd: 'Heavy', hot: true, kicker: 'Colour turning', note: 'The canopy below the lookout turns two weeks before the city does. Reservation-only, and the queue is the shot everyone misses.', b: [30, 34, 40, 44, 62, 70, 88], access: 'Timed reservation · no walk-ins.', bestAt: '07:30', sameAngle: 68, angleNote: 'Two-thirds of recent reels are the same lookout rail shot.' },
  { name: 'Cheltenham Badlands', region: 'Caledon', drive: '52m', posts: '2.2k reels', delta: 28, crowd: 'Moderate', hot: false, kicker: 'Steady', note: 'Red shale reads best under low side light; midday flattens it to pink concrete. Boardwalk only.', b: [26, 28, 31, 30, 36, 38, 44], access: 'Boardwalk only · off-trail is closed.', bestAt: '18:55', sameAngle: 22, angleNote: 'Angles are spread out — the boardwalk forces variety.' },
  { name: 'Bruce Peninsula Grotto', region: 'Tobermory', drive: '3h 40m', posts: '5.8k reels', delta: 12, crowd: 'Heavy', hot: false, kicker: 'Past peak', note: 'The water turns Caribbean for about forty minutes when the sun clears the cliff line. Parking is a four-hour commitment.', b: [70, 78, 80, 74, 66, 60, 58], access: 'Parking reservation · 4h slots.', bestAt: '11:10', sameAngle: 74, angleNote: 'Nearly all of it is the cave mouth looking out. The cliff-top view is almost unshot.' },
  { name: 'Hilton Falls', region: 'Milton', drive: '46m', posts: '890 reels', delta: 96, crowd: 'Low', hot: true, kicker: 'Rising fast', note: 'A quiet second choice while Dundas is booked out. Mist off the falls catches blue hour better than golden.', b: [8, 9, 14, 22, 38, 61, 92], access: 'Conservation fee · gates 08:00.', bestAt: '06:50', sameAngle: 18, angleNote: 'Wide open — few reels agree on an angle yet.' },
  { name: 'Scarborough Bluffs', region: 'Toronto', drive: '24m', posts: '7.2k reels', delta: 18, crowd: 'Moderate', hot: false, kicker: 'Evergreen', note: 'The only spot on this list you can shoot after work. Sand cliffs go orange for the last eight minutes before sunset.', b: [62, 64, 60, 66, 68, 70, 74], access: 'Free · street parking after 18:00.', bestAt: '19:00', sameAngle: 35, angleNote: 'The Instagram bench dominates, but the east cliffs are open.' },
  { name: 'Elora Quarry', region: 'Centre Wellington', drive: '1h 25m', posts: '1.3k reels', delta: 34, crowd: 'Low', hot: false, kicker: 'Newly discovered', note: 'Closed to swimming after Labour Day, which is exactly why the water is empty and the reflections hold.', b: [14, 18, 20, 24, 26, 31, 40], access: 'Season closed to swimming · trail open.', bestAt: '07:20', sameAngle: 12, angleNote: 'Barely settled on any single angle yet. Newly discovered means undecided.' },
  { name: 'Sandbanks Dunes', region: 'Prince Edward County', drive: '2h 35m', posts: '2.9k reels', delta: 22, crowd: 'Low', hot: false, kicker: 'Shoulder season', note: 'Wind rewrites the dune ridges nightly, so nobody else has your exact frame. Bring a bag for the lens.', b: [40, 44, 42, 46, 48, 52, 58], access: 'Park pass · dunes trail from lot 3.', bestAt: '18:30', sameAngle: 9, angleNote: 'Dunes shift nightly, so no angle repeats.' }
];

// "Before you go" — the friction page recommendation 04. Content that doesn't
// change week to week, unlike crowd/momentum, so it lives keyed by spot name
// rather than computed.
export const BEFORE_YOU_GO = {
  'Elora Gorge': { permit: 'Day pass — buy online or at the gate', parking: 'Fills by 09:00 on weekends, opens up again after 15:00', gates: '08:00–20:00, April–October', fees: '$10 per vehicle, day pass', closures: 'East trail closed past the second lookout after rain', cell: 'Full bars at the lot, patchy down at the river', washrooms: 'At the lot only', rockPct: 35 },
  'Dundas Peak': { permit: 'Timed reservation required — book on the conservation authority site', parking: 'No lot at the peak — park at the Rail Trail and walk 20 min, or take the bus from downtown', gates: 'Reservation windows every 30 min, 06:00–20:00', fees: 'Free with reservation', closures: 'Lookout platform is capacity-limited — staff turn people away at peak', cell: 'Full bars', washrooms: 'None at the lookout — last one at the trailhead', rockPct: 60 },
  'Cheltenham Badlands': { permit: 'None', parking: 'Small lot; overflow on the shoulder gets ticketed', gates: '08:00–20:00', fees: 'Free', closures: 'Off-trail is always closed — the shale erosion is active', cell: 'Full bars', washrooms: 'Portable at the lot', rockPct: 10 },
  'Bruce Peninsula Grotto': { permit: 'Parking reservation mandatory — 4-hour slots', parking: 'Reservation-only; no walk-in lot access in season', gates: '07:00–21:00', fees: '$25.50 day pass, plus the parking reservation', closures: 'Cave access closes in high water', cell: 'No signal past the visitor centre', washrooms: 'At the visitor centre only', rockPct: 80 },
  'Hilton Falls': { permit: 'None', parking: 'Rarely fills — the quiet alternative', gates: '08:00–20:00', fees: '$8.75 conservation fee', closures: 'Dam platform closed in high flow', cell: 'Full bars', washrooms: 'At the lot', rockPct: 25 },
  'Scarborough Bluffs': { permit: 'None', parking: 'Free street parking after 18:00, metered before', gates: 'Park open 24 hours, gates close 22:30', fees: 'Free', closures: 'Unofficial cliff-edge trails closed — active erosion', cell: 'Full bars', washrooms: "At Bluffer's Park", rockPct: 15 },
  'Elora Quarry': { permit: 'None', parking: 'Small lot, fills on weekends', gates: '08:00–20:00', fees: '$5 trail fee', closures: 'Swimming closed after Labour Day — trail stays open', cell: 'Full bars', washrooms: 'At the lot', rockPct: 20 },
  'Sandbanks Dunes': { permit: 'None', parking: 'Park pass required — use lot 3 for the dunes trail', gates: '08:00–21:00', fees: '$21.50 per vehicle, park pass', closures: 'Dune ridge closes under a wind advisory', cell: 'Patchy past the trailhead', washrooms: 'At lot 3', rockPct: 0 }
};

export const EVENTS = [
  { label: 'Blue hour, morning', t: '06:41', note: 'cool, 24 min' },
  { label: 'Sunrise', t: '07:07', note: 'east facing' },
  { label: 'Golden hour ends', t: '07:52', note: '45 min' },
  { label: 'Golden hour, evening', t: '18:24', note: '47 min' },
  { label: 'Sunset', t: '19:11', note: 'gorge in shade' },
  { label: 'Blue hour ends', t: '19:38', note: 'long exposure' }
];

export const INTEREST_LABELS = [
  'Waterfalls', 'Fall colour', 'Cliff edges', 'Small towns',
  'Lake horizons', 'Mossy trails', 'Urban rooftops', 'Ice and frost'
];

export const SEG_OPTION_SETS = {
  Region: ['Toronto', 'Southwest', 'Escarpment', 'Georgian Bay', 'Eastern', 'North'],
  Season: ['Fall colour', 'Winter ice', 'Spring melt', 'Summer green'],
  Vibe: ['Wide open', 'Tight and mossy', 'Urban edge', 'Water level', 'Above the treeline']
};

export const COLLECTIONS = [
  { name: 'Golden hour, one tank of gas', count: 12, note: 'Everything inside 90 minutes of the city.', thumbSeed: [1, 2, 3, 4] },
  { name: 'Before the colour goes', count: 9, note: 'Escarpment lookouts, ranked by canopy turn.', thumbSeed: [2, 3, 4, 5] },
  { name: 'Blue hour water', count: 14, note: 'Long exposures. Bring the tripod and the cloth.', thumbSeed: [3, 4, 5, 6] },
  { name: 'Rainy day interiors', count: 6, note: 'Mill towns and covered bridges for washouts.', thumbSeed: [4, 5, 6, 7] }
];

export const REEL_VIEWS = ['412k', '96k', '1.2M', '38k', '204k', '77k', '18k', '640k', '55k'];

export const COSIGNS = [
  { name: 'Hilton Falls', note: 'mist at 06:50' },
  { name: 'Elora Quarry', note: 'empty after Labour Day' },
  { name: 'Sandbanks Dunes', note: 'ridge rewrites nightly' }
];

export const FRAMING_NOTES = [
  { label: 'Frame', value: 'Falls in the upper third; leave the plunge pool empty for the pan.' },
  { label: 'Lens', value: '24mm handheld, or 50mm from the east lookout for compression.' },
  { label: 'Light', value: 'Side light off the gorge wall. Avoid the bridge — backlit and flat.' },
  { label: 'Move', value: 'Slow push in from the rail, then whip up to the canopy.' }
];

export const TABS = [
  ['feed', 'Trending', 'ph-duotone ph-trend-up'],
  ['map', 'Map', 'ph-duotone ph-map-trifold'],
  ['planner', 'Route', 'ph-duotone ph-path'],
  ['saved', 'Saved', 'ph-duotone ph-bookmark-simple'],
  ['profile', 'You', 'ph-duotone ph-user']
];

export const MAP_FILTERS = ['Peaking', 'Under 1h', 'Crowd low', 'Golden fit'];

export const PIN_POSITIONS = [[26, 46], [58, 62], [40, 30], [18, 14], [70, 40], [46, 74], [30, 58], [78, 70]];

// Fixed edition — was a Claude-Design property-panel toggle (trendViz / cardLayout / season)
// for browsing variations in the mockup; the shipped app commits to one reading.
export const SEASON_HEADLINE = 'Fall colour · peak in 6 days';
export const DATELINE = 'Sunday, September 26 · Ontario';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DATES = ['Sep 26', 'Sep 27', 'Sep 28', 'Sep 29', 'Sep 30', 'Oct 1', 'Oct 2'];

function seeded(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return () => {
    h = (h * 1103515245 + 12345) >>> 0;
    return (h >>> 8) / 0x1000000;
  };
}

/** Recommendation 01 — Conditions: a 7-day sky score, deterministic per spot so it doesn't reshuffle on every render. */
export function conditionsFor(spot) {
  const rand = seeded(spot.name);
  const days = WEEKDAYS.map((day, i) => {
    const sky = Math.round(2 + rand() * 8);
    const wind = Math.round(6 + rand() * 26);
    const mist = Math.round(rand() * 70);
    return { day, date: DATES[i], sky, wind, mist };
  });
  const bestIdx = days.reduce((best, d, i) => d.sky > days[best].sky ? i : best, 0);
  days[bestIdx].best = true;
  return days;
}

/** Recommendation 02 — Light direction: how the frame reads across the day, keyed to an hour scrubber. */
export const LIGHT_PHASES = [
  { from: 0, to: 7, label: 'Before sunrise', text: 'Flat and blue. The gorge wall is in full shade; nothing to shoot yet.' },
  { from: 7, to: 8, label: 'Sunrise', text: 'Light rakes in low from the east — hits the rim first, water stays dark.' },
  { from: 8, to: 12, label: 'Morning', text: 'Direct sun climbs onto the wall. High contrast; shoot the texture, not the whole scene.' },
  { from: 12, to: 16, label: 'Midday', text: 'Overhead and flat. The wall goes shadeless — this is the window to skip.' },
  { from: 16, to: 18, label: 'Afternoon', text: 'Side light returns from the west. The wall separates from the water again.' },
  { from: 18, to: 19, label: 'Golden hour', text: 'Warm light lands full on the wall for about 45 minutes. This is the shot.' },
  { from: 19, to: 24, label: 'Blue hour', text: 'The gorge goes cool and even — good for long exposures, not for the wall.' }
];
export function lightPhaseFor(hour) {
  return LIGHT_PHASES.find(p => hour >= p.from && hour < p.to) || LIGHT_PHASES[0];
}
