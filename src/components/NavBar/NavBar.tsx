import React, { useState } from 'react';
import './NavBar.scss';
import logo from '../../assets/img.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { navigationItems, personalInfo } from '../../utils/data';

function NavBar() {
  const [menuClick, setMenuClick] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // React Router does not scroll to hash targets automatically. Retry briefly so
  // links like "/#contact" also work when the Home page is lazy-loaded.
  React.useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = decodeURIComponent(location.hash.slice(1));
    let attempts = 0;

    const timer = window.setInterval(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.clearInterval(timer);
        return;
      }

      attempts += 1;
      if (attempts >= 20) {
        window.clearInterval(timer);
      }
    }, 100);

    return () => window.clearInterval(timer);
  }, [location.hash, location.pathname]);

  const toggleMenu = (): void => {
    setMenuClick(!menuClick);
  };

  const handleNavLinkClick = (): void => {
    if (window.innerWidth <= 800) {
      setMenuClick(false);
    }
  };

  const handleLogoClick = (): void => {
    navigate('/');
    setMenuClick(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link to="/" className="nav-logo" onClick={handleLogoClick} aria-label="Go to homepage">
        <img src={logo} alt="Oprea Cosmin Alexandru Logo" loading="eager" />
      </Link>

      {/* <DarkModeToggle /> */}

      <button
        className="menu-toggle-btn"
        onClick={toggleMenu}
        aria-label={menuClick ? 'Close menu' : 'Open menu'}
        aria-expanded={menuClick}
        aria-controls="nav-menu"
      >
        {menuClick ? (
          <CloseRoundedIcon className="open-social-menu" aria-hidden="true" />
        ) : (
          <MenuRoundedIcon className="open-social-menu" aria-hidden="true" />
        )}
      </button>

      <div id="nav-menu" className={menuClick ? 'nav-menu active' : 'nav-menu'} role="menu">
        <div className="nav-links" role="menubar">
          {navigationItems.map((item, index) => (
              <Link
    to={item.route}
    onClick={handleNavLinkClick}
    key={`${item.id}-${index}`}
    role="menuitem"
    aria-label={`Navigate to ${item.label}`}
  >
    {item.label}
  </Link>
          ))}
        </div>
        <div className="nav-socials">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <LinkedInIcon aria-hidden="true" />
          </a>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <GitHubIcon aria-hidden="true" />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Send email">
            <MailOutlineIcon className="icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
