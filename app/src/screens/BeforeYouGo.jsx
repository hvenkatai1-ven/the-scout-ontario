import { BEFORE_YOU_GO } from '../data.js';

const ROWS = [
  ['permit', 'Permit'],
  ['parking', 'Parking'],
  ['gates', 'Gate times'],
  ['fees', 'Fees'],
  ['closures', 'Closures'],
  ['cell', 'Cell coverage'],
  ['washrooms', 'Washrooms'],
];

export default function BeforeYouGo({ cur, go }) {
  const info = BEFORE_YOU_GO[cur.name];

  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ padding: 'calc(var(--safe-top) + 14px) 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={go('detail')} style={{
          width: 36, height: 36, border: 'none', borderRadius: 2, background: '#eae9e9',
          color: '#201e1d', fontSize: 17, fontFamily: 'inherit', flex: 'none'
        }}>←</button>
        <div>
          <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#aa0b56' }}>Before you go</div>
          <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.1 }}>{cur.name}</div>
        </div>
      </div>

      <div style={{ padding: '18px 20px 24px' }}>
        <div style={{ height: 1, background: '#201e1d' }}></div>

        {ROWS.map(([key, label]) => (
          <div key={key} style={{ display: 'flex', gap: 16, padding: '13px 0', borderBottom: '1px solid #eae7e7' }}>
            <div style={{ flex: 'none', width: 96, fontSize: 11, letterSpacing: '.07em', textTransform: 'uppercase', color: '#7d7979', paddingTop: 2 }}>{label}</div>
            <div style={{ flex: 1, fontSize: 14.5, lineHeight: 1.45 }}>{info[key]}</div>
          </div>
        ))}

        <div style={{ padding: '20px 0 0' }}>
          <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#7d7979' }}>How much is on rock</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 8 }}>
            <div style={{ flex: 1, height: 8, background: '#eae7e7', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: info.rockPct + '%', height: '100%', background: '#0088b0' }}></div>
            </div>
            <div style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums', flex: 'none' }}>{info.rockPct}%</div>
          </div>
        </div>

        <button onClick={go('detail')} style={{
          width: '100%', marginTop: 22, padding: 13, background: 'none', border: '1px solid #0088b0',
          color: '#006786', borderRadius: 2, fontSize: 14.5, fontFamily: 'inherit'
        }}>Back to spot</button>
      </div>
    </div>
  );
}
