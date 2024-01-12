import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import Boot from './components/Boot.tsx'
import Content from './components/Content.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Boot />
    <Content />
  </React.StrictMode>,
)
