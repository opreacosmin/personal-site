import { useState } from 'react';
import './About.scss';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion, AnimatePresence } from 'framer-motion';
import {
  educationData,
  experienceData,
  skillsData,
  Education,
  Experience,
  personalInfo,
} from '../../utils/data';

function About() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Despre Mine
          </motion.h2>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {personalInfo.title} din {personalInfo.location}
          </motion.p>
        </div>
      </div>

      <div className="about-content">
        {/* Timeline Section */}
        <div className="timeline-section">
          <div className="tab-buttons">
            <motion.button
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SchoolOutlinedIcon />
              <span>Educație</span>
            </motion.button>
            <motion.button
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <WorkOutlineIcon />
              <span>Experiență</span>
            </motion.button>
          </div>

          <div className="timeline-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'education' && (
                  <div className="timeline-list">
                    {educationData.map((edu: Education, index: number) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="timeline-marker" />
                        <div className="timeline-content-item">
                          <div className="item-header">
                            <h3 className="institution">{edu.institution}</h3>
                            <span className="period-badge">{edu.period}</span>
                          </div>
                          <p className="faculty">{edu.faculty}</p>
                          <p className="degree">{edu.degree}</p>
                          <p className="location">{edu.location}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="timeline-list">
                    {experienceData.map((exp: Experience, index: number) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="timeline-marker" />
                        <div className="timeline-content-item">
                          <div className="item-header">
                            <h3 className="job-title">{exp.title}</h3>
                            <span className="period-badge">{exp.period}</span>
                          </div>
                          <p className="company">{exp.company}</p>
                          {exp.description && <p className="description">{exp.description}</p>}
                          <p className="location">{exp.location}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="skills-title">Expertiză Tehnică</h3>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="skill-icon">
                  <div className="icon-circle">
                    {skill.imageKey === 'frontend' ? (
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M20 13v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4m14-6l-6-6-6 6m12 0H4" />
                      </svg>
                    )}
                  </div>
                </div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-indicator">
                  <span className="label">Servicii disponibile</span>
                  <span className="check">✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(About, 'app__skills'), 'about', 'app__whitebg');
