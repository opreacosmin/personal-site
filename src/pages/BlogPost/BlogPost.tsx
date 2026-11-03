import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.scss';
import { motion } from 'framer-motion';
import { blogPosts } from '../../utils/data';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import NotFound from '../NotFound/NotFound';
import SEO from '../../components/SEO/SEO';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="content-h2">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (
        line.startsWith('1. ') ||
        line.startsWith('2. ') ||
        line.startsWith('3. ') ||
        line.startsWith('4. ')
      ) {
        return (
          <li key={index} className="content-li">
            {line.replace(/^\d+\. /, '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="content-p">
          {line}
        </p>
      );
    });
  };

  return (
    <motion.div
      className="blog-post-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title={`${post.title} - Cosmin Web`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        pathname={`/blog/${post.slug}`}
        ogType="article"
      />
      <div className="blog-post-header">
        <motion.button
          className="back-btn"
          onClick={() => navigate('/blog')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowBackIcon />
          Back to Blog
        </motion.button>

        <motion.button
          className="share-btn"
          onClick={handleShare}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShareIcon />
        </motion.button>
      </div>

      <article className="blog-post-content">
        <motion.div
          className="post-meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="meta-item">
            <CalendarTodayIcon />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
          <div className="meta-item">
            <AccessTimeIcon />
            {post.readTime}
          </div>
        </motion.div>

        <motion.h1
          className="post-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {post.title}
        </motion.h1>

        <motion.div
          className="post-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {post.tags.map((tag) => (
            <span key={tag} className="post-tag">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="post-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-text">{renderContent(post.content)}</div>
        </motion.div>
      </article>

      <motion.div
        className="post-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="author-box">
          <div className="author-avatar">C</div>
          <div className="author-info">
            <h4>Written by Cosmin Oprea</h4>
            <p>Full-Stack Developer passionate about creating amazing web experiences.</p>
          </div>
        </div>

        <div className="related-posts">
          <h3>More Articles</h3>
          <div className="related-grid">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="related-card"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <h4>{relatedPost.title}</h4>
                  <span>{relatedPost.readTime}</span>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BlogPost;
