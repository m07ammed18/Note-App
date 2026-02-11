import axios from "axios";

const MODE = import.meta.env.MODE || "production";
const BASE_URL = MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});
export default api;
