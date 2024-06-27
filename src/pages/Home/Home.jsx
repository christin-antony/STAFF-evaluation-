import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import { Visitor } from '../../components/Dashboard/Visitor-By-Gender/Visitor';
import { BrowserStats } from '../../components/Dashboard/Browser-Statistics/BrowserStats';
import { SocialTraffic } from '../../components/Dashboard/Social-Traffic/SocialTraffic';
import { Leads } from '../../components/Dashboard/Potential-Leads-Table/Leads';
import { TopCountries } from '../../components/Dashboard/Top Countries/TopCountries';
import Footer from '../../components/Footer/Footer';
import Sessions from '../../components/Dashboard-1/Dashboard-1-Sessions/Sessions';
import Cards from '../../components/Dashboard-1/Dashboard-1-Cards/Cards';
import Round from '../../components/Dashboard-1/Dashboard-1-Round/Round';
import Statistics from '../../components/Dashboard-1/Dashboard-1-Statistics/Statistics';
import Theme from '../../components/Dashboard-1/Dashboard-1-Theme/Theme';
import GeographicMap from '../../components/Dashboard-1/Dashboard-1-GeographicMap/GeographicMap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTopButton from '../../components/Dashboard/Back To Top Button/BackToTopButton';

const Home = ({ headerColor, setHeaderColor }) => {
  const errorlogintoast = () => {
    toast.error("Invalid Credentials !", {
      position: 'bottom-right'
    });
    console.log("Toasted");
  };

  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
   

    if (savedTheme) {
      setTheme(savedTheme);
    }

  }, []);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("selectedTheme", selectedTheme);
  };



  return (
    <div className={`${theme}-theme`}>
      <Header errorlogintoast={errorlogintoast} theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor}/>
      <ToastContainer />
      <div className="page-wrapper">
        <div className="page-content">
          <Theme onIconClick={handleThemeChange} theme={theme} setHeaderColor={setHeaderColor} />
          <Sessions theme={theme} />
          <Cards />
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2">
            <div className="col">
              <Statistics theme={theme} />
            </div>
            <div className="col">
              <Round theme={theme} />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-1">
            <div className="col col-lg-8">
              <GeographicMap />
            </div>
            <div className="col col-lg-4">
              <TopCountries />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-3">
            <div className="col d-flex">
              <Visitor theme={theme} />
            </div>
            <div className="col d-flex">
              <BrowserStats />
            </div>
            <div className="col d-flex">
              <SocialTraffic />
            </div>
          </div>
          <div>
            <Leads />
          </div>
        </div>
      </div>
      <Footer headerColor={headerColor} />
      <BackToTopButton />
    </div>
  );
}

export default Home;
