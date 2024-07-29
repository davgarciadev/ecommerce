import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Provee al componente App de acceso al Contexto creado
  <FiltersProvider>
    <App></App>
  </FiltersProvider>
)
