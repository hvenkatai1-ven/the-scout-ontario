import { useMemo } from 'react';
import { conditionsFor } from '../data.js';

export default function Conditions({ cur, go, notifyConditions, toggleNotifyConditions }) {
  const days = useMemo(() => conditionsFor(cur), [cur]);
  const skyColor = (sky) => (sky >= 7 ? '#0088b0' : sky >= 4 ? '#605d5d' : '#bab6b6');

  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ padding: 'calc(var(--safe-top) + 14px) 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={go('detail')} style={{
          width: 36, height: 36, border: 'none', borderRadius: 2, background: '#eae9e9',
          color: '#201e1d', fontSize: 17, fontFamily: 'inherit', flex: 'none'
        }}>←</button>
        <div>
          <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#aa0b56' }}>Conditions</div>
          <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.1 }}>{cur.name}</div>
        </div>
      </div>

      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ height: 1, background: '#201e1d' }}></div>
        <p style={{ margin: '10px 0 0', fontSize: 13.5, color: '#605d5d', lineHeight: 1.5 }}>Sky Index scores how dramatic the sky will look — cloud shape and colour, not just cover. Wind is for the drone; mist is your odds at the falls.</p>

        {days.map(d => (
          <div key={d.day} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: '1px solid #eae7e7',
            background: d.best ? '#e9f8ff' : 'transparent', margin: d.best ? '0 -20px' : 0, paddingLeft: d.best ? 20 : 0, paddingRight: d.best ? 20 : 0
          }}>
            <div style={{ width: 52, flex: 'none' }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{d.day}</div>
              <div style={{ fontSize: 11, color: '#7d7979' }}>{d.date}</div>
            </div>
            <div style={{ width: 44, flex: 'none', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: skyColor(d.sky), lineHeight: 1 }}>{d.sky}</div>
              <div style={{ fontSize: 9.5, letterSpacing: '.06em', textTransform: 'uppercase', color: '#7d7979' }}>sky</div>
            </div>
            <div style={{ flex: 1, fontSize: 12.5, color: '#605d5d' }}>
              <div>{d.wind} km/h wind</div>
              <div>{d.mist}% mist chance</div>
            </div>
            {d.best && (
              <div style={{ fontSize: 9.5, letterSpacing: '.08em', textTransform: 'uppercase', color: '#006786', background: '#cbeeff', padding: '3px 6px', borderRadius: 2, flex: 'none' }}>Best day</div>
            )}
          </div>
        ))}

        <label style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 0', marginTop: 6 }}>
          <input type="checkbox" checked={notifyConditions} onChange={toggleNotifyConditions} style={{ width: 17, height: 17, accentColor: '#0088b0', flex: 'none' }} />
          <span style={{ fontSize: 14, lineHeight: 1.4 }}>Notify me 45 minutes before the window — only when the score is worth the drive.</span>
        </label>
      </div>
    </div>
  );
}
