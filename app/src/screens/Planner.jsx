export default function Planner({ routeStats, itinerary, go, weatherReplanned, toggleWeatherReplan }) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 'calc(var(--safe-top) + 18px) 20px 12px' }}>
      <div style={{ height: 4, background: '#201e1d' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '7px 0 5px' }}>
        <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1 }}>Today’s route</div>
        <div style={{ fontSize: 12, color: '#605d5d', paddingBottom: 3 }}>{routeStats}</div>
      </div>
      <div style={{ height: 1, background: '#201e1d' }}></div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '10px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#605d5d' }}>
          <i className="ph-duotone ph-cloud-check" style={{ fontSize: 15 }}></i>Route, light times and access notes cached for offline
        </div>
      </div>

      {weatherReplanned && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginTop: 10, padding: '11px 13px',
          background: '#e9f8ff', borderRadius: 2, fontSize: 13, color: '#006786'
        }}>
          <i className="ph-duotone ph-cloud-rain" style={{ fontSize: 18, flex: 'none' }}></i>
          Forecast turned — route re-sorted, rainy-day collection loaded.
        </div>
      )}
      <button onClick={toggleWeatherReplan} style={{
        border: 'none', background: 'none', color: '#7d7979', fontSize: 11.5, fontFamily: 'inherit',
        padding: '8px 0 0', textDecoration: 'underline', cursor: 'pointer'
      }}>{weatherReplanned ? 'Undo simulated forecast change' : 'Simulate a forecast change'}</button>

      {itinerary.map((i, idx) => (
        <div key={idx} style={{ display: 'flex', gap: 14, padding: '15px 0 0' }}>
          <div style={{ flex: 'none', width: 54, textAlign: 'right', paddingTop: 2 }}>
            <div style={{ fontSize: 15, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{i.time}</div>
            <div style={{ fontSize: 11, color: '#7d7979' }}>{i.kind}</div>
          </div>
          <div style={{ flex: 'none', width: 9, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6 }}>
            <div style={i.dot}></div>
            <div style={{ flex: 1, width: 1, background: '#d7d3d3', minHeight: 34 }}></div>
          </div>
          <div style={{ flex: 1, paddingBottom: 8 }}>
            <div style={{ fontSize: 17.5, fontWeight: 600, lineHeight: 1.2 }}>{i.name}</div>
            <div style={{ fontSize: 12.5, color: '#605d5d', paddingTop: 3 }}>{i.detail}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, paddingTop: 8 }}>
              <div style={{ flex: 1, height: 6, background: '#eae7e7', borderRadius: 2, overflow: 'hidden' }}>
                <div style={i.bar}></div>
              </div>
              <div style={{ fontSize: 11, color: '#7d7979', width: 92, textAlign: 'right' }}>{i.window}</div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ fontSize: 12.5, color: '#7d7979', fontStyle: 'italic', padding: '16px 0 0' }}>Drive times assume you leave from Toronto. The route re-sorts itself to keep every stop inside its light window.</div>
      <button onClick={go('map')} style={{
        width: '100%', marginTop: 18, padding: 13, background: '#0088b0', border: 'none', color: '#fff',
        borderRadius: 2, fontSize: 15, fontWeight: 600, fontFamily: 'inherit'
      }}>Start route</button>
    </div>
  );
}
