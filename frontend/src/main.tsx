import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
