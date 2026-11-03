import { useState, useEffect } from 'react';
import { client, urlFor } from '../../lib/client';
import './ProjectPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Card from './../../components/Card/Card';
import { motion, AnimatePresence } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../../components/SEO/SEO';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotFound from '../NotFound/NotFound';

interface ProjectDetail {
  images: Array<{ url?: string; [key: string]: unknown }>;
  name: string;
  details?: unknown;
  category: string;
  technologies: string;
  link: string;
}

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [projectDetail, setProjectDetail] = useState<ProjectDetail>({
    images: [],
    name: '',
    details: undefined,
    category: '',
    technologies: '',
    link: '',
  });
  const [notFound, setNotFound] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const length = projects.length;
  const [current, setCurrent] = useState(0);
  const { images, name, details, category, technologies, link } = projectDetail;
  const [direction, setDirection] = useState(1);

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    client
      .fetch(`*[slug.current == "${slug}"]`)
      .then((data) => {
        if (data && data.length > 0) {
          const project = data[0];
          const imagesWithUrls = (project.images || []).map((image) => ({
            ...image,
            url: urlFor(image).url(),
          }));
          setProjectDetail({
            ...project,
            images: imagesWithUrls,
          });
          setImageIndex(0);
          setNotFound(false);
          setLoadError(false);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching project:', error);
        setLoadError(true);
      });

    client
      .fetch(`*[_type == "project" && slug.current != "${slug}" ] `)
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching related projects:', error);
      });
  }, [slug]);

  const moreNextSlide = () => {
    setDirection(1);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const morePrevSlide = () => {
    setDirection(-1);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setDirection(1);
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const carouselVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="project-detail-container">
      {loadError ? (
        <div className="project-load-error" role="alert">
          <h1>Nu am putut încărca proiectul</h1>
          <p>Verifică conexiunea la internet și încearcă din nou.</p>
          <button type="button" className="retry-btn" onClick={() => window.location.reload()}>
            Reîncarcă pagina
          </button>
        </div>
      ) : notFound ? (
        <NotFound />
      ) : (
        <>
          <SEO
            title={`${name || 'Project'} - Cosmin Web`}
            description={`View details of ${name} - ${category} project built with ${technologies}`}
            pathname={`/${slug}`}
            ogType="article"
          />

          {/* Page Header */}
          <div className="page-header">
            <button onClick={() => navigate('/projects')} className="back-btn">
              <ArrowBackIosIcon />
              <span>All Projects</span>
            </button>
            <div className="header-content">
              <span className="category-badge">{category}</span>
              <h1 className="project-title">{name}</h1>
              {technologies && <p className="technologies-tag">{technologies}</p>}
            </div>
          </div>

          <div className="main-container">
            {/* Image Gallery */}
            <div className="image-section">
              <div className="gallery-container">
                <button onClick={prevSlide} className="nav-arrow left" aria-label="Previous image">
                  <ChevronLeftIcon />
                </button>

                <div className="main-image-wrapper">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={imageIndex}
                      custom={direction}
                      variants={carouselVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 },
                      }}
                      className="main-image-container"
                      onClick={() => setIsLightboxOpen(true)}
                      style={{ cursor: 'zoom-in' }}
                    >
                      {images && images[imageIndex] ? (
                        <img
                          src={images[imageIndex].url}
                          alt={`Project Image ${imageIndex}`}
                          loading="lazy"
                          className="main-image"
                        />
                      ) : (
                        <div className="no-image">No image available</div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button onClick={nextSlide} className="nav-arrow right" aria-label="Next image">
                  <ChevronRightIcon />
                </button>
              </div>

              <div className="thumbnail-container">
                {images &&
                  images.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > imageIndex ? 1 : -1);
                        setImageIndex(i);
                      }}
                      className={`thumbnail ${imageIndex === i ? 'active' : ''}`}
                      aria-label={`Go to image ${i + 1}`}
                    >
                      <img src={item.url} alt={`Thumbnail ${i}`} loading="lazy" />
                    </button>
                  ))}
              </div>

              {images.length > 1 && (
                <div className="image-counter">
                  {imageIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
              <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="lightbox-close"
                    onClick={() => setIsLightboxOpen(false)}
                    aria-label="Close lightbox"
                  >
                    ×
                  </button>
                  <img
                    src={images[imageIndex]?.url}
                    alt={`Full size ${imageIndex}`}
                    className="lightbox-image"
                  />
                  {images.length > 1 && (
                    <div className="lightbox-nav">
                      <button
                        className="lightbox-nav-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                      >
                        <ChevronLeftIcon />
                      </button>
                      <span className="lightbox-counter">
                        {imageIndex + 1} / {images.length}
                      </span>
                      <button
                        className="lightbox-nav-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                      >
                        <ChevronRightIcon />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Project Content */}
            <div className="content-section">
              <div className="content-card">
                <h2 className="section-title">Project Details</h2>
                <div className="block-content">
                  <BlockContent blocks={details || []} serializers={serializers} />
                </div>

                <div className="project-meta">
                  {technologies && (
                    <div className="meta-item">
                      <span className="meta-label">Technologies:</span>
                      <span className="meta-value">{technologies}</span>
                    </div>
                  )}
                  {category && (
                    <div className="meta-item">
                      <span className="meta-label">Category:</span>
                      <span className="meta-value">{category}</span>
                    </div>
                  )}
                </div>

                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>Visit Project</span>
                    <OpenInNewIcon />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* More Projects Section */}
          <div className="more-projects-section">
            <div className="section-header">
              <h3>Check out my other projects!</h3>
              <div className="nav-buttons">
                <button
                  onClick={morePrevSlide}
                  className="circle-btn"
                  aria-label="Previous project"
                >
                  <ChevronLeftIcon />
                </button>
                <button onClick={moreNextSlide} className="circle-btn" aria-label="Next project">
                  <ChevronRightIcon />
                </button>
              </div>
            </div>

            <div className="carousel-container">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className="carousel-item"
                >
                  {projects[current] && <Card project={projects[current]} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {projects.length > 1 && (
              <div className="carousel-dots">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`dot ${i === current ? 'active' : ''}`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectPage;
