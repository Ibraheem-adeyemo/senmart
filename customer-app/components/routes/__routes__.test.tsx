import React from 'react';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'
import renderer from 'react-test-renderer';
import { AppTabs } from './AppTabs';
import { HomeStack } from './HomeStack';

// beforeAll(() => { 
    jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
//   })

describe("<AppTabs /> rendering", () => {
    it("Renders <AppTabs /> Component correctly", () => {
        const tree = renderer.create(<AppTabs />);
        expect(tree).toMatchSnapshot()
    })
})
