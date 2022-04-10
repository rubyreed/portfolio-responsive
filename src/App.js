import './App.css';
import './Responsive.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Submitted from './pages/Submitted';



function App() {
  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/submitted" element={<Submitted/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
