// import React, { useReducer } from "react";
// import uuid from "uuid";
// import contactContext from "./ContactContext";
// import ContactReducer from "./ContactReducer";

import React, { useReducer } from "react";
import ResumeContext from "./ResumeContext";
import ResumeReducer from "./ResumeReducer";
import Axios from "../../AxiosInstance";
import {
 CREATE_RESUME,
  
} from "../ActionTypes";

import { setAuthToken } from "../../axios/SetAuthToken";

const ResumeState = (props) => {
        const initialState = {
            hold_resume:null
           
        };

        const [state, dispatch] = useReducer(ResumeReducer, initialState);

        // @RULE : REGISTER STUDENT
        const create_resume = async(FormData) => {
            // dispatch({ type: LOADING, payload: true });
            console.log("reached here ", FormData);
        
            try {
                const res = await Axios.post("/student/createresume/", FormData,);
                dispatch({
                  type: CREATE_RESUME,
                  payload: res.data,
                });
               
            } catch (error) {
                console.log("error in failure ", error.response.data);
                console.log('error is ',error)
                // dispatch({
                //     type: REGISTER_FAIL,
                //     payload: error.response.data.message || error.response.data.error,
                // });
            }
        };

       
        console.log("state::", state);

        return (
          <ResumeContext.Provider
            value={{
              create_resume ,
              hold_resume : state.hold_resume,
            }}
          >
            {" "}
            {props.children}{" "}
          </ResumeContext.Provider>
        );
        };

        export default ResumeState;