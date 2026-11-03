import React, { useState } from 'react';
import './NavBar.scss';
import logo from '../../assets/img.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from 'react-router-dom';
import { navigationItems, personalInfo } from '../../utils/data';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

function NavBar() {
  const [menuClick, setMenuClick] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navigate = useNavigate();

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

      <DarkModeToggle />

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
            <a
              onClick={handleNavLinkClick}
              href={`/#${item.id}`}
              key={`${item.id}-${index}`}
              role="menuitem"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </a>
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
