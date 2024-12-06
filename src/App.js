import logo from './logo.svg';
import './App.css';
import './Navbar.css';
import './Banner.css';
import './Skills.css';
import './Projects.css';
import './Contact.css';
import './Footer.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {
  // Send post request to server on initial render for visitor tracking
  useEffect(() => {
    fetch('api/track-visit', {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({path: '/'}),
    }).catch(console.error);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
