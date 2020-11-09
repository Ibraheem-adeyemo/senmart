import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { ParentScreen } from './ParentScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppNavProps } from '../Types/AppParamList';
import { AppParamList } from '../Types/AppParamList';
import { RouteProp } from '@react-navigation/native'
import { AuthContext } from './AuthProvider'

interface HomeProps {}

export const SearchScreen = ({navigation, route}: AppNavProps<'Search'>) => {
    const { login } = useContext(AuthContext)

    return (<ParentScreen>
        <View>
            <Text> This is Search screen</Text>
        </View>
    </ParentScreen>)
}
