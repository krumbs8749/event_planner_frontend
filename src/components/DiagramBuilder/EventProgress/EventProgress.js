import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './EventProgress.module.scss';

const stages = [
  "Not ready",
  "Open for registration",
  "Sold out",
  "Registration Closed"
];

const EventProgress = ({ currentStage }) => {
  return (
    <div className={styles.progressContainer}>
      {stages.map((stage, index) => (
        <div key={index} className={styles.stage}>
          <div className={`${styles.circle} ${index <= currentStage ? styles.active : ''}`}>
            {index <= currentStage && <FaCheckCircle />}
          </div>
          {index < stages.length - 1 && <div className={`${styles.line} ${index <= currentStage ? styles.activeLabel : ''}`} />}
          <span className={`${styles.label} ${index <= currentStage ? styles.activeLabel : ''}`}>
            {stage}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EventProgress;
