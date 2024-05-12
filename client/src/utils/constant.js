import axios from 'axios';

const constant = axios.create({
  baseURL: 'http://localhost:9000',
});

export default constant;
