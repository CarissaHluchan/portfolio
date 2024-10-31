import { Route, Routes } from 'react-router-dom';

import Name from '../Name/Name';
import Nav from '../Nav/Nav';
// import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="header">
          <Name />
          <Nav />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Name />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;