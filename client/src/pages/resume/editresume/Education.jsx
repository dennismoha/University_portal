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

    const setInputsValues = (e) =>{
      console.log(e.target.value)
      setInputValues({ ...inputValues, [e.target.name]: e.target.value });

    }
    console.log('inputValues is ', inputValues)
        let {
          campus,
          course,
          year_of_enroll,
          year_of_completion,
          certificate,
          additional_info,
        } = "";

    const handleSubmit =(e) =>{
      e.preventDefault();
      create_resume(JSON.stringify(inputValues))
      // const k = JSON.stringify(inputFields);
      // console.log(k)
      // console.log('--------m', JSON.parse(k))
    }
    return (
      <>
        <h6>YOUR EDUCATION INFORMATION</h6>
        <hr />

        {inputFields.length !== 0 ? (
          <form onSubmit={handleSubmit}>
            {inputFields.map((inputfield, index) => (
              <>
                <div key={index}>
                  {/* enter campus */}
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCampus">CAMPUS</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCampus"
                        name={`school[${index}][campus]`}
                        placeholder="Enter campus..."
                        value={campus}
                        onChange={setInputsValues}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCourse">Course</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                        name={`school[${index}][course]`}
                        placeholder="Enter course..."
                        value={course}
                        onChange={setInputsValues}
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
                        name={`school[${index}][year_of_enroll]`}
                        placeholder="Enter campus..."
                        value={year_of_enroll}
                        onChange={setInputsValues}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputCourse">YEAR OF COMPLETION</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                        name={`school[${index}][year_of_completion]`}
                        placeholder="Enter course..."
                        value={year_of_completion}
                        onChange={setInputsValues}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputCourse">Certificate / Degree</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                        name={`school[${index}][certificate]`}
                        placeholder="Enter course..."
                        value={certificate}
                        onChange={setInputsValues}
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
                      name={`school[${index}][additional_info]`}
                      rows={3}
                      value={additional_info}
                      onChange={setInputsValues}
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
              </>
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
