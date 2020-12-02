import { userActionType } from "../../shared/constants/action-type/userActionType";
import { IUser } from '../../models/Interfaces/User.interface'


export const userReducer = (currentState: IUser, action) => {
    switch (action.actionType) {
        case userActionType.GET_USER:
            return {
                ...currentState,
                user: action.payload
            } 
        default:
            return currentState
    }
}