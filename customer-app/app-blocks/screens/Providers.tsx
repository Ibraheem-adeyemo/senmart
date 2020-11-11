import React from 'react'
import { AuthProvider } from './AuthProvider'
import { HomeStack } from '../routes/HomeStack';
import { Provider } from 'react-redux'
import { store } from '../redux/Stores/reduxStore';

export const Providers = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <HomeStack />
            </AuthProvider>
        </Provider>
    )
}
