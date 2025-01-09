import api from ".";

export const getAllLessons = () => api.get("/lessons/");

export const createLesson = (lesson) => api.post("/lessons/", lesson);

export const deleteLesson = (id) => api.delete(`/lessons/${id}/`);

export const getLesson = (id) => api.get(`/lessons/${id}/`);

export const updateLesson = (id, lesson) => api.put(`/lessons/${id}/`, lesson);

export const addStudentLesson = (id, lesson) => api.put(`/lessons/${id}/add_student/`, lesson);
