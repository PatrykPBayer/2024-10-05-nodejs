import axios from "axios";

const API_URL = "http://127.0.0.1:4000";

export const getData = () => {
  return axios.get(`${API_URL}/data`);
};

export const postData = () => {
  return axios.post(`${API_URL}/data`);
};
