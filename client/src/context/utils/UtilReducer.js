/* eslint-disable import/no-anonymous-default-export */

import {
    TOGGLE_SIDEBAR,
    SENT_ADMIN_MESSAGE,
    ERROR_SENT_ADMIN_MESSAGE,
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
        default:
            return state;
    }
};