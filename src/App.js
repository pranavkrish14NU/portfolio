import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Styled Components
const Header = styled(motion.header)`
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
    
    &:hover {
      color: #007bff;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  
  h3 {
    margin-top: 0;
    color: #007bff;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  
  a {
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s;
    
    &:hover {
      color: #007bff;
    }
  }
`;

// Components
const About = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>About Me</h2>
    <p>I'm a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. 
       I love creating responsive and user-friendly applications that solve real-world problems.</p>
    <SocialLinks>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:your.email@example.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </SocialLinks>
  </motion.section>
);

const Projects = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2>My Projects</h2>
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project →</a>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </motion.section>
);

const Contact = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Contact Me</h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </motion.section>
);

// Sample project data
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    image: "https://via.placeholder.com/300x200",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with real-time updates",
    image: "https://via.placeholder.com/300x200",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and styled-components",
    image: "https://via.placeholder.com/300x200",
    link: "#"
  }
];

const App = () => {
  return (
    <Router>
      <div>
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Your Name</h1>
          <p>Full Stack Developer</p>
        </Header>

        <Nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </Nav>

        <Container>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<About />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App; 