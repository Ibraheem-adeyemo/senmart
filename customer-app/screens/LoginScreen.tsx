import React, { useContext } from 'react';
import { View, Text, Button} from 'react-native'
import { ParentScreen } from './ParentScreen'

export const LoginScreen = ({navigation}: any) => {
    return <ParentScreen>
        <View>
            <Text> This is Login screen</Text>
            <Button title="Login" onPress={() => {
                // navigation.navigate('SignUp')
            }} />
        </View>
    </ParentScreen>
}
