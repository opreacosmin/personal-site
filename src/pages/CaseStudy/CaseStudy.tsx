import { useParams, useNavigate } from 'react-router-dom';
import './CaseStudy.scss';
import { motion } from 'framer-motion';
import { caseStudies } from '../../utils/data';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotFound from '../NotFound/NotFound';
import SEO from '../../components/SEO/SEO';

function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <NotFound />;
  }

  return (
    <motion.div
      className="case-study-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title={`${study.title} - Case Study | Cosmin Web`}
        description={study.description}
        keywords={study.technologies.join(', ')}
        pathname={`/case-study/${study.slug}`}
        ogType="article"
      />
      <div className="case-study-header">
        <motion.button
          className="back-btn"
          onClick={() => navigate('/projects')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowBackIcon />
          Back to Projects
        </motion.button>
      </div>

      <motion.div
        className="case-study-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="client-label">Case Study</span>
        <h1 className="case-study-title">{study.title}</h1>
        <p className="client-name">for {study.client}</p>
        <p className="case-study-description">{study.description}</p>
      </motion.div>

      <div className="case-study-content">
        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="section-header">
            <LightbulbIcon className="section-icon" />
            <h2>The Challenge</h2>
          </div>
          <p>{study.challenge}</p>
        </motion.section>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="section-header">
            <BuildIcon className="section-icon" />
            <h2>The Solution</h2>
          </div>
          <p>{study.solution}</p>
        </motion.section>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Technologies Used</h2>
          <div className="tech-grid">
            {study.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="tech-item"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="content-section results-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="section-header">
            <TrendingUpIcon className="section-icon success" />
            <h2>Results & Impact</h2>
          </div>
          <div className="results-grid">
            {study.results.map((result, index) => (
              <motion.div
                key={index}
                className="result-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <CheckCircleIcon className="result-icon" />
                <span>{result}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.div
        className="case-study-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>Interested in working together?</p>
        <motion.button
          className="cta-button"
          onClick={() => navigate('/#contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Talk
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default CaseStudy;
