import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from "./components/Navbar"
import About from './components/About';
import Home from './pages/Home';
import HowItWorks from './components/HowItWorks';
import Faqs from './components/Faqs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/how-it-works" element ={<HowItWorks/>}/>
        <Route path="/faqs" element ={<Faqs/>}/>
        <Route path="/privacy-policy" element ={<PrivacyPolicy/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
      </Routes>
    </Router>
  )
}

export default App