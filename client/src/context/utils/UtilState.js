// import React, { useReducer } from "react";
// import uuid from "uuid";
// import contactContext from "./ContactContext";
// import ContactReducer from "./ContactReducer";
// @RULE: REMEMBER TO DELETE THE SIDEBAR LOGIC.


import React, { useReducer } from "react";
import UtilContext from "./UtilContext";
import UtilReducer from "./UtilReducer";
import Axios from "../../AxiosInstance";

import {
    TOGGLE_SIDEBAR,
    SENT_ADMIN_MESSAGE,
    ERROR_SENT_ADMIN_MESSAGE,
} from "../ActionTypes";

const UtilState = (props) => {
  const initialState = {
    toggleSidebar: true,
    successMessage:null,
    failuerMessage:null
  };

  const [state, dispatch] = useReducer(UtilReducer, initialState);

  // @RULE : RECEIVE MESSAGE TO SEND TO ADMIN EMAIL

  const sendMessageToAdmin = async (data) => {
    try {
      const res = await Axios.post("/student/sendmail/", JSON.stringify(data));
      dispatch({
        type: SENT_ADMIN_MESSAGE,
        payload: res.data,
      });
    } catch (error) {     
      console.log("error is ", error.response);
      dispatch({
        type: ERROR_SENT_ADMIN_MESSAGE,
        payload:
         error.response ? error.response.data.message ||
          error.response.data.error :  "Error, Please Try again Otherwise Contact support"
         ,
      });
    }
  };

  // @RULE : TOGGLE SIDEBAR

  const toggle_sidebar = () => {
    dispatch({
      type: TOGGLE_SIDEBAR,
    });
  };

  return (
    <UtilContext.Provider
      value={{
        toggle_sidebar,
        toggleSidebar: state.toggleSidebar,
        sendMessageToAdmin,
        successMessage: state.successMessage,
        failuerMessage: state.failuerMessage,
      }}
    >
      {" "}
      {props.children}{" "}
    </UtilContext.Provider>
  );
};

export default UtilState;