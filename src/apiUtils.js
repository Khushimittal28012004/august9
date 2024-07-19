import axios from 'axios';

let apiBaseUrl = '';

export const getApiBaseUrl = async () => {
  if (!apiBaseUrl) {
    try {
      const response = await axios.get('http://localhost:5001/current-port');
      const { port } = response.data;
      apiBaseUrl = `http://localhost:${port}`;
    } catch (error) {
      console.error('Error fetching API base URL:', error);
    }
  }
  return apiBaseUrl;
};
