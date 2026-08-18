import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiMail, FiArrowRight, FiCode, FiTerminal } from "react-icons/fi";
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

const DevHeroWindow = styled(motion.div)`
  max-width: 440px;
  margin: 0 auto 2.5rem;
  background: ${(props) =>
    props.theme.mode === "light"
      ? "#ffffff"
      : "rgba(15, 23, 42, 0.9)"};
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(79, 70, 229, 0.12);
  text-align: left;
`;

const DevWindowHeader = styled.div`
  height: 36px;
  background: ${(props) =>
    props.theme.mode === "light"
      ? "#f1f5f9"
      : "#0f172a"};
  border-bottom: 1px solid ${(props) => props.theme.cardBorder};
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 8px;

  .dots {
    display: flex;
    gap: 6px;

    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;

      &.red { background: #ef4444; }
      &.yellow { background: #f59e0b; }
      &.green { background: #10b981; }
    }
  }

  .title {
    margin-left: auto;
    font-family: ${(props) => props.theme.monoFont};
    font-size: 0.72rem;
    color: ${(props) => props.theme.textSecondary};
    letter-spacing: 0.05em;
  }
`;

const DevWindowBody = styled.div`
  padding: 1.25rem 1.5rem;
  font-family: ${(props) => props.theme.monoFont};
  font-size: 0.85rem;
  line-height: 1.8;

  .code-line {
    color: ${(props) => props.theme.text};

    &.indent {
      padding-left: 1.25rem;
    }

    .kw { color: #8b5cf6; font-weight: 600; }
    .var { color: #2563eb; }
    .prop { color: #059669; }
    .str { color: #d97706; }
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

const Greeting = styled(motion.h2)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.4rem;
  font-weight: 500;
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

          <CategoryLabel variants={itemVariants}>
            / CREATIVE DEVELOPER & AI ENTHUSIAST
          </CategoryLabel>

          <Greeting variants={itemVariants}>Hello, I'm</Greeting>

          <Name variants={itemVariants}>
            Mahesh <span className="italic-accent">More</span>
          </Name>

          <TypedText>
            <TypeAnimation
              sequence={[
                "Full-Stack Web Developer",
                2000,
                "GenAI & RAG Developer",
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
