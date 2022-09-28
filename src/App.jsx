import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import './app.scss';
import {useState} from 'react';

function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
    <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu  menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="section">
     <Intro />
     <Portfolio/>
     <Works />
     <Testimonials />
     <Contact />

    </div>
    </div>
  );
}

export default App;
