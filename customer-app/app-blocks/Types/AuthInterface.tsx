export interface UserModel {
    firstname: string,
    lastname: string,
    email: string
}

export interface LoginInterface {
    readonly actionType: 'LOGIN',
    payload: {
        email: string, password: string
    }
};

export interface SignUpInterface {
    readonly actionType: 'USER_SIGNUP',
    payload: UserModel
};

export interface ErrorInterface {
    readonly actionType: 'USER_AUTH_ERRROR',
    payload: any
};

export type AuthActionType = LoginInterface | SignUpInterface| ErrorInterface;