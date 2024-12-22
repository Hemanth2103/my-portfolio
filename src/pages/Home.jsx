import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About'; 
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section (Optional) */}
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;