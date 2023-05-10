// components/Research/Research.tsx

import React from 'react';
import styles from '../styles/Research.module.css';

export const Research: React.FC = () => {
  return (
    <div className={styles.researchContainer}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className={styles.card}>
          <img
            src="vercel.svg"
            alt={`Research card ${index}`}
          />
          <div className={styles.cardText}>
            <h3>Research Title {index}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
            <a href="#" className={styles.showMoreBtn}>
              Show More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

