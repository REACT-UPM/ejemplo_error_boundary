import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import UserProfile from './UserProfile.jsx'
import AdminSettings from './AdminSettings.jsx'
import ErrorFallback from './ErrorFallback.jsx'
import './App.css'

const usuarioValido = { name: 'Ana', email: 'ana@example.com' }
const ajustesValidos = { role: 'admin', scope: 'facturación' }

function App() {
  const [user, setUser] = useState(usuarioValido)
  const [settings, setSettings] = useState(ajustesValidos)

  return (
    <section id="demo">
      <h1>react-error-boundary</h1>

      <h2>Con protección</h2>
      <p>
        <code>UserProfile</code> lee <code>user.name</code> sin comprobar si{' '}
        <code>user</code> existe. Al pulsar el botón, <code>user</code> pasa
        a valer <code>null</code> y ese acceso lanza un error de verdad
        durante el renderizado.
      </p>
      <p>
        Con <code>{'<ErrorBoundary>'}</code>, React sólo desmonta lo que hay
        dentro del límite y muestra el <code>fallback</code> en su lugar. En
        la consola verás <code>[onCaughtError]</code>: el registro
        centralizado de <code>createRoot</code> se entera igualmente, aunque
        el boundary ya haya resuelto la UI.
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

      <h2>Sin protección</h2>
      <p>
        <code>AdminSettings</code> tiene el mismo tipo de bug, pero aquí no
        hay ningún <code>{'<ErrorBoundary>'}</code> alrededor. El error se
        propaga sin que nadie lo atrape, <code>createRoot</code> registra{' '}
        <code>[onUncaughtError]</code> en la consola y React desmonta{' '}
        <strong>toda la aplicación</strong> (pantalla en blanco). Tendrás que
        recargar la página para reiniciar la demo.
      </p>

      <AdminSettings settings={settings} />

      <button type="button" onClick={() => setSettings(null)}>
        Provocar error sin protección
      </button>
    </section>
  )
}

export default App
