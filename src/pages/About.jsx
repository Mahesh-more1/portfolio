import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiCheck, FiArrowRight, FiBookOpen } from 'react-icons/fi';
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

const SectionPill = styled.div`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.serifFont};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};

  span.italic-accent {
    font-style: italic;
    background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.15rem;
  color: ${props => props.theme.textSecondary};
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileSection = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    transform: translateY(-4px);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  padding: 4px;
  box-shadow: 0 12px 30px -10px rgba(79, 70, 229, 0.2);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileText = styled.div`
  h3 {
    font-family: ${props => props.theme.serifFont};
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.theme.text};
    margin-bottom: 0.4rem;
  }

  p {
    font-family: ${props => props.theme.monoFont};
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

const AboutTextCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: ${props => props.theme.shadow};
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
  }

  .highlight {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

const SkillsSection = styled.div`
  margin-bottom: 5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 24px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.theme.primary};
  }
`;

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.serifFont};
  font-size: 1.35rem;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: ${props => props.theme.primary};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled.span`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: ${props => props.theme.mode === 'light' ? '#f1f5f9' : '#1e293b'};
  color: ${props => props.theme.text};
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  font-weight: 600;
  border: 1px solid ${props => props.theme.cardBorder};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`;

const EducationSection = styled.div`
  margin-bottom: 5rem;
`;

const EducationTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const EducationItem = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 24px;
  padding: 2.25rem;
  box-shadow: ${props => props.theme.shadow};
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const ExperienceSection = styled.div`
  margin-bottom: 5rem;
`;

const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ExperienceItem = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 24px;
  padding: 2.25rem;
  box-shadow: ${props => props.theme.shadow};
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  h3 {
    font-family: ${props => props.theme.serifFont};
    font-size: 1.4rem;
    color: ${props => props.theme.text};
  }

  .duration {
    font-family: ${props => props.theme.monoFont};
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${props => props.theme.primary};
    background: ${props => props.theme.mode === 'light' ? 'rgba(79, 70, 229, 0.08)' : 'rgba(99, 102, 241, 0.15)'};
    padding: 0.3rem 0.8rem;
    border-radius: 9999px;
    font-weight: 600;
  }
`;

const ExperienceCompany = styled.div`
  font-weight: 600;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.7;
  font-size: 1.05rem;
`;

const CTASection = styled.div`
  text-align: center;
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 32px;
  padding: 4rem 2rem;
  box-shadow: ${props => props.theme.shadow};
`;

const About = () => {
  const skills = {
    "Languages": ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
    "Frontend & UI": ["React.js", "Tailwind CSS", "Styled Components", "Responsive UI"],
    "Backend & Databases": ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "PostgreSQL"],
    "Tools, DevOps & Cloud": ["Docker (Learning)", "Git & GitHub", "Cloudinary", "Razorpay", "VS Code", "Firebase"],
    "AI & Data": ["GenAI & RAG System", "AI Data Analytics", "Jupyter Notebook", "Computer Vision"],
    "Core CS Fundamentals": [
      "Database Management Systems (DBMS)",
      "Computer Networks (CN)",
      "Object-Oriented Programming (OOPs)",
      "Operating Systems (OS)",
      "Data Structures & Algorithms (DSA)"
    ]
  };

  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "SSBT's College of Engineering and Technology, Jalgaon",
      duration: "2023 – 2027 (Pursuing)",
      description: "Academic Standing: 8.2 CGPA (Till 6th Semester) — Core Coursework: Database Management Systems (DBMS), Computer Networks (CN), Object-Oriented Programming (OOPs), Operating Systems (OS), Data Structures & Algorithms (DSA), and Software Engineering."
    }
  ];

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

  return (
    <AboutContainer>
      <Header>
        <SectionPill>/ ABOUT ME</SectionPill>
        <Title
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Crafting <span className="italic-accent">web experiences</span> & engineering solutions.
        </Title>
        <Subtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Get to know my academic background, technical skill set, and hands-on experience
        </Subtitle>
      </Header>

      <AboutContent>
        <ProfileSection
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ProfileImage whileHover={{ scale: 1.04 }}>
            <img 
              src="./assets/images/profile.png" 
              alt="Mahesh More" 
              onError={(e) => {
                e.target.src = "./assets/images/profile.jpg";
              }}
            />
          </ProfileImage>
          
          <ProfileText>
            <h3>Mahesh More</h3>
            <p>Full-Stack & GenAI Engineer</p>
          </ProfileText>
        </ProfileSection>

        <AboutTextCard
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div>
            <p>
              Hello! I'm <span className="highlight">Mahesh More</span>, a Computer Engineering student at SSBT's College of Engineering and Technology, Jalgaon.
            </p>
            
            <p>
              I specialize in full-stack web development and core computer science fundamentals, crafting applications using <span className="highlight">React.js, JavaScript, Node.js, Express, Python</span>, and <span className="highlight">Java</span>.
            </p>
            
            <p>
              Currently, I am engineering my Final Year Major Project: a <span className="highlight">GenAI-powered University Knowledge System</span> leveraging <span className="highlight">Retrieval-Augmented Generation (RAG), FastAPI</span>, and modern web frameworks.
            </p>
          </div>

          <Button
            primary
            as={motion.a}
            href="/assets/resume.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ borderRadius: '9999px', width: 'fit-content', padding: '0.85rem 1.8rem' }}
          >
            <FiDownload /> Download Resume
          </Button>
        </AboutTextCard>
      </AboutContent>

      <SkillsSection>
        <Header style={{ marginBottom: '2.5rem' }}>
          <SectionPill>/ TECHNICAL ARSENAL</SectionPill>
          <Title style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Core <span className="italic-accent">skills & CS fundamentals</span>
          </Title>
        </Header>
        
        <SkillsGrid>
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillCategory
              key={category}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

      <EducationSection>
        <Header style={{ marginBottom: '2.5rem' }}>
          <SectionPill>/ ACADEMIC EDUCATION</SectionPill>
          <Title style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Engineering <span className="italic-accent">degree & coursework</span>
          </Title>
        </Header>

        <EducationTimeline>
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ExperienceHeader>
                <h3>{edu.degree}</h3>
                <span className="duration">{edu.duration}</span>
              </ExperienceHeader>
              <ExperienceCompany>{edu.institution}</ExperienceCompany>
              <ExperienceDescription>{edu.description}</ExperienceDescription>
            </EducationItem>
          ))}
        </EducationTimeline>
      </EducationSection>

      <ExperienceSection>
        <Header style={{ marginBottom: '2.5rem' }}>
          <SectionPill>/ EXPERIENCE</SectionPill>
          <Title style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Professional <span className="italic-accent">internships & learning</span>
          </Title>
        </Header>
        
        <ExperienceTimeline>
          {experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ExperienceHeader>
                <h3>{exp.title}</h3>
                <span className="duration">{exp.duration}</span>
              </ExperienceHeader>
              <ExperienceCompany>{exp.company}</ExperienceCompany>
              <ExperienceDescription>{exp.description}</ExperienceDescription>
            </ExperienceItem>
          ))}
        </ExperienceTimeline>
      </ExperienceSection>

      <CTASection>
        <SectionPill>/ COLLABORATION</SectionPill>
        <Title style={{ marginBottom: '1.5rem' }}>
          Let's build something <span className="italic-accent">extraordinary</span> together.
        </Title>
        <Button
          primary
          large
          as={motion.a}
          href="#/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{ borderRadius: '9999px', padding: '1rem 2.5rem' }}
        >
          Say Hi <FiArrowRight />
        </Button>
      </CTASection>
    </AboutContainer>
  );
};

export default About;
