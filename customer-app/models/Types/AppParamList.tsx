import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type AppParamList = {
    Home: object | undefined,
    Profile: object| undefined,
    Search: undefined
}

export interface ChildrenNode {
    children: React.ReactChild | React.ReactChildren
}

export type AppNavProps<T extends keyof AppParamList> = {
    navigation: StackNavigationProp<AppParamList, T>;
    route: RouteProp<AppParamList, T>
}