import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [inputFields, setInputField] = useState([
    {
      year: "",
      company: "",
      address: "",     
      additional_info: "",
    },
  ]);

  const handleAddFields = () => {
    setInputField([
      ...inputFields,
      {
        year: "",
        company: "",
        address: "",
        additional_info: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  };
  return (
    <>
      <h6>YOUR EXPERIENCE LEVEL</h6>
      <hr />

      {inputFields.length !== 0 ? (
        <form>
          {inputFields.map((inputfield, index) => (
            <>
                {/* enter company */}
                 
                <div className="form-group">
                    <label htmlFor="Company Name">Company name</label>
                    <input type="text" className="form-control"  aria-describedby="comapnyName" placeholder="Enter company name ..." />
                   
                </div>     

              {/* End of company */}

              {/* enter address */}             
                <div className="form-group">
                  <label htmlFor="inputAddress">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter address..."
                  />
                </div>              
              {/* End of campus */}

              {/* enter  work enrollment dates */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputStartYear">START YEAR</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCampus"
                    placeholder="Enter Start Year..."
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEndYea">YEAR OF COMPLETION</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                    placeholder="Enter End Year..."
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
                  rows={3}
                  defaultValue={""}
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
                <span className="addTexts" onClick={() => handleAddFields()}>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} style={{ color: "blue" }} />
                </span>
              </div>
              <div
                style={{
                  borderBottom: "3px solid blue",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
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
};

export default Experience;
