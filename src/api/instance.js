
import axios from 'axios';


const createInstance = (isMultipart = false) => {
    const instance = axios.create({
      baseURL: 'https://nodejs-class.vercel.app/',
      headers: isMultipart
        ? {}
        : { 'Content-Type': 'application/json' },
    });
  
    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('auth-token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  
    return instance;
  };

export default createInstance;