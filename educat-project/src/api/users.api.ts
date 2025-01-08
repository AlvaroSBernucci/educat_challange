import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/users/",
});

export const getUsers = () => usersApi.get("/");
