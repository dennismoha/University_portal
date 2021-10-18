import React, { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ResumeContext from '../../../context/resume/ResumeContext'

const Experience = () => {
  const [inputFields, setInputField] = useState([]);
  const { create_resume } = useContext(ResumeContext)

  const handleAddFields = () => {
    setInputField([
      ...inputFields,
      {      
        company_name: "",
        company_role: "",
        year_of_start:"",
        year_of_completion:"",
        description:"",       
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  };

  
    const setInputsValues = (index, event) => {
      const values = [...inputFields]
      values[index][event.target.name] = event.target.value
      setInputField(values)
    }   

    console.log('inputfields ', inputFields)
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('object is ', inputFields)     
      create_resume(inputFields, 'Experience')
    }

  return (
    <>
      <h6>YOUR EXPERIENCE LEVEL</h6>
      <hr />

      {inputFields.length !== 0 ? (
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputfield, index) => (
            <div key={index}>
              <div key={index}>
                {/* enter company */}

                <div className="form-group">
                  <label htmlFor="Company Name">Company name</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="comapnyName"
                    placeholder="Enter company name ..."
                    name="company_name"
                    value={inputfield.company_name}
                    onChange={(e) => setInputsValues(index, e)}
                  />
                </div>

                {/* End of company */}

                {/* enter company role */}

                <div className="form-group">
                  <label htmlFor="Company Name">Company role</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="comapnyName"
                    placeholder="Enter company name ..."
                    name="company_role"
                    value={inputfield.company_role}
                    onChange={(e) => setInputsValues(index, e)}
                  />
                </div>

                {/* End of company role */}

                {/* enter  work enrollment dates */}
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputStartYear">START YEAR</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCampus"
                      placeholder="Enter Start Year..."
                      name="year_of_start"
                      value={inputfield.year_of_start}
                      onChange={(e) => setInputsValues(index, e)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEndYea">YEAR OF COMPLETION</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCourse"
                      placeholder="Enter End Year..."
                      name="year_of_completion"
                      value={inputfield.year_of_completion}
                      onChange={(e) => setInputsValues(index, e)}
                    />
                  </div>
                </div>
                {/* End of dates  */}

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Additional information
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="what id you do ?"
                    name="description"
                    value={inputfield.description}
                    onChange={(e) => setInputsValues(index, e)}
                  />
                </div>
                <div>
                  <span
                    className="addTexts"
                    onClick={() => handleRemoveFields(index)}
                  >
                    {' '}
                    <FontAwesomeIcon
                      icon={faMinus}
                      style={{ color: 'red' }}
                    />{' '}
                  </span>
                  <span className="addTexts" onClick={() => handleAddFields()}>
                    {' '}
                    <FontAwesomeIcon icon={faPlus} style={{ color: 'blue' }} />
                  </span>
                </div>
                <div
                  style={{
                    borderBottom: '3px solid blue',
                    marginTop: '10px',
                    marginBottom: '10px',
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
          {' '}
          <FontAwesomeIcon icon={faPlus} style={{ color: 'blue' }} />
          Add section
        </span>
      )}
    </>
  )
};

export default Experience;
