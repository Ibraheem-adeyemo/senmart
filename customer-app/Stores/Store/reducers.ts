import { combineReducers } from 'redux';
import { loginReducer } from '../Reducers/Login.reducer';
import { zoneReducer } from '../Reducers/Zone.reducer';

export const rootReducer = combineReducers({
    loginReducer,
    zoneReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>