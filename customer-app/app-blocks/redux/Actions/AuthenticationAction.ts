import axios from 'axios';
import {Dispatch} from 'react'
import { AuthActionType, LoginInterface } from '../../Types/AuthInterface'

const authActionCreator = {
    login: (payload: any) => {
        return {
            actionType: 'LOGIN',
            payload
        }
    }
}

export const loginAction = (object: any) => {
    return (dispatch: Dispatch<any>) => {
        setTimeout(() => {
            dispatch(authActionCreator.login(object))
        }, 0);
    }
}