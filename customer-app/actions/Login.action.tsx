import axios from 'axios';
import {Dispatch} from 'react'
import { LoginActionInterface } from '../models/Types/AuthInterface'

const authActionCreator = {
    login: (payload: LoginActionInterface) => {
        return {
            actionType: 'LOGIN',
            payload
        }
    }
}

export const loginAction = (object: LoginActionInterface) => {
    return (dispatch: Dispatch<any>) => {
        setTimeout(() => {
            dispatch(authActionCreator.login(object))
        }, 0);
    }
}