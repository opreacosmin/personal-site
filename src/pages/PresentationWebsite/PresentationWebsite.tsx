import { useEffect } from 'react';
import './PresentationWebsite.scss';
import responsive from './../../assets/responsive-design.png';
import highspeed from './../../assets/high-speed.jpg';
import admin from '../../assets/Captură de ecran 2023-12-17 192518.png';
import AnimatedAsset from '../../components/AnimatedAsset/AnimatedAsset';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

function PresentationWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const navigateContact = () => {
    navigate('/');
    // After small delay to allow navigation to complete, scroll to contact
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="presentation-website">
      <SEO
        title="Site de Prezentare - Cosmin Web"
        description="Site-uri de prezentare moderne, rapide și optimizate SEO, cu panou de administrare intuitiv. Transformă vizitatorii în clienți."
        keywords="site de prezentare, web design, site rapid, SEO, panou administrare"
        pathname="/presentation-website"
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Site de Prezentare care <span>iți aduce Clienți Noi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformă vizitatorii în clienți cu un design modern, optimizat pentru performanță și
            securitate.
          </motion.p>
        </div>
      </section>

      {/* Feature: 100% Responsive */}
      <section className="feature-row">
        <div className="container">
          <motion.div
            className="feature-content"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-block">
              <div className="icon-badge">
                <DevicesIcon />
              </div>
              <h2>Design 100% Responsiv</h2>
              <p>
                Construim site-uri care arată impecabil pe orice dispozitiv. Folosind cele mai noi
                tehnologii, ne asigurăm că afacerea ta oferă o experiență de navigare superioară pe
                smartphone, tabletă sau desktop.
              </p>
              <button onClick={navigateContact} className="action-btn">
                Vreau un site responsiv <ArrowForwardIosIcon />
              </button>
            </div>
            <div className="image-block">
              <img src={responsive} alt="Responsive design" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature: Speed Optimization */}
      <section className="feature-row reversed bg-alt">
        <div className="container">
          <motion.div
            className="feature-content"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-block">
              <img
                src={highspeed}
                alt="Speed optimization"
                loading="lazy"
                className="rounded-img"
              />
            </div>
            <div className="text-block">
              <div className="icon-badge">
                <SpeedIcon />
              </div>
              <h2>Optimizare pentru Viteză</h2>
              <p>
                Timpul de încărcare este critic. Ne asigurăm că fiecare proiect este optimizat la
                sânge, oferind utilizatorilor tăi o navigare fluidă și instantanee, reducând rata de
                abandon.
              </p>
              <button onClick={navigateContact} className="action-btn">
                Vreau un site rapid <ArrowForwardIosIcon />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature: Admin Panel */}
      <section className="feature-row">
        <div className="container">
          <motion.div
            className="feature-content"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-block center">
              <div className="icon-badge">
                <SettingsSuggestIcon />
              </div>
              <h2>Panou de Administrare Intuitiv</h2>
              <p>
                Ai control total asupra conținutului tău. Implementăm sisteme CMS (Content
                Management System) ușor de folosit, prin care poți modifica texte, adăuga imagini
                sau articole de blog fără cunoștințe tehnice.
              </p>
              <img src={admin} alt="Admin panel" loading="lazy" className="admin-preview" />
              <button onClick={navigateContact} className="action-btn">
                Vreau un panou personalizat <ArrowForwardIosIcon />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="features-grid-section bg-dark">
        <div className="container">
          <h2 className="grid-title">Alte funcționalități la alegere</h2>
          <div className="grid-container">
            {[
              {
                title: 'Sistem Multilingv',
                desc: 'Atinge o audiență internațională cu un site tradus în mai multe limbi.',
              },
              {
                title: 'SEO On-page Inclus',
                desc: 'Site-ul tău va fi pregătit pentru a ajunge în primele poziții în Google.',
              },
              {
                title: 'Blog Integrat',
                desc: 'Ține-ți clienții la curent cu noutăți și articole de interes prin blog.',
              },
              {
                title: 'Chat Online',
                desc: 'Comunica direct și rapid cu vizitatorii site-ului tău în timp real.',
              },
              {
                title: 'Social Media',
                desc: 'Conectează conturile sociale pentru o prezență online unificată.',
              },
            ].map((feature, i) => (
              <motion.div
                className="grid-card"
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="feature-row last-section">
        <div className="container">
          <motion.div
            className="feature-content"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-block">
              <div className="icon-badge">
                <SecurityIcon />
              </div>
              <h2>Securizare Garantată</h2>
              <p>
                Securitatea este prioritatea noastră. Implementăm certificate SSL, firewall-uri și
                practici de codare securizată pentru a proteja datele tale și ale utilizatorilor tăi
                împotriva amenințărilor online.
              </p>
              <button onClick={navigateContact} className="action-btn">
                Vreau un site securizat <ArrowForwardIosIcon />
              </button>
            </div>
            <div className="image-block">
              <AnimatedAsset
                name="antivirus"
                alt="Security animation"
                className="rounded-img"
                width={150}
                height={127}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PresentationWebsite;
