export default function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div style={{
      position: 'absolute', left: 20, right: 20, bottom: 118, zIndex: 80,
      background: '#201e1d', color: '#f3f2f2', padding: '12px 14px', borderRadius: 2,
      fontSize: 13.5, boxShadow: '0 3px 10px rgba(45,43,43,.3)'
    }}>{toast}</div>
  );
}
