import './Footer.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../utils/data';

interface FooterStyles {
  backgroundColor: string;
}

function Footer() {
  const location = useLocation();
  const containerStyle: FooterStyles = {
    backgroundColor: location.pathname === '/' ? 'whitesmoke' : 'white',
  };

  return (
    <div className="footer-container">
      <div style={containerStyle} className="socials">
        <a
          href={personalInfo.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a
          href={personalInfo.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon className="icon" />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <MailOutlineIcon className="icon" />
        </a>
      </div>
      <div className="credits-container">
        <p>
          {personalInfo.fullName}©. All rights reserved ·{' '}
          <Link to="/privacy" className="privacy-link">
            Politica de confidențialitate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
