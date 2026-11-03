import { useState } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { techStackData, TechSkill } from '../../utils/data';

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  tools: 'Tools & Platforms',
  design: 'Design',
};

const categoryIcons: Record<string, string> = {
  frontend: '🎨',
  backend: '⚙️',
  tools: '🛠️',
  design: '✨',
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const categories = ['frontend', 'backend', 'tools', 'design'];

  const filteredSkills = techStackData.filter((skill) => skill.category === activeCategory);

  return (
    <div className="skills-container">
      <h1 className="head-text">Technical Skills</h1>
      <p className="p-text subtitle">Technologies and tools I work with</p>

      <div className="skills-categories">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="category-icon">{categoryIcons[category]}</span>
            <span className="category-label">{categoryLabels[category]}</span>
          </motion.button>
        ))}
      </div>

      <div className="skills-content">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="skills-list"
        >
          {filteredSkills.map((skill: TechSkill, index: number) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="tech-stack-badges">
        <h3>Tech Stack</h3>
        <div className="badges-grid">
          {techStackData.slice(0, 12).map((skill, index) => (
            <motion.div
              key={skill.name}
              className="tech-badge"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
                type: 'spring',
                stiffness: 200,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Skills, 'app__skills-visual'), 'skills', 'app__whitebg');
