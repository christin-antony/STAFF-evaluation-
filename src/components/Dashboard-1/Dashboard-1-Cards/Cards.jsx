import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Dropdown } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import './Cards.css';

const Cards = () => {
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

  const commonOptions = {
    chart: {
      type: "bar",
      height: 65,
      toolbar: { show: false },
      zoom: { enabled: false },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
      },
      sparkline: { enabled: true },
    },
    markers: {
      size: 0,
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 7 },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 3,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 0, curve: "smooth" },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
    },
    fill: { opacity: 1 },
    tooltip: {
      theme: "dark",
      fixed: { enabled: false },
      x: { show: false },
      y: {
        title: {
          formatter: () => "",
        },
      },
      marker: { show: false },
    },
  };

  const chartsData = [
    {
      id: "chart2",
      title: "Total Users",
      value: "85,028",
      color: "#17a00e",
      data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257],
    },
    {
      id: "chart3",
      title: "Page Views",
      value: "42,892",
      color: "#f41127",
      data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257],
    },
    {
      id: "chart4",
      title: "Avg. Session Duration",
      value: "00:03:20",
      color: "#0d6efd",
      data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257],
    },
    {
      id: "chart5",
      title: "Bounce Rate",
      value: "51.46%",
      color: "#ffb207",
      data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257],
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
      {chartsData.map(({ id, title, value, color, data }) => (
        <div className="col" key={id}>
          <div className="card radius-10 m-0 mb-4 shadow">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">{title}</p>
                  <h5 className="mb-0">{value}</h5>
                </div>
                <Dropdown className="ms-auto">
                  <Dropdown.Toggle
                    as="a"
                    className="dropdown-toggle dropdown-toggle-nocaret"
                    onClick={(e) => handleDropdownToggle(e, id)}
                  >
                    <BiDotsHorizontalRounded className="font-22 text-option" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    show={dropdowns[id] || false}
                    className="dropdown-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Dropdown.Item
                      href="#"
                      onClick={(e) => handleDropdownToggle(e, id)}
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={(e) => handleDropdownToggle(e, id)}
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#"
                      onClick={(e) => handleDropdownToggle(e, id)}
                    >
                      Something else here
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Chart
                options={{
                  ...commonOptions,
                  colors: [color],
                  series: [{ name: title, data }],
                  chart: {
                    ...commonOptions.chart,
                    dropShadow: {
                      ...commonOptions.chart.dropShadow,
                      color,
                    },
                  },
                }}
                series={[{ name: title, data }]}
                type="bar"
                height={65}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
