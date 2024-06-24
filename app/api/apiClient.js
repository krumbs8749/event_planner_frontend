import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your actual API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
