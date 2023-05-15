// components/Header.tsx

import React from 'react';
import styles from '../styles/Header.module.css';



export const Header: React.FC = () => {
    const scrollToProjects = () => {
        const projectsElement = document.getElementById('projects');
        if (projectsElement) {
          projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <header className={styles.headerContainer}>
      <h1>Nicholas Davidson</h1>
      <nav className={styles.nav}>
        <a onClick={scrollToProjects} className={styles.link}>Home</a>
        <a onClick={scrollToProjects} style={{ cursor: 'pointer' }}>Projects</a>
        <a onClick={scrollToProjects} className={styles.link}>Research</a>
      </nav>
    </header>
  );
};
