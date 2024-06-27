import React, { useEffect, useState, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import './BrowserStats.css';
import { Dropdown } from "react-bootstrap";

export const BrowserStats = () => {
  const chartRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdowns, setDropdowns] = useState({});

  useEffect(() => {
    const options = {
      series: [42, 47, 52, 58, 65],
      chart: {
        height: 340,
        type: "polarArea"
      },
      labels: ["Chrome", "Firefox", "Edge", "Opera", "Safari"],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 0,
        colors: undefined
      },
      colors: ["#17a00e", "#0dcaf0", "#f41127", "#ffc107", "#0d6efd"],
      yaxis: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
        position: "bottom"
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

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
    <div className="card radius-10 w-100 BS m-0 shadow">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div>
            <h5 className="mb-0">Browser Statistics</h5>
          </div>
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
        <div className="mt-4" ref={chartRef}></div>
      </div>
    </div>
  );
};
