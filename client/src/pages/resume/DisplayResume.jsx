import React, {useEffect,useContext,useState} from 'react'
import ResumeContext from '../../context/resume/ResumeContext';
import AboutMe from './AboutMe';
import {ResumeStyles} from './Styles'



const DisplayResume = () => {    
  
              
    const { resumeError, fetchedData,fetch_resume } = useContext(ResumeContext);
    const [education,setEducation] =useState('')

    useEffect(()=>{
      fetch_resume()
    },[])

    useEffect(() => {
      if (fetchedData) {
        setEducation(fetchedData.Educations);
      }
      // if(fetchedData.Educations.length !== 0) {
      setEducation(fetchedData);
      // }
      // console.log("data fetched::", fetchedData.Educations);
    }, [fetchedData, fetch_resume]);
    console.log('education is', education)
    // let school = education.map((school, index) => (
    //   <div className="resume-wrap d-flex ftco-animate">
    //     <div className="icon d-flex align-items-center justify-content-center">
    //       <span className="flaticon-ideas" />
    //     </div>
    //     <div className="text pl-3">
    //       <span className="date">2019-2019</span>
    //       <h2>Bachelor of Science in Computer Science</h2>
    //       <span className="position">Cambridge University</span>
    //       <p>
    //         A small river named Duden flows by their place and supplies it with
    //         the necessary regelialia. It is a paradisematic country, in which
    //         roasted parts of sentences fly into your mouth.
    //       </p>
    //     </div>
    //   </div>
    // ));

    return (
      <>
        <AboutMe />
        <ResumeStyles>
        <div
          className="ftco-section ftco-no-pb goto-here "
          style={{ marginTop: "70px" }}
          id="test"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <nav id="navi">
                  <ul>
                    <li>
                      <a href="#page-1">Education</a>
                    </li>
                    <li>
                      <a href="#page-2">Experience</a>
                    </li>
                    <li>
                      <a href="#page-3">Skills</a>
                    </li>
                    <li>
                      <a href="#page-4">Awards</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-9">
                <div id="page-1" className="page one">
                  <h2 className="heading">Education</h2>
                  {/* {school} */}
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Computer Processing Systems/Computer Software</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Diploma in Computer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Art &amp; Creative Director</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="page-2" className="page two">
                  <h2 className="heading">Experience</h2>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Software Developer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Web Designer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Web Marketing</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Art &amp; Creative Director</h2>
                      <span className="position">Side Tech</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Wordpress Developer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2017-2018</span>
                      <h2>UI/UX Designer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="page-3" className="page three">
                  <h2 className="heading">Skills</h2>
                  <div className="row progress-circle mb-5">
                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          CSS
                        </h2>
                        {/* Progress bar 1 */}
                        <div className="progress mx-auto" data-value={90}>
                          <span className="progress-left">
                            <span className="progress-bar border-primary" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary" />
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              90<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>
                        {/* END */}
                        {/* Demo info */}
                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                        {/* END */}
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          HTML
                        </h2>
                        {/* Progress bar 1 */}
                        <div className="progress mx-auto" data-value={80}>
                          <span className="progress-left">
                            <span className="progress-bar border-primary" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary" />
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              80<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>
                        {/* END */}
                        {/* Demo info */}
                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                        {/* END */}
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          jQuery
                        </h2>
                        {/* Progress bar 1 */}
                        <div className="progress mx-auto" data-value={75}>
                          <span className="progress-left">
                            <span className="progress-bar border-primary" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary" />
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              75<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>
                        {/* END */}
                        {/* Demo info */}
                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                        {/* END */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>Photoshop</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-1"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "90%" }}
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>jQuery</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-2"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "85%" }}
                          >
                            <span>85%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>HTML5</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-3"
                            role="progressbar"
                            aria-valuenow={95}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "95%" }}
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>CSS3</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-4"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "90%" }}
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>WordPress</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-5"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "70%" }}
                          >
                            <span>70%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>SEO</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-6"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          >
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="page-4" className="page four">
                  <h2 className="heading">Awards</h2>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Top 10 Web Developer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Top 5 LeaderShip Exellence Winner</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Top 4 Web Tester</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas" />
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Art &amp; Creative Director</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResumeStyles>
      </>
    );
}

export default DisplayResume
