import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/HomePage'
import DwellingPage from './pages/DwellingPage'
import ApplicantPage from './pages/ApplicantPage'
import Navbar from './components/Navbar'
import DwellingDetails from './pages/DwellingDetails'
import ApplicantDetails from './pages/ApplicantDetails'

function App() {
  
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dwellings' element={<DwellingPage />} />
          <Route path='/dwellings/:id' element={<DwellingDetails />} />
          <Route path='/applicants' element={<ApplicantPage/>}/>
          <Route path='/applicants/:id' element={<ApplicantDetails />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
