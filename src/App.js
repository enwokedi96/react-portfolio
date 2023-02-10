import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/header';
import Home from './components/home';
import AllProjects from './components/projects';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';

// import About from './components/About';
// import Blog from './components/Blog';
// import Contact from './components/Contact';

function App() {

  return (
    <Router>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<AllProjects /> } />
          <Route path="aboutMe" element={<AboutMe />} />
          {/* Define a route that will have descendant routes */}
          {/* <Route path="contact/*" element={<Contact />} /> */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

