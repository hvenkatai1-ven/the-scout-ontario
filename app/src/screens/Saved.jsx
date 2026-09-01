export default function Saved({ collections, go }) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 'calc(var(--safe-top) + 18px) 20px 12px' }}>
      <div style={{ height: 4, background: '#201e1d' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '7px 0 5px' }}>
        <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1 }}>Saved</div>
        <div style={{ fontSize: 12, color: '#605d5d', paddingBottom: 3 }}>4 lists · 41 spots</div>
      </div>
      <div style={{ height: 1, background: '#201e1d' }}></div>

      {collections.map(c => (
        <div key={c.name} style={{ padding: '18px 0', borderBottom: '1px solid #d7d3d3' }}>
          <div style={{ display: 'flex', gap: 5, paddingBottom: 10 }}>
            {c.thumbs.map((style, i) => <div key={i} style={style}></div>)}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <div style={{ fontSize: 19, fontWeight: 600, flex: 1 }}>{c.name}</div>
            <div style={{ fontSize: 12.5, color: '#605d5d' }}>{c.count} spots</div>
          </div>
          <div style={{ fontSize: 12.5, color: '#7d7979', paddingTop: 3 }}>{c.note}</div>
        </div>
      ))}

      <button onClick={go('planner')} style={{
        width: '100%', marginTop: 20, padding: 13, background: 'none', border: '1px solid #0088b0',
        color: '#006786', borderRadius: 2, fontSize: 14.5, fontFamily: 'inherit'
      }}>Build a route from a list</button>

      <button onClick={go('saveReel')} style={{
        width: '100%', marginTop: 10, padding: 13, background: 'none', border: 'none',
        color: '#006786', fontSize: 14.5, fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
      }}><i className="ph-duotone ph-share-network" style={{ fontSize: 17 }}></i>Save from a reel</button>
    </div>
  );
}
