import { useState } from 'react';

function matchSpot(text, spots) {
  const q = text.toLowerCase();
  const byName = spots.find(s => q.includes(s.name.toLowerCase()) || q.includes(s.name.split(' ')[0].toLowerCase()));
  if (byName) return byName;
  if (!q.trim()) return null;
  let h = 0;
  for (let i = 0; i < q.length; i++) h = (h * 31 + q.charCodeAt(i)) >>> 0;
  return spots[h % spots.length];
}

export default function SaveFromReel({ go, spots, addSpotToRoute, say }) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle'); // idle | analyzing | matched
  const [match, setMatch] = useState(null);

  const analyze = () => {
    if (!text.trim()) return;
    setStatus('analyzing');
    setTimeout(() => {
      setMatch(matchSpot(text, spots));
      setStatus('matched');
    }, 700);
  };

  const reset = () => { setText(''); setStatus('idle'); setMatch(null); };

  return (
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ padding: 'calc(var(--safe-top) + 14px) 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={go('saved')} style={{
          width: 36, height: 36, border: 'none', borderRadius: 2, background: '#eae9e9',
          color: '#201e1d', fontSize: 17, fontFamily: 'inherit', flex: 'none'
        }}>←</button>
        <div style={{ fontSize: 19, fontWeight: 700 }}>Save from a reel</div>
      </div>

      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ height: 1, background: '#201e1d' }}></div>
        <p style={{ margin: '10px 0 0', fontSize: 14, color: '#605d5d', lineHeight: 1.5 }}>Share a reel into The Scout the way you'd share it to anyone — paste the link or caption below and it finds the place.</p>

        <div style={{
          marginTop: 16, background: '#f8f4f4', border: '1px solid #d7d3d3', borderRadius: 2,
          display: 'flex', alignItems: 'center', gap: 10, padding: '12px 13px'
        }}>
          <div style={{ width: 30, height: 40, background: '#bab6b6', borderRadius: 1, flex: 'none' }}></div>
          <div style={{ fontSize: 12, color: '#444141' }}>reel shared from Instagram</div>
        </div>

        <textarea
          value={text}
          onChange={(e) => { setText(e.target.value); if (status !== 'idle') { setStatus('idle'); setMatch(null); } }}
          placeholder="Paste the reel link or its caption…"
          rows={3}
          style={{ width: '100%', marginTop: 12, padding: '12px 13px', fontSize: 15, fontFamily: 'inherit', color: '#201e1d', background: '#f8f4f4', border: '1px solid #d7d3d3', borderRadius: 2, resize: 'vertical' }}
        />

        {status === 'idle' && (
          <button onClick={analyze} disabled={!text.trim()} style={{
            width: '100%', marginTop: 12, padding: 13, background: text.trim() ? '#0088b0' : '#bab6b6', border: 'none',
            color: '#fff', borderRadius: 2, fontSize: 14.5, fontWeight: 600, fontFamily: 'inherit',
            cursor: text.trim() ? 'pointer' : 'not-allowed'
          }}>Find the place</button>
        )}

        {status === 'analyzing' && (
          <div style={{ padding: '20px 0', textAlign: 'center', fontSize: 13.5, color: '#7d7979', fontStyle: 'italic' }}>↓ places extracted…</div>
        )}

        {status === 'matched' && match && (
          <div style={{ marginTop: 16, border: '1px solid #0088b0', borderRadius: 2, padding: 16 }}>
            <div style={{ fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase', color: '#006786' }}>Matched to a spot we track</div>
            <div style={{ fontSize: 22, fontWeight: 700, paddingTop: 4 }}>{match.name}</div>
            <div style={{ fontSize: 12.5, color: '#605d5d', paddingTop: 3 }}>{match.region} · {match.drive} · best at {match.bestAt}</div>
            <div style={{ display: 'flex', gap: 9, paddingTop: 14 }}>
              <button onClick={() => { addSpotToRoute(match.name); reset(); go('planner')(); }} style={{
                flex: 1, padding: 12, background: '#0088b0', border: 'none', color: '#fff',
                borderRadius: 2, fontSize: 14, fontWeight: 600, fontFamily: 'inherit'
              }}>Add to today’s route</button>
              <button onClick={() => { say(match.name + ' saved to Golden hour, one tank of gas'); reset(); }} style={{
                flex: 'none', padding: '12px 14px', background: 'none', border: '1px solid #0088b0',
                color: '#006786', borderRadius: 2, fontSize: 14, fontFamily: 'inherit'
              }}>Save to a list</button>
            </div>
          </div>
        )}

        {status === 'matched' && !match && (
          <div style={{ marginTop: 16, fontSize: 14, color: '#7d7979' }}>Couldn’t place that one yet — try pasting the caption instead of just the link.</div>
        )}
      </div>
    </div>
  );
}
