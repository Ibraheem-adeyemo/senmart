import React, { Children } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

type ChildrenNode = {
    children: React.ReactChild | React.ReactChildren
}

type NavigationType = {
    navigation: string
}

const ScreenContainer = ({ children }: ChildrenNode) => (
    <View style={style.container}>{children}</View>
)

export const Home = () => (
    <ScreenContainer>
        <>
            <Text>Welcom To Supermart</Text>
            <Button title="Welcome" onPress={() => alert('welcom')} />
            <Button title="Press" onPress={() => alert('button pressed')} />    
        </>
    </ScreenContainer>
)

export const Deatails = () => (
    <ScreenContainer>
        <>
            <Text>Details Screen</Text>   
        </>
    </ScreenContainer>
)

export const Search = ({ navigation }: NavigationType) => (
    <ScreenContainer>
        <>
            <Text>Search Screen {navigation}</Text>
            <Button title="Welcome" onPress={() => alert('welcom')} />
            <Button title="Press" onPress={() => alert('button pressed')} />    
        </>
    </ScreenContainer>
)

export const Profile = ({ navigation }: NavigationType) => (
    <ScreenContainer>
        <>
            <Text>Profile Screen {navigation}</Text>
            <Button title="Welcome" onPress={() => alert('welcom')} />
            <Button title="Press" onPress={() => alert('button pressed')} />    
        </>
    </ScreenContainer>
)

export const Search2 = () => (
    <ScreenContainer>
        <>
            <Text>Search 2 screen</Text>   
        </>
    </ScreenContainer>
)

export const Loading = () => (
    <ScreenContainer>
        <>
            <Text>Loading...</Text>  
        </>
    </ScreenContainer>
)

export const SignIn = (navigation: any) => (
    <ScreenContainer>
        <>
            <Text>Sign in screen</Text>
            <Button title="Welcome" onPress={() => alert('second welcom')} />
            <Button title="CreateAccount" onPress={() => {navigation.navigation.push('CreateAccount')}} />    
        </>
    </ScreenContainer>
)

export const CreateAccount = () => (
    <ScreenContainer>
        <>
            <Text>Create Account Screen</Text>
            <Button title="Welcome" onPress={() => alert('welcom')} />
            <Button title="Press" onPress={() => alert('button pressed')} />    
        </>
    </ScreenContainer>
)