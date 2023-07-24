import UserActionTypes from "./actionTypes";

export type User = {
    id:number,
    number:string,
    name:string
}

export const loginUser = (payload:User) => ({
    type: UserActionTypes.LOGIN,
    payload,
})

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
})