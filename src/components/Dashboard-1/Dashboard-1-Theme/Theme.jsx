import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import './Theme.css';

const Theme = ({ onIconClick, theme, setHeaderColor }) => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      document.documentElement.className = `${savedTheme}-theme`;
    }
  }, [theme]);

  const toggleTheme = (selectedTheme) => {
    document.documentElement.className = `${selectedTheme}-theme`;
    onIconClick(selectedTheme);
  };

  const toggleHeaderColor = (color) => {
    setHeaderColor(color);
    localStorage.setItem("headerColor", color);
    console.log(`Header color set to ${color}`);
  };

  const toggleSwitcher = () => {
    setIsToggled(!isToggled);
  };

  const colors = ['rgb(250, 50, 50)', 'blue', 'green', 'rgb(244, 167, 0)', ' rgb(201, 0, 201)', ' #ff7b00', 'rgb(255, 93, 120)', ''];

  return (
    <div>
      <div className={`switcher-wrapper ${isToggled ? 'switcher-toggled' : ''}`}>
        <div className="switcher-btn" onClick={toggleSwitcher}>
          <IoSettingsOutline className="rotating-icon" />
        </div>

        {isToggled && (
          <div className={`switcher-body ${theme}`}>
            <div className="d-flex align-items-center">
              <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
              <button
                type="button"
                className="btn-close ms-auto close-switcher"
                aria-label="Close"
                onClick={toggleSwitcher}
              />
            </div>
            <hr />

            <h6 className="mb-0">Theme Styles</h6>
            <hr />
            <div className="d-flex flex-column">
              {['light', 'dark'].map((option) => (
                <div key={option} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={option}
                    checked={theme === option}
                    onChange={() => toggleTheme(option)}
                  />
                  <label className="form-check-label" htmlFor={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </label>
                </div>
              ))}
            </div>
            <hr />

            <h6 className="mb-0">Header Colors</h6>
            <hr />
            <div className="header-colors-indicators">
              <div className="row row-cols-auto g-3">
                {colors.map((color) => (
                  <div key={color} className="col">
                    <div
                      className={`indicator ${color}`}
                      onClick={() => toggleHeaderColor(color)}
                      style={{ backgroundColor: color, border: "1px solid gray" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Theme;
