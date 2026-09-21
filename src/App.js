import './App.css';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumePDF from './Components/ResumePDF';

function App() {
  return (
    <>
      {/* Tudo que é site fica dentro de .site e some na impressão */}
      <NavBar />
      <main className="site">
        <Hero />
        <Highlights />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Documento separado, só existe no PDF */}
      <ResumePDF />
    </>
  );
}

export default App;
