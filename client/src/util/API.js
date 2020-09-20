import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';
const API = axios.create({ baseURL: BASE_URL });

const getAllEntries = async () => {
  try {
    const res = await API.get('entries');
    return res.data;
  } catch (err) {}

  return null;
};

const saveEntry = async ({ letters, score }) => {
  let alertType = '';
  let message = '';
  try {
    const res = await API.post('entries', { word: letters, score });
    alertType = 'Success';
    message = `Entry "${letters}" saved successfully.`;
  } catch (err) {
    alertType = 'Error';
    if (err.response) {
      message = err.response.data;
    } else {
      message = err.toString();
    }
  }
  return { alertType, message };
};

export { getAllEntries, saveEntry };
