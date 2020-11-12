import React from 'react';
import { HomeStack } from "./components/routes/HomeStack";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import{ rootReducer } from './utils/redux/Stores/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <HomeStack />
        </Provider>
    )
}

export default AppWrapper;