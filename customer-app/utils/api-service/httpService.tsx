import axios from 'axios';
import deviceStorage from '../../shared/services/deviceStorage';
import { config } from '../config';
import {SharedCookieKeys} from '../../shared/constants/shared-cookies-keys';

const httpService = axios.create({
    baseURL: config.apiDomain
});

const stringGen = (len) => {
    let text = ' ';

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < len; i++) {
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return text.toString().replace(/\s/g, '');
}

const getSessionId = () => {
    let sessionId;
    sessionId = deviceStorage.getSavedDataFromDevice(SharedCookieKeys.SESSION_ID);
    if(!sessionId) {
        sessionId = stringGen(32);
        deviceStorage.saveDataToDevice(SharedCookieKeys.SESSION_ID, sessionId);
    }
}

getSessionId();

let clientZone
try {
    clientZone = deviceStorage.getSavedDataFromDevice(SharedCookieKeys.CURRENT_DELIVERY_ZONE) || {};
} catch (error) {
    clientZone = {}
}

httpService.interceptors.request.use(requestConfig => {
    requestConfig.params = {
        'access_id': config.access_id,
        'session_id': deviceStorage.getSavedDataFromDevice(SharedCookieKeys.SESSION_ID),
        'client_zone': clientZone.id,
        ...requestConfig.params,
    };
    return requestConfig;
} );

export default httpService;
