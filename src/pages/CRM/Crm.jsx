import React from "react";
import { useEffect,useState } from "react";
import './Crm.css'
import Header from "../../components/Header/Header";
import Crmparent from "../../components/CRMcomponent/Crmparent";
import Theme from '../../components/Dashboard-1/Dashboard-1-Theme/Theme'
import Footer from "../../components/Footer/Footer";

const Crm = ({ theme, handleThemeChange, headerColor, setHeaderColor }) =>{

    return(
        <>
        <Header theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} />
        <Theme theme={theme} onIconClick={handleThemeChange} setHeaderColor={setHeaderColor} />
        <h1>CRM</h1>
        <div className="card crm-main-container">
            <div className="card-body">
        <Crmparent />
        </div>
        </div>

        <Footer headerColor={headerColor}/>

        </>
    )

}

export default Crm