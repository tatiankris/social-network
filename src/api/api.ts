import axios from "axios";

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
        return instance.get(`auth/me`)
            .then(
                response => response.data
            )
    }

}
