import React, {useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Visitor = ({theme}) => {

 

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chart = chartRef.current.chart;

      // You can customize the chart here if needed
    }
  }, []);

  const chartOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        stacking: 'normal', // Set stacking to 'normal' for stacked bars
        // pointPadding: 0, // No padding between points within a group
        // groupPadding: 0,
        // pointWidth: 20, // Adjust the width of the bars as needed
        borderWidth: 0,
      },
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      title: {
        // text: 'Visitors by Gender',
        offsetY: 10,
        style: {
          fontSize: '14px',
          fontWeight: 600,
          color: '#666',
        },
      },
      lineColor: '#ccc',
    },
    yAxis: {
      title: {
        text: 'Visitor by Gender',
        style: {
          fontSize: '12px',
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          // fontWeight: 600,
          color: theme === 'dark' ? '#c0c0c0' : '#000', 
        },
      },
      lineColor: '#ccc', // Set the color of the y-axis line to light gray
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: {
      
        color:theme === 'dark' ? '#c0c0c0' : '#000', 
       
      },
    },
    title: {
      text: 'Visitor by Gender',
      align: 'center',
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: '1.2rem',
        fontWeight: 100,
        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
        color: '#333',
      },
    },
    series: [
      {
        name: 'Male',
        data: [5, 3, 4, 7, 2],
        color: '#0d6efd', // Custom color for Male
        borderRadius: 0,
        margin: 0,
        padding: 0,
        border: 0,
        stroke: 0
      },
      {
        name: 'Female',
        data: [2, 2, 3, 2, 1],
        color: '#f41127', // Custom color for Female
        borderRadius: 0,
        margin: 0,
        padding: 0,
        border: 0,
        stroke: 0
      },
      {
        name: 'Others',
        data: [3, 4, 4, 2, 5],
        color: '#ffc107', // Custom color for Others
        borderRadius: 0,
        margin: 0,
        padding: 0,
        border: 0,
        stroke: 0
      },
      
    ],
    accessibility: {
      enabled: false, // Disable accessibility features
    },
    credits: {
      enabled: false, // Remove Highcharts.com link
    },
  };

  return (
    <div className="card radius-10 w-100 m-0 shadow">
      <div className="card-body">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} ref={chartRef} />
      </div>
    </div>
  );
};
