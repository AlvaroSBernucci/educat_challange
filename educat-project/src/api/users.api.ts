import api from ".";

export const getUsers = () => api.get("users/");

export const getUser = () => api.get("users/me/");

export const getTeacher = (id) => api.get(`users/current-teacher/${id}/`);

export const updateUser = (user) => api.put(`/users/me/`, user);

export const getTeacherLessons = () => api.get("/users/dashboard/");
