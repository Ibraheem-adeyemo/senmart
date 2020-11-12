import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ChildrenNode } from '../models/Types/AppParamList'


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const ParentScreen = ({ children }: ChildrenNode) => (
    <View style={style.container}>{children}</View>
)
