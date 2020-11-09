import React from 'react'
import { AuthProvider } from './AuthProvider'
import { HomeStack } from '../routes/HomeStack'

export const Providers = () => {
    return (
        <AuthProvider>
            <HomeStack />
        </AuthProvider>
    )
}
