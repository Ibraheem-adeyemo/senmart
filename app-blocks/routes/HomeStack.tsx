import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

import { SignUpScreen, LoginScreen } from '../screens'
import { AuthParamList } from '../Types/AuthParamLists';
import { ParentScreen } from '../screens/ParentScreen';
import { Text, AsyncStorage } from 'react-native';
import { AuthContext } from '../screens/AuthProvider'
import { AppTabs } from './AppTabs';

interface RouteProps {}

const Stack = createStackNavigator<AuthParamList>()



export const HomeStack:React.FC<RouteProps> = ({}) => {

    const { user, login } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(user => {
                if(user) {
                    login()
                }
            })
            .catch(error => console.log(error))

        setLoading(false)
    }, [])

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
