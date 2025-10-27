import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import About from './components/About';
import Home from './pages/Home';
import HowItWorks from './components/HowItWorks';
import Faqs from './components/Faqs';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/how-it-works" element ={<HowItWorks/>}/>
        <Route path="/faqs" element ={<Faqs/>}/>
        <Route path="/privacy-policy" element ={<PrivacyPolicy/>}/>
        
        
      </Routes>
    </Router>
  )
}

export default App