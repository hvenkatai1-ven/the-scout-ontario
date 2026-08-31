export default function Profile({ reels, cosigns }) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 'calc(var(--safe-top) + 18px) 20px 12px' }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', paddingBottom: 16 }}>
        <div className="placeholder-avatar" style={{ width: 74, height: 74, flex: 'none' }}></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.1 }}>Marisa Okonjo</div>
          <div style={{ fontSize: 12.5, color: '#605d5d', paddingTop: 3 }}>Guelph · shoots waterfalls and escarpment edges</div>
          <div style={{ display: 'flex', gap: 18, paddingTop: 10 }}>
            <div><span style={{ fontSize: 17, fontWeight: 600 }}>184</span><span style={{ fontSize: 12, color: '#7d7979' }}> spots</span></div>
            <div><span style={{ fontSize: 17, fontWeight: 600 }}>26</span><span style={{ fontSize: 12, color: '#7d7979' }}> co-signs</span></div>
            <div><span style={{ fontSize: 17, fontWeight: 600 }}>4.9k</span><span style={{ fontSize: 12, color: '#7d7979' }}> follows</span></div>
          </div>
        </div>
      </div>
      <div style={{ height: 1, background: '#201e1d' }}></div>

      <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979', padding: '14px 0 10px' }}>Recent reels</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
        {reels.map((views, i) => (
          <div key={i} style={{
            position: 'relative', aspectRatio: '9 / 16', backgroundColor: '#d7d3d3',
            backgroundImage: 'radial-gradient(#201e1d 1.1px, transparent 1.2px)', backgroundSize: '4px 4px',
            borderRadius: 2, display: 'flex', alignItems: 'flex-end', padding: 5
          }}>
            <div style={{ fontSize: 10, color: '#f3f2f2', background: 'rgba(32,30,29,.78)', padding: '2px 4px', borderRadius: 1 }}>{views}</div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979', padding: '22px 0 8px' }}>Co-signed this week</div>
      {cosigns.map(c => (
        <div key={c.name} style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '9px 0', borderBottom: '1px solid #eae7e7' }}>
          <div style={{ flex: 1, fontSize: 15.5 }}>{c.name}</div>
          <div style={{ fontSize: 12, color: '#605d5d' }}>{c.note}</div>
        </div>
      ))}
    </div>
  );
}
