import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  DATA, EVENTS, SEG_OPTION_SETS, COLLECTIONS, REEL_VIEWS, COSIGNS,
  MAP_FILTERS, PIN_POSITIONS, SEASON_HEADLINE, DATELINE, TABS
} from './data.js';

const pad = (n) => String(n).padStart(2, '0');

function nextEvent(now) {
  const mins = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  for (const e of EVENTS) {
    const [h, m] = e.t.split(':').map(Number);
    if (h * 60 + m > mins) return { e, delta: h * 60 + m - mins };
  }
  const [h, m] = EVENTS[0].t.split(':').map(Number);
  return { e: EVENTS[0], delta: 1440 - mins + h * 60 + m };
}

function chipStyle(on) {
  return {
    padding: '7px 11px', borderRadius: 2, fontFamily: 'inherit', fontSize: 13.5, cursor: 'pointer',
    border: on ? '1px solid #0088b0' : '1px solid #d7d3d3',
    background: on ? '#e9f8ff' : 'transparent', color: on ? '#006786' : '#444141'
  };
}

const thumbStyle = (n) => ({
  flex: 1, height: 56, backgroundColor: n % 2 ? '#d7d3d3' : '#bab6b6',
  backgroundImage: 'radial-gradient(#201e1d 1.1px, transparent 1.2px)',
  backgroundSize: '4px 4px', borderRadius: 2
});

/** Ports the design prototype's `Component` (DCLogic) state + renderVals() to React hooks. */
export function useScout() {
  const [screen, setScreen] = useState('onboarding');
  const [now, setNow] = useState(() => new Date());
  const [spot, setSpot] = useState('Elora Gorge');
  const [interests, setInterests] = useState(['Waterfalls', 'Fall colour', 'Cliff edges']);
  const [route, setRoute] = useState(['Elora Gorge', 'Dundas Peak', 'Hilton Falls']);
  const [query, setQuery] = useState('');
  const [seg, setSeg] = useState('Region');
  const [region, setRegion] = useState('Southwest');
  const [vibe, setVibe] = useState('Wide open');
  const [season, setSeason] = useState('Late September');
  const [crowdOnly, setCrowdOnly] = useState(true);
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);
  const [weatherReplanned, setWeatherReplanned] = useState(false);
  const [notifyConditions, setNotifyConditions] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => () => { if (toastTimer.current) clearTimeout(toastTimer.current); }, []);

  const go = useCallback((id) => () => setScreen(id), []);
  const open = useCallback((name) => () => { setScreen('detail'); setSpot(name); }, []);
  const say = useCallback((msg) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2600);
  }, []);

  const nx = nextEvent(now);
  const hrs = Math.floor(nx.delta / 60), mns = Math.floor(nx.delta % 60), secs = Math.floor((nx.delta * 60) % 60);
  const countdown = `${pad(hrs)}:${pad(mns)}:${pad(secs)}`;

  const spots = useMemo(() => DATA.map((d, i) => ({
    ...d,
    idx: pad(i + 1),
    open: open(d.name),
    deltaText: (d.delta > 0 ? '+' : '') + d.delta + '%',
    deltaShort: String(d.delta),
    seasonState: d.hot ? 'Peak' : 'Building',
    tags: [SEASON_HEADLINE.split(' · ')[0], 'crowd ' + d.crowd.toLowerCase(), d.bestAt].slice(0, 3),
    bars: d.b.map(h => ({ style: { width: 3, height: Math.max(3, Math.round(h * 0.26)), background: h > 70 ? '#0088b0' : '#bab6b6', borderRadius: 1 } }))
  })), [open]);

  const cur = useMemo(() => {
    const base = spots.find(x => x.name === spot) || spots[0];
    return {
      ...base,
      chart: [18, 22, 20, 26, 30, 29, 36, 44, 52, 66, 78, 96].map((h, i) => ({
        style: { flex: 1, height: h * 0.52, background: i > 9 ? '#d6006c' : '#bab6b6', borderRadius: 1 }
      }))
    };
  }, [spots, spot]);

  const pins = useMemo(() => spots.map((x, i) => ({
    n: x.idx, hot: x.hot, open: x.open,
    style: {
      position: 'absolute', left: PIN_POSITIONS[i][0] + '%', top: 130 + PIN_POSITIONS[i][1] * 4.6, width: 30, height: 30,
      borderRadius: '50%', border: 'none', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, zIndex: 2,
      background: x.hot ? '#d6006c' : '#0088b0', color: '#fff', display: 'flex', alignItems: 'center',
      justifyContent: 'center', boxShadow: '0 1px 2px rgba(45,43,43,.3)'
    }
  })), [spots]);

  const routeSpots = useMemo(() => route.map(n => spots.find(x => x.name === n)).filter(Boolean), [route, spots]);

  const itinerary = useMemo(() => [
    { time: '05:55', kind: 'depart', name: 'Leave Toronto', detail: 'Coffee at the 401 stop; you want to be set up before the sky opens.', window: 'dark', pct: 8, hot: false },
    ...routeSpots.map((x, i) => ({
      time: ['06:50', '07:35', '18:40'][i] || '19:00',
      kind: i === 2 ? 'golden' : 'blue',
      name: x.name,
      detail: x.drive + ' · ' + x.access,
      window: i === 2 ? 'golden 47 min' : 'blue 24 min',
      pct: i === 2 ? 92 : 58,
      hot: x.hot
    })),
    { time: '19:38', kind: 'wrap', name: 'Blue hour ends', detail: 'Two hours home. Nine clips, three usable openers.', window: 'closed', pct: 100, hot: false }
  ].map(i => ({
    ...i,
    dot: { width: 9, height: 9, borderRadius: '50%', background: i.hot ? '#d6006c' : i.pct > 80 ? '#0088b0' : '#bab6b6', flex: 'none' },
    bar: { width: i.pct + '%', height: '100%', background: i.pct > 80 ? '#0088b0' : '#bab6b6' }
  })), [routeSpots]);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => spots.filter(x =>
    (!q || x.name.toLowerCase().includes(q) || x.region.toLowerCase().includes(q) || x.note.toLowerCase().includes(q)) &&
    (!crowdOnly || x.crowd !== 'Heavy')
  ), [spots, q, crowdOnly]);

  const segPicked = seg === 'Region' ? region : seg === 'Season' ? season : vibe;

  const addSpotToRoute = useCallback((name) => {
    setRoute(r => (r.includes(name) ? r : r.concat(name)));
    say(name + ' added — route re-sorted to keep its light window');
  }, [say]);

  const addToRoute = useCallback(() => addSpotToRoute(cur.name), [addSpotToRoute, cur.name]);

  // Recommendation 05 — Go somewhere else: two alternates that hold the same
  // light and subject, ranked by lowest crowd then highest momentum.
  const alternatesFor = useCallback((spotName) => {
    return spots
      .filter(x => x.name !== spotName)
      .slice()
      .sort((a, b) => {
        const crowdRank = { Low: 0, Moderate: 1, Heavy: 2 };
        if (crowdRank[a.crowd] !== crowdRank[b.crowd]) return crowdRank[a.crowd] - crowdRank[b.crowd];
        return b.delta - a.delta;
      })
      .slice(0, 2);
  }, [spots]);

  const toggleInterest = useCallback((label) => {
    setInterests(cur => cur.includes(label) ? cur.filter(x => x !== label) : cur.concat(label));
  }, []);

  const pickSeg = useCallback((label) => {
    if (seg === 'Region') setRegion(label);
    else if (seg === 'Season') setSeason(label);
    else setVibe(label);
  }, [seg]);

  return {
    screen, go, open, say,
    dateline: DATELINE, seasonHeadline: SEASON_HEADLINE, countdown,
    nextLightLabel: nx.e.label, goldenWindow: '18:24–19:11', blueWindow: '19:11–19:38',

    showTabs: !['onboarding', 'framing', 'detail', 'conditions', 'lightDirection', 'saveReel', 'beforeYouGo', 'goElse'].includes(screen),
    toast,

    interests, toggleInterest, interestCount: interests.length,
    matchCount: 6 + interests.length * 3,

    spots, cur,

    mapFilters: MAP_FILTERS,
    onMapFilterToggle: () => say('Filters are illustrative in this prototype'),
    pins,
    nearest: spots[4],

    query, setQuery,
    seg, setSeg, segPicked, pickSeg,
    segOptionSets: SEG_OPTION_SETS,
    segTitle: seg === 'Region' ? 'Where' : seg === 'Season' ? 'What is peaking' : 'How it should feel',
    crowdOnly, toggleCrowd: () => setCrowdOnly(c => !c),
    results, resultCount: results.length,
    filterSummary: [region, season, vibe].join(' · '),

    lightRows: EVENTS.map(e => ({
      label: e.label, time: e.t, note: e.note,
      isNext: e.label === nx.e.label
    })),

    collections: COLLECTIONS.map(c => ({ ...c, thumbs: c.thumbSeed.map(thumbStyle) })),

    itinerary,
    routeStats: routeSpots.length + ' stops · 284 km',
    addToRoute, addSpotToRoute,
    alternatesFor,

    weatherReplanned,
    toggleWeatherReplan: () => {
      setWeatherReplanned(w => {
        const next = !w;
        say(next ? 'Forecast turned — route re-sorted, rainy-day collection loaded' : 'Forecast holding — route back to its original order');
        return next;
      });
    },

    notifyConditions,
    toggleNotifyConditions: () => {
      setNotifyConditions(n => {
        const next = !n;
        say(next ? 'Notifying 45 min before the window, only when it’s worth the drive' : 'Notifications off');
        return next;
      });
    },

    reels: REEL_VIEWS,
    cosigns: COSIGNS,

    tabs: TABS,

    chipStyle
  };
}
