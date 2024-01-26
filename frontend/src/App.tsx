import {Route, Routes} from 'react-router-dom'

import { Header } from "./components/Header"
import { Footer } from "./components/Footer/Footer"
import { Main } from './components/Main'
import { About } from './components/About/About'
import { Wishes } from './components/Wishes/Wishes'
import { useEffect, useState } from 'react'
import { Wish } from './types/Wish'
import { Request } from './components/Request/Request'
import { Report } from './components/Report/Report'
import { Donate } from './components/Donate/Donate'


function App() {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/wish.json")
      .then((res) => res.json())
      .then(setWishes);
  }
  , [])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/wishes' element={<Wishes wishes={wishes}/>} />
        <Route path='/request' element={<Request />} />
        <Route path='/reports' element={<Report data={wishes} />} />
        <Route path='/donate' element={<Donate/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
