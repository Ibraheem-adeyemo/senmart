import React, { useState, useEffect } from 'react'
import { ApplicationState } from '../../Stores/Store/reducers'
import { Text, View, Button, Modal } from 'react-native';
import {  useSelector, useDispatch } from 'react-redux';
import deviceStorage from '../../shared/services/deviceStorage';
import LocationCheckBox from '../location-check-box/Location-check-box.component';
import LocationCheck from '../location-check-box/Location-check.component';

interface RouteProps {}

export const HomePage:React.FC<RouteProps> = ({}) => {
    const [chosenZone, stechosenZone] = useState<any>(null)
    const userZone = deviceStorage.getSavedDataFromDevice('userZone');
    const zonState:any = useSelector((state: ApplicationState) => state.zoneReducer);

    const setSelectedZone = (zone) => {
        let zInd;

        zonState?.zones?.zones.map((z, i) => {
            if(z.id === zone.id){
                z.isSelected = true;
                zInd = i
            } else {
                z.isSelected = false;
            }
            return z
        })
        
        if(zInd > -1) {
            stechosenZone(zonState?.zones?.zones[zInd]);
        }

    }
    
    return (
        <View>
            <LocationCheck />
        </View>
    );
}
