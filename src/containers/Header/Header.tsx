import { useState, useEffect, useMemo } from 'react';
import './Header.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DevicesIcon from '@mui/icons-material/Devices';
import SettingsIcon from '@mui/icons-material/Settings';
import ScienceIcon from '@mui/icons-material/Science';
import { headerGreetings, headerServices } from '../../utils/data';

const backgroundIconsList = [
  JavascriptRoundedIcon,
  CssRoundedIcon,
  HtmlRoundedIcon,
  CodeRoundedIcon,
  GitHubIcon,
  QrCode2RoundedIcon,
  LaptopIcon,
  StorageIcon,
  CloudQueueIcon,
  DevicesIcon,
  SettingsIcon,
  ScienceIcon,
];

function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headerServices.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Pre-generate random data for icons to avoid re-renders and overlap
  const backgroundIconsData = useMemo(() => {
    const data = [];
    const sets = 4; // Total icons: sets * iconsList.length (e.g. 4 * 7 = 28)
    const count = sets * backgroundIconsList.length;

    for (let i = 0; i < count; i++) {
      // Divide screen into lanes to prevent horizontal stacking
      const laneWidth = 100 / count;
      const left = i * laneWidth + Math.random() * (laneWidth * 0.8);

      data.push({
        left: `${left}%`,
        size: Math.floor(Math.random() * 40) + 20 + 'px',
        delay: Math.random() * 15 + 's',
        duration: Math.random() * 5 + 8 + 's', // Faster (8-13s)
        iconIdx: i % backgroundIconsList.length,
      });
    }
    return data;
  }, []);

  const renderBackgroundIcons = (): JSX.Element[] => {
    return backgroundIconsData.map((data, i) => {
      const Icon = backgroundIconsList[data.iconIdx];
      return (
        <Icon
          key={i}
          className="shape"
          style={{
            left: data.left,
            width: data.size,
            height: data.size,
            animationDelay: data.delay,
            animationDuration: data.duration,
          }}
        />
      );
    });
  };

  return (
    <div className="header-container">
      <div className="background">{renderBackgroundIcons()}</div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header-info"
      >
        <div className="content">
          <div className="greeting">
            <div className="content__container">
              <p className="content__container__text">Hello</p>
              <ul className="content__container__list">
                {headerGreetings.map((greeting, index) => (
                  <li key={index} className="content__container__list__item">
                    {greeting}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="badge">
          <div className="explore-options">
            <h2 className="explore-text">Soluții digitale pentru</h2>
          </div>

          <div className="services-fade">
            <AnimatePresence mode="wait">
              <motion.p
                key={headerServices[index]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="service-item"
              >
                {headerServices[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="download-btn"
            aria-label="Descoperă serviciile noastre"
          >
            Descopera serviciile noastre
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AppWrap(MotionWrap(Header, 'app__skills'), 'home', 'app__whitebg');
