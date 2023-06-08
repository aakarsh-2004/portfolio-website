import React, { useContext } from 'react';
import './App.js';
import Navbar from './components/navbar/navbar.jsx';
import Intro from './components/intro/intro.jsx';
import Services from './components/Services/services.jsx';
import Experience from './components/Experience/experience.jsx';
import Works from './components/Works/works.jsx';
import Portfolio from './components/Portfolio/portfolio.jsx';
import Testimonials from './components/Testimonials/testimonials.jsx';
import Contact from './components/Contacts/contact.jsx';
import Footer from './components/Footer/footer.jsx';
import {themeContext} from './context.js'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode ? 'black' : '',
    color: darkMode ? 'white': ''}}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
