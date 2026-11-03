import { useEffect, useState } from 'react';
import './Work.scss';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Card from '../../components/Card/Card';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../lib/client.tsx';
import { projectsQuery_web, projectsQuery_mobile, projectCategories } from '../../utils/data';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';

interface ProjectImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface ProjectSlug {
  current: string;
}

interface Project {
  _id: string;
  logoImage: ProjectImage;
  name: string;
  images?: ProjectImage[];
  slug: ProjectSlug;
  descriere: string;
  details?: string;
  category?: string;
  link?: string;
}

function Work() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('Website');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPost = (): void => {
    setLoading(true);

    let query: string;
    if (activeFilter === 'Website') {
      query = projectsQuery_web;
    } else {
      query = projectsQuery_mobile;
    }

    client
      .fetch(query)
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPost();
  }, [activeFilter]);

  const { scrollYProgress } = useScroll();
  const bgTextX = useTransform(scrollYProgress, [0.3, 0.6], [100, -200]);

  return (
    <div className="work-container">
      {/* Decorative Background Elements */}
      <motion.div style={{ x: bgTextX }} className="bg-text">
        Creations
      </motion.div>
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      <div className="header-text-container">
        <h2 className="section-title">
          <span>Explorează</span>
          Portofoliu
        </h2>
        <p className="section-subtitle">
          O fuziune între creativitate și cod, materializată în proiecte care depășesc limitele
          convenționalului.
        </p>
      </div>

      <div
        className="app__work-filter"
        role="tablist"
        aria-label="Filtrează proiectele după categorie"
      >
        {projectCategories.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(item)}
            className={`app__work-filter-item ${activeFilter === item ? 'item-active' : ''}`}
            role="tab"
            aria-selected={activeFilter === item}
          >
            {item}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="portfolio-loader">
          <SkeletonLoader type="card" count={3} />
        </div>
      ) : (
        <motion.div layout className="portfolio-grid" role="region" aria-label="Grilă portofoliu">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default AppWrap(MotionWrap(Work, 'app__skills'), 'portfolio', 'app__whitebg');
