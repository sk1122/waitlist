import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReactGA from "react-ga"

ReactGA.initialize('UA-226967881-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
