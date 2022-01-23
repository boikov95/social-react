import { render } from "@testing-library/react";
import { stopSubmit } from "redux-form";
import { API } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER = 'SET_USER';
const SET_CAPTCHA = 'SET_CAPTCHA';

export const setUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } });
export const setCaptcha = (captchaUrl) => ({ type: SET_CAPTCHA, captchaUrl });

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

let authreducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default: return state;
    }
}

export const auth = () =>
    async (dispatch) => {
        let data = await API.getHeader();
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data.id, data.data.login, data.data.email, true));
        }
    }

export const userLogin = (formData) =>
    async (dispatch) => {
        let data = await API.getLogin(formData.login, formData.password, formData.rememberMe, formData.captcha);
        if (data.resultCode === 0) {
            dispatch(auth());
            dispatch(setCaptcha(null));
        }
        else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = (data.messages.length > 0 ? data.messages[0] : "Some error");
            dispatch(stopSubmit("login", { _error: message }));
        }

    }

export const userLoginOut = () =>
    async (dispatch) => {
        let data = await API.loginOut();
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    }

export const getCaptchaUrl = () =>
    async (dispatch) => {
        let data = await API.getCaptchaUrl();
        debugger;
        dispatch(setCaptcha(data.url));
    }

export default authreducer;