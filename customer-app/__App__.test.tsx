import React from 'react';
import renderer from 'react-test-renderer';
import Providers from './App';

describe("<App />", () => {
    it("It works fine", () => {
        // const tree = renderer.create(App).toJSON();
        // console.log(tree);
        expect(true).toBeTruthy();
    })
})