import {Routes, Route} from 'react-router-dom';

import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
