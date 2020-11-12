import React from 'react'
import { View, Text } from 'react-native'
import { ParentScreen } from './ParentScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthParamList, AuthNavProps } from '../models/Types/AuthParamLists'

export const SignUpScreen = ({navigation}: AuthNavProps<'SignUp'>) => (
    <ParentScreen>
        <View>
            <Text> This is signup screen</Text>
        </View>
    </ParentScreen>
)
