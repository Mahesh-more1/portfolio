import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiCheck } from 'react-icons/fi';
import Button from '../components/common/Button';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${props => props.theme.text}, ${props => props.theme.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  margin: 0 auto;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  padding: 4px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    background: ${props => props.theme.backgroundSecondary};
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ProfileText = styled.div`
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 1.1rem;
  }
`;

const AboutText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.8;
    font-size: 1.1rem;
  }

  .highlight {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

const SkillsSection = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillTag = styled.span`
  background: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid ${props => props.theme.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`;

const ExperienceSection = styled.div`
  margin-bottom: 4rem;
`;

const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceItem = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
  }
`;

const ExperienceContent = styled.div`
  h3 {
    font-size: 1.3rem;
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
  }

  .company {
    color: ${props => props.theme.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .duration {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
  }
`;

const CTASection = styled.div`
  text-align: center;
`;

const About = () => {
  const skills = {
    "Languages": ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
    "Frontend & UI": ["React.js", "Tailwind CSS", "Styled Components", "Responsive Design"],
    "Backend & Databases": ["Node.js", "Express.js", "MongoDB", "PostgreSQL (Learning)", "REST APIs", "FastAPI"],
    "Tools, DevOps & Cloud": ["Docker (Learning)", "Git & GitHub", "Cloudinary", "Razorpay Integration", "VS Code", "Firebase"],
    "AI & Data": ["GenAI & RAG (Final Year Project)", "AI & Data Analytics", "Jupyter Notebook", "Machine Learning (Basics)"]
  };

  const experience = [
    {
      title: "Web Development Intern",
      company: "InternPro",
      duration: "June 2025 – July 2025 (6 Weeks)",
      description: "Assisted with internal IT operations, system maintenance, troubleshooting technical issues, and contributing to web development workflows. Received Letter of Recommendation for dedication and quick learning."
    },
    {
      title: "Web Development Intern",
      company: "VaultofCodes.in (AICTE Portal)",
      duration: "June 2025 – July 2025 (1 Month)",
      description: "Successfully completed hands-on web development tasks, front-end feature implementations, and project deliverables as part of the AICTE Corporate Internship program."
    },
    {
      title: "AI & Data Analytics Virtual Intern",
      company: "AICTE, Shell India & Edunet Foundation",
      duration: "June 2025 – July 2025 (4 Weeks)",
      description: "Participated in the Skills4Future program focusing on Artificial Intelligence, Data Analytics, and Green Skills certification."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutContainer>
      <Header>
        <Title
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </Title>
        <Subtitle
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get to know me better and learn about my journey as a developer
        </Subtitle>
      </Header>

      <AboutContent>
        <ProfileSection
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/assets/images/profile.png" 
              alt="Mahesh More" 
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='80'%3EMM%3C/text%3E%3C/svg%3E";
              }}
            />
          </ProfileImage>
          
          <ProfileText>
            <h3>Mahesh More</h3>
            <p>Full-Stack Web Developer & GenAI Enthusiast</p>
          </ProfileText>
        </ProfileSection>

        <AboutText
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <p>
            Hello! I'm <span className="highlight">Mahesh More</span>, a Computer Engineering student at SSBT's College of Engineering and Technology, Jalgaon.
          </p>
          
          <p>
            I focus on web development and problem-solving, building applications with <span className="highlight">React.js, JavaScript, Python</span>, and <span className="highlight">Java</span>.
          </p>
          
          <p>
            Currently, I am working on my Final Year Major Project: a <span className="highlight">GenAI-powered University Knowledge & Academic System</span> using <span className="highlight">RAG, FastAPI</span>, and modern web frameworks.
          </p>
          
          <p>
            I have completed web development & AI virtual internships certified by InternPro, VaultofCodes, and AICTE/Shell Edunet Foundation. Check out my featured projects below or on GitHub!
          </p>

          <Button
            primary
            as={motion.a}
            href="/assets/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload /> Download Resume
          </Button>
        </AboutText>
      </AboutContent>

      <SkillsSection>
        <SectionTitle
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </SectionTitle>
        
        <SkillsGrid>
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillCategory
              key={category}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <CategoryTitle>
                <FiCheck />
                {category}
              </CategoryTitle>
              <SkillsList>
                {skillList.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex}>
                    {skill}
                  </SkillTag>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <ExperienceSection>
        <SectionTitle
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Experience & Learning
        </SectionTitle>
        
        <ExperienceTimeline>
          {experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ x: 10 }}
            >
              <ExperienceContent>
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <div className="duration">{exp.duration}</div>
                <p>{exp.description}</p>
              </ExperienceContent>
            </ExperienceItem>
          ))}
        </ExperienceTimeline>
      </ExperienceSection>

      <CTASection>
        <Button
          primary
          large
          as={motion.a}
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Work Together
        </Button>
      </CTASection>
    </AboutContainer>
  );
};

export default About;
