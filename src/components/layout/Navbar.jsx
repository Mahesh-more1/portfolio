import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 2rem;
  background: ${props => props.scrolled ? 
    (props.theme.mode === 'light' ? 'rgba(250, 250, 250, 0.88)' : 'rgba(9, 13, 22, 0.88)') : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${props => props.scrolled ? 
    `1px solid ${props.theme.cardBorder}` : '1px solid transparent'};
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.button)`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: ${props => props.theme.serifFont};
  font-size: 1.6rem;
  font-weight: 700;
  font-style: italic;
  color: ${props => props.theme.text};

  span {
    color: ${props => props.theme.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${props => props.theme.background};
    padding: 2rem;
    border-top: 1px solid ${props => props.theme.cardBorder};
    box-shadow: ${props => props.theme.shadow};
  }
`;

const NavButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: ${props => props.theme.monoFont};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  transition: color 0.3s ease;
  color: ${props => props.active ? props.theme.primary : props.theme.textSecondary};

  &:hover {
    color: ${props => props.theme.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.text};
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <NavContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Mahesh<span>.dev</span>
        </Logo>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              active={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </NavButton>
          ))}
          
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Toggle Light / Dark Editorial Mode"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </ThemeToggle>
        </NavLinks>

        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </MobileToggle>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
