// Componente "de negocio" normal, sin ninguna lógica especial de errores.
// Si `user` llega como null, `user.name` lanza un TypeError durante el
// renderizado: así es como suele aparecer un bug real en producción.
function UserProfile({ user }) {
  return (
    <div className="user-card">
      <p className="user-name">{user.name.toUpperCase()}</p>
      <p className="user-email">{user.email}</p>
    </div>
  )
}

export default UserProfile
