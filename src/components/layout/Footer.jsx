import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.backgroundSecondary};
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
  border-top: 1px solid ${props => props.theme.cardBorder};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.textSecondary};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const QuickLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${props => props.theme.textSecondary};
  font-weight: 500;
  font-family: ${props => props.theme.monoFont};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Copyright = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Mahesh-more1', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/maheshmore2005/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:mmore2743@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <SocialLink
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <Icon />
              </SocialLink>
            );
          })}
        </SocialLinks>

        <QuickLinks>
          {quickLinks.map((link, index) => (
            <QuickLink key={index} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </QuickLink>
          ))}
        </QuickLinks>

        <Copyright>
          <span>© {currentYear} Mahesh More. Made with</span>
          <FiHeart color="#e53e3e" />
          <span>using React & Styled Components</span>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
