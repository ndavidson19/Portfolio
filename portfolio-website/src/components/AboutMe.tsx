import React, { useState } from 'react';
import styles from '../styles/AboutMe.module.css';

export const AboutMe: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<number>(0); // Change 0 to 1

  const jobDescriptions = [
    {
      title: 'Cisco',
      dates: 'August 2022 - Current',
      description: 'Software Engineer',
      achievements: ['Developed a hardware and resource management system using React, TypeScript, Sass', 
      'The project freed developers workflow, sped up the time it took to acquire hardware to test, identified, flagged, and removed offline systems, and gave insights into usage and hardware utilization between business units', 
      'Application decreased the Cloud Networking Groups quarterly OpEx by reducing developer wait-times by a factor of 3600, and CapEx by 5M in quarterly budgeting'],
    },
    {
      title: 'UCLA',
      dates: 'January 2019 - December 2019',
      description: 'Machine Learning Researcher',
      achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
    },
    {
      title: 'Sensagrate',
      dates: 'January 2018 - December 2018',
      description: 'Computer Vision Engineer',
      achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
    },
  ];
  

  const handleJobClick = (index: number) => {
    setSelectedJob(selectedJob === index ? null : index);
  };

  return (
    <div className={styles.aboutMeContainer}>
      <h1 className={styles.personalDescription}>
        Expierence.
      </h1>
      <div className={styles.card}>
    <div>
      {jobDescriptions.map((job, index) => (
        <div
          key={index}
          className={`${styles.jobSection} ${
            selectedJob === index ? styles.selected : ''
          }`}
          onClick={() => handleJobClick(index)}
        >
          {job.title}
        </div>
      ))}
    </div>
    {selectedJob !== null && (
      <div className={styles.jobDetails}>
        <h3 className={styles.jobTitle}>{jobDescriptions[selectedJob].title}</h3>
        <p className={styles.jobDates}>{jobDescriptions[selectedJob].dates}</p>
        <p>{jobDescriptions[selectedJob].description}</p>
        <ul className={styles.jobAchievements}>
          {jobDescriptions[selectedJob].achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      <a
        href="/path/to/your/resume.pdf"
        download="Your_Name_Resume.pdf"
        className={styles.resumeDownloadIcon}
      >
        <i className="fas fa-file-download"></i>
        <span className={styles.tooltip}>Download Resume</span> {/* Add this line */}
      </a>
    </div>
  </div>
  );
};

