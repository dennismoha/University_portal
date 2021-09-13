// import React, { useReducer } from "react";
// import uuid from "uuid";
// import contactContext from "./ContactContext";
// import ContactReducer from "./ContactReducer";

import React, { useReducer } from "react";
import studentRegisterContext from "./studentRegisterContext";
import studentRegisterReducer from "./studentRegisterReducer";
import Axios from '../../AxiosInstance'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    LOADING,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAIL,
    CLEAR_EDIT_MODE,
    SET_EDIT_MODE,
    SEND_DOCS,
    SEND_DOCS_FAIL,
    CLEAR_SUCCESS,
} from "../ActionTypes";

import { setAuthToken } from "../../axios/SetAuthToken";

const StudentRegisterState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
        success: false,
        payLoadToPay: null,
        docs: null
    };

    const [state, dispatch] = useReducer(studentRegisterReducer, initialState);

    // @RULE : REGISTER STUDENT
    const register = async(FormData) => {
        dispatch({ type: LOADING, payload: true });
        console.log("reached here ", FormData);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await Axios.post(
                "/auth/register",
                FormData,
                config
            );
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
            // loadUser();
        } catch (error) {
            console.log("error in failure ", error.response.data);
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.message || error.response.data.error,
            });
        }
    };

    //@RULE : CLEAR SUCCESS

    const clear_success = () => {
        if (state.success) {
            setTimeout(() => {
                dispatch({
                    type: CLEAR_SUCCESS,
                });
            }, 5000);
        }
    };

    // @RULE : CREATE STUDENT PROFILE
    const createProfile = async(FormData) => {
        dispatch({ type: LOADING, payload: true });
        console.log("reached here ", FormData);    

        try {
            const res = await Axios.post(
              "/student/createprofile",
              FormData,
              
            );
            dispatch({
                type: CREATE_PROFILE_SUCCESS,
                payload: res.data,
            });
            loadUser();
        } catch (error) {
            console.log("error in failure ", error.response ? error.response.data : error);
            dispatch({
                type: CREATE_PROFILE_FAIL,
                payload: error.response ? error.response.data.message || error.response.data.error: " error",
            });
        }
    };

    const loadUser = async() => {
        console.log('caaalllllllleddddd')
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await Axios.get("/auth/user");
            console.log("response is", res);
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        } catch (error) {
            console.log("load error ", error.response);
            dispatch({ type: AUTH_ERROR });
        }
    };

    // Login Users
    const login = async(FormData) => {
        try {
            const res = await Axios.post(
                "/auth/login",
                FormData,
            );
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });

            loadUser();
        } catch (error) {
            console.log("login error data", error);
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response ? error.response.data.message || error.response.data.error : "server error ",
            });
        }
    };

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    // @RULE : SET EDIT PAYLOAD

    const editPayload = (payload) => {
        return dispatch({ type: SET_EDIT_MODE, payload: payload });
    };

    // @RULE : CLEAR EDIT PAYLOAD

    const clearEditPayload = (payload) => {
        return dispatch({ type: CLEAR_EDIT_MODE });
    };

    // logout
    const logout = () => {
        console.log("reached to logout");
        return dispatch({ type: LOGOUT });
    };

    // @RULE: SEND DOCUMENTS
    const sendDocs = async(docs) => {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        let fd = new FormData();

        fd.append("cv", docs.cv, docs.cv.name);
        fd.append("cover_letter", docs.cover_letter, docs.cover_letter.name);
        fd.append("certificates", docs.certificates, docs.certificates.name);

        try {
            const res = await Axios.post(
              "/student/addmedia",
              fd,
              config
            );
            dispatch({
                type: SEND_DOCS,
                payload: res.data.message,
            });
            loadUser();
        } catch (error) {
            console.log("error data", error.response);
            dispatch({
                type: SEND_DOCS_FAIL,
                payload: error.response.data.message || error.response.data.error,
            });
        }

    }

    console.log("state::", state);

    return ( <studentRegisterContext.Provider value = {
            {
                register,
                error: state.error,
                clearErrors,
                isAuthenticated: state.isAuthenticated,
                loadUser,
                user: state.user,
                token: state.token,
                login,
                logout,
                loading: state.loading,
                success: state.success,
                createProfile,
                editPayload,
                clearEditPayload,
                payLoadToPay: state.payLoadToPay,
                sendDocs,
                links: state.docs,
                clear_success,
            }
        } > { " " } { console.log("isss:", state.isAuthenticated) } { props.children } { " " } </studentRegisterContext.Provider>
    );
};

export default StudentRegisterState;