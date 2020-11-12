import { combineReducers } from 'redux';
import { loginReducer } from '../../../components/login-component/Login.reducer';

export const rootReducer = combineReducers({
    loginReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>