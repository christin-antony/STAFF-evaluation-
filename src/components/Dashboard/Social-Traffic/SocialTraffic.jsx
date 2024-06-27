import React, { useState, useRef } from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Dropdown } from "react-bootstrap";
import './SocialTraffic.css'
import { BiSolidCheckbox } from "react-icons/bi";

export const SocialTraffic = () => {

  const dropdownRef = useRef(null);
  const [dropdowns, setDropdowns] = useState({});

  const handleDropdownToggle = (e, key) => {
    e.preventDefault();
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleDropdownHidden = (key) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <div className="card radius-10 w-100 m-0 shadow">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="mb-0 font-weight-bold">Social Traffic</h5>
          <Dropdown className="ms-auto">
            <Dropdown.Toggle
              // as="a"
              className="dropdown-toggle dropdown-toggle-nocaret toggle1 bg-transparent border-0"
              ref={dropdownRef}
            >
              <HiOutlineDotsHorizontal className="font-22 text-option" />
            </Dropdown.Toggle>
            <Dropdown.Menu
              show={dropdowns["total-users"]}
              className="dropdown-menu"
              onToggle={() => handleDropdownHidden("total-users")}
              popperConfig={{
                modifiers: [{
                  name: 'offset',
                  options: {
                    offset: [0, 10],
                  },
                }],
              }}
            >
              <Dropdown.Item
                // href=""
                onClick={(e) => handleDropdownToggle(e, "total-users")}
              >
                Action
              </Dropdown.Item>
              <Dropdown.Item
                // href=""
                onClick={(e) => handleDropdownToggle(e, "total-users")}
              >
                Another action
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                // href=""
                onClick={(e) => handleDropdownToggle(e, "total-users")}
              >
                Something else here
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex mt-2 mb-4">
          <h2 className="mb-0 font-weight-bold">89,421</h2>
          <p className="mb-0 ms-1 font-14 align-self-end text-secondary">Total Visits</p>
        </div>
        <div className="progress radius-10" style={{ height: '10px' }}>
          <div className="progress-bar" style={{ width: '33%', backgroundColor: '#0d6efd' }}></div>
          <div className="progress-bar" style={{ width: '17%', backgroundColor: '#f41127' }}></div>
          <div className="progress-bar" style={{ width: '21%', backgroundColor: '#0dcaf0' }}></div>
          <div className="progress-bar" style={{ width: '23%', backgroundColor: '#ffc107' }}></div>
          <div className="progress-bar" style={{ width: '19%', backgroundColor: '#17a00e' }}></div>
        </div>
        <div className="table-responsive mt-4">
          <table className="table mb-0">
            <tbody>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center">
                    <div><BiSolidCheckbox style={{ color: '#0d6efd' }} className="me-2 font-22" /></div>
                    <div>Facebook</div>
                  </div>
                </td>
                <td>46 Visits</td>
                <td className="px-0 text-right pb-3">33%</td>
              </tr>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center">
                    <div><BiSolidCheckbox className="bx bxs-checkbox me-2 font-22" style={{ color: '#f41127' }} /></div>
                    <div>YouTube</div>
                  </div>
                </td>
                <td>12 Visits</td>
                <td className="px-0 text-right pb-3">17%</td>
              </tr>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center">
                    <div><BiSolidCheckbox className="bx bxs-checkbox me-2 font-22" style={{ color: '#0dcaf0' }} /></div>
                    <div>Linkedin</div>
                  </div>
                </td>
                <td>29 Visits</td>
                <td className="px-0 text-right pb-3">21%</td>
              </tr>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center">
                    <div><BiSolidCheckbox className="bx bxs-checkbox me-2 font-22" style={{ color: '#ffc107' }} /></div>
                    <div>Twitter</div>
                  </div>
                </td>
                <td>34 Visits</td>
                <td className="px-0 text-right pb-3">23%</td>
              </tr>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center">
                    <div><BiSolidCheckbox className="bx bxs-checkbox me-2 font-22" style={{ color: '#17a00e' }} /></div>
                    <div>Dribbble</div>
                  </div>
                </td>
                <td>28 Visits</td>
                <td className="px-0 text-right pb-3">19%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
