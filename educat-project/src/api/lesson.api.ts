import axios from "axios";

export const getAllLessons = () => {
  return axios.get("http://127.0.0.1:8000/api/lessons/");
};

export const createLesson = (lesson) => {
  return axios.post("http://127.0.0.1:8000/api/lessons/", lesson);
};
