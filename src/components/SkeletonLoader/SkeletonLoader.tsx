import React from 'react';
import './SkeletonLoader.scss';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'circle' | 'project';
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = 'text',
  count = 1,
  className = '',
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </div>
        );
      case 'circle':
        return <div className="skeleton-circle"></div>;
      case 'project':
        return (
          <div className="skeleton-project">
            <div className="skeleton-header">
              <div className="skeleton-circle"></div>
              <div className="skeleton-title"></div>
            </div>
            <div className="skeleton-image large"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </div>
        );
      default:
        return <div className="skeleton-text"></div>;
    }
  };

  return (
    <div className={`skeleton-wrapper ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-item">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
