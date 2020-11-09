import { AuthActionType, UserModel } from "../../Types/AuthInterface";


type userModel = {
    user: UserModel | object | undefined,
    isLoggedIn: boolean,
    error?: string | undefined
}

const authType = {
    userLogIn: 'LOGIN',
    userLogOut: 'LOGOUT',
    userAuthError: 'USER_AUTH_ERROR'
}
const authState = {
    user: {},
    isLoggedIn: false
}

export const authReducer = (newState: userModel = authState, action: AuthActionType) => {
    switch (action.actionType) {
        case authType.userLogIn:
            return {
                ...newState,
                isloggedIn: true, user: action.payload
            }
        case authType.userAuthError:
            return {
                ...newState, error: action.payload
            } 
        default:
            return newState
    }
}