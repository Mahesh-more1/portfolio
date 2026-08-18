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
  width: 240px;
  height: 240px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.accent}
  );
  padding: 4px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 6.5vw, 5rem);
  font-weight: 800;
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
    font-size: 2.8rem;
  }
`;

const TypedText = styled.div`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textSecondary};
  min-height: 3.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    min-height: 2.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 3rem;
  max-width: 680px;
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
              src="./assets/images/profile.png"
              alt="Mahesh More"
              onError={(e) => {
                e.target.src = "./assets/images/profile.jpg";
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
                "GenAI & RAG Enthusiast",
                2000,
                "React.js & Node.js Developer",
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
              href="#/contact"
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
