import React, {useEffect,useContext,useState} from 'react'
import ResumeContext from '../../context/resume/ResumeContext';
import AboutMe from './AboutMe';
import {ResumeStyles} from './Styles'
import Add_Education_To_Resume from './editresume/Education'
import Add_Experience_To_Resume from './editresume/Experience'

const DisplayResume = () => {    
  
              
    const { resumeError, fetchedResumeData, fetch_resume } =
      useContext(ResumeContext)
    const [education,setEducation] =useState([])
    const [experience,setExperience] =useState([])
    const [skills,setSkills] =useState([])
    const [isEditable,setEditable] =useState('')
   

    useEffect(()=>{
      fetch_resume()
    },[])

    useEffect(() => {
      if (fetchedResumeData) {
        setEducation(fetchedResumeData.Education)
        setExperience(fetchedResumeData.Experience)       
      }     
    }, [fetchedResumeData, fetch_resume])

    const setEditableFunction = (id) =>{ 
      console.log('id is', id); 
      setEditable(id)
    }
   
    
    
    let school = education.length === 0 ? "no educatio history found": (education.map((school, i) => {      
      return (
        <>
          {isEditable === school.school_id ? (
            <div onDoubleClick={() => setEditableFunction('')}>
              <Add_Education_To_Resume Education="true" school = {school}/>
            </div>
          ) : (
            <div
              className="resume-wrap d-flex ftco-animate"
              key={school.school_id}
              onDoubleClick={() => setEditableFunction(school.school_id)}
            >
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-ideas" />
              </div>
              <div className="text pl-3">
                <span className="date">
                  year of school: {school.year_of_enroll} -{' '}
                  {school.year_of_completion}
                </span>
                <h2>faculty: {school.school_name}</h2>
                <span className="position">course: {school.course}</span>
                <h3>certificate: {school.certificate}</h3>
                <p>{school.description}</p>
              </div>
            </div>
          )}
        </>
      )
    }))

    let experiences =experience.length === 0 ? "no experience history":(    
    experience.map((experience, i) => (
      <div
        className="resume-wrap d-flex ftco-animate"
        key={experience.experience_id}
      >
        <div className="icon d-flex align-items-center justify-content-center">
          <span className="flaticon-ideas" />
        </div>
        <div className="text pl-3">
          <span className="date">
            {experience.year_of_start} - {experience.year_of_completion}
          </span>
          <h2>{experience.company_role}</h2>
          <span className="position">{experience.company_name}</span>
          <p>{experience.description}</p>
        </div>
      </div>
    )))

    let skill = skills.length === 0 ? "no skills to show" :(
      skills.map((skill,i) =>{
        <div className="col-md-6 animate-box" key ={skill.id}>
          <div className="progress-wrap ftco-animate">
            <h3>Photoshop</h3>
            <div className="progress">
              <div
                className="progress-bar color-1"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: '90%' }}
              >
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>
      })
    )
  

    return (
      <>
        <AboutMe />
        <ResumeStyles>
          <div
            className="ftco-section ftco-no-pb goto-here "
            style={{ marginTop: '70px' }}
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
                    <h2 className="heading">Educations</h2>
                    {school ? school : 'loading.....'}
                    <Add_Education_To_Resume />
                  </div>
                  <div id="page-2" className="page two">
                    <h2 className="heading">Experience</h2>

                    {experiences}
                    <Add_Experience_To_Resume />
                  </div>
                  <div id="page-3" className="page three">
                    <h2 className="heading">Skills</h2>

                    <div className="row">{skill ? skill : "loading..."}</div>
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
    )
}

export default DisplayResume
