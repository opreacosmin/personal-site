import './Services.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import img from './../../assets/image-removebg-preview.png';
import AnimatedAsset, { AnimationName } from '../../components/AnimatedAsset/AnimatedAsset';
import { servicesData, servicesDescription } from '../../utils/data';

const serviceAnimations: Record<string, AnimationName> = {
  website: 'website',
  store: 'store',
};

function Services() {
  const navigate = useNavigate();

  const navigateToService = (route: string) => {
    navigate(route);
  };

  return (
    <div className="services-container">
      <div className="business">
        <div className="text">
          <h2 className="section-title">{servicesDescription.heading}</h2>
          <p>{servicesDescription.content}</p>
        </div>
        <img src={img} alt="Web development services illustration" loading="lazy" />
      </div>

      <div className="dual-cards-container">
        <div className="split-card">
          {/* Site de Prezentare Side */}
          <div
            className="split-side website"
            onClick={() => navigateToService(servicesData[0].route)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="split-content"
            >
              <div className="iphone-frame">
                <div className="iphone-notch" />
                  <AnimatedAsset
                    name={serviceAnimations[servicesData[0].image]}
                    alt={servicesData[0].title}
                    width={150}
                    height={150}
                    className="iphone-screen"
                  />
              </div>

              <h3>{servicesData[0].title}</h3>
              <p>{servicesData[0].description}</p>
              <button className="swipe-btn">Echilibrează Brandul</button>
            </motion.div>
          </div>

          {/* Magazin Online Side */}
          <div
            className="split-side store"
            onClick={() => navigateToService(servicesData[1].route)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="split-content"
            >
              <div className="iphone-frame">
                <div className="iphone-notch" />
                  <AnimatedAsset
                    name={serviceAnimations[servicesData[1].image]}
                    alt={servicesData[1].title}
                    width={150}
                    height={150}
                    className="iphone-screen"
                  />
                  </div>
              <h3>{servicesData[1].title}</h3>
              <p>{servicesData[1].description}</p>
              <button className="swipe-btn">Crește Vânzările</button>
            </motion.div>
          </div>

          {/* Decorative hover particles or background elements can be added in SCSS */}
        </div>
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Services, 'app__about'), 'services', 'app__whitebg');
