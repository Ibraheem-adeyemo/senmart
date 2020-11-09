import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { ParentScreen } from './ParentScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppNavProps } from '../Types/AppParamList';
import { AppParamList } from '../Types/AppParamList';
import { RouteProp } from '@react-navigation/native'
import { AuthContext } from './AuthProvider'

interface HomeProps {}

export const HomeScreen = ({navigation, route}: AppNavProps<'Home'>) => {
    const { logout } = useContext(AuthContext)

    return (<ParentScreen>
        <View>
            <Text> This is Home screen</Text>
            <Text>Route Name: {route.name}</Text>
            <Button title="Logout" onPress={() => {
                // navigation.navigate('Login')
                logout()
            }} />
        </View>
    </ParentScreen>)
}
