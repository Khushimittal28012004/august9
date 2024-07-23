// api.js
import axios from 'axios';
import { getApiBaseUrl } from './apiUtils.js';

export const createItem = async (item) => {
  const apiBaseUrl = getApiBaseUrl();
  try {
    const response = await axios.post(`${apiBaseUrl}/finalSubmit`, item); // Ensure the endpoint is correct
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error.response.data;
  }
};
