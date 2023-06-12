import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6465bb5e9c09d77a62f25f2e.mockapi.io',
});

export default instance;
