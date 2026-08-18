import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import ParticleBackground from "../components/common/ParticleBackground";
import Button from "../components/common/Button";

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
`;

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.accent}
  );
  padding: 4px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: background-url("data/socialselfi.png");
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.text},
    ${(props) => props.theme.primary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypedText = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textSecondary};
  min-height: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    min-height: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => props.theme.textSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Home = () => {
  const scrollIndicatorRef = useRef();

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <HomeContainer>
      <ParticleBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroContent>
          <ProfileImage variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <img
              src="/assets/images/profile.jpg"
              alt="Profile"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='60'%3EYN%3C/text%3E%3C/svg%3E";
              }}
            />
          </ProfileImage>

          <Greeting variants={itemVariants}>Hello, I'm</Greeting>

          <Name variants={itemVariants}>Mahesh More</Name>

          <TypedText>
            <TypeAnimation
              sequence={[
                "Full-Stack Web Developer",
                2000,
                "React.js Developer",
                2000,
                "AI & GenAI Integration",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </TypedText>

          <Description variants={itemVariants}>
            Computer Engineering student & web developer passionate about building clean, interactive web applications with React.js, JavaScript, and exploring GenAI & RAG integrations.
          </Description>

          <CTAButtons variants={itemVariants}>
            <Button
              primary
              as={motion.a}
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail /> Hire Me
            </Button>

            <Button
              secondary
              as={motion.a}
              href="/assets/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download CV
            </Button>
          </CTAButtons>
        </HeroContent>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
