import {Dispatch} from 'react'
import { userActionType } from '../shared/constants/action-type/userActionType';
import { IUser } from '../models/Interfaces/User.interface';
import httpService from '../utils/api-service/httpService';
import { baseApiConfig } from '../shared/constants/base-api/base-api-config';

const userActionCreator = {
    loading: () => {
        return {
            actionType: userActionType.REQUESTING
        }
    },
    getUser: (payload: IUser) => {
        return {
            actionType: userActionType.GET_USER,
            payload
        }
    }
}

export const userAction = (object: IUser) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(userActionCreator.loading())
            httpService.get(baseApiConfig.USER).then(
                response => {
                    dispatch(userActionCreator.getUser(response.data))

                }
            )

        }
        catch(err){

        }
    }
}