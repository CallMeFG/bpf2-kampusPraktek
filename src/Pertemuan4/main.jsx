import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FrameworkListSearchFilter from './FrameworkListSearchFilter'
import ResponsiveDesign from './ResponsiveDesign'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FrameworkListSearchFilter />
    <ResponsiveDesign />
  </React.StrictMode>,
)