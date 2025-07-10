import React from 'react';
import Header from './components/Header';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TechnicalSkills />
      <Projects />
      <Experience />
      
      {/* Education & Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Education />
            <Achievements />
          </div>
        </div>
      </section>

      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;