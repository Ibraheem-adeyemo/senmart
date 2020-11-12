import axios from 'axios';
import { api } from '../../shared/api';
import deviceStorage from './deviceStorage';

const httpService = axios.create({
    baseURL: api.supermartStagingApi,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: deviceStorage.getSavedDataFromDevice('token_id')
    }
});

export default httpService;
