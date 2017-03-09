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

export const LOGOUT_USER = 'LOGOUT_USER';

export function logOutUser() {
    return {
        type: LOGOUT_USER
       
    };
}

export const SWITCH_PAGE = 'SWITCH_PAGE';

export function switchPage(page) {
    return {
        type: SWITCH_PAGE,
        menuItem: page

    };
}

export const SWITCH_DAY = 'SWITCH_DAY';

export function switchDay(dayShed) {
    return {
        type: SWITCH_DAY,
        dayShed: dayShed

    };
}