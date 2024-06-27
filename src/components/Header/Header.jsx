import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Navigations from './Navigations/Navigations';

const Header = ({ errorlogintoast, theme, handleThemeChange, headerColor }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const toggleNavigationHandler = () => {
    setToggleNavigation(prevState => !prevState);
  };

  return (
    <div>
      <Navbar 
        toggleNavigationHandler={toggleNavigationHandler} 
        theme={theme} 
        onThemeToggle={handleThemeChange} 
        headerColor={headerColor} 
      />
      <Navigations 
        toggleNavigation={toggleNavigation} 
        errorlogintoast={errorlogintoast} 
       
      />
    </div>
  );
}

export default Header;
