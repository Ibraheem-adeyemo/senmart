import { ActionTypeInterface, UserModel } from "../../models/Types/AuthInterface";
import {actionType} from '../../shared/constants/action.type';

type userModel = {
    user: UserModel | object | undefined,
    isLoggedIn: boolean,
    error?: string | undefined
}

const defaultUserState = {
    user: {},
    isLoggedIn: false
}

export const loginReducer = (newState: userModel = defaultUserState, action: ActionTypeInterface) => {
    switch (action.actionType) {
        case actionType.LOGIN:
            return {
                ...newState,
                isloggedIn: true, user: action.payload
            }
        case actionType.ERROR:
            return {
                ...newState, error: action.payload
            } 
        default:
            return newState
    }
}