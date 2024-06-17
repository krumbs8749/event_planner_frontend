import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatCard.module.scss';

const StatCard = ({ label, subtitle, value }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.label}>{label}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatCard;
