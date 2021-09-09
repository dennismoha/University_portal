import React, {useContext,useEffect,useState} from 'react'
 import "../../assets/css/profile_page/profile_settings.css";
import studentRegisterContext from '../../context/Register/studentRegisterContext';
 import ProfileNavbar from "./ProfileNavbar";


export const ProfileSettings = () => {
   const [studentDetails, setStudentDetails] = useState({
     first_name: "",
     last_name: "",    
     campus: "",
     college: "",
     course: "",
     discipline: "",
     gender: "",
     age: "",
     enroll_date: "",
     finish_date: "",    
   });  

   const onchange = (e) => {
    //  console.log("e name is:", e.target.value);
     setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
   };  
     const { createProfile, error, loadUser, clearErrors } = useContext(
       studentRegisterContext
     );
   
     console.log("context", studentRegisterContext);
           
        useEffect(() => {
          loadUser();
         
        },[]);  

     useEffect(() => {       
       
       if (error) {
         setTimeout(() => {
           clearErrors();
         }, 9000);
       }
     }, [error]);

     let {
       first_name,
       last_name,      
       campus,
       college,
       course,
       discipline,
       gender,
       age,
       enroll_date,
       finish_date,
      
     } = studentDetails;

     const onsubmit = (e) => {
       e.preventDefault();
       console.log('the gender is ',studentDetails.gender)
       createProfile({
         first_name,
         last_name, 
         
         campus,
         college,
         course,
         discipline,
         gender,
         age,
         enroll_date,
         finish_date,        
       });
       clearErrors();
     };
    return (
      <>
        <ProfileNavbar />
        <div className="container p-0">
          <h1 className="h3 mb-3">Settings</h1>
          <div className="row">
            <div className="col-md-5 col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Profile Settings</h5>
                </div>
                <div className="list-group list-group-flush" role="tablist">
                  <a
                    className="list-group-item list-group-item-action active"
                    data-toggle="list"
                    href="#account"
                    role="tab"
                  >
                    Account
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#school"
                    role="tab"
                  >
                    School info
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#password"
                    role="tab"
                  >
                    Password
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#documents"
                    role="tab"
                  >
                    Edit documents
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Privacy and safety
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Email notifications
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Your data
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Delete account
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xl-8">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="account"
                  role="tabpanel"
                >
                  <div className="card">
                    <div className="card-header">
                      <div className="card-actions float-right">
                        <div className="dropdown show">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            data-display="static"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-more-horizontal align-middle"
                            >
                              <circle cx={12} cy={12} r={1} />
                              <circle cx={19} cy={12} r={1} />
                              <circle cx={5} cy={12} r={1} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title mb-0">Public info</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-group">
                              <label htmlFor="inputUsername">Username</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputUsername"
                                placeholder="Username"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="inputUsername">Biography</label>
                              <textarea
                                rows={2}
                                className="form-control"
                                id="inputBio"
                                placeholder="Tell something about yourself"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <img
                                alt="Andrew Jones"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                className="rounded-circle img-responsive mt-2"
                                width={128}
                                height={128}
                              />
                              <div className="mt-2">
                                <span className="btn btn-primary">
                                  <i className="fa fa-upload" />
                                </span>
                              </div>
                              <small>
                                For best results, use an image at least 128px by
                                128px in .jpg format
                              </small>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* {this is the school section} */}
                <div className="tab-pane fade" id="school" role="tabpanel">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-actions float-right">
                        <div className="dropdown show">
                          <a
                            href="/#"
                            data-toggle="dropdown"
                            data-display="static"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-more-horizontal align-middle"
                            >
                              <circle cx={12} cy={12} r={1} />
                              <circle cx={19} cy={12} r={1} />
                              <circle cx={5} cy={12} r={1} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title mb-0">School info</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={onsubmit}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputFirstName">First name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputFirstName"
                              placeholder="First name"
                              name="first_name"
                              onChange={onchange}
                              value={studentDetails.first_name}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputLastName">Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputLastName"
                              placeholder="Last name"
                              name="last_name"
                              onChange={onchange}
                              value={studentDetails.last_name}
                            />
                          </div>
                        </div>

                        {/* school info */}

                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">campus</label>
                            <select
                              id="inputState"
                              className="form-control"
                              name="campus"
                              onChange={onchange}
                              value={studentDetails.campus}
                            >
                              <option selected>Campus 1</option>
                              <option>campus 2</option>
                            </select>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">college</label>
                            <select
                              id="inputState"
                              className="form-control"
                              name="college"
                              onChange={onchange}
                              value={studentDetails.college}
                            >
                              <option selected>Colleg 1</option>
                              <option>college 2</option>
                            </select>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">course</label>
                            <select
                              id="inputState"
                              className="form-control"
                              name="course"
                              onChange={onchange}
                              value={studentDetails.course}
                            >
                              <option selected>Course 1</option>
                              <option>course 2</option>
                            </select>
                          </div>
                        </div>
                        {/* end of school info */}

                        <div className="form-group">
                          <label htmlFor="inputDiscipline">Discipline</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputdiscipline"
                            placeholder="discipline"
                            name="discipline"
                            onChange={onchange}
                            value={studentDetails.discipline}
                          />
                        </div>
                        {/* start of age, gender, enrollment, finish  info */}

                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Gender</label>
                            <select
                              id="gender"
                              className="form-control"
                              name="gender"
                              onChange={onchange}
                              value={studentDetails.gender}
                            >
                              <option selected>Female</option>
                              <option>Male</option>
                            </select>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Date of birth</label>
                            <input
                              type="date"
                              className="form-control"
                              id="inputFirstName"
                              placeholder="First name"
                              name="age"
                              onChange={onchange}
                              value={studentDetails.age}
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Enroll Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="inputenrolldate"
                              placeholder="First name"
                              name="enroll_date"
                              onChange={onchange}
                              value={studentDetails.enroll_date}
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Finish Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="inputFirstName"
                              placeholder="First name"
                              name="finish_date"
                              onChange={onchange}
                              value={studentDetails.finish_date}
                            />
                          </div>
                        </div>
                        {/* start of age, gender, enrollment, finish  info */}
                        {/* <div className="form-group">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div> */}

                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* {this is the  end of school section} */}

                {/* {this is the beginning of password edit } */}
                <div className="tab-pane fade" id="password" role="tabpanel">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Password</h5>
                      <form>
                        <div className="form-group">
                          <label htmlFor="inputPasswordCurrent">
                            Current password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordCurrent"
                          />
                          <small>
                            <a href="#">Forgot your password?</a>
                          </small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPasswordNew">New password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordNew"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPasswordNew2">
                            Verify password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordNew2"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* this is the end of password edit */}

                {/* this is the beginning of documents edit section */}
                <div className="tab-pane fade" id="documents" role="tabpanel">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">edit documents</h5>
                      <form>
                        <div className="form-group">
                          <label htmlFor="cvupload">Upload cv</label>
                          <input
                            type="file"
                            className="form-control-file"
                            id="cv"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="coverletter">cover letter</label>
                          <input
                            type="file"
                            className="form-control-file"
                            id="cover letter"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="certificates">certificates</label>
                          <input
                            type="file"
                            className="form-control-file"
                            id="certificates"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* this is the end of documents edit section */}

                {/* this is the beginning of skills edit section */}
                <div className="tab-pane fade" id="documents" role="tabpanel">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">edit skills</h5>
                      <form>
                        <div className="form-group">
                          <label htmlFor="inputPasswordCurrent">
                            Current password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordCurrent"
                          />
                          <small>
                            <a href="#">Forgot your password?</a>
                          </small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPasswordNew">New password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordNew"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPasswordNew2">
                            Verify password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordNew2"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* this is the end of skills edit section */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


export default ProfileSettings