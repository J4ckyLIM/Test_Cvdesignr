import axios from "axios";

const baseURL = 'http://localhost:5000/'; // Change it if needed

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});