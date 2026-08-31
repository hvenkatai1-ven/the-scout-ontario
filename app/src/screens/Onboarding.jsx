import { INTEREST_LABELS } from '../data.js';

export default function Onboarding({ interests, toggleInterest, interestCount, matchCount, go }) {
  return (
    <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 'calc(var(--safe-top) + 28px) 24px 30px' }}>
      <div style={{ height: 5, background: '#201e1d' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '8px 0 4px' }}>
        <div style={{ fontSize: 40, lineHeight: 1, fontWeight: 700, letterSpacing: '-.02em' }}>The Scout</div>
        <div style={{ fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#605d5d', paddingBottom: 5 }}>Ontario</div>
      </div>
      <div style={{ height: 1, background: '#201e1d' }}></div>
      <p style={{ margin: '22px 0 0', fontSize: 21, lineHeight: 1.3, textWrap: 'pretty' }}>Every morning, the province ranked by what is worth shooting today.</p>
      <p style={{ margin: '14px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#605d5d', textWrap: 'pretty' }}>Tell us what you shoot and we will build the day around the light.</p>

      <div style={{ fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#7d7979', padding: '30px 0 12px' }}>Pick your subjects</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {INTEREST_LABELS.map(label => {
          const on = interests.includes(label);
          return (
            <button key={label} onClick={() => toggleInterest(label)} style={{
              padding: '7px 11px', borderRadius: 2, fontFamily: 'inherit', fontSize: 13.5, cursor: 'pointer',
              border: on ? '1px solid #0088b0' : '1px solid #d7d3d3',
              background: on ? '#e9f8ff' : 'transparent', color: on ? '#006786' : '#444141'
            }}>{label}</button>
          );
        })}
      </div>

      <div style={{ flex: 1 }}></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, paddingBottom: 14 }}>
        <span style={{ fontSize: 34, lineHeight: 1, fontWeight: 700, color: '#d6006c' }}>{interestCount}</span>
        <span style={{ fontSize: 13, color: '#605d5d' }}>subjects · {matchCount} spots peaking near you this week</span>
      </div>
      <button onClick={go('feed')} style={{
        width: '100%', padding: 15, background: '#0088b0', color: '#fff', border: 'none',
        borderRadius: 2, fontSize: 16, fontWeight: 600, fontFamily: 'inherit'
      }}>Read today’s edition</button>
      <div style={{ textAlign: 'center', fontSize: 12.5, color: '#7d7979', paddingTop: 12 }}>Location on · notifications at first light</div>
    </div>
  );
}
