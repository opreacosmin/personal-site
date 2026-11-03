import { useEffect, useState } from 'react';
import './GitHubGraph.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { personalInfo } from '../../utils/data';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

function GitHubGraph() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  // Generate mock contribution data for demonstration
  // In production, this would fetch from GitHub API
  useEffect(() => {
    const generateContributions = () => {
      const data: ContributionDay[] = [];
      const today = new Date();
      const daysToGenerate = 365;

      for (let i = daysToGenerate; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        // Generate random contribution count with realistic patterns
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const randomFactor = Math.random();

        let count = 0;
        if (!isWeekend && randomFactor > 0.3) {
          count = Math.floor(Math.random() * 12) + 1;
        } else if (!isWeekend && randomFactor > 0.1) {
          count = Math.floor(Math.random() * 5) + 1;
        }

        // Determine level based on count
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        if (count > 0) level = 1;
        if (count >= 3) level = 2;
        if (count >= 6) level = 3;
        if (count >= 9) level = 4;

        data.push({
          date: date.toISOString().split('T')[0],
          count,
          level,
        });
      }

      return data;
    };

    // Simulate API call
    setTimeout(() => {
      setContributions(generateContributions());
      setLoading(false);
    }, 500);
  }, []);

  const getTotalContributions = () => {
    return contributions.reduce((sum, day) => sum + day.count, 0);
  };

  const getCurrentStreak = () => {
    let streak = 0;
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const monthLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className="github-container">
      <div className="github-header">
        <GitHubIcon className="github-icon" />
        <h2 className="head-text">GitHub Activity</h2>
      </div>
      <p className="p-text subtitle">My open source contributions over the last year</p>

      {loading ? (
        <div className="loading">Loading contributions...</div>
      ) : (
        <>
          <div className="contribution-stats">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="stat-value">{getTotalContributions()}</span>
              <span className="stat-label">Contributions</span>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="stat-value">{getCurrentStreak()}</span>
              <span className="stat-label">Current Streak</span>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="stat-value">50+</span>
              <span className="stat-label">Repositories</span>
            </motion.div>
          </div>

          <motion.div
            className="contribution-graph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="month-labels">
              {monthLabels.map((month) => (
                <span key={month} className="month-label">
                  {month}
                </span>
              ))}
            </div>

            <div className="graph-container">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="week-column">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`contribution-cell level-${day.level}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: weekIndex * 0.005 + dayIndex * 0.001,
                        type: 'spring',
                        stiffness: 300,
                      }}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="graph-legend">
              <span className="legend-label">Less</span>
              <div className="legend-cells">
                <div className="legend-cell level-0" />
                <div className="legend-cell level-1" />
                <div className="legend-cell level-2" />
                <div className="legend-cell level-3" />
                <div className="legend-cell level-4" />
              </div>
              <span className="legend-label">More</span>
            </div>
          </motion.div>

          <motion.a
            href={`https://github.com/${personalInfo.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <GitHubIcon />
            View My GitHub Profile
          </motion.a>
        </>
      )}
    </div>
  );
}

export default AppWrap(MotionWrap(GitHubGraph, 'app__github'), 'github', 'app__whitebg');
