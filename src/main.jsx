import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTop from './components/utils/ScrollToTop.jsx'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/proyectoMedioAmbiente'>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>

) 