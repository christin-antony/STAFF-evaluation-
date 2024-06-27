import React, { useDebugValue, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import Icons
import { IoGridOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { FaSuitcase } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

//import css
import '../Navigations/Navigations.css'
import Signin from '../../../pages/Signin/Signin';


const Navigations = ({ toggleNavigation, errorlogintoast }) => {
  const [Dashboard, setDashboard] = useState(false)
  const [appndpages, setappndpages] = useState(false)
  const [forms, setforms] = useState(false)
  const [authentication, setauthentication] = useState(false)
  const [uielements, setuielements] = useState(false)
  const [charts, setcharts] = useState(false)
  const [tables, settables] = useState(false)

  //const Navigate
  const navigate = useNavigate()
  
  const dashboard = () => {
    navigate('/dashboard')
    console.log("Done");
  }
  const addemployeeform = () => {
    navigate('/addemployee')
  }
  const registeremployeeform = () =>{
    navigate('/registration')
  }
  const evaluationhrform = () => {
    navigate('/evaluationhr/*/')
  }
  const evaluationtlform = () => {
    navigate('/evaluationtl/*/')
  }
  const evaluationmnform = () => {
    navigate('/evaluationmn/*/')
  }
  const Signinnav = () => {
    navigate('/')
  }
  const error500 = () => {
    navigate('/error500')
  }
  const error400 = () => {
    navigate('/error400')
  }

  const employeedatatable = () => {
    navigate("/EmployeeData")
  }


  const handledashboard = () => {
    if (Dashboard) {
      setDashboard(false)
    }
    else {
      setDashboard(true)
      settables(false)
      setforms(false)
      setcharts(false)
      setauthentication(false)
      setuielements(false)
    }
  }

  const handleforms = () => {
    if (forms) {
      setforms(false)
    }
    else {
      setforms(true)
      setDashboard(false)
      settables(false)
      setcharts(false)
      setauthentication(false)
      setuielements(false)
    }
  }
  const handleauthentication = () => {
    if (authentication) {
      setauthentication(false)
    }
    else {
      setauthentication(true)
      setDashboard(false)
      settables(false)
      setcharts(false)
      setforms(false)
      setuielements(false)
    }
  }
  const handleuielements = () => {
    if (uielements) {
      setuielements(false)
    }
    else {
      setuielements(true)
      setDashboard(false)
      settables(false)
      setforms(false)
      setauthentication(false)
      setcharts(false)
    }
    console.log(uielements);
  }
  const handlecharts = () => {
    if (charts) {
      setcharts(false)
    }
    else {
      setcharts(true)
      setDashboard(false)
      settables(false)
      setforms(false)
      setauthentication(false)
      setuielements(false)
    }
  }
  const handletables = () => {
    if (tables) {
      settables(false)
    }
    else {
      settables(true)
      setDashboard(false)
      setforms(false)
      setcharts(false)
      setauthentication(false)
      setuielements(false)
    }
  }
  return (
    <div>

      <div className="primary-menu">
        <nav className="navbar navbar-expand-lg align-items-center">
          {toggleNavigation ?

            (<div className="offcanvas offcanvas-start show" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header border-bottom">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                  </div>
                  <div className="">
                    <h4 className="logo-text">Syndron</h4>
                  </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav align-items-center flex-grow-1">
                  <li className="nav-item dropdown" onClick={handledashboard}>
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex show" aria-expanded="true" data-bs-toggle="dropdown">
                      <div className="parent-icon"><IoHomeOutline />
                      </div>
                      <div className="menu-title d-flex align-items-center">Dashboard</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine /></div>
                    </div>
                    {Dashboard ? (<>

                      <ul className="dropdown-menu show">
                        <li> <div onClick={dashboard} className="dropdown-item" href="index.html"><i className='bx bx-pie-chart-alt' ></i>Dashboard </div></li>


                      </ul></>) : (" ")}
                  </li>

                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" data-bs-toggle="dropdown" onClick={handleforms}>
                      <div className="parent-icon"><IoMdPaper />
                      </div>
                      <div className="menu-title d-flex align-items-center">Forms</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine /></div>
                    </div>
                    {forms ?
                      <ul className="dropdown-menu show">
                        <li>  <div onClick={addemployeeform} className="dropdown-item" href="form-elements.html"><i className='bx bx-message-square-dots'></i>Add Employee </div>    </li>
                        <li>  <div onClick={registeremployeeform} className="dropdown-item" href="form-elements.html"><i className='bx bx-message-square-dots'></i>Register Employee </div>    </li>


                      </ul> : " "}
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" onClick={handleauthentication} data-bs-toggle="dropdown">
                      <div className="parent-icon"><FaUnlockAlt />
                      </div>
                      <div className="menu-title d-flex align-items-center">Authentication</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>
                    {authentication ?
                      <ul className="dropdown-menu show">
                        <li> <div onClick={Signinnav} className="dropdown-item" href="auth-basic-signup.html"><i className='bx bx-radio-circle'></i>Sign In </div></li>
                      </ul> : " "}
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" onClick={handleuielements} data-bs-toggle="dropdown">
                      <div className="parent-icon"><FaSuitcase />
                      </div>
                      <div  className="menu-title d-flex align-items-center">Evaluations</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>
                    {uielements ?
                      <ul className="dropdown-menu show">
                        <li onClick={evaluationhrform}>  <div className="dropdown-item" href="widgets.html"><i className='bx bx-wine'></i>Evaluation by Hr </div></li>
                        <li onClick={evaluationtlform}>  <div className="dropdown-item" href="widgets.html"><i className='bx bx-wine'></i>Evaluation by TL </div></li>
                        <li onClick={evaluationmnform}>  <div className="dropdown-item" href="widgets.html"><i className='bx bx-wine'></i>Evaluation by MN </div></li>

                      </ul> : " "}
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" onClick={handlecharts} data-bs-toggle="dropdown">
                      <div className="parent-icon"><GoGraph />
                      </div>
                      <div className="menu-title d-flex align-items-center">Errors</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>
                    {charts ?
                      <ul className="dropdown-menu show">
                        <li onClick={error500}> <div className="dropdown-item" href="charts-apex-chart.html"><i className='bx bx-bar-chart-alt-2' ></i>Error 500 </div></li>
                        <li onClick={error400}> <div className="dropdown-item" href="charts-apex-chart.html"><i className='bx bx-bar-chart-alt-2' ></i>Error 400 </div></li>
                        <li onClick={errorlogintoast}> <div className="dropdown-item" href="charts-apex-chart.html"><i className='bx bx-bar-chart-alt-2' ></i>Toast </div></li>


                      </ul> : ' '}
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" onClick={handletables} data-bs-toggle="dropdown">
                      <div className="parent-icon"><IoGridOutline />

                      </div>
                      <div className="menu-title d-flex align-items-center">Tables</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>
                    {tables ?
                      <ul className="dropdown-menu show">
                         <li onClick={employeedatatable}> <div className="dropdown-item" href="table-datatable.html"><i className='bx bx-data' ></i>Employee Data Table </div></li>
                      </ul> : ''}
                  </li>
                </ul>
              </div>
            </div>)
            : <div className="offcanvas offcanvas-start  " id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header border-bottom">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                  </div>
                  <div className="">
                    <h4 className="logo-text"></h4>
                  </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav align-items-center flex-grow-1">
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" data-bs-toggle="dropdown">
                      <div className="parent-icon"><IoHomeOutline />
                      </div>
                      <div className="menu-title d-flex align-items-center">DashBoard</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine /></div>
                    </div>
                    <ul className="dropdown-menu">

                      <li> <div onClick={dashboard} className="dropdown-item" href="index2.html">Dashboard </div></li>

                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" data-bs-toggle="dropdown">
                      <div className="parent-icon"><IoMdPaper />
                      </div>
                      <div className="menu-title d-flex align-items-center">Forms</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine /></div>
                    </div>
                    <ul className="dropdown-menu">
                      <li>  <div onClick={addemployeeform} className="dropdown-item" href="form-elements.html"><i className='bx bx-message-square-dots'></i>Add Employee </div>    </li>
                      <li>  <div onClick={registeremployeeform} className="dropdown-item" href="form-elements.html"><i className='bx bx-message-square-dots'></i>Register Employee </div>    </li>


                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" data-bs-toggle="dropdown">
                      <div className="parent-icon"><FaUnlockAlt />
                      </div>
                      <div className="menu-title d-flex align-items-center">Authentication</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>

                    <ul className="dropdown-menu show">
                      <li> <div onClick={Signinnav} className="dropdown-item" href="auth-basic-signup.html"><i className='bx bx-radio-circle'></i>Sign In </div></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" data-bs-toggle="dropdown">
                      <div className="parent-icon"><FaSuitcase />
                      </div>
                      <div className="menu-title d-flex align-items-center">Evaluations</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>
                    <ul className="dropdown-menu">
                      <li onClick={evaluationhrform}>  <div className="dropdown-item" href="widgets.html"><i className='bx bx-wine'></i>Evaluation by Hr </div></li>
                      <li onClick={evaluationtlform}>  <div className="dropdown-item" href="widgets.html"><i className='bx bx-wine'></i>Evaluation by TL </div></li>
                      <li onClick={evaluationmnform}>  <div className="dropdown-item" href="widgets.html"><i className='bx bx-wine'></i>Evaluation by MN </div></li>

                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" data-bs-toggle="dropdown">
                      <div className="parent-icon"><GoGraph />
                      </div>
                      <div className="menu-title d-flex align-items-center">Errors</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>
                    <ul className="dropdown-menu">
                      <li onClick={error500}> <div className="dropdown-item" href="charts-apex-chart.html"><i className='bx bx-bar-chart-alt-2' ></i>Error 500 </div></li>
                      <li onClick={error400}> <div className="dropdown-item" href="charts-apex-chart.html"><i className='bx bx-bar-chart-alt-2' ></i>Error 400 </div></li>
                      <li onClick={errorlogintoast}> <div className="dropdown-item" href="charts-apex-chart.html"><i className='bx bx-bar-chart-alt-2' ></i>Toast </div></li>


                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle dropdown-toggle-nocaret d-flex" data-bs-toggle="dropdown">
                      <div className="parent-icon"><IoGridOutline />

                      </div>
                      <div className="menu-title d-flex align-items-center">Tables</div>
                      <div className="ms-auto dropy-icon"><RiArrowDropDownLine />
                      </div>
                    </div>
                    <ul className="dropdown-menu">

                      <li onClick={employeedatatable}> <div className="dropdown-item" href="table-datatable.html"><i className='bx bx-data' ></i>Employee Data Table </div></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            //                  

          }
        </nav>
      </div>

    </div>
  )
}

export default Navigations
