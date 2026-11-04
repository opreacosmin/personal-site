import './Footer.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../utils/data';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-name">{personalInfo.fullName}</span>
          <p className="footer-tagline">Web solutions, built with care.</p>
        </div>

        {/* <div className="footer-socials">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <MailOutlineIcon />
          </a>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {personalInfo.fullName}. Toate drepturile rezervate.
        </p>
        <Link to="/privacy" className="privacy-link">
          Politica de confidențialitate
        </Link>
      </div>
    </footer>
  );
}

export default Footer;