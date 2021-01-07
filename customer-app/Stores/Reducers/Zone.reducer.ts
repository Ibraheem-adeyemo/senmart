import { ActionTypeInterface, UserModel } from "../../models/Types/AuthInterface";
import {actionType} from '../../shared/constants/action.type';

const initialState = {
    loading: false
};

export const zoneReducer = (newState = initialState, action: ActionTypeInterface) => {
    switch (action.type) {
        case actionType.LOADING:
            return {
                ...newState,
                loading: true, 
            }
        case actionType.GET_CURRENT_ZONE:
            return {
                ...newState,
                currentZone: action.payload,
                loading: false
            }
        case actionType.ERROR:
            return {
                ...newState,
                error:action.payload,
                loading: false               
            }
        case actionType.GET_ZONES:
            return {
                ...newState,
                zones: action.payload,
                loading: false
            }
        case actionType.SET_SHOPPING_ZONES:
            return {
                ...newState,
                shoppingZone: action.payload,
                loading: false
            }
        default:
            return newState
    }
}
