import axios from "axios";

const swiftApiUrl = "https://www.alphavantage.co";
export const swiftApi = axios.create({
  baseURL: swiftApiUrl,
  headers: {
    "Content-Type": "application.json",
  },
});
