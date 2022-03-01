import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Term from './pages/Term'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BgOverlay from './Components/BgOverlay'

function App() {
  return (
    <>
      <BgOverlay />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:termId" element={<Term />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
