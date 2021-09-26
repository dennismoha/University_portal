/* eslint-disable import/no-anonymous-default-export */

import {
    CREATE_RESUME,
    RESUME_DATA,
    ERROR_FETCHING_RESUME_DATA,
} from "../ActionTypes";

export default (state, action) => {
    switch (action.type) {
        case CREATE_RESUME:
            return {
                ...state,
                hold_resume: action.payload,
            };

            // @RULE: HOLD RESUME DATA

        case RESUME_DATA:
            return {
                ...state,
                fetchedData: action.payload,
            };

            // @RULE : DISPLAY ERROR WITH CRUD RESUME
        case ERROR_FETCHING_RESUME_DATA:
            return {
                ...state,
                resumeError: action.payload,
            };
        default:
            return state;
    }
};