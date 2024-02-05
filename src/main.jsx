import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n';
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/react-rating/lib/react-rating.esm.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
