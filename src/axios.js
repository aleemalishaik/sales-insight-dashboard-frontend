import axios from 'axios';

// Create an Axios instance with default configurations
const instance = axios.create({
    baseURL: 'http://localhost:8080',  // Replace with your backend API base URL
    headers: {
        'Content-Type': 'application/json',  // Set Content-Type to JSON for all requests
    },
});

export default instance;
