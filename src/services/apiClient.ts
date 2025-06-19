'use client';

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://89.116.186.185:8081/api',
});

export default api;
