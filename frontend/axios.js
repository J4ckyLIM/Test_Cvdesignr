import axios from "axios";

const baseURL = process.env.API_URL;

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});