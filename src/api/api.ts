import axios, {AxiosResponse} from "axios";
import {LoginDataType} from "../redux/auth-reducer";
import {FormDataType} from "../components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '44d03ca4-768d-467d-8495-5db696fe39cb'
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
        return instance.get<AxiosResponse<ProfileResponseType>>(`profile/` + userId)
            .then(
                response => response.data
            )
    },
    updateProfile (data: updateProfileDataType) {
        return instance.put<ResponseType<any>>(`profile`, data)
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
    },

    updatePhoto (image: any) {
        const formData = new FormData();
        formData.append('image', image)
         return instance.put<ResponseType<{ small: string, large: string } | {}>>(`profile/photo`, formData, {headers: {
             'Content-Type': 'multipart/form-data'
        }
         })
            .then(
                response => response.data
            )
    }
}

export type updateProfileDataType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

type ResponseType<D> ={
    resultCode: number
    messages: Array<string>
    data: D
}

export type ProfileResponseType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string | null,
        "website": string | null,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": string | null,
        "github": string | null,
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}
