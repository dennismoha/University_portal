/* eslint-disable import/no-anonymous-default-export */

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    CLEAR_EDIT_MODE,
    SET_EDIT_MODE,
    SEND_DOCS,
    SEND_DOCS_FAIL,
    CLEAR_SUCCESS,
} from "../ActionTypes";

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            // case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                // ...action.payload,
                loading: false,
                success: true,
            };
        case LOGIN_SUCCESS:
            console.log("login ", action.payload);
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("token");
            console.log("error action payload ", action.payload);
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
                payLoadToPay: null,
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };

            // case LOADING:
            //     return {
            //         ...state,
            //         loading: action.payload,
            //     };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
                success: false,
            };
            // case CREATE_PROFILE_FAIL:
            //     return {
            //         ...state,
            //         error: "FAILED TO LOAD CREATE PROFILE",
            //         success: false,
            //     };
        case SET_EDIT_MODE:
            console.log("reached the set edit reducer");
            return {
                ...state,
                payLoadToPay: action.payload,
            };
        case CLEAR_EDIT_MODE:
            return {
                ...state,
                payLoadToPay: null,
            };
        case SEND_DOCS:
            console.log("upload payload ", action.payload);
            return {
                ...state,
                success: action.payload,
            };
        case SEND_DOCS_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: null,
            };
        default:
            return state;
    }
};