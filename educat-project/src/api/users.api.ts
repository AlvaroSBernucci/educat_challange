import axios from "axios";
import api from ".";

export const getUsers = () => api.get("/");

export const getUser = () => api.get("users/me/");
