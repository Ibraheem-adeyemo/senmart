import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, RouteProp} from '@react-navigation/native';
import { ApplicationState } from '../redux/Reducers'
import { SignUpScreen, LoginScreen } from '../screens'
import { AuthParamList } from '../Types/AuthParamLists';
import { ParentScreen } from '../screens/ParentScreen';
import { Text } from 'react-native';
import {  useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../redux/Actions/AuthenticationAction'
import { AppTabs } from './AppTabs';

interface RouteProps {}

const Stack = createStackNavigator<AuthParamList>()



export const HomeStack:React.FC<RouteProps> = ({}) => {

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()

    const { user, isLoggedIn } = useSelector((state: ApplicationState) => state.authReduder)

    if(loading) {
        return <ParentScreen>
            <Text>loading...</Text>
        </ParentScreen>
    }
    return (
        <NavigationContainer>
            {
                user? (
                    <AppTabs />
                ): (
                    <Stack.Navigator initialRouteName="Login">
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>
    );
}

