import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8000", // change to your Laravel backend URL when deployed
});

export default api;
