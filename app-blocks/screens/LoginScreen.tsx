import React, { useContext } from 'react';
import { View, Text, Button} from 'react-native'
import { ParentScreen } from './ParentScreen'
import { AuthContext } from './AuthProvider';

interface LoginProps {}

export const LoginScreen = ({navigation}: any) => {
    const { login } = useContext(AuthContext)
    return <ParentScreen>
        <View>
            <Text> This is Login screen</Text>
            <Button title="Login" onPress={() => {
                // navigation.navigate('SignUp')
                login()
            }} />
        </View>
    </ParentScreen>
}
