import axios from "axios";

const lessonsApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/lessons/",
});

export const getAllLessons = () => lessonsApi.get("/");

export const createLesson = (lesson) => lessonsApi.post("/", lesson);

export const deleteLesson = (id) => lessonsApi.delete(`/${id}/`);

export const getLesson = (id) => lessonsApi.get(`/${id}/`);

export const updateLesson = (id, lesson) => lessonsApi.put(`/${id}/`, lesson);
