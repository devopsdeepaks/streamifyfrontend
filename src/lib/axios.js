import axios from "axios";

// Allow overriding API base URL via VITE_API_BASE_URL when deployed (set to your Render URL)
const DEV_URL = "http://localhost:5001/api";
const PROD_URL = import.meta.env.VITE_API_BASE_URL || "/api";
const BASE_URL = import.meta.env.MODE === "development" ? DEV_URL : PROD_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
