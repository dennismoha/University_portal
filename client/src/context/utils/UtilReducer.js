/* eslint-disable import/no-anonymous-default-export */

import {
    TOGGLE_SIDEBAR,
    SENT_ADMIN_MESSAGE,
    ERROR_SENT_ADMIN_MESSAGE,
    SUCCESS_PASSWORD_RESET_EMAIL_SENT,
    ERROR_SUCCESS_PASSWORD_RESET_EMAIL_NOT_SENT,
    TOKEN_VERIFIED_PAYLOAD_RETURNED,
    ERROR_VERIFYING_TOKEN,
    PASSWORD_SUCCESS_CHANGED_PAYLOAD,
} from "../ActionTypes";

export default (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                toggleSidebar: !state.toggleSidebar,
            };
        case SENT_ADMIN_MESSAGE:
            return {
                ...state,
                successMessage: action.payload,
            };
        case ERROR_SENT_ADMIN_MESSAGE:
            return {
                ...state,
                failuerMessage: action.payload,
            };
        case SUCCESS_PASSWORD_RESET_EMAIL_SENT:
            return {
                ...state,
                successPasswordResetMail: action.payload,
            };
        case ERROR_SUCCESS_PASSWORD_RESET_EMAIL_NOT_SENT:
            return {
                ...state,
                erropasswordresetemail: action.payload,
            };
        case TOKEN_VERIFIED_PAYLOAD_RETURNED:
            console.log("payoad is ", action.payload);
            return {
                ...state,
                payloadfromtoken: action.payload,
            };
        case ERROR_VERIFYING_TOKEN:
            return {
                ...state,
                errorfromtoken: action.payload,
            };
        case PASSWORD_SUCCESS_CHANGED_PAYLOAD:
            return {
                ...state,
                password_success_changed_payload: action.payload,
            };
        default:
            return state;
    }
};