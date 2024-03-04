import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    //'API-KEY': "1900eb05-e47d-472d-b258-6049fb1203f7"
    headers: {
        'API-KEY': "1900eb05-e47d-472d-b258-6049fb1203f7"
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`, ).then( response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}, {
            withCredentials: true,
            'API-KEY': "1900eb05-e47d-472d-b258-6049fb1203f7"
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {})
    },
    getProfile(userId) {
        console.warn('Obsolete Method. Use profileAPI object ')
        return profileAPI.getProfile(userId)
        // return instance.get(`profile/${userId}`, {})
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`, {})
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`, {})
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {});
    },
    login(email, password, rememberMe = false ) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`, {});
    }
}