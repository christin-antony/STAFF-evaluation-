import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Sessions = ({theme}) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");



  const chartOptions = {
    series: [
      {
        name: "Sessions",
        data: [14, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5],
      },
    ],
    chart: {
      foreColor: "#9ba7b2",
      height: 310,
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.1,
      },
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
    },
    title: {
      text: "Sessions",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#0d6efd"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 5,
      colors: ["#0d6efd"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#0d6efd"],
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, 0.15)",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: theme === "dark" ? "dark" : "light",
    },
  };

  return (
    <div>
      <div className="card-header py-3 m-0  px-3 pe-3">
        <div className="row align-items-center">
          <div className="col-md-3">
            <h4 className="mb-3 mb-md-0">Audience Overview</h4>
          </div>
          <div className="col-md-9">
            <form className="float-md-end">
              <div className="row row-cols-md-auto g-lg-3">
                <label
                  htmlFor="inputFromDate"
                  className="col-md-2 col-form-label text-md-end"
                >
                  From Date
                </label>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    id="inputFromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <label
                  htmlFor="inputToDate"
                  className="col-md-2 col-form-label text-md-end"
                >
                  To Date
                </label>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    id="inputToDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card-body m-0 mb-4 px-3 pe-3">
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="area"
          height={310}
        />
      </div>
    </div>
  );
};

export default Sessions;