import React, { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus,faPlus } from "@fortawesome/free-solid-svg-icons";
import ResumeContext from "../../../context/resume/ResumeContext";


const Education = () => {
      const [inputFields, setInputField] = useState([
        { campus: "", course: "",year_of_enroll:"",year_of_completion:"",certificate:"",additional_info:"" },
      ]);
      const [inputValues, setInputValues] = useState([]);

      const { create_resume} = useContext(ResumeContext);
                                          
      const  handleAddFields =() =>{
            setInputField([
              ...inputFields,
              {
                campus: "",
                course: "",
                year_of_enroll: "",
                year_of_completion: "",
                certificate: "",
                additional_info: "",
              },
            ]);
      }

        const handleRemoveFields = (index) => {
        const values = [...inputFields]
        values.splice(index, 1)
        setInputField(values);
    };

    const setInputsValues = (index, event) =>{
       const values = [...inputFields];
       values[index][event.target.name] = event.target.value;
       setInputValues(values);    
    }    
      

    const handleSubmit =(e) =>{
      e.preventDefault();      
      var resumeData = inputValues.map(function (obj) {
        console.log('obj ::')
      return   Object.values(obj).map(l => l)        
      });
      let payload = { resumeDatatType: "Education", resumeData };  
      create_resume(payload)
      
    }

    return (
      <>
        <h6>YOUR EDUCATION INFORMATION</h6>
        <hr />

        {inputFields.length !== 0 ? (
          <form onSubmit={handleSubmit}>
            {inputFields.map((inputfield, index) => (
              <div key={index}>
                <div key={index}>
                  {/* enter campus */}
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCampus">CAMPUS</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCampus"
                        name="campus"
                        placeholder="Enter campus..."
                        value={inputfield.campus}
                        onChange={(e) => setInputsValues(index, e)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCourse">Course</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                        name="course"
                        placeholder="Enter course..."
                        value={inputfield.course}
                        onChange={(e) => setInputsValues(index, e)}
                      />
                    </div>
                  </div>
                  {/* End of campus */}

                  {/* enter enrollment dates */}
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputCampus">YEAR OF ENROLL</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCampus"
                        name="year_of_enroll"
                        placeholder="year_of_enroll"
                        value={inputfield.year_of_enroll}
                        onChange={(e) => setInputsValues(index, e)}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputCourse">YEAR OF COMPLETION</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                        name="year_of_completion"
                        placeholder="Enter course..."
                        value={inputfield.year_of_completion}
                        onChange={(e) => setInputsValues(index, e)}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputCourse">Certificate / Degree</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                        name="certificate"
                        placeholder="Enter course..."
                        value={inputfield.certificate}
                        onChange={(e) => setInputsValues(index, e)}
                      />
                    </div>
                  </div>
                  {/* End of campus */}

                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Additional information
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="additional_info"
                      rows={3}
                      value={inputfield.additional_info}
                      onChange={(e) => setInputsValues(index, e)}
                    />
                  </div>
                  <div>
                    <span
                      className="addTexts"
                      onClick={() => handleRemoveFields(index)}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faMinus}
                        style={{ color: "red" }}
                      />{" "}
                    </span>
                    <span
                      className="addTexts"
                      onClick={() => handleAddFields()}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faPlus}
                        style={{ color: "blue" }}
                      />
                    </span>
                  </div>
                  <div
                    style={{
                      borderBottom: "3px solid blue",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  />
                </div>
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : (
          <span className="addTexts" onClick={() => handleAddFields()}>
            {" "}
            <FontAwesomeIcon icon={faPlus} style={{ color: "blue" }} />
            Add section
          </span>
        )}
      </>
    );
}

export default Education
