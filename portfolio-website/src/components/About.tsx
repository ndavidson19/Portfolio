// components/About.tsx

import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';
import { Contact } from './Contact';

type Props = {
  onContactClick: () => void;
};

export const About: React.FC< { onContactClick: () => void }> = ({ onContactClick }) => {
    const [animate, setAnimate] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  
    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className={styles.aboutContainer}>
        <div className={`${styles.textContainer} ${animate ? styles.text : ''}`}>
            <h2>Nicholas Davidson</h2>
            <p>
                Full Stack Software Engineer, based in San Francisco.
            </p>
            <button className={styles.contactButton} onClick={onContactClick}>
                <span>Contact Me</span>
                <span className={styles.arrow}>&gt;</span>
            </button>
        </div>
        <div className={styles.imageContainer}>
            <img className={styles.img} src="/test.jpeg" />
          </div>
        </div>
      );
    };