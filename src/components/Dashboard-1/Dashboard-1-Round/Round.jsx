import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Round.css";

const Round = ({theme}) => {

  const options = {
    chart: {
      type: 'pie',
      height: 350,
      backgroundColor: null,
    },
    accessibility: {
      enabled: false
    },
    title: {
      text: 'Sessions Device',
      align: 'center',
      style: {
        fontSize: '20px',
        color: 'rgb(97, 96, 96)',
        fontWeight: '200',
      },
    },
    subtitle: {
      text: 'Ratio of devices used by users',
      align: 'center',
      style: {
        fontSize: '12px',
        color: theme === "dark" ? "#c0c0c0" : "black",
      },
    },
    plotOptions: {
      pie: {
        innerSize: '67%', // This makes it a donut chart
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f} %',
          distance: 35, // Move labels closer to the center
          style: {
            fontSize: '12px',
            color:  theme === "dark" ? "#c0c0c0" : "black",// Dynamically set label color based on theme
            fontWeight: '300'
          },
        },
        showInLegend: true,
      },
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      itemStyle: {
        fontSize: '12px',
        color: theme === "dark" ? "#c0c0c0" : "black",
        fontWeight: '600',
      },
      symbolRadius: 10,
    },
    series: [{
      name: 'Users',
      data: [
        { name: 'Desktop', y: 56, color: '#0d6efd' },
        { name: 'Mobile', y: 30, color: '#f41127' },
        { name: 'Tablet', y: 14, color: '#ffb207' },
      ],
    }],
    credits: {
      enabled: false, 
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    }
  };

  return (
    <div className="col">
      <div className="card radius-10 m-0 mb-5 shadow">
        <div className="card-body">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Round;