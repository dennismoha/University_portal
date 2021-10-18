// import React, { useReducer } from "react";
// import uuid from "uuid";
// import contactContext from "./ContactContext";
// import ContactReducer from "./ContactReducer";

import React, { useReducer } from 'react'
import ResumeContext from './ResumeContext'
import ResumeReducer from './ResumeReducer'
import Axios from '../../AxiosInstance'
import {
  CREATE_RESUME,
  RESUME_DATA,
  ERROR_FETCHING_RESUME_DATA,
} from '../ActionTypes'

const ResumeState = (props) => {
  const initialState = {
    hold_resume: null,
    fetchedData: null,
    resumeError: null,
  }

  const [state, dispatch] = useReducer(ResumeReducer, initialState)

  // @RULE : CREATE RESUME

  const create_resume = async (FormData,resumeSection) => {
    console.log('reached here to edit  ', FormData)
    let url;
      if (FormData.length == 0) {
        // make sure to dispatch an error action here
        return null
      }
    let urls = {
      url: [
        '/resume/create/experience',
        '/resume/create/education/',
        '/resume/resume/edit/',
      ],
    }

    if(resumeSection === 'Education') {
      url = urls.url[1]
    }else if (resumeSection === 'Experience'){
        url = urls.url[0]
    }else if (resumeSection === 'Edit'){
        url = urls.url[2]
    
    } ;
    console.log('url is ', url)

    if (resumeSection === 'Edit') {
      try {
        console.log('before sending payload data ', JSON.stringify(FormData))
          const res = await Axios.put(url, JSON.stringify(FormData))
          // console.log('edit res is ', res)
          return null;
      } catch (error) {
        console.log('error editing', error.response)
      }
    }
      if (FormData.length === 1) {
        const res = await Axios.post(url, JSON.stringify(FormData[0]))
        console.log(res)
        // dispatch({
        //   type: CREATE_RESUME,
        //   payload: res.data,
        // });
      } else {
        let formDataArray = []
        for (var i in FormData) {
          formDataArray.push(Axios.post(url, JSON.stringify(FormData[i])))
        }

        Promise.all(formDataArray)
          .then((respons) => {
            console.log('promise response ', respons)
          })
          .catch((err) => {
            console.log('promise err', err)
          })
      }

   
  
    // try {      
    //   console.log('formdaya', FormData)
    //   // const res = await Axios.post("/student/createresume/", JSON.stringify(FormData));
    //   // dispatch({
    //   //   type: CREATE_RESUME,
    //   //   payload: res.data,
    //   // });
    // } catch (error) {
    //   console.log('error in failure ', error.response.data)
    //   console.log('error is ', error)
    //   // dispatch({
    //   //     type: REGISTER_FAIL,
    //   //     payload: error.response.data.message || error.response.data.error,
    //   // });
    // }
  }

  //@RULE: FETCH RESUME

  const fetch_resume = async () => {
    try {
      const res = await Axios.get('/resume/resume/')
      console.log('triggered', res.data)
      dispatch({
        type: RESUME_DATA,
        payload: res.data,
      })
    } catch (error) {
      console.log('error is ', error)
      dispatch({
        type: ERROR_FETCHING_RESUME_DATA,
        payload: 'ERROR FETCHING RESUME DATA. TRY AGAIN OR CONTACT SUPPPORT',
      })
    }
  }

  console.log('state::', state)

  return (
    <ResumeContext.Provider
      value={{
        hold_resume: state.hold_resume,
        fetchedResumeData: state.fetchedData,
        resumeError: state.resumeError,
        create_resume,
        fetch_resume,
      }}
    >
      {' '}
      {props.children}{' '}
    </ResumeContext.Provider>
  )
}

export default ResumeState
