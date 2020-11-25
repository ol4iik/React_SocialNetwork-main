import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: { 'API-KEY': 'b84f393f-89d4-4d46-be5e-b20395b9eb98' }
});

export const usersAPI = {
    getUsers(page, pageSize) { //~changeCurrentPage
        return instance.get(`/users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data);
    }
}


export const authAPI = {
    isAuthMe() {
        return instance.get(`/auth/me`)
            .then(response => response.data);
    },
    logIn(email, password, rememberMe) {

        return instance.post(`/auth/login`, { email, password, rememberMe })
            .then(response => response.data);
    },
    logOut() {
        return instance.delete(`/auth/login`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfileData(userId) {
        return instance.get(`/profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    putStatus(status) {
        return instance.put(`/profile/status`, { status })
            .then(response => response.data);
    }
}