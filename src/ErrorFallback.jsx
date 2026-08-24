// react-error-boundary llama a este componente con dos props:
// - error: el objeto Error que se ha lanzado
// - resetErrorBoundary: función para "olvidar" el error y reintentar el render
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-fallback" role="alert">
      <h2>Algo ha ido mal</h2>
      <p>
        Error capturado: <code>{error.message}</code>
      </p>
      <button type="button" onClick={resetErrorBoundary}>
        Reintentar
      </button>
    </div>
  )
}

export default ErrorFallback
