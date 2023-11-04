import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer';
import { useRef } from 'react';



function App() {
  const destinationSectionRef = useRef(null);
  
  const scrollToDestinationSection = () => {
    destinationSectionRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <div className="App">
      <NavBar handleClick={scrollToDestinationSection}/>
      <Banner handleClick={scrollToDestinationSection}/>
      <Skills/>
      <Projects/>
      <Contact reference={destinationSectionRef}/>
      <Footer/>
    </div>
  );
}

export default App;
