import { useEffect, useRef, useState } from 'react';
import './Work.scss';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Card from '../../components/Card/Card';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../lib/client.tsx';
import { projectsQuery_web, projectsQuery_mobile, projectCategories } from '../../utils/data';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link } from 'react-router-dom';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

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

const getClosestSlideIndex = (container: HTMLDivElement): number => {
  const cards = Array.from(container.children) as HTMLElement[];
  const viewportCenter = container.scrollLeft + container.clientWidth / 2;

  return cards.reduce(
    (closest, card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      return distance < closest.distance ? { index, distance } : closest;
    },
    { index: 0, distance: Number.POSITIVE_INFINITY }
  ).index;
};

const scrollToSlide = (
  container: HTMLDivElement,
  index: number,
  behavior: ScrollBehavior
): void => {
  const card = container.children[index] as HTMLElement | undefined;
  if (!card) {
    return;
  }

  const targetLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
  container.scrollTo({
    left: Math.max(0, targetLeft),
    behavior,
  });
};

function Work() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('Website');
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter, projects.length]);

  // Auto-advance the cards only on mobile/tablet, unless the user is interacting
  // or has asked the system to reduce motion.
  useEffect(() => {
    if (!isMobile || isPaused || prefersReducedMotion || projects.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      const container = sliderRef.current;
      if (!container) {
        return;
      }

      const currentIndex = getClosestSlideIndex(container);
      setCurrentSlide((currentIndex + 1) % projects.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isMobile, isPaused, prefersReducedMotion, projects.length, currentSlide]);

  useEffect(() => {
    const container = sliderRef.current;
    if (!isMobile || !container) {
      return;
    }

    scrollToSlide(container, currentSlide, prefersReducedMotion ? 'auto' : 'smooth');
  }, [currentSlide, isMobile, prefersReducedMotion]);

  const goToSlide = (direction: 1 | -1): void => {
    if (projects.length <= 1) {
      return;
    }

    const container = sliderRef.current;
    const currentIndex = container ? getClosestSlideIndex(container) : currentSlide;
    const nextIndex = (currentIndex + direction + projects.length) % projects.length;

    setCurrentSlide(nextIndex);
    if (container) {
      scrollToSlide(container, nextIndex, prefersReducedMotion ? 'auto' : 'smooth');
    }
  };

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

      <div className="app__work-filters">
        <div className="app__work-filter-label" id="work-filter-label">
          <FilterListRoundedIcon aria-hidden="true" />
          <span>Filtrează după categorie</span>
        </div>

        <div className="app__work-filter" role="tablist" aria-labelledby="work-filter-label">
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
      </div>

      {loading ? (
        <div className="portfolio-loader">
          <SkeletonLoader type="card" count={3} />
        </div>
      ) : (
        <motion.div
          ref={sliderRef}
          layout
          className="portfolio-grid"
          role="region"
          aria-label="Grilă portofoliu"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
        >
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

      {!loading && (
        <div className="portfolio-slider-controls">
          <div className="portfolio-slider-nav">
            <button
              type="button"
              className="portfolio-slider-arrow"
              onClick={() => goToSlide(-1)}
              disabled={projects.length <= 1}
              aria-label="Proiectul anterior"
            >
              <ChevronLeftRoundedIcon aria-hidden="true" />
            </button>
            <button
              type="button"
              className="portfolio-slider-arrow"
              onClick={() => goToSlide(1)}
              disabled={projects.length <= 1}
              aria-label="Proiectul următor"
            >
              <ChevronRightRoundedIcon aria-hidden="true" />
            </button>
          </div>

          <Link to="/projects" className="show-all-projects">
            Show all projects
            <ArrowForwardRoundedIcon aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default AppWrap(MotionWrap(Work, 'app__skills'), 'portfolio', 'app__whitebg');
