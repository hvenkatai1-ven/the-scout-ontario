export default function Feed({ dateline, seasonHeadline, nextLightLabel, countdown, goldenWindow, blueWindow, spots, go }) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 'calc(var(--safe-top) + 18px) 0 12px' }}>
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#7d7979' }}>{dateline}</div>
          <button onClick={go('search')} style={{ border: 'none', background: 'none', color: '#0088b0', fontSize: 13, display: 'flex', alignItems: 'center', gap: 5 }}>
            <i className="ph-duotone ph-magnifying-glass" style={{ fontSize: 15 }}></i>Search
          </button>
        </div>
        <div style={{ height: 4, background: '#201e1d', marginTop: 8 }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '7px 0 5px' }}>
          <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1, letterSpacing: '-.015em' }}>Trending</div>
          <div style={{ fontSize: 12, color: '#605d5d', paddingBottom: 3 }}>{seasonHeadline}</div>
        </div>
        <div style={{ height: 1, background: '#201e1d' }}></div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px 4px', background: '#eae9e9', margin: '12px 0 0' }}>
        <i className="ph-duotone ph-sun-horizon" style={{ fontSize: 26, color: '#d6006c' }}></i>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12.5, color: '#605d5d' }}>{nextLightLabel} in</div>
          <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>{countdown}</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 12, lineHeight: 1.45, color: '#605d5d' }}>Golden {goldenWindow}<br />Blue {blueWindow}</div>
      </div>
      <div style={{ padding: '8px 20px 0' }}><div style={{ height: 1, background: '#d7d3d3' }}></div></div>

      <div style={{ padding: '0 20px' }}>
        {spots.map(s => (
          <button key={s.name} onClick={s.open} style={{
            width: '100%', textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid #d7d3d3',
            padding: '15px 0', display: 'flex', gap: 13, alignItems: 'flex-start', fontFamily: 'inherit', color: '#201e1d'
          }}>
            <span style={{ fontSize: 12, color: '#9b9797', width: 20, flex: 'none', paddingTop: 5, fontVariantNumeric: 'tabular-nums' }}>{s.idx}</span>
            <span style={{ flex: 1, display: 'block' }}>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.15 }}>{s.name}</span>
                {s.hot && (
                  <span style={{
                    fontSize: 9.5, letterSpacing: '.08em', textTransform: 'uppercase', color: '#aa0b56',
                    background: '#ffdee6', padding: '2px 5px', borderRadius: 2
                  }}>Peaking</span>
                )}
              </span>
              <span style={{ display: 'block', fontSize: 12.5, color: '#605d5d', paddingTop: 3 }}>{s.region} · {s.drive} · {s.posts}</span>
              <span style={{ display: 'flex', gap: 6, paddingTop: 7, flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontSize: 11, color: '#605d5d', border: '1px solid #d7d3d3', borderRadius: 2, padding: '2px 6px' }}>{t}</span>
                ))}
              </span>
            </span>
            <span style={{ flex: 'none', width: 62, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <span style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 26 }}>
                {s.bars.map((b, i) => <span key={i} style={b.style}></span>)}
              </span>
              <span style={{ fontSize: 12, color: '#006786', fontVariantNumeric: 'tabular-nums' }}>{s.deltaText}</span>
            </span>
          </button>
        ))}
      </div>

      <div style={{ padding: '18px 20px 0', fontSize: 12.5, color: '#7d7979', fontStyle: 'italic' }}>Ranked on reel volume, momentum and seasonal peak. Crowd readings are live.</div>
    </div>
  );
}
