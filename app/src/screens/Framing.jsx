import { FRAMING_NOTES } from '../data.js';

export default function Framing({ cur, go, nextLightLabel, countdown }) {
  return (
    <div style={{ flex: 1, overflow: 'hidden', position: 'relative', background: '#201e1d' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#605d5d', backgroundImage: 'radial-gradient(#201e1d 1.4px, transparent 1.5px)', backgroundSize: '5px 5px' }}></div>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr' }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} style={{
            borderRight: i % 3 !== 2 ? '1px solid rgba(243,242,242,.35)' : undefined,
            borderBottom: i < 6 ? '1px solid rgba(243,242,242,.35)' : undefined
          }}></div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: '33.3%', top: '33.3%', width: '34%', height: '26%', border: '2px solid #ff458e', borderRadius: 2 }}></div>
      <div style={{ position: 'absolute', left: '33.3%', top: '27.6%', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#201e1d', background: '#ff458e', padding: '2px 5px' }}>Falls, upper third</div>
      <button onClick={go('detail')} style={{
        position: 'absolute', top: 'calc(var(--safe-top) + 14px)', left: 16, zIndex: 4, width: 36, height: 36,
        border: 'none', borderRadius: 2, background: 'rgba(243,242,242,.92)', color: '#201e1d', fontSize: 17, fontFamily: 'inherit'
      }}>←</button>
      <div style={{
        position: 'absolute', top: 'calc(var(--safe-top) + 14px)', right: 16, zIndex: 4, fontSize: 11,
        letterSpacing: '.08em', textTransform: 'uppercase', color: '#f3f2f2', background: 'rgba(32,30,29,.6)', padding: '5px 8px', borderRadius: 2
      }}>Framing guide</div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#f3f2f2', padding: '15px 20px calc(var(--safe-bottom) + 16px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontSize: 19, fontWeight: 700 }}>{cur.name}</div>
          <div style={{ fontSize: 12, color: '#605d5d' }}>{nextLightLabel} in {countdown}</div>
        </div>
        <div style={{ height: 1, background: '#d7d3d3', margin: '10px 0' }}></div>
        {FRAMING_NOTES.map(f => (
          <div key={f.label} style={{ display: 'flex', gap: 12, padding: '6px 0' }}>
            <div style={{ flex: 'none', width: 74, fontSize: 11, letterSpacing: '.07em', textTransform: 'uppercase', color: '#7d7979', paddingTop: 2 }}>{f.label}</div>
            <div style={{ flex: 1, fontSize: 14, lineHeight: 1.45 }}>{f.value}</div>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 9, paddingTop: 12 }}>
          <button onClick={go('planner')} style={{ flex: 1, padding: 12, background: '#0088b0', border: 'none', color: '#fff', borderRadius: 2, fontSize: 14.5, fontWeight: 600, fontFamily: 'inherit' }}>Shoot it at {cur.bestAt}</button>
          <button onClick={go('detail')} style={{ flex: 'none', padding: '12px 14px', background: 'none', border: '1px solid #0088b0', color: '#006786', borderRadius: 2, fontSize: 14.5, fontFamily: 'inherit' }}>Back to spot</button>
        </div>
      </div>
    </div>
  );
}
