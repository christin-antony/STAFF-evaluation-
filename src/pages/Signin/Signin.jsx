import React, { useState } from "react";
import { IoIosUnlock } from "react-icons/io";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "./asset/Galtech.png";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate()
  const dashboard = () => navigate('/dashboard')
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown); 
  };

  return (
    <div className="wrapper ">
      
      <div className=" height section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
      
      
        <div className="container">
          <img src={logo} width="60" alt="Logo" className="galtech-logo" />
          <div className="row row-cols-1 row-cols-xl-2">
            <div className="col mx-auto">
              <div className="border border-1 p-3 rounded">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="p-0">
                      <div className="text-center mb-4">
                        <h3>Sign in</h3>
                      </div>
                      <div className="form-body">
                        <form className="row g-3">
                          <div className="col-12">
                            <label htmlFor="inputEmailAddress" className="form-label labeldark">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmailAddress"
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="col-12">
                            <label htmlFor="inputChoosePassword" className="form-label labeldark">
                              Enter Password
                            </label>
                            <div className="input-group" id="show_hide_password">
                              <input
                                type={passwordShown ? "text" : "password"}
                                className="form-control border-end-0"
                                id="inputChoosePassword"
                                placeholder="Enter Password"
                              />
                              <button
                                type="button"
                                className="input-group-text bg-transparent"
                                onClick={togglePasswordVisibility}
                              >
                                {passwordShown ? <FaEye /> : <FaEyeSlash />}
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button onClick={dashboard} type="submit" className="btn btn-primary fw-medium">
                               <span className="fs-5"><IoIosUnlock /></span>  Sign in
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
