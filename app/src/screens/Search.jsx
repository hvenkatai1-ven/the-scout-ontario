export default function Search({
  query, setQuery, go, seg, setSeg, segPicked, pickSeg, segOptionSets, segTitle,
  crowdOnly, toggleCrowd, resultCount, filterSummary, results, chipStyle
}) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 'calc(var(--safe-top) + 18px) 20px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Waterfall, cliff, pier, town…"
          style={{ flex: 1, padding: '12px 13px', fontSize: 15, fontFamily: 'inherit', color: '#201e1d', background: '#f8f4f4', border: '1px solid #d7d3d3', borderRadius: 2 }}
        />
        <button onClick={go('feed')} style={{ border: 'none', background: 'none', color: '#006786', fontSize: 14, fontFamily: 'inherit' }}>Done</button>
      </div>

      <div style={{ display: 'flex', border: '1px solid #d7d3d3', borderRadius: 2, marginTop: 14, overflow: 'hidden' }}>
        {['Region', 'Season', 'Vibe'].map(label => (
          <button key={label} onClick={() => setSeg(label)} style={{
            flex: 1, padding: '10px 0', border: 'none', fontFamily: 'inherit', fontSize: 13.5,
            borderRight: label === 'Vibe' ? 'none' : '1px solid #d7d3d3',
            background: seg === label ? '#0088b0' : 'transparent', color: seg === label ? '#fff' : '#444141'
          }}>{label}</button>
        ))}
      </div>

      <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979', padding: '22px 0 10px' }}>{segTitle}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {segOptionSets[seg].map(label => (
          <button key={label} onClick={() => pickSeg(label)} style={chipStyle(label === segPicked)}>{label}</button>
        ))}
      </div>

      <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '22px 0 0', fontSize: 14.5 }}>
        <input type="checkbox" checked={crowdOnly} onChange={toggleCrowd} style={{ width: 17, height: 17, accentColor: '#0088b0' }} />
        Hide spots with heavy crowds now
      </label>

      <div style={{ height: 1, background: '#201e1d', margin: '22px 0 0' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '9px 0 4px' }}>
        <div style={{ fontSize: 17, fontWeight: 600 }}>{resultCount} spots</div>
        <div style={{ fontSize: 12, color: '#605d5d' }}>{filterSummary}</div>
      </div>

      {results.map(s => (
        <button key={s.name} onClick={s.open} style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid #d7d3d3',
          padding: '13px 0', display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'inherit', color: '#201e1d'
        }}>
          <span style={{
            flex: 'none', width: 46, height: 46, backgroundColor: '#d7d3d3',
            backgroundImage: 'radial-gradient(#201e1d 1.1px, transparent 1.2px)', backgroundSize: '4px 4px', borderRadius: 2
          }}></span>
          <span style={{ flex: 1, display: 'block' }}>
            <span style={{ display: 'block', fontSize: 16.5, fontWeight: 600 }}>{s.name}</span>
            <span style={{ display: 'block', fontSize: 12.5, color: '#605d5d', paddingTop: 2 }}>{s.region} · {s.drive} · crowd {s.crowd}</span>
          </span>
          <i className="ph-duotone ph-caret-right" style={{ fontSize: 17, color: '#9b9797' }}></i>
        </button>
      ))}
    </div>
  );
}
