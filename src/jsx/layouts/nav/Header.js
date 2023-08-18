import React,{useState, useContext} from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/pic1.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown, Modal } from "react-bootstrap";
import { ThemeContext } from "../../../context/ThemeContext";


const inputDate = [
  {title:'Salary Form', subtitle:'$'}, 
  {title:'Salary To', subtitle:'$'}, 
  {title:'Enter City', subtitle:'$'}, 
  {title:'Enter State', subtitle:'State'}, 
  {title:'Enter Counter', subtitle:'State'}, 
  {title:'Enter Education Level', subtitle:'Education Level'}, 
];

function Basic({title, subtitle}){
  return(    
    <div className="col-xl-6  col-md-6 mb-4">
       <label  className="form-label font-w600">{title}<span className="text-danger ms-1">*</span></label>
       <input type="text" className="form-control solid" placeholder={subtitle} aria-label="name" />
    </div>
    
  )
}

const Header = ({ onNote }) => {
  const {background, changeBackground } = useContext(ThemeContext);
	const handleThemeMode = () => {
		if(background.value === 'dark'){
			changeBackground({ value: "light", label: "Light" });
		}else{
			changeBackground({ value: "dark", label: "Dark" });
		}
	}

  const [searchBut, setSearchBut] = useState(false);	
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;

    const [jobModal,setJobModal] = useState(false);
  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div
                  className="dashboard_bar"
                  style={{ textTransform: "capitalize" }}
                  >
                  {finalName.join(" ").length === 0
                    ? "Dashboard"
                    : finalName.join(" ") === "dashboard dark"
                    ? "Dashboard"
                    : finalName.join(" ")}
                </div>
                <div className="nav-item d-flex align-items-center">
                  <div className="input-group search-area">
                    <input type="text" 
                      className={`form-control ${searchBut ? "active" : ""}`}
                      placeholder="Search here" 
                    />
                    <span className="input-group-text" onClick={() => setSearchBut(!searchBut)}>
                      <Link to={"#"}><i className="flaticon-381-search-2"></i></Link>
                    </span>
                  </div>
                  <div className="plus-icon">
                    <Link to={"#"}
                      onClick={()=>setJobModal(true)}
                      ><i className="fas fa-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav header-right main-notification">	
                  <li className="nav-item dropdown notification_dropdown">
                      <Link to={"#"} 
                        className={`nav-link bell dz-theme-mode p-0 ${background.value === "dark" ? "active" : ""}`}
                        onClick={()=>handleThemeMode()}
                      >
                        <i id="icon-light" className="fas fa-sun" ></i>
                        <i id="icon-dark" className="fas fa-moon"></i>									
                      </Link>
                  </li>			
                <Dropdown
                  as="li"
                  className="nav-item dropdown notification_dropdown "
                  >
                  <Dropdown.Toggle
                    variant=""
                    as="a"
                    className="nav-link bell bell-link i-false c-pointer"
                    onClick={() => onNote()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.871" viewBox="0 0 24 22.871">
                      <g  data-name="Layer 2" transform="translate(-2 -2)">
                      <path id="Path_9" data-name="Path 9" d="M23.268,2H4.73A2.733,2.733,0,0,0,2,4.73V17.471A2.733,2.733,0,0,0,4.73,20.2a.911.911,0,0,1,.91.91v1.94a1.82,1.82,0,0,0,2.83,1.514l6.317-4.212a.9.9,0,0,1,.5-.153h4.436a2.742,2.742,0,0,0,2.633-2L25.9,5.462A2.735,2.735,0,0,0,23.268,2Zm.879,2.978-3.539,12.74a.915.915,0,0,1-.88.663H15.292a2.718,2.718,0,0,0-1.514.459L7.46,23.051v-1.94a2.733,2.733,0,0,0-2.73-2.73.911.911,0,0,1-.91-.91V4.73a.911.911,0,0,1,.91-.91H23.268a.914.914,0,0,1,.879,1.158Z" transform="translate(0 0)"/>
                      <path id="Path_10" data-name="Path 10" d="M7.91,10.82h4.55a.91.91,0,1,0,0-1.82H7.91a.91.91,0,1,0,0,1.82Z" transform="translate(-0.45 -0.63)"/>
                      <path id="Path_11" data-name="Path 11" d="M16.1,13H7.91a.91.91,0,1,0,0,1.82H16.1a.91.91,0,1,0,0-1.82Z" transform="translate(-0.45 -0.99)"/>
                      </g>
                    </svg>
                    <span className="badge light text-white bg-primary rounded-circle">26</span>
                  </Dropdown.Toggle>
                </Dropdown>	
                <Dropdown
                  as="li"
                  className="nav-item dropdown notification_dropdown "
                >
                  <Dropdown.Toggle className="nav-link i-false c-pointer" variant="" as="a"
                    data-toggle="dropdown" aria-expanded="false"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g  data-name="Layer 2" transform="translate(-2 -2)">
                      <path id="Path_20" data-name="Path 20" d="M22.571,15.8V13.066a8.5,8.5,0,0,0-7.714-8.455V2.857a.857.857,0,0,0-1.714,0V4.611a8.5,8.5,0,0,0-7.714,8.455V15.8A4.293,4.293,0,0,0,2,20a2.574,2.574,0,0,0,2.571,2.571H9.8a4.286,4.286,0,0,0,8.4,0h5.23A2.574,2.574,0,0,0,26,20,4.293,4.293,0,0,0,22.571,15.8ZM7.143,13.066a6.789,6.789,0,0,1,6.78-6.78h.154a6.789,6.789,0,0,1,6.78,6.78v2.649H7.143ZM14,24.286a2.567,2.567,0,0,1-2.413-1.714h4.827A2.567,2.567,0,0,1,14,24.286Zm9.429-3.429H4.571A.858.858,0,0,1,3.714,20a2.574,2.574,0,0,1,2.571-2.571H21.714A2.574,2.574,0,0,1,24.286,20a.858.858,0,0,1-.857.857Z"/>
                    </g>
                  </svg>
                  <span className="badge light text-white bg-primary rounded-circle">4</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="right" className="mt-2 dropdown-menu dropdown-menu-end">
                    <PerfectScrollbar className="widget-media dlab-scroll p-3 height380">
                      <ul className="timeline">
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img alt="images" width={50} src={avatar} />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Dr sultads Send you Photo</h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-info">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-success">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Reminder : Treatment Time!</h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img alt="" width={50} src={avatar} />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Dr sultads Send you Photo</h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-danger">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-primary">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Reminder : Treatment Time!</h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                        <div
                          className="ps__thumb-x"
                          tabIndex={0}
                          style={{ left: 0, width: 0 }}
                        />
                      </div>
                      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                        <div
                          className="ps__thumb-y"
                          tabIndex={0}
                          style={{ top: 0, height: 0 }}
                        />
                      </div>
                    </PerfectScrollbar>
                    <Link className="all-notification" to="#">
                      See all notifications <i className="ti-arrow-right" />
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                    as="li"
                    className="nav-item  notification_dropdown "
                  >
                    <Dropdown.Toggle
                      variant=""
                      as="a"
                      className="nav-link  ai-icon i-false c-pointer"
                      // href="#"
                      role="button"
                      data-toggle="dropdown"
                    >
                  <svg xmlns="http://www.w3.org/2000/svg" width="23.262" height="24" viewBox="0 0 23.262 24">
                    <g id="icon" transform="translate(-1565 90)">
                    <path id="setting_1_" data-name="setting (1)" d="M30.45,13.908l-1-.822a1.406,1.406,0,0,1,0-2.171l1-.822a1.869,1.869,0,0,0,.432-2.385L28.911,4.293a1.869,1.869,0,0,0-2.282-.818l-1.211.454a1.406,1.406,0,0,1-1.88-1.086l-.213-1.276A1.869,1.869,0,0,0,21.475,0H17.533a1.869,1.869,0,0,0-1.849,1.567L15.47,2.842a1.406,1.406,0,0,1-1.88,1.086l-1.211-.454a1.869,1.869,0,0,0-2.282.818L8.126,7.707a1.869,1.869,0,0,0,.432,2.385l1,.822a1.406,1.406,0,0,1,0,2.171l-1,.822a1.869,1.869,0,0,0-.432,2.385L10.1,19.707a1.869,1.869,0,0,0,2.282.818l1.211-.454a1.406,1.406,0,0,1,1.88,1.086l.213,1.276A1.869,1.869,0,0,0,17.533,24h3.943a1.869,1.869,0,0,0,1.849-1.567l.213-1.276a1.406,1.406,0,0,1,1.88-1.086l1.211.454a1.869,1.869,0,0,0,2.282-.818l1.972-3.415a1.869,1.869,0,0,0-.432-2.385ZM27.287,18.77l-1.211-.454a3.281,3.281,0,0,0-4.388,2.533l-.213,1.276H17.533l-.213-1.276a3.281,3.281,0,0,0-4.388-2.533l-1.211.454L9.75,15.355l1-.822a3.281,3.281,0,0,0,0-5.067l-1-.822L11.721,5.23l1.211.454A3.281,3.281,0,0,0,17.32,3.151l.213-1.276h3.943l.213,1.276a3.281,3.281,0,0,0,4.388,2.533l1.211-.454,1.972,3.414h0l-1,.822a3.281,3.281,0,0,0,0,5.067l1,.822ZM19.5,7.375A4.625,4.625,0,1,0,24.129,12,4.63,4.63,0,0,0,19.5,7.375Zm0,7.375A2.75,2.75,0,1,1,22.254,12,2.753,2.753,0,0,1,19.5,14.75Z" transform="translate(1557.127 -90)"/>
                    </g>
                  </svg>
                  <span className="badge light text-white bg-primary rounded-circle">15</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="right" className="mt-4 dropdown-menu dropdown-menu-end">
                    <PerfectScrollbar className="widget-timeline dlab-scroll style-1 ps p-3 height370">
                      <ul className="timeline">
                        <li>
                          <div className="timeline-badge primary" />
                          <Link
                            className="timeline-panel c-pointer text-muted"
                            to="#"
                          >
                            <span>10 minutes ago</span>
                            <h6 className="mb-0">
                              Youtube, a video-sharing website, goes live{" "}
                              <strong className="text-primary">$500</strong>.
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <div className="timeline-badge info"></div>
                          <Link
                            className="timeline-panel c-pointer text-muted"
                            to="#"
                          >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              New order placed{" "}
                              <strong className="text-info">#XF-2356.</strong>
                            </h6>
                            <p className="mb-0">
                              Quisque a consequat ante Sit amet magna at
                              volutapt...
                            </p>
                          </Link>
                        </li>
                        <li>
                          <div className="timeline-badge danger"></div>
                          <Link
                            className="timeline-panel c-pointer text-muted"
                            to="#"
                          >
                            <span>30 minutes ago</span>
                            <h6 className="mb-0">
                              john just buy your product{" "}
                              <strong className="text-warning">Sell $250</strong>
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <div className="timeline-badge success"></div>
                          <Link
                            className="timeline-panel c-pointer text-muted"
                            to="#"
                          >
                            <span>15 minutes ago</span>
                            <h6 className="mb-0">
                              StumbleUpon is acquired by eBay.{" "}
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <div className="timeline-badge warning"></div>
                          <Link
                            className="timeline-panel c-pointer text-muted"
                            to="#"
                          >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              Mashable, a news website and blog, goes live.
                            </h6>
                          </Link>
                        </li>
                        <li>
                          <div className="timeline-badge dark"></div>
                          <Link
                            className="timeline-panel c-pointer text-muted"
                            to="#"
                          >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              Mashable, a news website and blog, goes live.
                            </h6>
                          </Link>
                        </li>
                      </ul>
                      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                        <div
                          className="ps__thumb-x"
                          tabIndex={0}
                          style={{ left: 0, width: 0 }}
                        />
                      </div>
                      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                        <div
                          className="ps__thumb-y"
                          tabIndex={0}
                          style={{ top: 0, height: 0 }}
                        />
                      </div>
                    </PerfectScrollbar>
                  </Dropdown.Menu>
                </Dropdown>
                <li className="nav-item header-profile">              
                  <Link to={"#"} className="nav-link" role="button" data-bs-toggle="dropdown">
                    <img src={profile} width="20" alt=""/>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Modal className="modal fade bd-example-modal-lg" show={jobModal} onHide={setJobModal} centered size="lg">                
        <div className="modal-header">
          <h5 className="modal-title">Job Title</h5>
          <button type="button" className="btn-close" onClick={()=>setJobModal(false)}></button>
        </div>
        <div className="modal-body">
          <div className="row">
              {/* <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Company Name<span className="text-danger ms-1">*</span></label>
                <input type="text" className="form-control solid" placeholder="Name" aria-label="name" />
              </div> */}
              <Basic title="Company Name" subtitle="Name" />
              <Basic title="Position" subtitle="Name" />             
              <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Job Category<span className="text-danger ms-1">*</span></label>
                <select  className="nice-select default-select wide form-control solid">
                    <option selected>Choose...</option>
                    <option>QA Analyst</option>
                    <option>IT Manager</option>
                    <option>Systems Analyst</option>
                </select>
              </div>
              <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Job Type<span className="text-danger ms-1">*</span></label>
                <select  className="nice-select default-select wide form-control solid">
                    <option selected>Choose...</option>
                    <option>Part-Time</option>
                    <option>Full-Time</option>
                    <option>Freelancer</option>
                </select>
              </div>              
              <Basic title="No. of Vancancy" subtitle="Name" />
              <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Select Experience<span className="text-danger ms-1">*</span></label>
                  <select  className="nice-select default-select wide form-control solid">
                    <option selected>1 yr</option>
                    <option>2 Yr</option>
                    <option>3 Yr</option>
                    <option>4 Yr</option>
                  </select>
              </div>
              <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Posted Date<span className="text-danger ms-1">*</span></label>
                <div className="input-group">
                    <div className="input-group-text"><i className="far fa-clock"></i></div>
                    <input type="date" name="datepicker" className="form-control" />
                </div>
              </div>
              <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Last Date To Apply<span className="text-danger ms-1">*</span></label>
                <div className="input-group">
                    <div className="input-group-text"><i className="far fa-clock"></i></div>
                    <input type="date" name="datepicker" className="form-control" />
                </div>
              </div>
              <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Close Date<span className="text-danger ms-1">*</span></label>
                <div className="input-group">
                    <div className="input-group-text"><i className="far fa-clock"></i></div>
                    <input type="date" name="datepicker" className="form-control" />
                </div>
              </div>
              <div className="col-xl-6  col-md-6 mb-4">
                <label  className="form-label font-w600">Select Gender:<span className="text-danger ms-1">*</span></label>
                  <select  className="nice-select default-select wide form-control solid">
                    <option selected>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
              </div>
              {inputDate.map((data, ind)=>(
                <div className="col-xl-6  col-md-6 mb-4" key={ind}>
                  <label  className="form-label font-w600">{data.title}<span className="text-danger ms-1">*</span></label>
                  <input type="text" className="form-control solid" placeholder={data.subtitle} aria-label="name" />
                </div>
              ))}             
              <div className="col-xl-12 mb-4">
                  <label  className="form-label font-w600">Description:<span className="text-danger ms-1">*</span></label>
                  <textarea className="form-control solid" rows="5" aria-label="With textarea"></textarea>
              </div>
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger light" 
            onClick={()=>setJobModal(false)}
          >Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>        
      </Modal>
    </>    
  );
};

export default Header;
