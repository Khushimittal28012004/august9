// apiUtils.js
import axios from 'axios';

let apiBaseUrl = '';

export const getApiBaseUrl = async () => {
  if (!apiBaseUrl) {
    try {
      const response = await axios.get('http://localhost:5009/current-port'); // Adjusted to your backend port
      const { port } = response.data;
      apiBaseUrl = `http://localhost:${port}`;
    } catch (error) {
      console.error('Error fetching API base URL:', error);
      throw new Error('Unable to fetch API base URL');
    }
  }
  return apiBaseUrl;
};
