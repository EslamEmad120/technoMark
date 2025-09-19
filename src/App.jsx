import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Navbar from '../src/Navbar';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Services from './Services';
import ServiceDetails from './ServiceDetails';
// import 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
