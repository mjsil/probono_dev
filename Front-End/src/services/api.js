import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3232',
    headers: [
        { 'Content-Type': 'application/json' },
        { Accept: 'application/json' },
        { 'Access-Control-Allow-Origin': 'http://localhost:3232' },
        { 'Access-Control-Allow-Credentials': 'true' },
    ],
});

export default api;
