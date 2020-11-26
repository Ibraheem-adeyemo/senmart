import React from 'react';
import renderer from 'react-test-renderer';
import {LoginScreen, HomeScreen} from '../screens/index'

describe("Render app's screens", () => {
    it("Renders <LoginScreen /> Component correctly", () => {
        const tree = renderer.create(<LoginScreen />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})

describe("<HomeScreen /> rendering", () => {
    // it("Renders <HomeStack /> Component correctly", () => {
    //     const tree = renderer.create(<HomeScreen />).toJSON();
    //     expect(tree).toMatchSnapshot()
    // })
})
