import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER = 'SET-USER';
const EXIT_USER = 'EXIT-USER';
const SET_AUTH = 'SET-AUTH';

const initial = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthPage = (state = initial, action) => {
    switch (action.type) {
        case SET_USER:
            {
                return {
                    ...state,
                    isAuth: true,
                    ...action.data
                }
            }
        case EXIT_USER:
            {
                return {
                    ...state,
                    ...action.data,
                    isAuth: false
                }
            }
        default:
            {
                return state;
            }
    }
}

const setUser = (id, email, login, isAuth) => ({ type: SET_USER, data: { id, email, login, isAuth } });
const exitUser = (data) => ({ type: EXIT_USER, data });

export const IsAuth = () => async(dispatch) => {

    let response = await authAPI.isAuthMe();
    response.resultCode === 0 && dispatch(setUser(response.data.id, response.data.email, response.data.login, true))
}

export const logInUser = (email, password, rememberMe) => async(dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe);

    let actionStopSubmit = stopSubmit('login', { _error: response.messages[0] });
    response.resultCode === 0 ? dispatch(IsAuth()) : dispatch(actionStopSubmit);

}

export const logOutUser = () => async(dispatch) => {
    let response = await authAPI.logOut();
    response.resultCode === 0 && dispatch(exitUser({})) && dispatch(IsAuth());
}

export default AuthPage;