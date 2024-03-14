import React from 'react';
import  styles from'./CircleDiagram.module.scss'; // Ensure to create this CSS file

const CircleDiagram = ({ total, completed, title }) => {
    const radius = 60; // Increased radius for better visibility
    const stroke = 8; // Adjusted stroke width
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const progress = (completed / total) * 100;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className={styles.circle_diagram_container}>
            <h3>{title}</h3>
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#4ca1af', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#c4e0e5', stopOpacity: 1}} />
                    </linearGradient>
                </defs>
                <circle
                    stroke="#f0f0f0"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className={styles.circle_back}
                />
                <circle
                    stroke="url(#progressGradient)"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className={styles.circle_progress}
                />
                <text x="50%" y="50%" textAnchor="middle" stroke="#333" dy=".3em" className={styles.percentage_text}>
                    {`${Math.round(progress)}%`}
                </text>
            </svg>
            <span className={styles.progress_ratio}>{`${completed}/${total}`}</span>
        </div>
    );
};

export default CircleDiagram;
