import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type AuthParamList = {
    Login: object | undefined,
    SignUp: object | undefined,
    Home: object | undefined,
} | Record<string, object | undefined>

export interface AuthNavProps<T extends keyof AuthParamList> {
    navigation: StackNavigationProp<AuthParamList, T>;
    route: RouteProp<AuthParamList, T>
}