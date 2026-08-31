export default function TabBar({ tabs, screen, go }) {
  return (
    <div style={{
      flex: 'none', display: 'flex', background: '#f3f2f2', borderTop: '1px solid #d7d3d3',
      padding: '9px 6px calc(var(--safe-bottom) + 12px)'
    }}>
      {tabs.map(([id, label, icon]) => (
        <button key={id} onClick={go(id)} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          border: 'none', background: 'none', fontFamily: 'inherit', padding: '4px 0',
          color: screen === id ? '#0088b0' : '#7d7979'
        }}>
          <i className={icon} style={{ fontSize: 22 }}></i>
          <span style={{ fontSize: 10.5, letterSpacing: '.04em' }}>{label}</span>
        </button>
      ))}
    </div>
  );
}
