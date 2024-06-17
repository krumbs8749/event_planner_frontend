import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueBarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Current',
        data: [100, 150, 175, 200, 225, 150, 175, 100, 125, 175, 150, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Previous',
        data: [125, 100, 150, 175, 200, 225, 175, 150, 100, 125, 150, 175],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Revenue current vs previous',
      },
    },
  };

  return (
    <div style={{ height: '375px', position: 'relative' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueBarChart;
