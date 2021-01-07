import { actionType } from '../shared/constants/action.type';

export const errorActionCreator = {
    onError: (payload: any) => {
        return {
            type: actionType.ERROR,
            payload
        }
    }
}