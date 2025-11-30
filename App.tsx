import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gameplay } from './components/Gameplay';
import { Gallery } from './components/Gallery';
import { Staff } from './components/Staff';
import { Footer } from './components/Footer';

const App = () => {
  
  useEffect(() => {
    // Basic initialization if needed
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gameplay />
        <Gallery />
        <Staff />
      </main>
      <Footer />
    </div>
  );
};

export default App;