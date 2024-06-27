import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { GrUserWorker } from "react-icons/gr";
import { HiPencilSquare } from "react-icons/hi2";
import { FcDepartment } from "react-icons/fc";
import Header from "../../components/Header/Header";
import Theme from '../../components/Dashboard-1/Dashboard-1-Theme/Theme';
import Footer from "../../components/Footer/Footer";


const AddEmployee = ({ theme, handleThemeChange, headerColor, setHeaderColor }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  const handleReset = () => {
    setName("");
    setPosition("");
    setDepartment("");
    setEmployeeID("");
    setJoiningDate("");
  };

  const [toggleNavigation, setToggleNavigation] = useState(false);

  const toggleNavigationHandler = () => {
    setToggleNavigation(prevState => !prevState);
  };

  return (
    <div className="mx-5 my-5">
      <Header theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} />
      <Theme theme={theme} onIconClick={handleThemeChange} setHeaderColor={setHeaderColor} />
      <div className="card height">
        <div className="card-body p-5">
          <h5 className="mb-4">Add Employee</h5>
          <div className="row mb-3">
            <label htmlFor="input49" className="col-sm-3 col-form-label labeldark">
              Enter Your Name:
            </label>
            <div className="col-sm-9">
              <div className="input-group">
                <span className="input-group-text">
                  <FiUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="input49"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="input50" className="col-sm-3 col-form-label labeldark">
              Position:
            </label>
            <div className="col-sm-9">
              <div className="input-group">
                <span className="input-group-text">
                  <GrUserWorker />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="input50"
                  placeholder="Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="input51" className="col-sm-3 col-form-label labeldark">
              Department:
            </label>
            <div className="col-sm-9">
              <div className="input-group">
                <span className="input-group-text">
                  <FcDepartment />
                </span>
                <select className="form-select" aria-label="Default select example" value={department} onChange={(e) => setDepartment(e.target.value)}>
                  <option disabled value="">Department</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="input52" className="col-sm-3 col-form-label labeldark">
              Employee ID:
            </label>
            <div className="col-sm-9">
              <div className="input-group">
                <span className="input-group-text">
                  <HiPencilSquare />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="input52"
                  placeholder="Employee ID"
                  value={employeeID}
                  onChange={(e) => setEmployeeID(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="input53" className="col-sm-3 col-form-label labeldark">
              Date of Joining:
            </label>
            <div className="col-sm-9">
              <div className="input-group">
                <span className="input-group-text">
                  <SlCalender />
                </span>
                <input
                  type="date"
                  className="form-control"
                  id="input52"
                  placeholder="Date of Joining"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
              <div className="d-md-flex d-grid align-items-center gap-3">
                <button type="button" className="btn btn-primary px-4">
                  Submit
                </button>
                <button type="button" className="btn btn-light px-4" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer headerColor={headerColor}/>
    </div>
  );
};

export default AddEmployee;
