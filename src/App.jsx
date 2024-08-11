import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Menu from './pages/Menu'
import PageNotFound from './pages/PageNotFount'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="*" element={<PageNotFound/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
