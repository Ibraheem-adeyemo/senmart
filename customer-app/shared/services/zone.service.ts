import {SharedCookieKeys} from '../constants/shared-cookies-keys';
import deviceStorage from './deviceStorage';

export class ZoneService {
    saveDeliveryZone(zone) {
        deviceStorage.saveDataToDevice(SharedCookieKeys.LOCATION_CHECK, 'done');
        return zone;
      }
}