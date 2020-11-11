import React from 'react'
import { View, StyleSheet } from 'react-native'


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

interface ChildrenNode {
    children: React.ReactChild | React.ReactChildren
}

export const ParentScreen = ({ children }: any) => (
    <View style={style.container}>{children}</View>
)
