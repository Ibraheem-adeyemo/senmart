import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from '../Types/AppParamList';

import { HomeScreen, ProfileScreen, SearchScreen } from '../screens'

type ApptabsProps = {};

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabs:React.FC<ApptabsProps> = () => {
    return (
        <Tabs.Navigator initialRouteName='Profile'>
            <Tabs.Screen name='Home' component={HomeScreen} />
            <Tabs.Screen name='Search' component={SearchScreen} />
            <Tabs.Screen name='Profile' component={ProfileScreen} />
        </Tabs.Navigator>
    )
}
