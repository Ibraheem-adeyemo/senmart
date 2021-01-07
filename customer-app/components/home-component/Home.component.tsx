import React, { useState, useEffect } from 'react'
import { ApplicationState } from '../../Stores/Store/reducers'
import { Text, View } from 'react-native';
import {  useSelector, useDispatch } from 'react-redux';
import deviceStorage from '../../shared/services/deviceStorage';
import LocationCheckBox from '../location-check-box/Location-check-box.component';

interface RouteProps {}

export const HomePage:React.FC<RouteProps> = ({}) => {
    const userZone = deviceStorage.getSavedDataFromDevice('userZone');
    const zonState:any = useSelector((state: ApplicationState) => state.zoneReducer);
    return (
        <View>
            {
            zonState?.zones?.zones.map((z, i) => {
                return <LocationCheckBox zone={z} key={i} />
            }) }
            <Text>This is now my home component</Text>
        </View>
    );
}
