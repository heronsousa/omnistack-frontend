import axios from 'axios';

const api = axios.create({
    baseURL: proces.env.REACT_APP_API_URL,
});

export default api;
