import axios from "axios";

const AUTH_TOKEN = window.localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN ? AUTH_TOKEN : "";

export const defaultClient = axios.create({});
