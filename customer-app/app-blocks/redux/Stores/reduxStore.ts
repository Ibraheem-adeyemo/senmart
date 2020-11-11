import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import{ rootReducer } from '../Reducers';

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
