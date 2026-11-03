import React from 'react';
import './FeaturedProjects.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { featuredProjects, FeaturedProject } from '../../utils/data';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';

const categoryIcons: Record<string, React.ReactNode> = {
  web: <WebIcon />,
  mobile: <PhoneIphoneIcon />,
  tool: <BuildIcon />,
};

const categoryLabels: Record<string, string> = {
  web: 'Web App',
  mobile: 'Mobile App',
  tool: 'Developer Tool',
};

function FeaturedProjects() {
  return (
    <div className="featured-projects-container">
      <h1 className="head-text">More Projects</h1>
      <p className="p-text subtitle">
        Additional projects showcasing my versatility and continuous learning
      </p>

      <div className="projects-grid">
        {featuredProjects.map((project: FeaturedProject, index: number) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-header">
              <div className="project-icon">{categoryIcons[project.category] || <CodeIcon />}</div>
              <span className="project-category">{categoryLabels[project.category]}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="tech-badge more">+{project.technologies.length - 4}</span>
              )}
            </div>

            <div className="project-links">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="View on GitHub"
                >
                  <GitHubIcon />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="View Live Demo"
                >
                  <LaunchIcon />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(FeaturedProjects, 'app__featured-projects'),
  'featured-projects',
  'app__primarybg'
);
