import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Ubah import dari BrowserRouter menjadi HashRouter
import { HashRouter } from 'react-router-dom'
import './assets/tailwind'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Gunakan HashRouter disini */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)