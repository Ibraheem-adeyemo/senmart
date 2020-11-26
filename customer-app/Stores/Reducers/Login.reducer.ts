import { AuthActionType, UserModel } from "../../models/Types/AuthInterface";


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
const defaultUserState = {
    user: {},
    isLoggedIn: false
}

export const loginReducer = (newState: userModel = defaultUserState, action: AuthActionType) => {
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