import React from 'react';
import styles from './EventTimelineChart.module.scss';


const EventTimelineChart = ({ events }) => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.detailsContainer}>
        {events.map((event, index) => (
          <div key={index} className={styles.event}>
            <div className={styles.time}>
              {event.time.toLocaleString('de', { dateStyle: 'short', timeStyle: 'short' })}
            </div>
            <div className={styles.details}>
              <div className={styles.eventName}>
                <strong>{event.name}</strong>
              </div>
              <div className={styles.status}>
                <span className={`${styles.statusBadge} ${styles[event.statusClass]}`}>
                  {event.status}
                </span>
                <span className={styles.venue}>
                  {event.venue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimelineChart;
