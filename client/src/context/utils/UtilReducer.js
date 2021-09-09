/* eslint-disable import/no-anonymous-default-export */

import {
    TOGGLE_SIDEBAR
} from "../ActionTypes";

export default (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                toggleSidebar: !state.toggleSidebar,
            };
        default:
            return state;
    }
};