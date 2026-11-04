import { useEffect, useState } from 'react';
import './Allprojects.scss';
import Card, { Project } from '../../components/Card/Card';
import { client } from '../../lib/client';
import { projectsQuery_default } from '../../utils/data';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FilterListIcon from '@mui/icons-material/FilterList';

function Allprojects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await client.fetch<Project[]>(projectsQuery_default);
      setProjects(data);
      setFilteredProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((p: Project) => p.category === filter);
      setFilteredProjects(filtered);
    }
  }, [filter, projects]);

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Website' },
    { value: 'mobile', label: 'Mobile' },
  ];

  return (
    <div className="all-projects-page">
      <SEO
        title="All Projects - Cosmin Web Portfolio"
        description="Browse all web development projects by Cosmin, featuring React applications, e-commerce solutions, and creative web designs."
        pathname="/projects"
      />

      {/* Page Header */}
      <div className="page-header">
        {/* <button onClick={goHome} className="back-btn" aria-label="Go back home">
          <ArrowBackIosIcon />
          <span>Home</span>
        </button> */}
        <h1>Project Gallery</h1>
        <p className="subtitle">Explore the complete portfolio of digital solutions</p>
      </div>

      {loading ? (
        <Loader message={'Loading projects...'} />
      ) : (
        <>
          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-container">
              <FilterListIcon className="filter-icon" />
              <div className="filter-buttons">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.value}
                    className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                    onClick={() => setFilter(cat.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-section">
            <div className="container">
              <div className="projects-grid">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <motion.div
                      key={project._id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card project={project} />
                    </motion.div>
                  ))
                ) : (
                  <div className="no-projects">
                    <p>No projects found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Allprojects;
