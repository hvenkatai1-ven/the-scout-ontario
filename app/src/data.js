export const DATA = [
  { name: 'Elora Gorge', region: 'Centre Wellington', drive: '1h 22m', posts: '4.1k reels', delta: 64, crowd: 'Low', hot: true, kicker: 'Peaking this week', note: 'Limestone walls hold the last warm light twenty minutes after the river goes flat. Shoot from the east lookout, not the bridge.', b: [22, 30, 28, 41, 55, 74, 96], access: 'Day pass required · lot fills by 09:00 on weekends.', bestAt: '18:40' },
  { name: 'Dundas Peak', region: 'Hamilton', drive: '58m', posts: '3.6k reels', delta: 41, crowd: 'Heavy', hot: true, kicker: 'Colour turning', note: 'The canopy below the lookout turns two weeks before the city does. Reservation-only, and the queue is the shot everyone misses.', b: [30, 34, 40, 44, 62, 70, 88], access: 'Timed reservation · no walk-ins.', bestAt: '07:30' },
  { name: 'Cheltenham Badlands', region: 'Caledon', drive: '52m', posts: '2.2k reels', delta: 28, crowd: 'Moderate', hot: false, kicker: 'Steady', note: 'Red shale reads best under low side light; midday flattens it to pink concrete. Boardwalk only.', b: [26, 28, 31, 30, 36, 38, 44], access: 'Boardwalk only · off-trail is closed.', bestAt: '18:55' },
  { name: 'Bruce Peninsula Grotto', region: 'Tobermory', drive: '3h 40m', posts: '5.8k reels', delta: 12, crowd: 'Heavy', hot: false, kicker: 'Past peak', note: 'The water turns Caribbean for about forty minutes when the sun clears the cliff line. Parking is a four-hour commitment.', b: [70, 78, 80, 74, 66, 60, 58], access: 'Parking reservation · 4h slots.', bestAt: '11:10' },
  { name: 'Hilton Falls', region: 'Milton', drive: '46m', posts: '890 reels', delta: 96, crowd: 'Low', hot: true, kicker: 'Rising fast', note: 'A quiet second choice while Dundas is booked out. Mist off the falls catches blue hour better than golden.', b: [8, 9, 14, 22, 38, 61, 92], access: 'Conservation fee · gates 08:00.', bestAt: '06:50' },
  { name: 'Scarborough Bluffs', region: 'Toronto', drive: '24m', posts: '7.2k reels', delta: 18, crowd: 'Moderate', hot: false, kicker: 'Evergreen', note: 'The only spot on this list you can shoot after work. Sand cliffs go orange for the last eight minutes before sunset.', b: [62, 64, 60, 66, 68, 70, 74], access: 'Free · street parking after 18:00.', bestAt: '19:00' },
  { name: 'Elora Quarry', region: 'Centre Wellington', drive: '1h 25m', posts: '1.3k reels', delta: 34, crowd: 'Low', hot: false, kicker: 'Newly discovered', note: 'Closed to swimming after Labour Day, which is exactly why the water is empty and the reflections hold.', b: [14, 18, 20, 24, 26, 31, 40], access: 'Season closed to swimming · trail open.', bestAt: '07:20' },
  { name: 'Sandbanks Dunes', region: 'Prince Edward County', drive: '2h 35m', posts: '2.9k reels', delta: 22, crowd: 'Low', hot: false, kicker: 'Shoulder season', note: 'Wind rewrites the dune ridges nightly, so nobody else has your exact frame. Bring a bag for the lens.', b: [40, 44, 42, 46, 48, 52, 58], access: 'Park pass · dunes trail from lot 3.', bestAt: '18:30' }
];

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
