import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import UserProfile from './UserProfile.jsx'
import ErrorFallback from './ErrorFallback.jsx'
import './App.css'

const usuarioValido = { name: 'Ana', email: 'ana@example.com' }

function App() {
  const [user, setUser] = useState(usuarioValido)

  return (
    <section id="demo">
      <h1>react-error-boundary</h1>
      <p>
        <code>UserProfile</code> lee <code>user.name</code> sin comprobar si{' '}
        <code>user</code> existe. Al pulsar el botón, <code>user</code> pasa
        a valer <code>null</code> y ese acceso lanza un error de verdad
        durante el renderizado.
      </p>
      <p>
        Sin un error boundary, ese error tiraría toda la aplicación (pantalla
        en blanco). Con <code>{'<ErrorBoundary>'}</code>, React sólo
        desmonta lo que hay dentro del límite y muestra el{' '}
        <code>fallback</code> en su lugar.
      </p>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setUser(usuarioValido)}
      >
        <UserProfile user={user} />
      </ErrorBoundary>

      <button type="button" onClick={() => setUser(null)}>
        Provocar error
      </button>
    </section>
  )
}

export default App
