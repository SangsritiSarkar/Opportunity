import axios from 'axios';
axios.defaults.withCredentials = true;

const api = axios.create({
	// baseURL: "http://localhost:8000/api/v1",
	baseURL: 'https://move-forward.onrender.com/api/v1',
	withCredentials: true,
});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
export const loginAuth = (payload) => api.post("./auth/login", payload);
export const signupAuth = (payload) => api.post("./auth/signup", payload);
export const logoutAuth = () => api.get("./auth/logout");

export const getUserData = () => api.get("/user");

export const getData = () => api.get('/oppurtunity/');
export const updateUser = (data) => api.patch('/user', data)
