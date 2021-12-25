import { render } from "@testing-library/react";
import { stopSubmit } from "redux-form";
import { API } from "../api/api";
import { auth } from "./authreducer";

const INITIALIZED_SUCESS = 'INITIALIZED_SUCESS';

export const initialuzedSucess = () => ({ type: INITIALIZED_SUCESS});

let initialState = {
    initialized: false
}

let appreducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

export const initialized = () =>
    async (dispatch) => {
        await dispatch(auth());
        dispatch(initialuzedSucess());   
    }


export default appreducer;