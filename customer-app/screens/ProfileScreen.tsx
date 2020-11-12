import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { ParentScreen } from './ParentScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppNavProps } from '../models/Types/AppParamList';
import { AppParamList } from '../models/Types/AppParamList';
import { RouteProp } from '@react-navigation/native'


export const ProfileScreen = ({navigation, route}: AppNavProps<'Profile'>) => {

    return (<ParentScreen>
        <View>
            <Text> This is Profile screen</Text>
            <Text>Route Name: {route.name}</Text>
            <Button title="Logout" onPress={() => {
                // navigation.navigate('Login')
            }} />
        </View>
        
    </ParentScreen>)
}
