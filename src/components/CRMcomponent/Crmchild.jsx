import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import './Crms.css'
const Crmchild = ({data,year}) =>{
  const navigate = useNavigate()
  const [monthbtn,setmonthbtn] = useState([])
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
  useEffect(()=>{
    let monthdata =[]
    for(let i = 0 ; i < 12; i++){
      if (i > data.length){
        monthdata.push(<button onClick={()=>{forward(data[i],year)}} className="btncrm " disabled>{monthnames[i]}</button>)  
      }
      else{
      monthdata.push(<button onClick={()=>{forward(data[i],year)}} className="btncrm">{monthnames[i]}</button>)}
    }
    console.log(monthdata);
    setmonthbtn(monthdata)
  },[data])
  const forward = (month,year) =>{
    console.log(month,year);
    navigate('/employeedata')
  }
  return(
    <>
<div className="card-div" >
  <div className="card-body">
      <div className="monthdiv " >{monthbtn}</div>
      </div>
      </div>
    </>
  )

}

export default Crmchild