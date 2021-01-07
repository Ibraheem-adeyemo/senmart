import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { ParentScreen } from './ParentScreen'
import { AppNavProps } from '../models/Types/AppParamList';
import {HomePage} from '../components/home-component/Home.component';
import { useDispatch } from 'react-redux';
import { getCurrentZoneAction, getZonesByRegion } from '../actions/Zone.action';

export const HomeScreen = ({navigation}: AppNavProps<'Home'>) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getZonesByRegion(1))
        dispatch(getCurrentZoneAction());
    }, [])
    return (<ParentScreen>
        <View>
            <HomePage />
            <Button title="Logout" onPress={() => {
                // navigation.navigate('Login')
            }} />
        </View>
    </ParentScreen>)
}
