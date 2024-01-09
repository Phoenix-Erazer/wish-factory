import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.tsx'
import 'react-bootstrap'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
