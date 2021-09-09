import React from 'react';
import Header from '../../Component/Layout/Header';
import Sidebar from '../../Component/Layout/Sidebar';


const Dashboard2 = () => {
  return (
    <>
      <div>
        <Sidebar />
        {/* End Left menu area */}
        {/* Start Welcome area */}
        <div className="all-content-wrapper">
          <Header />
          {/* income order visit user Start */}
          <div className="income-order-visit-user-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="income-dashone-total reso-mg-b-30">
                    <div className="income-dashone-pro">
                      <div className="income-rate-total">
                        <div className="price-edu-rate">
                          <h3>
                            <span>$</span>
                            <span className="counter">7500</span>
                          </h3>
                        </div>
                        <div className="price-graph">
                          <span id="sparkline1" />
                        </div>
                      </div>
                      <div className="income-range">
                        <p>Total Income</p>
                        <span className="income-percentange bg-green">
                          <span className="counter">95</span>%{" "}
                          <i className="fa fa-bolt" />
                        </span>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="income-dashone-total">
                    <div className="income-dashone-pro">
                      <div className="income-rate-total">
                        <div className="price-edu-rate">
                          <h3>
                            <span className="counter">640</span>
                          </h3>
                        </div>
                        <div className="price-graph">
                          <span id="sparkline6" />
                        </div>
                      </div>
                      <div className="income-range order-cl">
                        <p>New Adminsion</p>
                        <span className="income-percentange bg-red">
                          <span className="counter">65</span>%{" "}
                          <i className="fa fa-level-up" />
                        </span>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="income-dashone-total res-mg-t-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="income-dashone-pro">
                      <div className="income-rate-total">
                        <div className="price-edu-rate">
                          <h3>
                            <span className="counter">4500</span>
                          </h3>
                        </div>
                        <div className="price-graph">
                          <span id="sparkline2" />
                        </div>
                      </div>
                      <div className="income-range visitor-cl">
                        <p>New Visitor</p>
                        <span className="income-percentange bg-blue">
                          <span className="counter">75</span>%{" "}
                          <i className="fa fa-level-up" />
                        </span>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="income-dashone-total res-mg-t-30 dk-res-t-pro-30">
                    <div className="income-dashone-pro">
                      <div className="income-rate-total">
                        <div className="price-edu-rate">
                          <h3>
                            <span className="counter">235400</span>
                          </h3>
                        </div>
                        <div className="price-graph">
                          <span id="sparkline5" />
                        </div>
                      </div>
                      <div className="income-range low-value-cl">
                        <p>In first month</p>
                        <span className="income-percentange bg-purple">
                          <span className="counter">35</span>%{" "}
                          <i className="fa fa-level-down" />
                        </span>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* income order visit user End */}
          <div className="dashtwo-order-area mg-tb-30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-edu-wrap ant-res-b-30 reso-mg-b-30">
                    <div className="skill-content-3 analytics-edu">
                      <div className="skill">
                        <div className="progress">
                          <div className="lead-content">
                            <h3>
                              <span className="counter">95</span>%
                            </h3>
                            <p>Server down 4:32 pm</p>
                          </div>
                          <div
                            className="progress-bar wow fadeInLeft"
                            data-progress="95%"
                            style={{ width: "95%" }}
                            data-wow-duration="1.5s"
                            data-wow-delay="1.2s"
                          >
                            {" "}
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-edu-wrap reso-mg-b-30">
                    <div className="skill-content-3 analytics-edu analytics-edu4">
                      <div className="skill">
                        <div className="progress">
                          <div className="lead-content">
                            <h3>
                              <span className="counter">85</span>%
                            </h3>
                            <p>Server down 8:32 pm</p>
                          </div>
                          <div
                            className="progress-bar wow fadeInLeft"
                            data-progress="85%"
                            style={{ width: "85%" }}
                            data-wow-duration="1.5s"
                            data-wow-delay="1.2s"
                          >
                            <span>85%</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-edu-wrap reso-mg-b-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="skill-content-3 analytics-edu analytics-edu3">
                      <div className="skill">
                        <div className="progress progress-bt">
                          <div className="lead-content">
                            <h3>
                              <span className="counter">80</span>%
                            </h3>
                            <p>Server down 10:32 pm</p>
                          </div>
                          <div
                            className="progress-bar wow fadeInLeft"
                            data-progress="80%"
                            style={{ width: "80%" }}
                            data-wow-duration="1.5s"
                            data-wow-delay="1.2s"
                          >
                            <span>80%</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-edu-wrap res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="skill-content-3 analytics-edu analytics-edu2">
                      <div className="skill">
                        <div className="progress progress-bt">
                          <div className="lead-content">
                            <h3>
                              <span className="counter">93</span>%
                            </h3>
                            <p>Server down 10:32 pm</p>
                          </div>
                          <div
                            className="progress-bar wow fadeInLeft"
                            data-progress="93%"
                            style={{ width: "93%" }}
                            data-wow-duration="1.5s"
                            data-wow-delay="1.2s"
                          >
                            <span>93%</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="analytics-sparkle-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-sparkle-line reso-mg-b-30">
                    <div className="analytics-content">
                      <h5>Visits in last 24h</h5>
                      <h2 className="counter">5600</h2>
                      <div id="sparkline22" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-sparkle-line reso-mg-b-30">
                    <div className="analytics-content">
                      <h5>Visits week</h5>
                      <h2 className="counter">3400</h2>
                      <div id="sparkline23" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-sparkle-line reso-mg-b-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="analytics-content">
                      <h5>Last month</h5>
                      <h2 className="counter">3300</h2>
                      <div id="sparkline24" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-sparkle-line res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="analytics-content">
                      <h5>Avarage time</h5>
                      <h2>00:06:40</h2>
                      <div id="sparkline25" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="analysis-rounded-area mg-tb-30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-rounded reso-mg-b-30">
                    <div className="analytics-rounded-content">
                      <h5>Percentage distribution</h5>
                      <h2>
                        <span className="counter">40</span>/20
                      </h2>
                      <div className="text-center">
                        <div id="sparkline51" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-rounded reso-mg-b-30">
                    <div className="analytics-rounded-content">
                      <h5>Percentage division</h5>
                      <h2>
                        <span className="counter">140</span>/
                        <span className="counter">54</span>
                      </h2>
                      <div className="text-center">
                        <div id="sparkline52" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-rounded reso-mg-b-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="analytics-rounded-content">
                      <h5>Percentage Counting</h5>
                      <h2>2345/311</h2>
                      <div className="text-center">
                        <div id="sparkline53" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analytics-rounded res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="analytics-rounded-content">
                      <h5>Percentage Sequence</h5>
                      <h2>780/56</h2>
                      <div className="text-center">
                        <div id="sparkline54" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="analysis-progrebar-area mg-b-15">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analysis-progrebar reso-mg-b-30">
                    <div className="analysis-progrebar-content">
                      <h5>Usage</h5>
                      <h2>
                        <span className="counter">90</span>%
                      </h2>
                      <div className="progress progress-mini ug-1">
                        <div
                          style={{ width: "68%" }}
                          className="progress-bar"
                        />
                      </div>
                      <div className="m-t-sm small">
                        <p>Server down since 1:32 pm.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analysis-progrebar reso-mg-b-30">
                    <div className="analysis-progrebar-content">
                      <h5>Memory</h5>
                      <h2>
                        <span className="counter">70</span>%
                      </h2>
                      <div className="progress progress-mini ug-2">
                        <div
                          style={{ width: "78%" }}
                          className="progress-bar"
                        />
                      </div>
                      <div className="m-t-sm small">
                        <p>Server down since 12:32 pm.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analysis-progrebar reso-mg-b-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="analysis-progrebar-content">
                      <h5>Data</h5>
                      <h2>
                        <span className="counter">50</span>%
                      </h2>
                      <div className="progress progress-mini ug-3">
                        <div
                          style={{ width: "38%" }}
                          className="progress-bar progress-bar-danger"
                        />
                      </div>
                      <div className="m-t-sm small">
                        <p>Server down since 8:32 pm.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="analysis-progrebar res-tablet-mg-t-30 dk-res-t-pro-30">
                    <div className="analysis-progrebar-content">
                      <h5>Space</h5>
                      <h2>
                        <span className="counter">40</span>%
                      </h2>
                      <div className="progress progress-mini ug-4">
                        <div
                          style={{ width: "28%" }}
                          className="progress-bar progress-bar-danger"
                        />
                      </div>
                      <div className="m-t-sm small">
                        <p>Server down since 5:32 pm.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="footer-copy-right">
                    <p>
                      Copyright © 2018. All rights reserved. Template by{" "}
                      <a href="https://colorlib.com/wp/templates/">Colorlib</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2;




   