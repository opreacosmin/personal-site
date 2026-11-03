import './NotFound.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SEO from '../../components/SEO/SEO';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <SEO
        title="Pagina nu a fost găsită - Cosmin Web"
        description="Pagina căutată nu există sau a fost mutată."
        pathname={window.location.pathname}
        noindex
      />
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="error-illustration">
          <motion.div
            className="astronaut"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span role="img" aria-label="astronaut">
              👨‍🚀
            </span>
          </motion.div>
          <motion.div
            className="planet"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span role="img" aria-label="planet">
              🪐
            </span>
          </motion.div>
        </div>

        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Oops! It seems you&apos;ve ventured into uncharted space.
          <br />
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="error-actions">
          <motion.button
            className="action-btn primary"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HomeIcon />
            Back to Home
          </motion.button>

          <motion.button
            className="action-btn secondary"
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SearchIcon />
            Explore Projects
          </motion.button>
        </div>

        <div className="useful-links">
          <p>Looking for something specific?</p>
          <div className="links">
            <a href="/projects">Portfolio</a>
            <span>•</span>
            <a href="/blog">Blog</a>
            <span>•</span>
            <a href="/#contact">Contact</a>
            <span>•</span>
            <a href="/#about">About</a>
          </div>
        </div>
      </motion.div>

      <div className="floating-elements">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NotFound;
