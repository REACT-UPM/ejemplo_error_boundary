import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ejemplo de referencia (no conectado al build: index.html sigue usando
// main.jsx). Muestra cómo, en lugar de solo hacer console.log, se podría
// avisar a un servidor propio de los errores para poder corregirlos más
// tarde (agregarlos, alertar al equipo, etc.).

// En una app real esto sería la URL de tu backend de observabilidad
// (Sentry, un endpoint propio, etc.). Aquí es solo ilustrativo: no hay
// ningún servidor escuchando en /api/log-error.
const ENDPOINT_LOGGING = '/api/log-error'

function reportarError(tipo, error, info) {
  const payload = {
    tipo, // 'caught' | 'uncaught'
    mensaje: error.message,
    stack: error.stack,
    componentStack: info.componentStack,
    url: window.location.href,
    timestamp: new Date().toISOString(),
  }

  // sendBeacon es preferible a fetch para este caso: no bloquea el render
  // y, a diferencia de fetch, sigue funcionando aunque el error deje a la
  // página a punto de desmontarse (el caso de onUncaughtError).
  const enviado = navigator.sendBeacon(
    ENDPOINT_LOGGING,
    new Blob([JSON.stringify(payload)], { type: 'application/json' }),
  )

  console.log(`[reportarError:${tipo}]`, payload, '· enviado al servidor:', enviado)
}

createRoot(document.getElementById('root'), {
  onCaughtError: (error, info) => reportarError('caught', error, info),
  onUncaughtError: (error, info) => reportarError('uncaught', error, info),
}).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
