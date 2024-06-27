import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Statistics = ({theme}) => {
 

  const options = {
    chart: {
      type: "column",
      height: 350,
    },
    accessibility: {
      enabled: false
    },
    title: {
      text: "Traffic Sources Status. January, 2020",
      align: "center",
      style: {
        fontSize: "20px",
        color: "rgb(97, 96, 96)",
        fontWeight: 400,
      },
    },
    credits: {
      enabled: false, // Remove Highcharts.com link
    },
    legend: {
      enabled: false, // Disable the legend
    },
    xAxis: {
      categories: ["Organic Search", "Direct", "Referral", "Others"],
      lineColor: "#ccc",
    },
    yAxis: {
      title: {
        text: "Total percent market share",
        style: {
          fontSize: "12px",
          color: theme === "dark" ? "#c0c0c0" : "#000",
          fontWeight: 400,
        },
      },
      min: 0,
      max: 80,
      tickAmount: 5, // Set tickAmount to 5 to get 0, 20, 40, 60, 80 values
      labels: {
        formatter: function () {
          return Math.round(this.value);
        },
      },
    },
    plotOptions: {
      column: {
        dataLabels: {
          style: {
            color: theme === "dark" ? "#c0c0c0" : "black",
          },
        },
      },
    },
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        return (
          ` <div style="border: 1px solid ${this.color}; padding: 4px 20px; background-color: #dfe1e2;">
          <b style=" font-size: 11px;">${this.series.name}</b><br/>
          <span style="color:${this.color}">${this.x}</span>: ${this.y.toFixed(1)}% of total
        </div>`
        );
      },
    },
    series: [
      {
        name: "Traffic Sources",
        data: [
          {
            name: "Organic Search",
            y: 62.7,
            color: "#0d6efd",
          },
          {
            name: "Direct",
            y: 40.6,
            color: "#f41127",
          },
          {
            name: "Referral",
            y: 25.2,
            color: "#ffb207",
          },
          {
            name: "Others",
            y: 10.6,
            color: "#17a00e",
          },
        ],
      },
    ],
  };

  return (
    <div className="col">
      <div className="card radius-10 m-0 mb-5 shadow">
        <div className="card-body ">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;