import axios from "axios";
import {LoginDataType} from "../redux/auth-reducer";
import {FormDataType} from "../components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '6cb1043f-b6bf-4225-89e6-78e0dc90249a'
    }
})

export const usersAPI = {

    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUsers2 (page: number, pageSize: number) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

}

export const followAPI = {

    follow (id: number) {
        return instance.post(`follow/${id}`)
            .then(
                response => response.data
            )
    },

    unfollow (id: number) {
        return instance.delete(`follow/${id}`)
            .then(
                response => response.data
            )
    },

}

export const authAPI = {

    getAuthUserData () {
        const promise = instance.get<ResponseType<{id: number, email: string, login: string}>>(`auth/me`)
        return promise
    },

    login ({email, password, rememberMe}: FormDataType) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout () {
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {

    getProfileData (userId: number) {
        return instance.get(`profile/` + userId)
            .then(
                response => response.data
            )
    },

    getStatus  (userId: number) {
        return instance.get(`profile/status/` + userId)
            .then(
                response => response.data
            )
    },

    updateStatus (status: string) {
        return instance.put(`profile/status`, { status: status})
            .then(
                response => response.data
            )
    }
}

type ResponseType<D> ={
    resultCode: number
    messages: Array<string>
    data: D
}