// components/Projects.tsx

import React from 'react';
import styles from '../styles/Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const Project: React.FC<{
  imageUrl: string;
  liveLink: string;
  githubLink: string;
  title: string;
  description: string;
  techUsed: string[];
}> = ({ imageUrl, liveLink, githubLink, title, description, techUsed }) => {
  return (
    <div className={styles.projectRow} id="projects">
      <div className={styles.projectImage}>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} />
        </a>
        <div className={styles.buttons}>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      </div>
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          Technologies used: <em>{techUsed.join(', ')}</em>
        </p>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const projectList = [
    // Add your projects here
    {
      imageUrl: '/robinhood.png',
      liveLink: 'https://project1-live-link.com',
      githubLink: 'https://github.com/user/project1',
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      techUsed: ['React', 'Next.js', 'TypeScript'],
    },
    {
        imageUrl: '/robinhood.png',
        liveLink: 'https://project2-live-link.com',
        githubLink: 'https://github.com/user/project2',
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        techUsed: ['Node.js', 'Express', 'MongoDB'],
      },
      {
        imageUrl: '/robinhood.png',
        liveLink: 'https://project2-live-link.com',
        githubLink: 'https://github.com/user/project2',
        title: 'Project 3',
        description: 'A brief description of Project 2.',
        techUsed: ['Node.js', 'Express', 'MongoDB'],
      },
      {
        imageUrl: '/robinhood.png',
        liveLink: 'https://project2-live-link.com',
        githubLink: 'https://github.com/user/project2',
        title: 'Project 4',
        description: 'A brief description of Project 2.',
        techUsed: ['Node.js', 'Express', 'MongoDB'],
      },
      // Add more projects as needed
    ];
  
    return (
      <div className={styles.projectsContainer}>
        {projectList.map((project, index) => (
          <Project
            key={index}
            imageUrl={project.imageUrl}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            title={project.title}
            description={project.description}
            techUsed={project.techUsed}
          />
        ))}
      </div>
    );
  };
