export default function MapScreen({ mapFilters, onMapFilterToggle, pins, nearest }) {
  return (
    <div style={{
      flex: 1, overflow: 'hidden', position: 'relative', backgroundColor: '#eae9e9',
      backgroundImage: 'radial-gradient(#9b9797 1px, transparent 1.1px)', backgroundSize: '5px 5px'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, rgba(0,136,176,.10), rgba(243,242,242,0) 55%)' }}></div>
      <div style={{ position: 'absolute', top: 'calc(var(--safe-top) + 14px)', left: 20, right: 20, zIndex: 3 }}>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
          {mapFilters.map((label, i) => (
            <button key={label} onClick={onMapFilterToggle} style={{
              padding: '7px 10px', fontSize: 12.5, borderRadius: 2,
              border: '1px solid ' + (i < 2 ? '#0088b0' : '#bab6b6'),
              background: i < 2 ? '#0088b0' : 'rgba(243,242,242,.9)', color: i < 2 ? '#fff' : '#444141'
            }}>{label}</button>
          ))}
        </div>
      </div>
      {pins.map(p => (
        <button key={p.n} onClick={p.open} style={p.style}>
          {p.hot && <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#ff458e', animation: 'pulse 2.4s ease-out infinite' }}></span>}
          <span style={{ position: 'relative' }}>{p.n}</span>
        </button>
      ))}
      <div style={{ position: 'absolute', bottom: 116, right: 18, zIndex: 4, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ width: 40, height: 40, background: '#f3f2f2', border: '1px solid #d7d3d3', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 2px rgba(45,43,43,.14)' }}>
          <i className="ph-duotone ph-crosshair" style={{ fontSize: 20, color: '#0088b0' }}></i>
        </div>
        <div style={{ width: 40, height: 40, background: '#f3f2f2', border: '1px solid #d7d3d3', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 2px rgba(45,43,43,.14)' }}>
          <i className="ph-duotone ph-sun-horizon" style={{ fontSize: 20, color: '#d6006c' }}></i>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 5, background: '#f3f2f2', padding: '14px 20px calc(var(--safe-bottom) + 16px)', boxShadow: '0 -3px 10px rgba(45,43,43,.16)' }}>
        <div style={{ width: 44, height: 3, background: '#d7d3d3', borderRadius: 2, margin: '0 auto 12px' }}></div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#aa0b56' }}>Nearest peak · {nearest.drive}</div>
            <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.1, paddingTop: 3 }}>{nearest.name}</div>
            <div style={{ fontSize: 12.5, color: '#605d5d', paddingTop: 4 }}>{nearest.region} · crowd {nearest.crowd} · {nearest.posts}</div>
          </div>
          <button onClick={nearest.open} style={{ flex: 'none', padding: '10px 14px', background: '#0088b0', color: '#fff', border: 'none', borderRadius: 2, fontSize: 13.5, fontWeight: 600, fontFamily: 'inherit' }}>Open</button>
        </div>
      </div>
    </div>
  );
}
