import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css'; // Import PerfectScrollbar CSS
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './TopCountries.css';

export const TopCountries = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      new PerfectScrollbar(container, {
        damping: 0.1, // Adjust damping for smoothness
        thumbMinSize: 20, // Minimum size of the scrollbar thumb
      });
    }
  }, []);

  return (
    <div>
      <div className="card radius-10 shadow-none bg-transparent overflow-hidden border-0">
        <div className="card-body">
          <div className="d-lg-flex align-items-center">
            <div>
              <h5 className="mb-0">Top countries</h5>
            </div>
            <div className="ms-auto">
              <h3 className="mb-0"><span className="font-14">Total Visits:</span> 9587</h3>
            </div>
          </div>
        </div>
        <hr />
        <div ref={containerRef} className="dashboard-top-countries mb-3 px-2">
          <ul className="list-group list-group-flush radius-10 custom-scrollbar">
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-in"></span></div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">India</h6>
                </div>
              </div>
              <div className="ms-auto">647</div>
            </li>
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-us"></span></div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">United States</h6>
                </div>
              </div>
              <div className="ms-auto">435</div>
            </li>
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-vn"></span>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">Vietnam</h6>
                </div>
              </div>
              <div className="ms-auto">287</div>
            </li>
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-au"></span>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">Australia</h6>
                </div>
              </div>
              <div className="ms-auto">432</div>
            </li>
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-ao"></span>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">Angola</h6>
                </div>
              </div>
              <div className="ms-auto">345</div>
            </li>
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-ax"></span>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">Aland Islands</h6>
                </div>
              </div>
              <div className="ms-auto">134</div>
            </li>
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-ar"></span>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">Argentina</h6>
                </div>
              </div>
              <div className="ms-auto">147</div>
            </li>
            <li className="list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="font-20"><span className="fi fi-be"></span>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">Belgium</h6>
                </div>
              </div>
              <div className="ms-auto">210</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


