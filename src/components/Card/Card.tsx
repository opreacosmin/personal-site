import { useState } from 'react';
import './Card.scss';
import { motion } from 'framer-motion';
import { urlFor } from '../../lib/client';
import { Link } from 'react-router-dom';

interface ProjectImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface ProjectSlug {
  current: string;
}

export interface Project {
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

interface CardProps {
  project: Project;
}

interface CardAnimation {
  y: number;
  opacity: number;
}

function Card({ project }: CardProps) {
  const { logoImage, name, slug, descriere } = project;

  const [animateCard] = useState<CardAnimation>({ y: 0, opacity: 1 });

  return (
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="card"
    >
      <Link to={`/${slug.current}`} className="a">
        <div className="card--display">
          {logoImage ? (
            <img src={urlFor(logoImage).url()} alt={name} loading="lazy" />
          ) : (
            <div className="card--placeholder" aria-hidden="true" />
          )}
          <h2>{name}</h2>
        </div>

        <div className="card--hover">
          <h2>{name}</h2>
          <p>{descriere}</p>
          <span className="link">Vezi proiect</span>
        </div>
      </Link>
      <div className="card--border" />
    </motion.div>
  );
}

export default Card;
