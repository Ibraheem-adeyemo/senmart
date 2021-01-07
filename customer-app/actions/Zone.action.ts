import {Dispatch} from 'react'
import { UtilitySevice } from '../shared/services/utility.service';
import httpService from '../utils/api-service/httpService';
import { baseApiConfig } from '../shared/constants/baseApi.config';
import { actionType } from '../shared/constants/action.type';
import {errorActionCreator} from './Error.action'
import deviceStorage from '../shared/services/deviceStorage';
import { SharedCookieKeys } from '../shared/constants/shared-cookies-keys';

const zoneActionCreator = {
    loading: () => {
        return {
            type: actionType.LOADING
        }
    },
    getCurrentZoneData: (payload: any) => {
        return {
            type: actionType.GET_CURRENT_ZONE,
            payload
        }
    }, 
    getZones: (payload: any) => {
        return {
            type: actionType.GET_ZONES,
            payload
        }
    },
    setShoppingZone: (payload: any) => {
        return {
            type: actionType.SET_SHOPPING_ZONES,
            payload
        }
    }
}

export const getCurrentZoneAction = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(zoneActionCreator.loading())
            const {data} = await httpService.get(baseApiConfig.CURRENT_ZONE);
            if(data) {
                dispatch(zoneActionCreator.getCurrentZoneData(data))
            }
        } catch (error) {
            dispatch(errorActionCreator.onError(error.response))
        }
    }
}

export const getZonesByRegion = (id:number) => {
    return (dispatch) => {
        dispatch(zoneActionCreator.loading())
        const param = UtilitySevice.buildQueryUrlParams({region_id:id});
        httpService.get(baseApiConfig.ZONES + param).then(res => {
            res.data.data.zones.map(z => {
                                z['areas'] = z['address_area'].map((a:any) => a.name).join(', ');
                                z['hint'] = `${z.areas.substring(0, 15)}....see more`;
                                delete z['address_area'];
                                z.isSelected = false;
                            })
            dispatch(zoneActionCreator.getZones(res.data.data));
        }).catch(error => {
            dispatch(errorActionCreator.onError(error.response));
        });
    }
}

export const setShoppingZone = (zone) => {
    return async (dispatch) => {
        try {
            dispatch(zoneActionCreator.loading())
            const {data} = await httpService.put(baseApiConfig.ZONE + zone.id);
            if(data) {
                dispatch(zoneActionCreator.setShoppingZone(data.data))
                deviceStorage.saveDataToDevice(SharedCookieKeys.CURRENT_DELIVERY_ZONE, zone);
                deviceStorage.saveDataToDevice(SharedCookieKeys.LOCATION_CHECK, 'done');
            }
        } catch (error) {
            dispatch(errorActionCreator.onError(error.response))
        }
    }
}
