import axios from "axios";

const baseUrl = "http://192.168.0.120:3000";

export const getAllAnnouncements = () => {
  return axios.get(`${baseUrl}/announcements`);
};

export const getAnnouncementById = (id) => {
  return axios.get(`${baseUrl}/announcements/${id}`);
};

export const createAnnouncement = (data) => {
  return axios.post(`${baseUrl}/announcements`, data);
};

export const updateAnnouncement = (id, data) => {
  return axios.put(`${baseUrl}/announcements/${id}`, data);
};

export const deleteAnnouncement = (id) => {
  return axios.delete(`${baseUrl}/announcements/${id}`);
};

export const getDepartment = () => {
    return axios.get("http://192.168.0.120:3000/departments");
}

export const getParent = () => {
    return axios.get("http://192.168.0.120:3000/parents");
}

export const getStudent = () => {
    return axios.get("http://192.168.0.120:3000/students");
}

export const getTeacher = () => {
    return axios.get("http://192.168.0.120:3000/teachers");
}