import { useState } from 'react';
import './Resume.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { resumeData } from '../../utils/data';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Resume() {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/CV-Oprea_Cosmin_Alexandru.pdf`;
    link.download = 'CV-Oprea_Cosmin_Alexandru.pdf';
    link.click();
  };

  const groupSkillsByCategory = () => {
    const grouped: Record<string, typeof resumeData.skills> = {};
    resumeData.skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    });
    return grouped;
  };

  const groupedSkills = groupSkillsByCategory();

  return (
    <div className={`resume-container ${isPrinting ? 'printing' : ''}`}>
      <div className="no-print resume-actions">
        <h1 className="head-text">Resume / CV</h1>
        <div className="action-buttons">
          <motion.button
            className="action-btn download"
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DownloadIcon />
            Download PDF
          </motion.button>
          <motion.button
            className="action-btn print"
            onClick={handlePrint}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PrintIcon />
            Print
          </motion.button>
        </div>
      </div>

      <motion.div
        className="resume-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <header className="resume-header">
          <div className="header-content">
            <h1 className="name">{resumeData.personalInfo.fullName}</h1>
            <p className="title">{resumeData.personalInfo.title}</p>
            <div className="contact-info">
              <span>{resumeData.personalInfo.location}</span>
              <span>|</span>
              <span>{resumeData.personalInfo.email}</span>
              <span>|</span>
              <span>
                <a href={resumeData.personalInfo.socialLinks.github}>GitHub</a>
              </span>
              <span>|</span>
              <span>
                <a href={resumeData.personalInfo.socialLinks.linkedin}>LinkedIn</a>
              </span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="resume-section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-content">{resumeData.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="section-title">
            <WorkIcon className="section-icon" />
            Work Experience
          </h2>
          <div className="experience-list">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <span className="job-period">{exp.period}</span>
                </div>
                <p className="company-name">
                  {exp.company} | {exp.location}
                </p>
                {exp.description && <p className="job-description">{exp.description}</p>}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="section-title">
            <SchoolIcon className="section-icon" />
            Education
          </h2>
          <div className="education-list">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="education-period">{edu.period}</span>
                </div>
                <p className="institution">{edu.institution}</p>
                <p className="faculty">
                  {edu.faculty} | {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4 className="category-title">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill.name} className="skill-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section">
          <h2 className="section-title">
            <EmojiEventsIcon className="section-icon" />
            Certifications
          </h2>
          <ul className="certifications-list">
            {resumeData.certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {cert}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="resume-section">
          <h2 className="section-title">
            <LanguageIcon className="section-icon" />
            Languages
          </h2>
          <div className="languages-list">
            {resumeData.languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{lang.language}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default AppWrap(MotionWrap(Resume, 'app__resume'), 'resume', 'app__whitebg');
