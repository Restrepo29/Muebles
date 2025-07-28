import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'

import './index.css'

import { MublesApp } from './MublesApp'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <MublesApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)
