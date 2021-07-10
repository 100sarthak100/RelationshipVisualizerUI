import axios from 'axios';

// Run Locally
// const API = axios.create({ baseURL: 'http://localhost:5000' });

// Production Mode
const API = axios.create({ baseURL: 'https://relationshipvisualizer.herokuapp.com' });

// API ENDPOINTS
export const fetchRelation = (relation) => API.post('/relation/get', relation);

export const fetchAllRelation = () => API.get('/relation/getAll');
export const createRelation = (newRelation) => API.post('/relation/create', newRelation);
export const deleteRelation = (id) => API.delete(`/relation/${id}`);

export const fetchUsers = () => API.get('/user');
export const createUser = (formData) => API.post('/user', formData);
export const deleteUser = (id) => API.delete(`/user/${id}`);