import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiCheck, FiArrowRight, FiBookOpen, FiAward, FiLayers, FiCode, FiBriefcase } from 'react-icons/fi';
import Button from '../components/common/Button';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 7rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SectionPill = styled.div`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.theme.primary};
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.serifFont};
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
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
  font-size: 1.05rem;
  color: ${props => props.theme.textSecondary};
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 2.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const ProfileSection = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  padding: 4px;
  box-shadow: 0 10px 25px -8px rgba(79, 70, 229, 0.2);

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
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.text};
    margin-bottom: 0.3rem;
  }

  p {
    font-family: ${props => props.theme.monoFont};
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

const AboutTextCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.7;
    font-size: 1.02rem;
    margin-bottom: 1.1rem;
  }

  .highlight {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

const QuickNavContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
  position: sticky;
  top: 90px;
  z-index: 10;
  padding: 0.5rem 0.75rem;
  background: ${props => props.theme.mode === 'light' ? 'rgba(255, 255, 255, 0.88)' : 'rgba(15, 23, 42, 0.88)'};
  backdrop-filter: blur(12px);
  border-radius: 9999px;
  border: 1px solid ${props => props.theme.cardBorder};
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.06);
`;

const QuickNavPill = styled.button`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.55rem 1.25rem;
  border-radius: 9999px;
  background: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? '#ffffff' : props.theme.textSecondary};
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.active ? '#ffffff' : props.theme.primary};
    background: ${props => props.active ? props.theme.primary : (props.theme.mode === 'light' ? 'rgba(79, 70, 229, 0.06)' : 'rgba(99, 102, 241, 0.12)')};
  }
`;

const SkillsSection = styled.div`
  margin-bottom: 3.5rem;
  scroll-margin-top: 150px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 1.5rem 1.75rem;
  box-shadow: ${props => props.theme.shadow};
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.serifFont};
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.primary};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const SkillTag = styled.span`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: ${props => props.theme.mode === 'light' ? '#f1f5f9' : '#1e293b'};
  color: ${props => props.theme.text};
  padding: 0.38rem 0.8rem;
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
  margin-bottom: 3.5rem;
  scroll-margin-top: 150px;
`;

const EducationCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  backdrop-filter: blur(12px);
  max-width: 900px;
  margin: 0 auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const EduHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 1rem;

  .degree-box {
    h3 {
      font-family: ${props => props.theme.serifFont};
      font-size: 1.45rem;
      font-weight: 700;
      color: ${props => props.theme.text};
      margin-bottom: 0.25rem;
    }

    .institution {
      font-size: 0.98rem;
      font-weight: 600;
      color: ${props => props.theme.primary};
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }

  .badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const EduPill = styled.span`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.8rem;
  border-radius: 9999px;
  font-weight: 600;
  background: ${props => props.mint
    ? (props.theme.mode === 'light' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.2)')
    : (props.theme.mode === 'light' ? 'rgba(79, 70, 229, 0.08)' : 'rgba(99, 102, 241, 0.15)')};
  color: ${props => props.mint ? '#10b981' : props.theme.primary};
  border: 1px solid ${props => props.mint ? 'rgba(16, 185, 129, 0.3)' : 'rgba(79, 70, 229, 0.2)'};
`;

const EduCourseworkLabel = styled.div`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${props => props.theme.textSecondary};
  margin: 1.25rem 0 0.6rem;
  font-weight: 600;
`;

const CourseworkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CourseworkTag = styled.span`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.72rem;
  background: ${props => props.theme.mode === 'light' ? '#f8fafc' : '#0f172a'};
  color: ${props => props.theme.text};
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.cardBorder};
  font-weight: 500;
`;

const ExperienceSection = styled.div`
  margin-bottom: 3.5rem;
  scroll-margin-top: 150px;
`;

const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ExperienceItem = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 1.75rem 2rem;
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
  margin-bottom: 0.6rem;

  h3 {
    font-family: ${props => props.theme.serifFont};
    font-size: 1.3rem;
    color: ${props => props.theme.text};
  }

  .duration {
    font-family: ${props => props.theme.monoFont};
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${props => props.theme.primary};
    background: ${props => props.theme.mode === 'light' ? 'rgba(79, 70, 229, 0.08)' : 'rgba(99, 102, 241, 0.15)'};
    padding: 0.28rem 0.75rem;
    border-radius: 9999px;
    font-weight: 600;
  }
`;

const ExperienceCompany = styled.div`
  font-weight: 600;
  color: ${props => props.theme.primary};
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
`;

const ExperienceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  font-size: 0.98rem;
`;

const CTASection = styled.div`
  text-align: center;
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 2.25rem 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = {
    "Languages": ["C", "C++", "JavaScript", "Python", "Java", "HTML5", "CSS3"],
    "Frontend & UI": ["React.js", "Tailwind CSS", "Styled Components", "Responsive UI"],
    "Backend & Databases": ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "PostgreSQL"],
    "Tools, DevOps & Cloud": ["Docker (Learning)", "Git & GitHub", "Cloudinary", "Razorpay", "VS Code", "Firebase"],
    "AI & Data": ["GenAI & RAG System", "AI Data Analytics"]
  };

  const coursework = [
    "Database Management Systems (DBMS)",
    "Computer Networks (CN)",
    "Object-Oriented Programming (OOPs)",
    "Operating Systems (OS)",
    "Data Structures & Algorithms (DSA)",
    "Software Engineering"
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
      company: "VaultofCodes.in",
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

  const scrollToSection = (id, tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          Get to know my technical skill set, academic background, and hands-on experience
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
              I specialize in full-stack web development and core computer science fundamentals, crafting applications using <span className="highlight">React.js, C, C++, JavaScript, Node.js, Express, Python</span>, and <span className="highlight">Java</span>.
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
            style={{ borderRadius: '9999px', width: 'fit-content', padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
          >
            <FiDownload /> Download Resume
          </Button>
        </AboutTextCard>
      </AboutContent>

      <QuickNavContainer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <QuickNavPill
          active={activeTab === 'skills'}
          onClick={() => scrollToSection('skills-section', 'skills')}
        >
          <FiCode /> Skills
        </QuickNavPill>

        <QuickNavPill
          active={activeTab === 'education'}
          onClick={() => scrollToSection('education-section', 'education')}
        >
          <FiBookOpen /> Education
        </QuickNavPill>

        <QuickNavPill
          active={activeTab === 'experience'}
          onClick={() => scrollToSection('experience-section', 'experience')}
        >
          <FiBriefcase /> Experience
        </QuickNavPill>
      </QuickNavContainer>

      <SkillsSection id="skills-section">
        <Header style={{ marginBottom: '2rem' }}>
          <SectionPill>/ TECHNICAL ARSENAL</SectionPill>
          <Title style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            Core <span className="italic-accent">skills & technologies</span>
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

      <EducationSection id="education-section">
        <Header style={{ marginBottom: '2rem' }}>
          <SectionPill>/ ACADEMIC EDUCATION</SectionPill>
          <Title style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            Engineering <span className="italic-accent">degree & academic standing</span>
          </Title>
        </Header>

        <EducationCard
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <EduHeader>
            <div className="degree-box">
              <h3>Bachelor of Engineering (B.E.) in Computer Engineering</h3>
              <div className="institution">
                <FiBookOpen /> SSBT's College of Engineering and Technology, Jalgaon
              </div>
            </div>
            <div className="badges">
              <EduPill>2023 – 2027</EduPill>
              <EduPill mint><FiAward style={{ display: 'inline', marginRight: '4px' }} /> 8.2 CGPA</EduPill>
            </div>
          </EduHeader>

          <EduCourseworkLabel>Key CS Coursework & Subjects:</EduCourseworkLabel>
          <CourseworkGrid>
            {coursework.map((subject, idx) => (
              <CourseworkTag key={idx}>
                {subject}
              </CourseworkTag>
            ))}
          </CourseworkGrid>
        </EducationCard>
      </EducationSection>

      <ExperienceSection id="experience-section">
        <Header style={{ marginBottom: '2rem' }}>
          <SectionPill>/ EXPERIENCE</SectionPill>
          <Title style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
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
        <Title style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: '1.25rem' }}>
          Let's build something <span className="italic-accent">extraordinary</span> together.
        </Title>
        <Button
          primary
          as={motion.a}
          href="#/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{ borderRadius: '9999px', padding: '0.8rem 2rem', fontSize: '0.92rem' }}
        >
          Say Hi <FiArrowRight />
        </Button>
      </CTASection>
    </AboutContainer>
  );
};

export default About;
