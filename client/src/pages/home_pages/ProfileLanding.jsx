import React,{useContext,useEffect} from 'react'
import {ProfileStyles } from  '../../assets/css/profile_page/Profile.styles'
import studentRegisterContext from '../../context/Register/studentRegisterContext'

const ProfileLanding = () => {
   const authContext = useContext(studentRegisterContext);
  const { user, filepaths, fetch_file_paths } = authContext;

 
    useEffect(()=>{
      authContext.loadUser();
       fetch_file_paths()
      // eslint-disable-next-line 
    },[])

    useEffect(() => {
      console.log("fetch paths is", filepaths);
      
      // eslint-disable-next-line
    }, [filepaths]);
    return (
      <>
        <ProfileStyles>
          <div className="container">
            <div className="main-body">
              {/* Breadcrumb */}
              {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
      </ol>
    </nav> */}
              {/* /Breadcrumb */}
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          className="rounded-circle"
                          width={150}
                        />
                        <div className="mt-3">
                          <h4>
                            {" "}
                            {user
                              ? user.fname + "- " + user.last_names
                              : "update you full  names"}
                          </h4>
                          <p className="text-secondary mb-1">student</p>
                          <p className="text-muted font-size-sm">
                            {user ? user.reg_nums : "wait..."}
                          </p>
                          <button className="btn btn-primary">
                            Contact Admin
                          </button>
                          <button className="btn btn-outline-primary">
                            Inbox
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Campus</h6>
                        <span className="text-secondary">
                          {" "}
                          {user && user.campuss !== "null"
                            ? user.campuss
                            : "update your course"}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Faculty</h6>
                        <span className="text-secondary">
                          {user && user.colleges !== "null"
                            ? user.colleges
                            : "update college"}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Course</h6>
                        <span className="text-secondary">
                          {" "}
                          {user && user.courses !== "null"
                            ? user.courses
                            : "update your course"}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Discipline</h6>
                        <span className="text-secondary">
                          {user && user.disciplines !== "null "
                            ? user.disciplines
                            : " update discipline details"}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Year of Enrollment</h6>
                        <span className="text-secondary">
                          {user && user.enroll_date
                            ? user.enroll_dates
                            : " update enrollment details"}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">year of graduation</h6>
                        <span className="text-secondary">
                          {user && user.finish_dates
                            ? user.finish_dates
                            : " update year of details"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {user
                            ? user.fname + "- " + user.last_names
                            : "update you full  names"}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {user && user.Emails ? user.Emails : " "}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Registration number</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {user ? user.reg_nums : "wait..."}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Age</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {user && user.ages ? user.ages : "updated your age"}
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Gender</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {user && user.genders
                            ? user.genders
                            : "updated your gender"}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <a
                            className="btn btn-info "
                            target="__blank"
                            href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gutters-sm">
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="d-flex align-items-center mb-3">
                            <i className="material-icons text-info mr-2">
                              Skills
                            </i>
                            status
                          </h6>
                          <small>Campus</small>
                          <div className="progress mb-3" style={{ height: 5 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>Faculty</small>
                          <div className="progress mb-3" style={{ height: 5 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "72%" }}
                              aria-valuenow={72}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>One Page</small>
                          <div className="progress mb-3" style={{ height: 5 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "89%" }}
                              aria-valuenow={89}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>Mobile Template</small>
                          <div className="progress mb-3" style={{ height: 5 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "55%" }}
                              aria-valuenow={55}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>Backend API</small>
                          <div className="progress mb-3" style={{ height: 5 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "66%" }}
                              aria-valuenow={66}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="d-flex align-items-center mb-3">
                            <i className="material-icons text-info mr-2">
                              Resumes
                            </i>
                            docs
                          </h6>

                          {/* Docs - remember to add icons  */}

                          {filepaths !==  null ? filepaths.map((folder) => (
                            <>
                              <small>{folder.split("#")[0]}</small>
                              <div
                                className="progress mb-3"
                                style={{ height: 5 }}
                              >
                                {/* link will come here. below is the url*/}
                                {/* {folder.split("#")[1] + "will come "} */}
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "72%" }}
                                  aria-valuenow={72}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </>
                          )):"loading..."}
                          {/* Docs end   */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProfileStyles>
      </>
    );
}

export default ProfileLanding
