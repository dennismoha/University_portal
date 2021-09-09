// import React, { useReducer } from "react";
// import uuid from "uuid";
// import contactContext from "./ContactContext";
// import ContactReducer from "./ContactReducer";

import React, { useReducer } from "react";
import UtilContext from "./UtilContext";
import UtilReducer from "./UtilReducer";
import {
    TOGGLE_SIDEBAR
} from "../ActionTypes";

const UtilState = (props) => {
    const initialState = {
       toggleSidebar: true
       
    };

    const [state, dispatch] = useReducer(UtilReducer, initialState);

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
        }}
      >
        {" "}
        {props.children}{" "}
      </UtilContext.Provider>
    );
};

export default UtilState;