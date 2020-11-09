import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';

export const rootReducer = combineReducers({
    authReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>