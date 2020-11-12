import asyncStorageMock from '@react-native-community/async-storage/jest/async-storage-mock';


jest.mock('@react-native-async-storage/async-storage')
export default asyncStorageMock

// export default from '@react-native-async-storage/async-storage/jest/async-storage-mock'