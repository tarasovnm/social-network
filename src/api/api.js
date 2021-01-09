import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a75ac896-223c-438e-83b5-42698bbaede9"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageUsersCount = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageUsersCount}`).then(response => response.data);
  },
  getProfileData(userId) {
    return instance.get(`profile/` + userId).then(response => response.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`);
  },
}

export const authAPI = {
  me() {
    return instance.get(`/auth/me`)
  }
}
