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
  RESUME_DATA,
  ERROR_FETCHING_RESUME_DATA,
} from "../ActionTypes";


const ResumeState = (props) => {
        const initialState = {
            hold_resume:null,
            fetchedData:null,
            resumeError:null
           
        };

        const [state, dispatch] = useReducer(ResumeReducer, initialState);

        // @RULE : CREATE RESUME

        const create_resume = async(FormData) => {           
            console.log("reached here ", FormData);        
            try {
                const res = await Axios.post("/student/createresume/", JSON.stringify(FormData));
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

        //@RULE: FETCH RESUME
        
        const fetch_resume = async () => {          
          try {
            const res = await Axios.get(
              "/student/fetchResume/"             
            );
            console.log("triggered", res.data);
            dispatch({
              type: RESUME_DATA,
              payload: res.data,
            });
          } catch (error) {           
            console.log("error is ", error);
            dispatch({
              type: ERROR_FETCHING_RESUME_DATA,
              payload:"ERROR FETCHING RESUME DATA. TRY AGAIN OR CONTACT SUPPPORT",
            });
          }
        };

       
        console.log("state::", state);

        return (
          <ResumeContext.Provider
            value={{
              hold_resume: state.hold_resume,
              fetchedData: state.fetchedData,
              resumeError: state.resumeError,
              create_resume,
              fetch_resume,
            }}
          >
            {" "}
            {props.children}{" "}
          </ResumeContext.Provider>
        );
        };

        export default ResumeState;