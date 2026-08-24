import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Registro centralizado de errores de render, a nivel de createRoot:
// - onCaughtError: un <ErrorBoundary> de la app ha atrapado el error.
// - onUncaughtError: nadie lo ha atrapado; React desmonta el root entero.
createRoot(document.getElementById('root'), {
  onCaughtError: (error, info) => {
    console.log('[onCaughtError] atrapado por un boundary:', error.message, info.componentStack)
  },
  onUncaughtError: (error, info) => {
    console.error('[onUncaughtError] nadie lo ha atrapado:', error.message, info.componentStack)
  },
}).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
