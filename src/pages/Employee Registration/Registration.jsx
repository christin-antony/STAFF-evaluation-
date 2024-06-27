import React, { useRef, useState } from "react";
import "./Registration.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { HiMiniIdentification } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Alert, Button, Table, Form } from "react-bootstrap";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useReactToPrint } from 'react-to-print';
import { Link } from "react-router-dom";
import Theme from "../../components/Dashboard-1/Dashboard-1-Theme/Theme";


const Registration = ({ theme, handleThemeChange, headerColor, setHeaderColor }) => {
  const [employeeID, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validEmailFormat, setValidEmailFormat] = useState(true);
  const [employeesData, setEmployeesData] = useState([]);
  const [existingEmployeeAlert, setExistingEmployeeAlert] = useState(false);
  const [existingEmailAlert, setExistingEmailAlert] = useState(false);
  const [showRegistration, setShowRegistration] = useState(true);
  const [activeButton, setActiveButton] = useState("registration");
  const [tableDataString, setTableDataString] = useState("");
  const tableRef = useRef(); // Create a ref for the table
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page

  const handleReset = () => {
    setEmployeeID("");
    setName("");
    setEmail("");
    setPassword("");
    setCnfPassword("");
    setPasswordMatch(true);
    setExistingEmployeeAlert(false);
    setExistingEmailAlert(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmailFormat(validateEmail(inputEmail));
    setExistingEmailAlert(false); // Reset existing email alert
  };

  const handleSubmit = () => {
    let errorExists = false;

    if (password !== cnfPassword) {
      setPasswordMatch(false);
      // setPasswordMismatchAlert(true);
      errorExists = true;
    } else {
      setPasswordMatch(true);
      // setPasswordMismatchAlert(false);
    }

    // Check if email format is valid
    if (!validEmailFormat) {
      // return;
      errorExists = true;
    }

    const existingEmployee = employeesData.find(
      (employee) => employee.id === employeeID
    );
    if (existingEmployee) {
      setExistingEmployeeAlert(true);
      errorExists = true;
    } else {
      setExistingEmployeeAlert(false);
    }

    const existingEmail = employeesData.find(
      (employee) => employee.email === email
    );
    if (existingEmail) {
      setExistingEmailAlert(true);
      errorExists = true;
    } else {
      setExistingEmailAlert(false);
    }

    // If any error exists, stop further execution
    if (errorExists) {
      return;
    }

    // Add new employee
    const newEmployee = {
      id: employeeID,
      name: name,
      email: email,
      password: password,
    };

    setEmployeesData([...employeesData, newEmployee]);
    handleReset();
  };

  const handleRegistrationButtonClick = () => {
    setShowRegistration(true);
    setActiveButton("registration");
  };

  const handleRegisteredDataButtonClick = () => {
    setShowRegistration(false);
    setActiveButton("registeredData");
  };

  // Excel Functionality
  const downloadExcel = () => {
    if (employeesData.length === 0) {
      return;
    }

    const wb = XLSX.utils.book_new();
    wb.Props = {
      Title: "Employee Data",
      CreatedDate: new Date(),
    };

    const wsData = [
      ["Employee ID", "Name", "Email", "Password"],
      ...employeesData.map((employee) => [
        employee.id,
        employee.name,
        employee.email,
        employee.password,
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Employees");

    XLSX.writeFile(wb, "employee_data.xlsx");
  };

  //PDF Functionality
  const downloadPDF = () => {
    if (employeesData.length === 0) {
      return;
    }

    const doc = new jsPDF();
    doc.autoTable({
      head: [["Employee ID", "Name", "Email", "Password"]],
      body: employeesData.map((employee) => [
        employee.id,
        employee.name,
        employee.email,
        employee.password,
      ]),
    });
    doc.save("employee_data.pdf");
  };

// Copy Functionality
  const generateTableDataString = () => {
    let dataString = "";

    // Loop through employeesData to generate the table data string
    employeesData.forEach((employee) => {
      dataString += `Employee ID: ${employee.id}, Name: ${employee.name}, Email: ${employee.email}, Password: ${employee.password}\n`;
    });

    setTableDataString(dataString);
  };

  // Print Functionality
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });


 // Pagination Logic
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = employeesData.slice(indexOfFirstItem, indexOfLastItem);
 const totalPages = Math.ceil(employeesData.length / itemsPerPage);

 const nextPage = () => {
   if ((currentPage + 1) <= totalPages) {
     setCurrentPage(currentPage + 1);
   }
 };

 const prevPage = () => {
   if (currentPage > 1) {
     setCurrentPage(currentPage - 1);
   }
 };

 const goToPage = (page) => {
   setCurrentPage(page);
 };

  return (
    <div className="mx-5 my-5 pb-1">
         <Header theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} />
         <Theme theme={theme} onIconClick={handleThemeChange} setHeaderColor={setHeaderColor} />
      <div className="card height">
        <div className="card-body p-5">
          <div className="dt-buttons btn-group mb-4">
            <Button
              variant={
                activeButton === "registration" ? "primary" : "outline-primary"
              }
              className="buttons-copy buttons-html5"
              tabIndex="0"
              aria-controls="example2"
              type="button"
              onClick={handleRegistrationButtonClick}
            >
              <span>Register Employee</span>
            </Button>
            <Button
              variant={
                activeButton === "registeredData"
                  ? "primary"
                  : "outline-primary"
              }
              className="buttons-excel buttons-html5"
              tabIndex="0"
              aria-controls="example2"
              type="button"
              onClick={handleRegisteredDataButtonClick}
            >
              <span>Registered Employees Data</span>
            </Button>
          </div>
          {showRegistration ? (
            <div className="empRegistration">
              <h5 className="mb-4">Employee Registration</h5>
              <Form>
                <div className="row mb-3">
                  <label htmlFor="regEmpID" className="col-sm-3 col-form-label labeldark">
                    Employee id:
                  </label>
                  <div className="col-sm-9">
                    <Form.Group controlId="regEmpID">
                      <div className="input-group">
                        <span className="input-group-text">
                          <HiMiniIdentification />
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="Employee ID"
                          value={employeeID}
                          onChange={(e) => setEmployeeID(e.target.value)}
                        />
                      </div>
                    </Form.Group>
                    {existingEmployeeAlert && (
                      <Alert variant="danger" className="mt-2">
                        Employee ID already exists.
                      </Alert>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="regName" className="col-sm-3 col-form-label labeldark">
                    Name:
                  </label>
                  <div className="col-sm-9">
                    <Form.Group controlId="regName">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FiUser />
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name here"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="regEmail" className="col-sm-3 col-form-label labeldark">
                    Email:
                  </label>
                  <div className="col-sm-9">
                    <Form.Group controlId="regEmail">
                      <div className="input-group">
                        <span className="input-group-text">
                          <MdOutlineEmail />
                        </span>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email id here"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                      {!validEmailFormat && (
                        <Alert variant="danger" className="mt-2">
                          Please enter a valid email address.
                        </Alert>
                      )}
                      {existingEmailAlert && (
                        <Alert variant="danger" className="mt-2">
                          Employee Email already exists.
                        </Alert>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="regPassword"
                    className="col-sm-3 col-form-label labeldark"
                  >
                    Password:
                  </label>
                  <div className="col-sm-9">
                    <Form.Group controlId="regPassword">
                      <div className="input-group">
                        <span className="input-group-text">
                          <RiLockPasswordLine />
                        </span>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row mb-5">
                  <label
                    htmlFor="regCnfPassword"
                    className="col-sm-3 col-form-label labeldark"
                  >
                    Confirm Password:
                  </label>
                  <div className="col-sm-9">
                    <Form.Group controlId="regCnfPassword">
                      <div className="input-group">
                        <span className="input-group-text">
                          <RiLockPasswordFill />
                        </span>
                        <Form.Control
                          type={passwordShown ? "text" : "password"}
                          placeholder="Confirm Password"
                          value={cnfPassword}
                          onChange={(e) => setCnfPassword(e.target.value)}
                        />
                        <Button
                          type="button"
                          className="input-group-text bg-transparent text-dark border"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordShown ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                      </div>
                    </Form.Group>
                    {!passwordMatch && (
                      <Alert variant="danger" className="mt-2">
                        Passwords do not match.
                      </Alert>
                    )}
                  </div>
                </div>
                <div className="row mt-4">
                  <label className="col-sm-3 col-form-label"></label>
                  <div className="col-sm-9">
                    <div className="d-md-flex d-grid align-items-center gap-3">
                      <Button
                        variant="primary"
                        type="button"
                        onClick={handleSubmit}
                        className="px-4"
                      >
                        Submit
                      </Button>
                      <Button
                        variant="light"
                        type="button"
                        onClick={handleReset}
                        className="px-4"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          ) : (
            <div className="regDataTable">
              <h5 className="mb-4">Registered Employee Data</h5>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <nav aria-label="...">
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item">
                      <CopyToClipboard text={tableDataString}>
                        <Link 
                          className="page-link"
                          href="#"
                          onClick={generateTableDataString}>
                          Copy
                        </Link>
                      </CopyToClipboard>
                    </li>
                    <li className="page-item">
                      <Link  
                        className="page-link"
                        href="#" 
                        onClick={downloadExcel}
                      >
                        Excel
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        href="#"
                        onClick={downloadPDF}
                      >
                        Pdf
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        href="#"
                        onClick={handlePrint}
                      >
                        Print
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className="search-bar"
                  data-bs-toggle="modal"
                  data-bs-target="#SearchModal"
                  style={{
                    background: "white",
                    borderRadius: "10px",
                    width: "200px",
                  }}
                >
                  <div className="input-group" style={{ height: "30px" }}>
                    <span
                      className="input-group-text"
                      style={{
                        width: "75px",
                        border: "none",
                        background: "inherit",
                      }}
                    >
                      <h6>Search:</h6>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        borderColor: "#14525",
                        outline: "none",
                        background: "inherit",
                        borderRadius: "5px 5px 5px 5px",
                        height: "30px",
                      }}
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <Table bordered striped className="regDataTableData" ref={tableRef}>
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length === 0 ? ( // Check if employeesData array is empty
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    ) : (
                      // Map over employeesData if it's not empty
                      currentItems.map((employee, index) => (
                        <tr key={index}>
                          <td>{employee.id}</td>
                          <td>{employee.name}</td>
                          <td>{employee.email}</td>
                          <td>{employee.password}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>
              <div className='pageNums'>
              <div className="table-info">Showing {currentItems.length === 0 ? 0 : indexOfFirstItem + 1} to {indexOfLastItem > employeesData.length ? employeesData.length : indexOfLastItem} of {employeesData.length} {currentItems.length <= 1 ? "entry" : "entries"}</div>
              <nav aria-label="...">
                <ul className="pagination pagination-sm mb-0">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" onClick={prevPage}>Previous</Link>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === (index + 1) ? 'active' : ''}`}>
                      <Link className="page-link" onClick={() => goToPage(index + 1)}>{index + 1}</Link>
                    </li>
                  ))}
                  <li className={`page-item ${totalPages <= 1 || currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link className="page-link" onClick={nextPage}>Next</Link>
                  </li>
                </ul>
              </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer headerColor={headerColor}/>
    </div>
  );
};

export default Registration;
