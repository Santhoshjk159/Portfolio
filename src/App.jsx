import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/Home';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';

function App() {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Add smooth scroll CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <MyProjects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
