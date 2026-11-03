import './BlogList.scss';
import { motion } from 'framer-motion';
import { blogPosts } from '../../utils/data';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';

function BlogList() {
  const navigate = useNavigate();

  return (
    <div className="blog-list-container">
      <SEO
        title="Blog - Cosmin Web"
        description="Technical insights, tutorials and thoughts on web development: React, TypeScript, CSS, APIs and WordPress."
        pathname="/blog"
      />
      <div className="blog-list-header">
        <motion.button
          className="home-btn"
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <HomeIcon />
          Back to Home
        </motion.button>
        <h1>All Articles</h1>
        <p>Technical insights, tutorials, and thoughts on web development</p>
      </div>

      <div className="blog-list-grid">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog-list-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="blog-list-meta">
              <span className="blog-list-date">
                <CalendarTodayIcon />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="blog-list-readtime">
                <AccessTimeIcon />
                {post.readTime}
              </span>
            </div>

            <h2 className="blog-list-title">
              <Link to={`/blog/${post.slug}`} className="blog-list-title-link">
                {post.title}
              </Link>
            </h2>
            <p className="blog-list-excerpt">{post.excerpt}</p>

            <div className="blog-list-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-list-tag">
                  {tag}
                </span>
              ))}
            </div>

            <Link to={`/blog/${post.slug}`} className="blog-list-readmore">
              Read Article
              <ArrowForwardIcon />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
