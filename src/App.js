import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/Nav';
import AllProjects from './components/projects';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import CV from './pages/CV';

// import About from './components/About';
// import Blog from './components/Blog';
// import Contact from './components/Contact';

function App() {

  return (
    <Router>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<AllProjects /> } />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

