import axios from "axios";

// Ensure the environment variable is correctly prefixed with VITE_
const apiUrl = "https://job-task-bd-calling-server.vercel.app";

if (!apiUrl) {
  console.error("API base URL is not defined. Please check your .env file.");
}

// Create an instance of axios for public API
const publicApi = axios.create({
  baseURL: apiUrl,
});

export const usePublicApi = () => {
  return publicApi;
};
