/* eslint-disable import/no-anonymous-default-export */

import {
    CREATE_RESUME,
} from "../ActionTypes";

export default (state, action) => {
    switch (action.type) {
        case CREATE_RESUME:
            // case CREATE_PROFILE_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                // ...action.payload,
                hold_resume: action.payload,
            };
        default:
            return state;
    }
};