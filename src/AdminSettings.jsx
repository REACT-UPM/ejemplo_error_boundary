// Igual que UserProfile: lee una propiedad sin comprobar si `settings`
// existe. A propósito NO está envuelto en ningún <ErrorBoundary> en App.jsx,
// para que el error llegue sin atrapar hasta onUncaughtError.
function AdminSettings({ settings }) {
  return (
    <div className="admin-card">
      <p className="admin-role">{settings.role.toUpperCase()}</p>
      <p className="admin-scope">{settings.scope}</p>
    </div>
  )
}

export default AdminSettings
