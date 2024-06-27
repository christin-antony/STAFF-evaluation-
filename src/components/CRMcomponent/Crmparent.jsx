import React, { useState, useEffect, useRef } from "react";
import Crmchild from "./Crmchild.jsx";
import Crmbtn from "./Crmbtn.jsx";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const Crmparent = ({ }) => {
    // const [count, setCount] = useState(1);
    const year = new Date().getFullYear();
    const [yearmonth, setyearmonth] = useState(2020);
    const monthnames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [currentMonth, setcurrentMonth] = useState(new Date().getMonth());
    const [arrs, setarr] = useState([]);
    const [yeararr, setyeararr] = useState([]);
    const [arrofyear, setarrofyear] = useState([]);
    const [yearshow, setyearshow] = useState(year);
    useEffect(() => {
        const arrtotal = [];
        setyeararr([]);
        const yeararray = [];

        for (let i = 2020; i <= year; i++) {
            const arr = [];
            let month = 11;
            if (i === year) {
                month = currentMonth;
            }
            yeararray.push(i);
            for (let j = 0; j <= month; j++) {
                arr.push(monthnames[j]);
            }
            arrtotal.push(arr);
           
        }
        setarr(arrtotal);
        setyeararr(yeararray);
        console.log(arrtotal);
        setarrofyear(arrtotal[year - 2020])
    }, []);
    const clicked = (years) => {
        console.log(years);
        console.log(arrs[years - 2020]);
        setarrofyear(arrs[years - 2020]);
        console.log(arrs[years]);
        setyearmonth(years);
    };

    const addyearshow = () => {
        if (yearshow === year) {
          
        } else {
            setyearshow((prevyearshow) => prevyearshow + 1);
            clicked(yearshow+1)
        }
    };
    const minyearshow = () => {
        if (yearshow === 2020) {
            
        } else {
            setyearshow((prevyearshow) => prevyearshow - 1);
            clicked(yearshow-1)
        }
    };
    return (
        <>
        <div className="total-crm-container mx-auto">
            <div className="d-flex container crm-container ">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button"  onClick={() => {
                        minyearshow();
                    }} className="btn btn-primary logo-height">
                        <FaChevronLeft  />
                    </button>
                    <button type="button" onClick={() => {
                        addyearshow();
                    }} className="btn logo-height btn-primary">
                        <FaChevronRight/>

                    </button>
                    
                </div>
               
               
                {<Crmbtn year={yearshow}  />}
            </div>
            {<Crmchild data={arrofyear} year={yearmonth} />}
            </div>
        </>
    );
};

export default Crmparent;
