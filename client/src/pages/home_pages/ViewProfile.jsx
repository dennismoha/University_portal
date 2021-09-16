import React, { useContext, useEffect, useState } from "react";
import "../../assets/css/viewprofile.css";
import studentRegisterContext from "../../context/Register/studentRegisterContext";
// import ProfileNavbar from "./ProfileNavbar";


const ViewProfile = () => {
  // @RULE: UPLOAD FILES STATE
  const [docs, setDocs] = useState({
    cv: "",
    cover_letter: "",
    certificates: "",
  });

  const [docsError, setDocsError] = useState(null)

  // @RULE : USE CONTEXT
  const {
    editPayload,
    user,
    createProfile,
    error,
    loadUser,
    clearErrors,
    sendDocs,
    success,
    clear_success,
    filepaths,
    fetch_file_paths,
  } = useContext(studentRegisterContext);

  const filesSelectedHandler = (e) => {
    console.log("files", e.target.files);
    let newDocs = e.target.files[0].name.split('.')[1]
    if(newDocs !== 'pdf') {
      return setDocsError('only pdf files allowed')
    }
    console.log('newDocs::', newDocs)
    setDocs({ ...docs, [e.target.name]: e.target.files[0] });
  };
  console.log("docs:::", docs);



  const fileUploader = (e) => { 
  console.log('docs array::',Array.isArray(docs))
  console.log('docs are ', docs)
    if (!docs.cv || !docs.cover_letter || !docs.certificates) {      
      return setDocsError('can\'t upload docs. Make sure all docs are pdf and not empty.' )
    }
    // if (!docs.cv.fi || !docs.cover_letter || !docs.certificates_name) {
    //   return setDocsError('can\'t upload docs. choose all options.' )
    // }
    sendDocs(docs)
  };

  useEffect(() => {
    if (docsError !== null) {
      setTimeout(() => {
        setDocsError(null);
      }, 3000);
    }
    clear_success();
    // eslint-disable-next-line
  }, [docsError,success]);

  // @RULE: CHECK IF PAYLOAD IS EMPTY

  useEffect(() => {
    if (user !== null) {
      console.log("user enroll ", user.enroll_dates);
      console.log("ages ", user.ages);
      setStudentDetails({
        ...studentDetails,
        first_name: user.fname,
        last_name: user.last_names,
        campus: user.campuss,
        college: user.colleges,
        course: user.courses,
        discipline: user.disciplines,
        gender: user.genders,
        age: user.ages,
        enroll_date: user.enroll_dates,
        finish_date: user.finish_dates,
      });
    } else {
      setStudentDetails({
        ...studentDetails,
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
    }
    // eslint-disable-next-line
  }, [user]);

  // END OF CHECKING IF PAYLOAD IS EMPTY

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

  //    @RULE: DESTRACTURE STATE VARIABLES
  const {
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

     useEffect(() => {      
       fetch_file_paths();
       // eslint-disable-next-line
     }, []);


  const setEditHandler = (data) => {
    console.log("data is:::", data);
    editPayload(data);
  };

  const onchange = (e) => {
    console.log("oncahngeoooo", e.target.name);
    setStudentDetails({
      ...studentDetails,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        clearErrors();
      }, 9000);
    }
    // eslint-disable-next-line
  }, [error]);

  //   let {
  //     first_name,
  //     last_name,
  //     campus,
  //     college,
  //     course,
  //     discipline,
  //     gender,
  //     age,
  //     enroll_date,
  //     finish_date,
  //   } = studentDetails;

  const onsubmit = (e) => {
    e.preventDefault();
    console.log("the gender is ", studentDetails.gender);
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
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="profile-card-4 z-depth-3">
              <div className="card">
                <div className="card-body text-center bg-primary rounded-top">
                  <div className="user-box">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="user avatar"
                    />
                  </div>
                  <h5 className="mb-1 text-white">
                    {user
                      ? user.fname + " " + user.last_names
                      : "first name missing"}
                  </h5>
                  <h6 className="text-light">
                    registration num:{" "}
                    {user ? user.reg_nums : " registration number missing"}
                  </h6>
                </div>
                <div className="card-body">
                  <ul className="list-group shadow-none">
                    <li className="list-group-item">
                      <div className="list-icon">
                        <i className="fa fa-phone-square" />
                      </div>
                      <div className="list-details">
                        <span>Mobile number</span>
                        <small>n / a</small>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="list-icon">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="list-details">
                        <span>Email</span>
                        <small>{user ? user.Emails : "email"}</small>
                      </div>
                    </li>
                    {/* <li className="list-group-item">
                      <div className="list-icon">
                        <i className="fa fa-globe" />
                      </div>
                      <div className="list-details">
                        <span>www.example.com</span>
                        <small>Website Address</small>
                      </div>
                    </li> */}
                  </ul>
                  <div className="row text-center mt-4">
                    <div className="col p-2">
                      <h4 className="mb-1 line-height-5">0</h4>
                      <small className="mb-0 font-weight-bold">
                        Certificates
                      </small>
                    </div>
                    <div className="col p-2">
                      <h4 className="mb-1 line-height-5">0</h4>
                      <small className="mb-0 font-weight-bold">skills</small>
                    </div>
                    <div className="col p-2">
                      <h4 className="mb-1 line-height-5">0</h4>
                      <small className="mb-0 font-weight-bold">Views</small>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <a
                    href="/#"
                    className="btn-social btn-facebook waves-effect waves-light m-1"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    href="/#"
                    className="btn-social btn-google-plus waves-effect waves-light m-1"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                  <a
                    href="/#"
                    className="list-inline-item btn-social btn-behance waves-effect waves-light"
                  >
                    <i className="fa fa-behance" />
                  </a>
                  <a
                    href="/#"
                    className="list-inline-item btn-social btn-dribbble waves-effect waves-light"
                  >
                    <i className="fa fa-dribbble" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card z-depth-3">
              <div className="card-body">
                <ul className="nav nav-pills nav-pills-primary nav-justified">
                  {/* <li className="nav-item">
                    <a
                    href="/#"
                      data-target="#profile"
                      data-toggle="pill"
                      className="nav-link active show"
                    >
                      <i className="icon-user" />{" "}
                      <span className="hidden-xs">Profile</span>
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a
                      href="/#"
                      data-target="#messages"
                      data-toggle="pill"
                      className="nav-link"
                    >
                      <i className="icon-envelope-open" />{" "}
                      <span className="hidden-xs">Documents</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/"
                      onClick={() => setEditHandler(user)}
                      data-target="#edit"
                      data-toggle="pill"
                      className="nav-link"
                    >
                      <i className="icon-note" />{" "}
                      <span className="hidden-xs">Edits</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/#"
                      data-target="#edit_schooldocs"
                      data-toggle="pill"
                      className="nav-link"
                    >
                      <i className="icon-note" />{" "}
                      <span className="hidden-xs">School</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content p-3">
                  {/* <div className="tab-pane active show" id="profile">
                    <h5 className="mb-3">User Profile</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>About</h6>
                        <p>
                          First Name{" "}
                          <span>
                            <b>{user ? user.fname : "Enter first name"}</b>
                          </span>
                          , last name{" "}
                          {user ? user.last_names : "enter last name"}
                        </p>
                        <h6>skiils</h6>
                        <p>
                          Indie music, skiing and hiking. I love the great
                          outdoors.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Skills</h6>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          html5
                        </a>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          react
                        </a>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          codeply
                        </a>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          angularjs
                        </a>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          css3
                        </a>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          jquery
                        </a>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          bootstrap
                        </a>
                        <a
                        href="/#"
                          className="badge badge-dark badge-pill"
                        >
                          responsive-design
                        </a>
                        <hr />
                        <span className="badge badge-primary">
                          <i className="fa fa-user" /> 900 jobs applied
                        </span>
                        <span className="badge badge-success">
                          <i className="fa fa-cog" /> 43 new jobs
                        </span>
                        <span className="badge badge-danger">
                          <i className="fa fa-eye" /> 245 Views
                        </span>
                      </div>
                      <div className="col-md-12">
                        <h5 className="mt-2 mb-3">
                          <span className="fa fa-clock-o ion-clock float-right" />{" "}
                          School Info
                        </h5>
                        <table className="table table-hover table-striped">
                          <tbody>
                            <tr>
                              <td>
                                <strong>campus</strong>{" "}
                                {user
                                  ? user.campus
                                  : " update profile campus details available"}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Faculty</strong>{" "}
                                {user
                                  ? user.colleges
                                  : " update faculty details"}{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>course </strong>
                                {user
                                  ? user.courses
                                  : " update course details"}{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Discipline </strong>{" "}
                                {user
                                  ? user.disciplines
                                  : " update discipline details"}{" "}
                              </td>
                            </tr> */}
                  {/* <tr>
                              <td>
                                <strong>Skell</strong> deleted his post Look at
                                Why this is.. in <strong>`Discussions`</strong>
                              </td>
                            </tr> */}
                  {/* </tbody>
                        </table>
                      </div>
                    </div> */}
                  {/*/row*/}
                  {/* </div> */}
                  <div className="tab-pane" id="messages">
                    <div
                      className="alert alert-info alert-dismissible"
                      role="alert"
                    >
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                      >
                        ×
                      </button>
                      <div className="alert-icon">
                        <i className="icon-info" />
                      </div>
                      <div className="alert-message">
                        <span>
                          <strong>Info!</strong> Lorem Ipsum is simply dummy
                          text.
                        </span>
                      </div>
                    </div>
                    <table className="table table-hover table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <span className="float-right font-weight-bold">
                              3 hrs ago
                            </span>{" "}
                            Here is your a link to the latest summary report
                            from the..
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="float-right font-weight-bold">
                              Yesterday
                            </span>{" "}
                            There has been a request on your account since that
                            was..
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="float-right font-weight-bold">
                              9/10
                            </span>{" "}
                            Porttitor vitae ultrices quis, dapibus id dolor.
                            Morbi venenatis lacinia rhoncus.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="float-right font-weight-bold">
                              9/4
                            </span>{" "}
                            Vestibulum tincidunt ullamcorper eros eget luctus.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="float-right font-weight-bold">
                              9/4
                            </span>{" "}
                            Maxamillion ais the fix for tibulum tincidunt
                            ullamcorper eros.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* edit section */}

                  <div className="tab-pane" id="edit">
                    <form onSubmit={onsubmit}>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          First name
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            name="first_name"
                            value={first_name}
                            onChange={onchange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Last name
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            name="last_name"
                            value={last_name}
                            onChange={onchange}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Discipline
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            name="discipline"
                            value={discipline}
                            onChange={onchange}
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

                      {/* start of age, gender, enrollment, finish  info */}

                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label htmlFor="inputState">Gender</label>
                          <select
                            id="gender"
                            className="form-control"
                            name="gender"
                            onChange={onchange}
                            value={gender}
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
                            placeholder="date of birth"
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
                            placeholder="enroll date"
                            name="enroll_date"
                            onChange={onchange}
                            value={enroll_date}
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label htmlFor="inputState">Finish Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputFirstName"
                            placeholder="Finish date"
                            name="finish_date"
                            onChange={onchange}
                            value={finish_date}
                          />
                        </div>
                      </div>

                      {/* <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Change profile
                        </label>
                        <div className="col-lg-9">
                          <input className="form-control" type="file" />
                        </div>
                      </div> */}

                      <div className="form-group row">
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* start editing school docs */}

                  <div className="tab-pane" id="edit_schooldocs">
                    <div
                      className="form-group row"
                      style={{
                        display:
                          filepaths[0].split("#")[0] === "cover_letter" ? "none" : null,
                      }}
                    >
                      <label className="col-lg-3 col-form-label form-control-label">
                        Curriculum vitae
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="file"
                          name="cv"
                          onChange={(e) => filesSelectedHandler(e)}
                        />
                      </div>
                    </div>
                    {/* cover letter */}
                    <div
                      className="form-group row"
                      style={{
                        display:
                          filepaths[1].split("#")[0] === "cover_letter"
                            ? "none"
                            : null,
                      }}
                    >
                      <label className="col-lg-3 col-form-label form-control-label">
                        Cover letter
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="file"
                          name="cover_letter"
                          onChange={(e) => filesSelectedHandler(e)}
                        />
                      </div>
                    </div>

                    {/* resume */}
                    <div
                      className="form-group row"
                      style={{
                        display:
                          filepaths[2].split("#")[2] === "certificates" ? "none" : null,
                      }}
                    >
                      <label className="col-lg-3 col-form-label form-control-label">
                        certificate
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="file"
                          name="certificates"
                          onChange={(e) => filesSelectedHandler(e)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <button
                        onClick={fileUploader}
                        className="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                    <div>{docsError ? docsError : ""}</div>
                    <div>{success ? success : ""}</div>
                  </div>
                  {/* end of editing school docs */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
