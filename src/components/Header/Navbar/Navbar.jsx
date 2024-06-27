import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import gallogo from "./assets/galtech-school-black-new-1.png.webp";
import whiteLogoImage from './assets/galtech-school-white-new-1.png.webp';
// language import
import country1 from "./assets/images/county/01.png";
import country2 from "./assets/images/county/02.png";
import country3 from "./assets/images/county/03.png";
import country4 from "./assets/images/county/04.png";
import country5 from "./assets/images/county/05.png";
import country6 from "./assets/images/county/06.png";
import country7 from "./assets/images/county/07.png";
import country8 from "./assets/images/county/08.png";
import Language from "./Language";

//app import
import slack from './assets/images/app/slack.png'
import behance from './assets/images/app/behance.png'
import drive from './assets/images/app/google-drive.png'
import outlook from './assets/images/app/outlook.png'
import github from './assets/images/app/github.png'
import stack from './assets/images/app/stack-overflow.png'
import figma from './assets/images/app/figma.png'
import twitter from './assets/images/app/twitter.png'
import calender from './assets/images/app/google-calendar.png'
import spotify from './assets/images/app/spotify.png'
import photos from './assets/images/app/google-photos.png'
import pinterest from './assets/images/app/pinterest.png'
import likedin from './assets/images/app/linkedin.png'
import dribble from './assets/images/app/dribble.png'
import youtube from './assets/images/app/youtube.png'
import google from './assets/images/app/google.png'
import envate from './assets/images/app/envato.png'
import safari from './assets/images/app/safari.png'

import item1 from './assets/images/products/01.png'

//css
import "./Navbar.css";
//logo import
import { IoMoonOutline } from "react-icons/io5";

import { FaRegBell } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

//Notifications Import
import notiprofile1 from "./assets/images/avatars/avatar-1.png";
import notiprofile2 from "./assets/images/avatars/avatar-2.png";
import notiprofile3 from "./assets/images/avatars/avatar-3.png";
import notiprofile4 from "./assets/images/avatars/avatar-4.png";
import notiprofile5 from "./assets/images/avatars/avatar-5.png";
import notiprofile6 from "./assets/images/avatars/avatar-6.png";
import notiprofile7 from "./assets/images/avatars/avatar-7.png";
import notiprofile8 from "./assets/images/avatars/avatar-8.png";
import notiprofile9 from "./assets/images/avatars/avatar-9.png";
import Notification from "./Notification";





const Navbar = ({toggleNavigation, settoggleNavigation,theme,onThemeToggle,headerColor}) => {


  const isDarkMode = theme === "dark";

  const handleThemeToggle = () => {
    onThemeToggle(isDarkMode ? "light" : "dark");
  }
  
  //new functionality
  const [searchValue, setSearchvalue] = useState('')
  const navigate = useNavigate()
  const profileforward = () =>{
    navigate('/userprofile')
  }

  const handleSearchInput = (e) =>{
    setSearchvalue(e.target.value)
  }
  useEffect(() => {
    const handleEnterpress= (e) =>{
      if (e.key === 'Enter'){
        console.log(searchValue);
      }
    }
    document.addEventListener('keydown',handleEnterpress)
    return() => {
      document.removeEventListener('keydown',handleEnterpress)
  }
    console.log(2);
  },[searchValue])




  //language Details
  const languageDetails = [
    {
      language: "English",
      img: country1,
    },
    {
      language: "Catalan",
      img: country2,
    },
    {
      language: "French",
      img: country3,
    },
    {
      language: "Belize",
      img: country4,
    },
    {
      language: "Colombia",
      img: country5,
    },
    {
      language: "Spanish",
      img: country6,
    },
    {
      language: "Georgian",
      img: country7,
    },
    {
      language: "Hindi",
      img: country8,
    },
  ];

  //Notification Details
  const NotificationDetails = [
    {
      name: "Daisy Anderson",
      img: notiprofile1,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile2,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile3,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile4,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile5,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile6,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile7,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile8,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
    {
      name: "Daisy Anderson",
      img: notiprofile9,
      time: "5 sec ago",
      sentence: "The standard Chunk of Lorem",
    },
  ];

  //function Variables
  const [languagediv, setLanguagediv] = useState(false)
  const [appdiv, setappdiv] = useState(false)
  const [notifidiv, setnotifidiv] = useState(false)
  
  const [userdiv, setuserdiv] = useState(false)
  const [visionchangevar ,setVisionchange] = useState(false)
  const [showinput,setshowinput] = useState(false)

  
  // functions
  const handleshowinput = (e) =>{
    if(showinput){
      setshowinput(false)
      
    }
    else{
      setshowinput(true)
      setLanguagediv(false)
      setappdiv(false)
      setnotifidiv(false)
      
      setuserdiv(false)
      settoggleNavigation(false)
    }
    console.log(toggleNavigation);
  }
 
  // functions

  //language div funciton
  const languagedivfun = () => {

    if (languagediv) {
      setLanguagediv(false)
    }
    else {
      setLanguagediv(true)
      setappdiv(false)
      setnotifidiv(false)
      
      setuserdiv(false)
      settoggleNavigation(false)
      setshowinput(false)      

    }
    console.log(typeof(toggleNavigation))
  }
  const appsfun = () => {

    if (appdiv) {
      setappdiv(false)
    }
    else {
      setappdiv(true)
      setLanguagediv(false)
      setnotifidiv(false)
      
      setuserdiv(false)
      settoggleNavigation(false)
      setshowinput(false)
    }
    console.log(typeof(toggleNavigation))
  }
  const notififun = () => {

    if (notifidiv) {
      setnotifidiv(false)
    }
    else {
      setnotifidiv(true)
      setLanguagediv(false)
      setappdiv(false)
      
      setuserdiv(false)
      settoggleNavigation(false)
      setshowinput(false)
    }
    console.log(toggleNavigation)
  }

  const userfun = () => {

    if (userdiv) {
      setuserdiv(false)
    }
    else {
      setuserdiv(true)
      setLanguagediv(false)
      setnotifidiv(false)
      setappdiv(false)
      
      settoggleNavigation(false)
      setshowinput(false)
    }
    console.log(toggleNavigation)
  }
  //vision function
  const visionchange = () =>{
    if(visionchangevar){
      setVisionchange(false)

    }
    else{
      setVisionchange(true)
    }
  }

  const showToggleNavigation = () =>{
    console.log(toggleNavigation);
    if(toggleNavigation){
      settoggleNavigation(false)
      console.log(0);
    }
    else if(!toggleNavigation){
      settoggleNavigation(true)
      setshowinput(false)
      setLanguagediv(false)
      setappdiv(false)
      setnotifidiv(false)
      
      setuserdiv(false)
      
      console.log('11');
    }
    
  }
  return (
    <>
      <header >
        <div className="topbar d-flex align-items-center" >
          <nav className="navbar navbar-expand gap-3"  style={{ backgroundColor: headerColor }}>
            <div className="topbar-logo-header d-none d-lg-flex">
              <div className="logo-div">
              <img
                  src={theme === "dark" ?whiteLogoImage : gallogo}
                  className="logo-icon"
                  alt="logo icon"
                />
              </div>
            </div>
            <div className="mobile-toggle-menu d-block d-lg-none" onClick={showToggleNavigation} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"><IoMenu />
</div>
            <div
              className="search-bar d-lg-block d-none"
              data-bs-toggle="modal"
              data-bs-target="#SearchModal"
              style={{ background: "#f4f4f4", borderRadius: '10px', }}
            >
              <div className="input-group "style={{height:'40px'}} >
                <span className="input-group-text" style={{width:'3rem',border:'none',background:'inherit'}} ><FaSearch /></span>
                <input type="text" className="" onChange={handleSearchInput} style={{border:'none',outline:'none', background: "inherit", borderRadius:'0  5px 5px 0'}} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>



            </div>
            <div className="top-menu ms-auto">
              <ul className="navbar-nav align-items-center gap-1">
                <li
                  className="nav-item mobile-search-icon d-flex d-lg-none"
                  data-bs-toggle="modal"
                 
                  data-bs-target="#SearchModal"
                >
                  <div className="nav-link"  onClick={handleshowinput}>
                  <FaSearch />
                  </div>
                  { showinput ?
                  <div className="dropdown-menu dropdown-menu-end p-0  show" style={{width:'100%',height:"",overflow:'hidden'}} data-bs-popper="static">
                    <div className="app-container" style={{overflow:"hidden"}} >
                      <div className="row gx-0 gy-2 row-cols-3 justify-content-center p-2">
                        <div className="col" >
                        <input type="text"  className="" onChange={handleSearchInput} style={{border:'none',outline:'none', background: "inherit",height:'30px', width:'95%',borderRadius:'0  5px 5px 0'}} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        </div>
                        </div>
                        </div> : ''}
                </li>
                <li
                  onClick={languagedivfun}
                  className="nav-item dropdown dropdown-laungauge d-none d-sm-flex"
                >
                  <div
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown"
                  >
                    <img src={country2} width="22" alt="" />
                  </div>
                  {languagediv ?
                          <ul className="dropdown-menu dropdown-menu-end show" data-bs-popper='static'>
                      {languageDetails.map((language, index) => (
                        <Language
                          key={index}
                          name={language.language}
                          image={language.img}
                        />

                      ))}
                      
                    </ul>
                    :
                    " "
                  }
                  <ul className="dropdown-menu dropdown-menu-end ">
                    {languageDetails.map((language, index) => (
                      <Language
                        key={index}
                        name={language.language}
                        image={language.img}
                      />
                    ))}
                  </ul>
                </li>
                <li className="nav-item dark-mode d-none d-sm-flex" onClick={handleThemeToggle}>
                <div className="nav-link dark-mode-icon" id="moon">
                  {isDarkMode ? <CiLight />:  <IoMoonOutline />}
                </div>
              </li>

                <li onClick={appsfun} className="nav-item dropdown dropdown-app">
                  <div
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown"

                  >
                    <IoGridOutline color="" />{" "}
                  </div>

                  {appdiv ? <div className="dropdown-menu dropdown-menu-end p-0  show" data-bs-popper="static">
                    <div className="app-container p-2 my-2">
                      <div className="row gx-0 gy-2 row-cols-3 justify-content-center p-2">
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={slack}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Slack</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={behance}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Behance</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={drive}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Dribble</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={outlook}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Outlook</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={github}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">GitHub</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={stack}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Stack</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={figma}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Stack</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={twitter}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Twitter</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={calender}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Calendar</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={spotify}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Spotify</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={photos}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Photos</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={pinterest}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Photos</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={likedin}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">linkedin</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={dribble}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Dribble</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={youtube}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">YouTube</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={google}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">News</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={envate}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Envato</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div  >
                            <div className="app-box text-center">
                              <div className="app-icon">
                                <img
                                  src={safari}
                                  width="30"
                                  alt=""
                                />
                              </div>
                              <div className="app-name">
                                <p className="mb-0 mt-1">Safari</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                    : " "}
                </li>

                <li onClick={notififun} className="nav-item dropdown dropdown-large">
                  <div
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="alert-count">7</span>
                    <FaRegBell />
                  </div>
                  {notifidiv ?
                    <div className="dropdown-menu dropdown-menu-end show" data-bs-popper="static">
                      <div  >
                        <div className="msg-header">
                          <p className="msg-header-title">Notifications</p>
                          <p className="msg-header-badge">8 New</p>
                        </div>
                      </div>
                      <div className="header-notifications-list">
                       
                        {NotificationDetails.map((notifi, index) => (
                          <Notification
                            key={index}
                            name={notifi.name}
                            sentence={notifi.sentence}
                            img={notifi.img}
                            time={notifi.time}
                          />
                        ))}

                        <div className="dropdown-item"  >
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-primary">
                              <img
                                src="assets/images/app/github.png"
                                width="25"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New 24 authors
                                <span className="msg-time float-end">
                                  1 day ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                24 new authors joined last week
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="dropdown-item"  >
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-8.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Peter Costanzo{" "}
                                <span className="msg-time float-end">
                                  6 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                It was popularised in the 1960s
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div  >
                        <div className="text-center msg-footer">
                          <button className="btn btn-primary w-100">
                            View All Notifications
                          </button>
                        </div>
                      </div>
                    </div>
                    : " "}
                </li>
            
              </ul>
            </div>
            <div className="user-box dropdown px-3 " onClick={userfun}>
              <div
                className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={item1}
                  className="user-img"
                  alt="user avatar"
                />
                <div className="user-info">
                  <p className="user-name mb-0">Pauline Seitz</p>
                  <p className="designattion mb-0">Web Designer</p>
                </div>
              </div>
              {userdiv ?
                <ul className="dropdown-menu dropdown-menu-end show" data-bs-popper="static">
                  <li>
                    {" "}
                    <div
                      className="dropdown-item d-flex align-items-center"
                      onClick={profileforward}
                    >
                      <i className="bx bx-user fs-5"></i>
                      <span>Profile</span>{" "}
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div
                      className="dropdown-item d-flex align-items-center"

                    >
                      <i className="bx bx-cog fs-5"></i>
                      <span>Settings</span>{" "}
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div
                      className="dropdown-item d-flex align-items-center"

                    >
                      <i className="bx bx-home-circle fs-5"></i>
                      <span>Dashboard</span>{" "}
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div
                      className="dropdown-item d-flex align-items-center"

                    >
                      <i className="bx bx-dollar-circle fs-5"></i>
                      <span>Earnings</span>{" "}
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div
                      className="dropdown-item d-flex align-items-center"

                    >
                      <i className="bx bx-download fs-5"></i>
                      <span>Downloads</span>{" "}
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider mb-0"></div>
                  </li>
                  <li>
                    {" "}
                    <div
                      className="dropdown-item d-flex align-items-center"

                    >
                      <i className="bx bx-log-out-circle"></i>
                      <span>Logout</span>{" "}
                    </div>
                  </li>
                </ul>
                : " "}
            </div>
            
          </nav>
          <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
</svg>
        </div>
      </header>
    </>
  );
};

export default Navbar;