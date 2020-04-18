import axios from "axios";

const API = axios.create({
  baseURL: "https://api.covid19api.com/",
});

export const fetchFromApi = async url => await API.get(url);
