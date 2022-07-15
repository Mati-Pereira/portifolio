import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import English from './English'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portugues" element={<App />} />
        <Route path="/english" element={<English />} />
        <Route path='*' element={<Navigate to="/portugues" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
