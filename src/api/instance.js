
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nodejs-class.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default instance;