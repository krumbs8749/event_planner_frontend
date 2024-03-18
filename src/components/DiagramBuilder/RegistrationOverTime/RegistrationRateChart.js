import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import styles from './RegistrationRateChart.module.scss'

const generateMockData = (period, unit) => {
  const labels = [];
  const data = [];
  const currentDate = new Date();
  for (let i = period; i > 0; i--) {
    const date = new Date(currentDate);
    if (unit === 'year') {
      date.setFullYear(currentDate.getFullYear() - i);
      labels.push(date.getFullYear().toString());
    } else if (unit === 'month') {
      date.setMonth(currentDate.getMonth() - i);
      labels.push(`${date.getMonth() + 1}/${date.getFullYear()}`);
    }
    data.push(Math.floor(Math.random() * 100)); // Mock registration rate
  }
  return { labels, data };
};

const RegistrationRateChart = () => {
  const [timeframe, setTimeframe] = useState({ period: 5, unit: 'year' });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Registration Rate',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const { labels, data } = generateMockData(timeframe.period, timeframe.unit);
    setChartData({
      ...chartData,
      labels: labels,
      datasets: [{ ...chartData.datasets[0], data: data }],
    });
  }, [timeframe]);

  const handlePeriodChange = (e) => {
    setTimeframe({ ...timeframe, period: e.target.value });
  };

  const handleUnitChange = (e) => {
    setTimeframe({ ...timeframe, unit: e.target.value });
  };

  return (
    <>
        <h2 className={styles.chartHeader}>Registration Rate Over Time</h2>
        <Line data={chartData} options={{
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }} />
        <div className={styles.controls}>
            <label className={styles.label}>
                Period:
                <input className={styles.inputField} type="number" value={timeframe.period} onChange={handlePeriodChange} />
            </label>
            <select className={styles.selectField} value={timeframe.unit} onChange={handleUnitChange}>
                <option value="year">Years</option>
                <option value="month">Months</option>
            </select>
        </div>
    </>
  );
};

export default RegistrationRateChart;
