import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiCheck, FiArrowRight, FiBookOpen, FiAward, FiCode, FiBriefcase, FiMapPin, FiCpu, FiCheckCircle } from 'react-icons/fi';
import Button from '../components/common/Button';

/* ─── Layout ─────────────────────────────────────────────────── */
const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 7rem 2rem 5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const Title = styled(motion.h2)`
  font-family: ${props => props.theme.serifFont};
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: ${props => props.theme.text};
  line-height: 1.25;

  span.italic-accent {
    font-style: italic;
    background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.serifFont};
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.text};
  line-height: 1.2;

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
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`;

/* ─── Bio Grid ────────────────────────────────────────────────── */
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProfileCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  padding: 4px;
  box-shadow: 0 10px 25px -8px rgba(79, 70, 229, 0.25);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileName = styled.h3`
  font-family: ${props => props.theme.serifFont};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 0.3rem;
`;

const ProfileRole = styled.p`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.theme.primary};
  font-weight: 600;
`;

const BioCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.75;
    font-size: 1rem;
    margin-bottom: 0.85rem;
  }

  .highlight {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

/* ─── Sticky Nav Bar ──────────────────────────────────────────── */
const StickyNav = styled(motion.div)`
  position: sticky;
  top: 4.5rem;
  z-index: 50;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const NavPillGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  padding: 0.35rem;
  border-radius: 9999px;
  box-shadow: ${props => props.theme.shadow};
  flex-wrap: wrap;
  justify-content: center;
`;

const NavPill = styled.button`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.55rem 1.4rem;
  border-radius: 9999px;
  background: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? '#ffffff' : props.theme.textSecondary};
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    color: ${props => props.active ? '#ffffff' : props.theme.primary};
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.9rem;
    font-size: 0.68rem;
  }
`;

/* ─── Scroll Sections ─────────────────────────────────────────── */
const ScrollSection = styled.div`
  margin-bottom: 4.5rem;
  scroll-margin-top: 8rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

/* ─── Skills ──────────────────────────────────────────────────── */
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 1.1rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 18px;
  padding: 1.4rem 1.6rem;
  box-shadow: ${props => props.theme.shadow};
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.serifFont};
  font-size: 1.15rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
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
  gap: 0.55rem;
`;

const SkillTag = styled.span`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${props => props.theme.mode === 'light' ? '#f1f5f9' : '#1e293b'};
  color: ${props => props.theme.text};
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  border: 1px solid ${props => props.theme.cardBorder};
  transition: border-color 0.25s ease, color 0.25s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`;

/* ─── Education ───────────────────────────────────────────────── */
const EduCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 24px;
  padding: 2.25rem;
  box-shadow: ${props => props.theme.shadow};
  max-width: 860px;
  margin: 0 auto 1.5rem;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const EduTopRow = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const EduIconBadge = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: ${props => props.theme.mode === 'light' ? 'rgba(79,70,229,0.08)' : 'rgba(99,102,241,0.15)'};
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  border: 1px solid ${props => props.theme.mode === 'light' ? 'rgba(79,70,229,0.15)' : 'rgba(99,102,241,0.25)'};
`;

const EduMainInfo = styled.div`
  flex: 1;

  .degree {
    font-family: ${props => props.theme.serifFont};
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.text};
    line-height: 1.3;
    margin-bottom: 0.35rem;

    em { font-style: italic; color: ${props => props.theme.primary}; }
  }

  .institution {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${props => props.theme.primary};
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin-bottom: 0.65rem;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const Badge = styled.span`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.32rem 0.8rem;
  border-radius: 9999px;
  font-weight: 600;
  background: ${props => props.green
    ? (props.theme.mode === 'light' ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.18)')
    : (props.theme.mode === 'light' ? '#f1f5f9' : '#1e293b')};
  color: ${props => props.green ? '#10b981' : props.theme.text};
  border: 1px solid ${props => props.green ? 'rgba(16,185,129,0.3)' : props.theme.cardBorder};
`;

const EduDivider = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.cardBorder};
  margin: 1.2rem 0;
`;

const CourseworkLabel = styled.div`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${props => props.theme.textSecondary};
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const CourseworkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CourseworkTag = styled.span`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.7rem;
  background: ${props => props.theme.mode === 'light' ? '#f8fafc' : '#0f172a'};
  color: ${props => props.theme.text};
  padding: 0.38rem 0.8rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.cardBorder};
  font-weight: 500;
  transition: border-color 0.25s ease, color 0.25s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`;

const SchoolGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  max-width: 860px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SchoolCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .school-title {
    font-family: ${props => props.theme.serifFont};
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.text};
    margin-bottom: 0.35rem;
  }

  .school-subtitle {
    font-size: 0.88rem;
    color: ${props => props.theme.textSecondary};
    margin-bottom: 0.75rem;
  }
`;

/* ─── Experience ──────────────────────────────────────────────── */
const ExpTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 860px;
  margin: 0 auto;
`;

const ExpCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 1.65rem 1.85rem;
  box-shadow: ${props => props.theme.shadow};
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${props => props.theme.primary};
  }
`;

const ExpTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  h3 {
    font-family: ${props => props.theme.serifFont};
    font-size: 1.2rem;
    color: ${props => props.theme.text};
  }

  .duration {
    font-family: ${props => props.theme.monoFont};
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${props => props.theme.primary};
    background: ${props => props.theme.mode === 'light' ? 'rgba(79,70,229,0.08)' : 'rgba(99,102,241,0.15)'};
    padding: 0.28rem 0.7rem;
    border-radius: 9999px;
    font-weight: 600;
  }
`;

const ExpCompany = styled.p`
  font-weight: 600;
  color: ${props => props.theme.primary};
  margin-bottom: 0.65rem;
  font-size: 0.92rem;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.25rem;
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
    font-size: 0.94rem;
    margin-bottom: 0.45rem;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.primary};
      font-weight: bold;
    }
  }
`;

/* ─── Certifications & Achievements ───────────────────────────── */
const CertsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.1rem;
  max-width: 860px;
  margin: 0 auto;
`;

const CertCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 18px;
  padding: 1.4rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;

  .cert-icon {
    font-size: 1.25rem;
    color: ${props => props.theme.primary};
    margin-top: 0.15rem;
    flex-shrink: 0;
  }

  .cert-title {
    font-weight: 700;
    color: ${props => props.theme.text};
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }

  .cert-desc {
    font-size: 0.85rem;
    color: ${props => props.theme.textSecondary};
    line-height: 1.45;
  }
`;

/* ─── CTA ─────────────────────────────────────────────────────── */
const CTACard = styled.div`
  text-align: center;
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 20px;
  padding: 2.25rem 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  max-width: 760px;
  margin: 0 auto;
`;

/* ═══════════════════════════════════════════════════════════════ */
const About = () => {
  const [activeSection, setActiveSection] = useState('skills');

  const skillsRef  = useRef(null);
  const eduRef     = useRef(null);
  const expRef     = useRef(null);
  const certsRef   = useRef(null);

  /* Highlight nav pill based on scroll position */
  useEffect(() => {
    const sections = [
      { id: 'skills',         ref: skillsRef  },
      { id: 'education',      ref: eduRef     },
      { id: 'experience',     ref: expRef     },
      { id: 'certifications', ref: certsRef   },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const matched = sections.find(s => s.ref.current === entry.target);
            if (matched) setActiveSection(matched.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(s => { if (s.ref.current) observer.observe(s.ref.current); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (ref, id) => {
    setActiveSection(id);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ── Data from Official Resume ── */
  const skills = {
    "Programming Languages": ["C", "C++", "Java", "JavaScript", "Python", "HTML5", "CSS3"],
    "Web Development":       ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "Tailwind CSS"],
    "AI & Cloud":             ["Generative AI (GenAI)", "RAG Systems", "Microsoft Azure (Core Data)", "Data Analytics"],
    "Databases & Tools":      ["MongoDB", "PostgreSQL", "Firebase", "Cloudinary", "Razorpay", "Git", "GitHub", "VS Code"],
  };

  const coursework = [
    "Database Management Systems (DBMS)",
    "Computer Networks (CN)",
    "Object-Oriented Programming (OOPs)",
    "Operating Systems (OS)",
    "Data Structures & Algorithms (DSA)",
    "Software Engineering",
  ];

  const experience = [
    {
      title: "Web Development Intern",
      company: "InternPro (Remote)",
      duration: "June 2025 – July 2025",
      bullets: [
        "Engineered 5+ responsive front-end web components using React.js and JavaScript, improving internal tool page load speed by 25%.",
        "Resolved 15+ cross-browser compatibility and UI issues, increasing platform navigation efficiency for 500+ internal users.",
        "Received an official Letter of Recommendation for exceptional technical delivery and quick onboarding.",
      ]
    },
    {
      title: "Web Development Intern",
      company: "VaultofCodes.in (AICTE Corporate Internship) (Remote)",
      duration: "June 2025 – July 2025",
      bullets: [
        "Delivered 10+ client-side UI feature modules using HTML5, CSS3, and JavaScript within strict milestone deadlines.",
        "Collaborated with senior engineers to refactor code structure, achieving 100% mobile responsiveness across tested devices.",
      ]
    },
    {
      title: "AI & Data Analytics Virtual Intern",
      company: "AICTE, Shell India & Edunet Foundation (Virtual)",
      duration: "June 2025 – July 2025",
      bullets: [
        "Completed 40+ hours of intensive hands-on coursework on Artificial Intelligence models and Data Analytics workflows.",
        "Analyzed real-world dataset case studies under the Skills4Future program and earned industry certification.",
      ]
    },
  ];

  const certifications = [
    {
      title: "Tata GenAI Powered Data Analytics",
      desc: "Completed job simulation on Forage covering Exploratory Data Analysis & Risk Profiling."
    },
    {
      title: "Microsoft Azure Data Core Concepts",
      desc: "Certification issued by Microsoft Learn covering fundamental Azure data services."
    },
    {
      title: "AI & Data Analytics Certification",
      desc: "Issued by Shell India & Edunet Foundation under the AICTE Skills4Future program."
    },
    {
      title: "Problem Solving & DSA",
      desc: "Solved 100+ LeetCode problems covering core Data Structures and Algorithms."
    },
    {
      title: "Letter of Recommendation",
      desc: "Received from InternPro for outstanding web development contributions."
    }
  ];

  return (
    <AboutContainer>

      {/* ── Hero Header ── */}
      <PageHeader>
        <SectionPill>/ ABOUT ME</SectionPill>
        <HeroTitle
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65 }}
        >
          Crafting <span className="italic-accent">web experiences</span> & engineering solutions.
        </HeroTitle>
        <Subtitle
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          Aspiring Computer Engineer with hands-on experience in full-stack web development (MERN stack) and Generative AI (RAG).
        </Subtitle>
      </PageHeader>

      {/* ── Bio Grid ── */}
      <AboutContent>
        <ProfileCard
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ProfileImage whileHover={{ scale: 1.04 }}>
            <img 
              src="./assets/images/profile.jpg" 
              alt="Mahesh More" 
              loading="eager"
              fetchPriority="high"
              onError={(e) => {
                e.target.src = "./assets/images/profile.png";
              }}
            />
          </ProfileImage>
          <ProfileName>Mahesh More</ProfileName>
          <ProfileRole>Full-Stack & GenAI Engineer</ProfileRole>
        </ProfileCard>

        <BioCard
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <div>
            <p>
              Hello! I'm <span className="highlight">Mahesh More</span>, a Computer Engineering student at SSBT's College of Engineering and Technology, Jalgaon.
            </p>
            <p>
              I specialize in full-stack web development and core CS fundamentals, crafting applications using <span className="highlight">React.js, Node.js, Express.js, Python, FastAPI</span>, and <span className="highlight">Generative AI (RAG)</span>.
            </p>
            <p>
              Currently engineering my Final Year Major Project — a <span className="highlight">GenAI Academic Support System with RAG</span> utilizing a high-concurrency <span className="highlight">FastAPI</span> backend to parse university syllabus PDFs with sub-1.5s query response times.
            </p>
          </div>
          <Button
            primary
            as={motion.a}
            href="./assets/resume.pdf"
            download="Mahesh_More_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ borderRadius: '9999px', width: 'fit-content', padding: '0.72rem 1.5rem', fontSize: '0.88rem' }}
          >
            <FiDownload /> Download Resume
          </Button>
        </BioCard>
      </AboutContent>

      {/* ── Sticky Nav ── */}
      <StickyNav
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <NavPillGroup>
          <NavPill active={activeSection === 'skills'} onClick={() => scrollTo(skillsRef, 'skills')}>
            <FiCode /> Skills
          </NavPill>
          <NavPill active={activeSection === 'education'} onClick={() => scrollTo(eduRef, 'education')}>
            <FiBookOpen /> Education
          </NavPill>
          <NavPill active={activeSection === 'experience'} onClick={() => scrollTo(expRef, 'experience')}>
            <FiBriefcase /> Experience
          </NavPill>
          <NavPill active={activeSection === 'certifications'} onClick={() => scrollTo(certsRef, 'certifications')}>
            <FiAward /> Achievements
          </NavPill>
        </NavPillGroup>
      </StickyNav>

      {/* ════════════ SKILLS ════════════ */}
      <ScrollSection ref={skillsRef} id="skills-section">
        <SectionHeader>
          <SectionPill>/ TECHNICAL ARSENAL</SectionPill>
          <Title>Core <span className="italic-accent">skills & technologies</span></Title>
        </SectionHeader>

        <SkillsGrid>
          {Object.entries(skills).map(([category, list], i) => (
            <SkillCategory
              key={category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <CategoryTitle><FiCheck />{category}</CategoryTitle>
              <SkillsList>
                {list.map((s, j) => <SkillTag key={j}>{s}</SkillTag>)}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </ScrollSection>

      {/* ════════════ EDUCATION ════════════ */}
      <ScrollSection ref={eduRef} id="education-section">
        <SectionHeader>
          <SectionPill>/ ACADEMIC EDUCATION</SectionPill>
          <Title>Engineering <span className="italic-accent">degree & academic standing</span></Title>
        </SectionHeader>

        <EduCard
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <EduTopRow>
            <EduIconBadge><FiBookOpen /></EduIconBadge>
            <EduMainInfo>
              <div className="degree">
                Bachelor of Engineering (B.E.) <em>in Computer Engineering</em>
              </div>
              <div className="institution">
                <FiMapPin style={{ fontSize: '0.88rem' }} />
                SSBT's College of Engineering and Technology, Jalgaon, MH
              </div>
              <BadgeRow>
                <Badge>📅 2023 – 2027 (Expected)</Badge>
                <Badge green><FiAward /> Current CGPA: 8.2 / 10.0</Badge>
              </BadgeRow>
            </EduMainInfo>
          </EduTopRow>

          <EduDivider />

          <CourseworkLabel><FiCpu /> Core CS Coursework & Subjects</CourseworkLabel>
          <CourseworkGrid>
            {coursework.map((s, i) => <CourseworkTag key={i}>{s}</CourseworkTag>)}
          </CourseworkGrid>
        </EduCard>

        <SchoolGrid>
          <SchoolCard
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <div className="school-title">HSC (Class XII)</div>
              <div className="school-subtitle">Maharashtra State Board · 2023</div>
            </div>
            <Badge green style={{ width: 'fit-content' }}>Percentage: 73%</Badge>
          </SchoolCard>

          <SchoolCard
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div>
              <div className="school-title">SSC (Class X)</div>
              <div className="school-subtitle">Maharashtra State Board · 2021</div>
            </div>
            <Badge green style={{ width: 'fit-content' }}>Percentage: 91.20%</Badge>
          </SchoolCard>
        </SchoolGrid>
      </ScrollSection>

      {/* ════════════ EXPERIENCE ════════════ */}
      <ScrollSection ref={expRef} id="experience-section">
        <SectionHeader>
          <SectionPill>/ EXPERIENCE</SectionPill>
          <Title>Professional <span className="italic-accent">internships & learning</span></Title>
        </SectionHeader>

        <ExpTimeline>
          {experience.map((exp, i) => (
            <ExpCard
              key={i}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <ExpTop>
                <h3>{exp.title}</h3>
                <span className="duration">{exp.duration}</span>
              </ExpTop>
              <ExpCompany>{exp.company}</ExpCompany>
              <BulletList>
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </BulletList>
            </ExpCard>
          ))}
        </ExpTimeline>
      </ScrollSection>

      {/* ════════════ CERTIFICATIONS & ACHIEVEMENTS ════════════ */}
      <ScrollSection ref={certsRef} id="certifications-section">
        <SectionHeader>
          <SectionPill>/ CERTIFICATIONS & ACHIEVEMENTS</SectionPill>
          <Title>Honors <span className="italic-accent">& industry credentials</span></Title>
        </SectionHeader>

        <CertsGrid>
          {certifications.map((cert, i) => (
            <CertCard
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <FiCheckCircle className="cert-icon" />
              <div>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-desc">{cert.desc}</div>
              </div>
            </CertCard>
          ))}
        </CertsGrid>
      </ScrollSection>

      {/* ── CTA ── */}
      <CTACard>
        <SectionPill>/ COLLABORATION</SectionPill>
        <Title style={{ marginBottom: '1.25rem' }}>
          Let's build something <span className="italic-accent">extraordinary</span> together.
        </Title>
        <Button
          primary
          as={motion.button}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{ borderRadius: '9999px', padding: '0.8rem 2rem', fontSize: '0.92rem', cursor: 'pointer' }}
        >
          Say Hi <FiArrowRight />
        </Button>
      </CTACard>

    </AboutContainer>
  );
};

export default About;
