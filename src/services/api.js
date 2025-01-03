import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.example.com' });

export const fetchCompanies = () => API.get('/companies');
export const addCompany = (data) => API.post('/companies', data);
export const deleteCompany = (id) => API.delete(`/companies/${id}`);