import AsyncStorage from '@react-native-community/async-storage';

const deviceStorage = {
    saveDataToDevice: async (key:string, value: any) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log('Async storage error: ' + error.message);
        }
    },
    getSavedDataFromDevice: async (key: string) => {
        try {
            return await AsyncStorage.getItem(key)
        } catch (error) {
            console.log('Async storage error: ' + error.message);
        }
    },
    deleteDeviceData: async (key: string) => {
        try {
            AsyncStorage.removeItem(key)
        } catch (error) {
            console.log('Async storage error: ' + error.message);
        }
    }
};

export default deviceStorage;