export default function Detail({ cur, go, nextLightLabel, countdown, lightRows, addToRoute }) {
  const linkPill = {
    padding: '8px 12px', fontSize: 13, fontFamily: 'inherit', border: '1px solid #d7d3d3',
    borderRadius: 2, background: 'transparent', color: '#006786', display: 'flex', alignItems: 'center', gap: 6
  };
  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ position: 'relative', height: 268, background: '#d7d3d3' }}>
        <div className="placeholder-hero" style={{ width: '100%', height: '100%' }}></div>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(32,30,29,.55) 1.2px, transparent 1.3px)', backgroundSize: '4px 4px', mixBlendMode: 'multiply', pointerEvents: 'none' }}></div>
        <button onClick={go('feed')} style={{
          position: 'absolute', top: 'calc(var(--safe-top) + 14px)', left: 16, zIndex: 4, width: 36, height: 36,
          border: 'none', borderRadius: 2, background: '#f3f2f2', color: '#201e1d', fontSize: 17, fontFamily: 'inherit'
        }}>←</button>
      </div>
      <div style={{ padding: '18px 20px 10px' }}>
        <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#aa0b56' }}>{cur.kicker}</div>
        <h2 style={{ margin: '5px 0 0', fontSize: 33, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-.018em' }}>{cur.name}</h2>
        <div style={{ fontSize: 13, color: '#605d5d', paddingTop: 6 }}>{cur.region} · {cur.drive} from you · {cur.posts} this week</div>
        <p style={{ margin: '12px 0 0', fontSize: 15.5, lineHeight: 1.55, textWrap: 'pretty' }}>{cur.note}</p>

        <div style={{ height: 1, background: '#201e1d', margin: '20px 0 0' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0 2px' }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Light today</div>
          <div style={{ fontSize: 12, color: '#605d5d' }}>{nextLightLabel} in {countdown}</div>
        </div>
        {lightRows.map(r => (
          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid #eae7e7' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', flex: 'none', background: r.isNext ? '#d6006c' : '#bab6b6' }}></span>
            <span style={{ flex: 1, fontSize: 14.5 }}>{r.label}</span>
            <span style={{ fontSize: 14.5, color: '#444141', fontVariantNumeric: 'tabular-nums' }}>{r.time}</span>
            <span style={{ width: 76, textAlign: 'right', fontSize: 11.5, color: '#7d7979' }}>{r.note}</span>
          </div>
        ))}

        <div style={{ display: 'flex', gap: 22, padding: '20px 0 0', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979' }}>Crowd now</div>
            <div style={{ fontSize: 20, fontWeight: 600, paddingTop: 3 }}>{cur.crowd}</div>
          </div>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979' }}>Momentum</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: '#006786', paddingTop: 3 }}>{cur.deltaText}</div>
          </div>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979' }}>Season</div>
            <div style={{ fontSize: 20, fontWeight: 600, paddingTop: 3 }}>{cur.seasonState}</div>
          </div>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979' }}>Same angle</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: cur.sameAngle >= 50 ? '#aa0b56' : '#201e1d', paddingTop: 3 }}>{cur.sameAngle}%</div>
          </div>
        </div>
        <div style={{ fontSize: 12.5, color: '#7d7979', paddingTop: 6, fontStyle: 'italic' }}>{cur.angleNote}</div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 54, padding: '20px 0 0' }}>
          {cur.chart.map((b, i) => <div key={i} style={b.style}></div>)}
        </div>
        <div style={{ fontSize: 11.5, color: '#7d7979', paddingTop: 6 }}>Reels posted, twelve weeks</div>

        {cur.crowd === 'Heavy' && (
          <button onClick={go('goElse')} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 18,
            padding: '12px 14px', background: '#ffdee6', border: 'none', borderRadius: 2, fontFamily: 'inherit',
            fontSize: 13.5, color: '#aa0b56', textAlign: 'left'
          }}>
            <span>This spot is heavily crowded right now — see alternates</span>
            <span>→</span>
          </button>
        )}

        <div style={{ display: 'flex', gap: 9, padding: '22px 0 0' }}>
          <button onClick={addToRoute} style={{ flex: 1, padding: 14, background: '#0088b0', color: '#fff', border: 'none', borderRadius: 2, fontSize: 15, fontWeight: 600, fontFamily: 'inherit' }}>Add to today’s route</button>
          <button onClick={go('framing')} style={{
            flex: 'none', padding: '14px 15px', background: 'none', color: '#006786', border: '1px solid #0088b0',
            borderRadius: 2, fontSize: 15, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6
          }}><i className="ph-duotone ph-camera" style={{ fontSize: 18 }}></i>Framing</button>
        </div>

        <div style={{ display: 'flex', gap: 8, paddingTop: 12, flexWrap: 'wrap' }}>
          <button onClick={go('conditions')} style={linkPill}><i className="ph-duotone ph-cloud-sun" style={{ fontSize: 16 }}></i>Conditions</button>
          <button onClick={go('lightDirection')} style={linkPill}><i className="ph-duotone ph-compass" style={{ fontSize: 16 }}></i>Light direction</button>
          <button onClick={go('beforeYouGo')} style={linkPill}><i className="ph-duotone ph-info" style={{ fontSize: 16 }}></i>Before you go</button>
        </div>

        <div style={{ fontSize: 12.5, color: '#7d7979', padding: '12px 0 0', fontStyle: 'italic' }}>{cur.access}</div>
      </div>
    </div>
  );
}
