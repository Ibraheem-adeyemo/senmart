export interface UserModel {
    firstname: string,
    lastname: string,
    email: string
}

export interface LoginInterface {
    readonly type: 'LOGIN',
    payload: {
        email: string, password: string
    }
};

export interface SignUpInterface {
    readonly type: 'USER_SIGNUP',
    payload: UserModel
};

export interface ErrorInterface {
    readonly type: 'USER_AUTH_ERRROR',
    payload: any
};

export interface LoginActionInterface {
    user: object,
    isLoggedIn: boolean
}

export type ActionTypeInterface = LoginInterface | SignUpInterface| ErrorInterface;