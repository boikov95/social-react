import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "95005993-829f-4cc4-b1ef-f971d9bd11a8" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

});

export const API = {
    getUser(tekPage, count) {
        return instance.get(`users?page=${tekPage}&count=${count}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    getHeader(){
        return instance.get(`auth/me/`)
            .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
        .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status})
        .then(response => response.data)
    },
    getLogin(email, password, rememberMe){
        return instance.post(`auth/login/`, {email, password, rememberMe, captcha: false})
        .then(response => response.data)
    },
    loginOut(){
        return instance.delete(`auth/login/`)
        .then(response => response.data)
    }

    }