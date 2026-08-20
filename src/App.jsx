import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import Loader from './components/common/Loader';

const SectionWrapper = styled.section`
  scroll-margin-top: 80px;
`;

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    // Simulate loading
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <SectionWrapper id="home">
            <Home />
          </SectionWrapper>
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
