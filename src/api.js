import axios from 'axios';

let apiBaseUrl = '';

const getApiBaseUrl = async () => {
  try {
    const response = await axios.get('http://localhost:5009/current-port');
    const { port } = response.data;
    apiBaseUrl = `http://localhost:${port}`;
  } catch (error) {
    console.error('Error fetching API base URL:', error);
  }
};

export const fetchItems = async () => {
  if (!apiBaseUrl) await getApiBaseUrl();
  try {
    const response = await axios.get(`${apiBaseUrl}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};

export const createItem = async (item) => {
  if (!apiBaseUrl) await getApiBaseUrl();
  try {
    const response = await axios.post(`${apiBaseUrl}/items`, item);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    return null;
  }
};
