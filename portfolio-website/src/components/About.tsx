// components/About.tsx

import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';


export const About: React.FC = () => {
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className={styles.aboutContainer}>
        <div className={`${styles.textContainer} ${animate ? styles.text : ''}`}>
            <h2>Nicholas Davidson</h2>
            <p>
                Full Stack Software Engineers
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.img} src="/test.jpeg" />
          </div>
        </div>
      );
    };
