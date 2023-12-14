import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* Indico que quiero q ue se use con routes */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
