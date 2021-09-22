import React from 'react'
import styled from 'styled-components'
import Education from './Education'
import Experience from "./Experience";
import Skills from "./Skills";
import Awards from "./Awards";


let Styles = styled.div`
  body {
    margin-top: 20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
  }
  .main-body {
    padding: 15px;
  }

  .nav-link {
    color: #4a5568;
  }
  .card {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
  }

  .gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
  }

  .gutters-sm > .col,
  .gutters-sm > [class*="col-"] {
    padding-right: 8px;
    padding-left: 8px;
  }
  .mb-3,
  .my-3 {
    margin-bottom: 1rem !important;
  }

  .bg-gray-300 {
    background-color: #e2e8f0;
  }
  .h-100 {
    height: 100% !important;
  }
  .shadow-none {
    box-shadow: none !important;
  }
  .addTexts:hover{
    cursor:pointer;
  }
`;

const CreateResume = () => {
    return (
        <Styles>
<div className="container">
    <div>
  {/* Breadcrumb */}
  {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item"><a href="/#">User</a></li>
      <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
    </ol>
  </nav> */}
  {/* /Breadcrumb */}
  <div className="row gutters-sm">
    <div className="col-md-4 d-none d-md-block">
      <div className="card">
        <div className="card-body">
          <nav className="nav flex-column nav-pills nav-gap-y-1">
            <a href="#profile" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded active">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>Education
            </a>
            <a href="#account" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings mr-2"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>Experience
            </a>
            <a href="#security" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Skills
            </a>
            <a href="#notification" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell mr-2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>Awards
            </a>
            <a href="#billing" data-toggle="tab" className="nav-item nav-link has-icon nav-link-faded">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card mr-2"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} /></svg>Contacts
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div className="col-md-8">
      <div className="card">
        {/* <div className="card-header border-bottom mb-3 d-flex d-md-none">
          <ul className="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
            <li className="nav-item">
              <a href="#profile" data-toggle="tab" className="nav-link has-icon active"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg></a>
            </li>
            <li className="nav-item">
              <a href="#account" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></a>
            </li>
            <li className="nav-item">
              <a href="#security" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></a>
            </li>
            <li className="nav-item">
              <a href="#notification" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></a>
            </li>
            <li className="nav-item">
              <a href="#billing" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} /></svg></a>
            </li>
          </ul>
        </div> */}
        <div className="card-body tab-content">
          <div className="tab-pane active" id="profile">

                <Education/>


          </div>
          <div className="tab-pane" id="account">            
            <Experience />

          </div>
          <div className="tab-pane" id="security">
            <Skills />
          </div>
          <div className="tab-pane" id="notification">
            <Awards  />             
          </div>
          <div className="tab-pane" id="billing">
            <h6>BILLING SETTINGS</h6>
            <hr />
            <form>
              <div className="form-group">
                <label className="d-block mb-0">Payment Method</label>
                <div className="small text-muted mb-3">You have not added a payment method</div>
                <button className="btn btn-info" type="button">Add Payment Method</button>
              </div>
              <div className="form-group mb-0">
                <label className="d-block">Payment History</label>
                <div className="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">You have not made any payment.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        </Styles>
    )
}

export default CreateResume
