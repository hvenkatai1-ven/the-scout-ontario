import { useState } from 'react';
import { lightPhaseFor } from '../data.js';

function pad(n) { return String(n).padStart(2, '0'); }

export default function LightDirection({ cur, go }) {
  const [hour, setHour] = useState(18);
  const phase = lightPhaseFor(hour);
  const radius = 118;
  const rad = (hour / 24) * 2 * Math.PI - Math.PI / 2;
  const dx = Math.round(Math.cos(rad) * radius);
  const dy = Math.round(Math.sin(rad) * radius);

  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ padding: 'calc(var(--safe-top) + 14px) 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={go('detail')} style={{
          width: 36, height: 36, border: 'none', borderRadius: 2, background: '#eae9e9',
          color: '#201e1d', fontSize: 17, fontFamily: 'inherit', flex: 'none'
        }}>←</button>
        <div>
          <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#aa0b56' }}>Light direction</div>
          <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.1 }}>{cur.name}</div>
        </div>
      </div>

      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          width: '100%', aspectRatio: '1 / 1', maxWidth: 280, margin: '0 auto', borderRadius: '50%',
          border: '1px solid #d7d3d3', background: '#eae9e9', position: 'relative'
        }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,136,176,.08) 100%)' }}></div>
          {/* subject marker at centre */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', width: 12, height: 12, borderRadius: '50%', background: '#201e1d', transform: 'translate(-50%,-50%)' }}></div>
          {/* sun position, orbiting the circle by hour */}
          <div style={{
            position: 'absolute', left: `calc(50% + ${dx}px)`, top: `calc(50% + ${dy}px)`, width: 16, height: 16,
            borderRadius: '50%', background: '#d6006c', transform: 'translate(-50%,-50%)',
            boxShadow: '0 0 0 4px rgba(214,0,108,.18)'
          }}></div>
          <div style={{ position: 'absolute', left: 8, bottom: 8, fontSize: 10, color: '#7d7979' }}>N</div>
          <div style={{ position: 'absolute', right: 8, bottom: 8, fontSize: 10, color: '#7d7979' }}>E</div>
        </div>

        <div style={{ padding: '20px 0 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>{phase.label}</div>
            <div style={{ fontSize: 13, color: '#605d5d', fontVariantNumeric: 'tabular-nums' }}>{pad(hour)}:00</div>
          </div>
          <input
            type="range" min="0" max="23" value={hour}
            onChange={(e) => setHour(Number(e.target.value))}
            style={{ width: '100%', margin: '10px 0 0', accentColor: '#0088b0' }}
          />
          <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.5, textWrap: 'pretty' }}>{phase.text}</p>
        </div>

        <div style={{ height: 1, background: '#d7d3d3', margin: '20px 0' }}></div>
        <div style={{ fontSize: 12.5, color: '#7d7979', fontStyle: 'italic' }}>Compass-based AR overlay is a later addition — this scrubber is the launch version.</div>

        <button onClick={go('framing')} style={{
          width: '100%', marginTop: 20, padding: 13, background: '#0088b0', border: 'none', color: '#fff',
          borderRadius: 2, fontSize: 14.5, fontWeight: 600, fontFamily: 'inherit'
        }}>Shoot it at {cur.bestAt}</button>
      </div>
    </div>
  );
}
