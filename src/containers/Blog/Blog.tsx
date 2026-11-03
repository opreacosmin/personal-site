import './Blog.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { blogPosts } from '../../utils/data';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate();
  const featuredPosts = blogPosts.slice(0, 3);

  const handleReadMore = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="blog-container">
      <h1 className="head-text">Technical Blog</h1>
      <p className="p-text subtitle">
        Sharing my thoughts on web development, best practices, and lessons learned
      </p>

      <div className="blog-grid">
        {featuredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="blog-card-content">
              <div className="blog-meta">
                <span className="blog-date">
                  <CalendarTodayIcon className="icon" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="blog-readtime">
                  <AccessTimeIcon className="icon" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-tags">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="read-more-btn" onClick={() => handleReadMore(post.slug)}>
                Read More
                <ArrowForwardIcon className="arrow" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="view-all-btn"
        onClick={() => navigate('/blog')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Articles
      </motion.button>
    </div>
  );
}

export default AppWrap(MotionWrap(Blog, 'app__blog'), 'blog', 'app__whitebg');
