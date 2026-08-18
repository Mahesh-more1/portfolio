import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiMail, FiArrowRight } from "react-icons/fi";
import ParticleBackground from "../components/common/ParticleBackground";
import Button from "../components/common/Button";

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 2rem 4rem;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 860px;
`;

const StatusPill = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem;
  border-radius: 9999px;
  background: ${(props) =>
    props.theme.mode === "light"
      ? "rgba(255, 255, 255, 0.9)"
      : "rgba(15, 23, 42, 0.8)"};
  border: 1px solid ${(props) => props.theme.cardBorder};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  font-family: ${(props) => props.theme.monoFont};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 2rem;

  .dot {
    color: ${(props) => props.theme.mint};
    font-size: 0.75rem;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

const ProfileImage = styled(motion.div)`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.accent}
  );
  padding: 4px;
  position: relative;
  box-shadow: 0 15px 35px -10px rgba(79, 70, 229, 0.25);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 170px;
    height: 170px;
  }
`;

const CategoryLabel = styled(motion.p)`
  font-family: ${(props) => props.theme.monoFont};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const Name = styled(motion.h1)`
  font-family: ${(props) => props.theme.serifFont};
  font-size: clamp(3.2rem, 7vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme.text};
  letter-spacing: -0.02em;

  span.italic-accent {
    font-style: italic;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.primary} 0%,
      ${(props) => props.theme.accent} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const TypedText = styled.div`
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.textSecondary};
  min-height: 3.2rem;
  font-weight: 500;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 2.5rem;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
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
          <StatusPill variants={itemVariants}>
            <span className="dot">●</span> Available for Projects & Engineering Roles
          </StatusPill>

          <ProfileImage variants={itemVariants} whileHover={{ scale: 1.04 }}>
            <img
              src="./assets/images/profile.png"
              alt="Mahesh More"
              onError={(e) => {
                e.target.src = "./assets/images/profile.jpg";
              }}
            />
          </ProfileImage>

          <CategoryLabel variants={itemVariants}>
            / CREATIVE DEVELOPER & AI ENTHUSIAST
          </CategoryLabel>

          <Name variants={itemVariants}>
            Mahesh <span className="italic-accent">More</span>
          </Name>

          <TypedText>
            <TypeAnimation
              sequence={[
                "Full-Stack Web Developer",
                2000,
                "GenAI & RAG Specialist",
                2000,
                "React.js & Node.js Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </TypedText>

          <Description variants={itemVariants}>
            Computer Engineering student & web developer passionate about building clean, high-performance web applications with React.js, JavaScript, Node.js, and GenAI & RAG integrations.
          </Description>

          <CTAButtons variants={itemVariants}>
            <Button
              primary
              as={motion.a}
              href="#/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{ borderRadius: '9999px', padding: '0.9rem 2rem', fontWeight: 600 }}
            >
              <FiMail /> Say Hi <FiArrowRight />
            </Button>

            <Button
              secondary
              as={motion.a}
              href="/assets/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{ borderRadius: '9999px', padding: '0.9rem 2rem', fontWeight: 600 }}
            >
              <FiDownload /> Resume
            </Button>
          </CTAButtons>
        </HeroContent>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
