/**
 * Created by andrey.manaenko on 10.02.2017.
 */
export const LOGIN_USER = 'LOGIN_USER';

export function logInUserToSite(user) {
    return {
        type: LOGIN_USER,
        user: user

    };
}

export const LOGIN_OUT = 'LOGOUT_USER';

export function logOutUser() {
    return {
        type: LOGOUT_USER
       
    };
}