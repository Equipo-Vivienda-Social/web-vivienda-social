import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/HomePage'
import Applicants from './pages/DwellingPage'
import DwellingPage from './pages/DwellingPage'
import ApplicantPage from './pages/ApplicantPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dwellings' element={<DwellingPage />} />
          <Route path='/applicant' element={<ApplicantPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
