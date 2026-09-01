export default function GoElsewhere({ cur, go, open, alternatesFor }) {
  const alternates = alternatesFor(cur.name);

  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ padding: 'calc(var(--safe-top) + 14px) 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={go('detail')} style={{
          width: 36, height: 36, border: 'none', borderRadius: 2, background: '#eae9e9',
          color: '#201e1d', fontSize: 17, fontFamily: 'inherit', flex: 'none'
        }}>←</button>
        <div style={{ fontSize: 19, fontWeight: 700 }}>Go somewhere else</div>
      </div>

      <div style={{ padding: '18px 20px 24px' }}>
        <div style={{ height: 1, background: '#201e1d' }}></div>
        <p style={{ margin: '10px 0 0', fontSize: 14.5, lineHeight: 1.5, textWrap: 'pretty' }}>
          <strong>{cur.name}</strong> is {cur.crowd === 'Heavy' ? 'heavily crowded' : 'peaking'} right now. These hold the same light and the same subject, with a shorter line.
        </p>

        {alternates.map(a => (
          <div key={a.name} style={{ padding: '18px 0', borderBottom: '1px solid #d7d3d3' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{a.name}</div>
              <div style={{ fontSize: 12, color: '#7d7979' }}>{a.drive} · crowd {a.crowd}</div>
            </div>
            <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.45, color: '#444141' }}>{a.note}</p>
            <button onClick={open(a.name)} style={{
              marginTop: 10, padding: '10px 14px', background: '#0088b0', border: 'none', color: '#fff',
              borderRadius: 2, fontSize: 13.5, fontWeight: 600, fontFamily: 'inherit'
            }}>Open {a.name}</button>
          </div>
        ))}

        <div style={{ fontSize: 12.5, color: '#7d7979', fontStyle: 'italic', padding: '16px 0 0' }}>An app that ranks by reel volume accelerates the crowding it reports. This is the rule, not a coincidence.</div>
      </div>
    </div>
  );
}
