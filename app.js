// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Header = styled.header`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Nav = styled.nav`
  background-color: #f4f4f4;
  padding: 1rem;
  
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
    &:hover {
      color: #666;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// Components
const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>I am a passionate web developer with expertise in creating responsive and user-friendly websites.</p>
  </section>
);

const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <ProjectsGrid>
      <ProjectCard>
        <h3>Project 1</h3>
        <p>Description of project 1 goes here.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project 2</h3>
        <p>Description of project 2 goes here.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project 3</h3>
        <p>Description of project 3 goes here.</p>
      </ProjectCard>
    </ProjectsGrid>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: your.email@example.com</p>
    <p>LinkedIn: linkedin.com/in/yourprofile</p>
    <p>GitHub: github.com/yourusername</p>
  </section>
);

const App = () => {
  return (
    <Router>
      <div>
        <Header>
          <h1>Welcome to My Portfolio</h1>
          <p>Web Developer & Designer</p>
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

        <Footer>
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </Footer>
      </div>
    </Router>
  );
};

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// package.json
{
  "name": "portfolio-website",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.1",
    "styled-components": "^6.1.6"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

