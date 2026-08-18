import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const ProjectsContainer = styled.section`
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

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FilterButton = styled(motion.button)`
  font-family: ${props => props.theme.monoFont};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5rem 1.4rem;
  border-radius: 9999px;
  background: ${props => props.active ? props.theme.primary : props.theme.card};
  color: ${props => props.active ? 'white' : props.theme.textSecondary};
  border: 1px solid ${props => props.active ? props.theme.primary : props.theme.cardBorder};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.active ? 'white' : props.theme.primary};
  }
`;

const ProjectGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: stretch;
  min-height: 340px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px ${props => props.theme.shadow};
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 340px;
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
  position: relative;
  overflow: hidden;
  border-right: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;

  @media (max-width: 968px) {
    height: 260px;
    min-height: 260px;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.border};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.3s ease;
    padding-top: 28px;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BrowserHeader = styled.div`
  height: 28px;
  background: rgba(15, 23, 42, 0.92);
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  backdrop-filter: blur(4px);
`;

const BrowserDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${props => props.color};
  display: inline-block;
`;

const BrowserUrlBar = styled.span`
  margin-left: 6px;
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 10px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70%;
  font-family: monospace;
`;

const IframePreviewWrapper = styled.div`
  width: 100%;
  flex: 1;
  height: 100%;
  padding-top: 28px;
  position: relative;
  overflow: hidden;
  background: #0f172a;
  cursor: pointer;

  iframe {
    width: 200%;
    height: 200%;
    border: none;
    pointer-events: none;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
`;

const FallbackPreview = styled.div`
  width: 100%;
  flex: 1;
  height: 100%;
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
  color: #a5b4fc;
  text-align: center;
  padding: 2rem 1rem 1rem;

  h4 {
    font-size: 1.15rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    font-size: 0.8rem;
    color: #94a3b8;
    font-family: monospace;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectImage}:hover & {
    opacity: 1;
  }
`;

const InlineBadge = styled.span`
  align-self: flex-start;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  color: white;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const ProjectContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.primary ? props.theme.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  border-radius: 25px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.theme.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const filters = ['all', 'react', 'javascript', 'python', 'ai-ml'];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => 
          project.category === filter || 
          project.technologies.some(tech => 
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <ProjectsContainer>
      <Header>
        <SectionPill>/ FEATURED PROJECTS</SectionPill>
        <Title
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="italic-accent">Projects & Systems</span>
        </Title>
        <Subtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Explore my featured full-stack applications, GenAI tools, and web engineering projects
        </Subtitle>
      </Header>

      <FilterContainer
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => handleFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiFilter size={16} />
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </FilterButton>
        ))}
      </FilterContainer>

      <AnimatePresence>
        <ProjectGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <ProjectImage>
                <BrowserHeader>
                  <BrowserDot color="#ff5f56" />
                  <BrowserDot color="#ffbd2e" />
                  <BrowserDot color="#27c93f" />
                  {project.domain && <BrowserUrlBar>https://{project.domain}</BrowserUrlBar>}
                </BrowserHeader>
                
                {project.liveLink && !project.liveLink.includes('github.com') ? (
                  <IframePreviewWrapper
                    onClick={() => project.liveLink && window.open(project.liveLink, '_blank')}
                  >
                    <iframe 
                      src={project.liveLink} 
                      title={project.title} 
                      loading="lazy" 
                    />
                  </IframePreviewWrapper>
                ) : (
                  <FallbackPreview>
                    <h4>{project.title}</h4>
                    <p>{project.domain || project.technologies.slice(0, 3).join(' • ')}</p>
                  </FallbackPreview>
                )}
              </ProjectImage>
              
              <ProjectContent>
                {project.badge && <InlineBadge>{project.badge}</InlineBadge>}
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                
                {(project.liveLink || project.githubLink) && (
                  <ProjectLinks>
                    {project.liveLink && (
                      <LinkButton
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        primary
                      >
                        <FiExternalLink /> Live Demo
                      </LinkButton>
                    )}
                    {project.githubLink && (
                      <LinkButton
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub /> Code
                      </LinkButton>
                    )}
                  </ProjectLinks>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects;
