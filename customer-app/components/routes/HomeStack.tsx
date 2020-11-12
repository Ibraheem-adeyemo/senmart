import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, RouteProp} from '@react-navigation/native';
import { ApplicationState } from '../../utils/redux/Stores/reducers'
import { SignUpScreen, LoginScreen } from '../../screens/index'
import { AuthParamList } from '../../models/Types/AuthParamLists';
import { ParentScreen } from '../../screens/ParentScreen';
import { Text } from 'react-native';
import {  useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../login-component/Login.action';
import { AppTabs } from './AppTabs';

interface RouteProps {}

const Stack = createStackNavigator<AuthParamList>()

export const HomeStack:React.FC<RouteProps> = ({}) => {
    const [loading, setLoading] = useState(false);

    // const dispatch = useDispatch()
    const { user, isLoggedIn } = useSelector((state: ApplicationState) => state.loginReducer)
    if(loading) {
        return <ParentScreen>
            <Text>loading...3</Text>
        </ParentScreen>
    }
    return (
        <NavigationContainer>
            {
                isLoggedIn? (
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
