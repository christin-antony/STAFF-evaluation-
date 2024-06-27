import React, { useRef, useState ,} from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import './Evaluation.css'
import { Button } from 'react-bootstrap';
import Theme from '../../components/Dashboard-1/Dashboard-1-Theme/Theme'
import Footer from '../../components/Footer/Footer'


const EvaluationHR = ({ theme, handleThemeChange, headerColor, setHeaderColor }) => {
    
    const { name }= useParams();
    

    const [attendenceScore , setattendeceScore] = useState()
    const [policyScore , setpolicyScore] = useState()
    const [plannedLeave , setplannedLeave] = useState(0)
    const [unplannedLeave , setunplannedLeave] = useState(0)
    const [Leavereason , setLeavereason] = useState('')
    const [concernarea, setconcernarea] = useState('')
    const [outcomeexpect,setoutcomeexpect] = useState('')
    const [totalleave, settotalleave] = useState(0)
    
    //functions
    const handleattendence = (e) =>{
        setattendeceScore(e.target.value)    
    }
    const handlepolicyScore = (e) =>{
        setpolicyScore(e.target.value)    
    }
    const handleplannedLeave = (e) =>{
        setplannedLeave(e.target.value)    
    }
    const handleunplannedLeave = (e) =>{
        setunplannedLeave(e.target.value)    
    }
    const handleLeavereason = (e) =>{
        setLeavereason(e.target.value)    
    }
    const handleconcernarea = (e) =>{
        setconcernarea(e.target.value)    
    }
    const handleoutcomeexpect = (e) =>{
        setoutcomeexpect(e.target.value)    
    }
    const handletotalleave = (e) =>{
        settotalleave(e.target.value)    
    }
    const handlesubmit = () =>{
        console.log({attendenceScore,policyScore,totalleave, unplannedLeave,plannedLeave,concernarea,outcomeexpect,Leavereason});
    }
    const handlereset = () =>{
         setLeavereason('')
         setattendeceScore('Score')
        setconcernarea('')
        setoutcomeexpect('')
         setplannedLeave(0)
         setunplannedLeave(0)
         setpolicyScore('Score')
         settotalleave(0)
    }
    const printRef = useRef()
    const Printform = useReactToPrint({
        documentTitle: "Print This Document",
        removeAfterPrint: true,
        content:()=>printRef.current
    });
    
    return (

        <div>
           <Header theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} />
           <Theme theme={theme} onIconClick={handleThemeChange} setHeaderColor={setHeaderColor} />
 
            <div className="row height " > 
                <div className="col-lg-8 mx-auto mt-5">
                    <div className="card" id='print'>
                        <div className="card-body p-4 print" ref={printRef}>
                            <h5 className="mb-3 print" >Staff Evaluation by HR ({name})</h5>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Punctuality and Attendance : </strong>How often does the employee arrive at work on time</label>
                                <div className="col-sm-2">
                                    <select value={attendenceScore} onChange={handleattendence} className="form-select" id="input39">
                                        <option value="">Score</option>
                                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                                    </select>
                                   
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Adherence to Company Policies and Procedures : </strong>How well does the employee follow organizational rules and guidelines</label>
                                <div className="col-sm-2">
                                <select value={policyScore} onChange={handlepolicyScore} className="form-select" id="input39">
                                <option value="">Score</option>
                                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Leave and Time-off: </strong>How many leaves has the employee taken this month? </label>
                                <div className="col-sm-2">
                                <input type="number" value={totalleave} onChange={handletotalleave} className="form-control" id="input35" placeholder="" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-11 col-form-label labeldark"><strong>Specify Types of Leaves:</strong> </label>
                                <div className="row mb-3">
                                    <div className="col-sm-4"></div>
                                    <label className="col-sm-6 col-form-label labeldark">Planned</label>
                                    <div className="col" style={{width:"20px"}}>
                                        <input type="number" value={plannedLeave} onChange={handleplannedLeave} className="form-control" id="input35" placeholder="" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-4"></div>
                                    <label className="col-sm-6 col-form-label labeldark">Unplanned</label>
                                    <div className="col" style={{width:"20px"}}>
                                        <input type="number" value={unplannedLeave} onChange={handleunplannedLeave} className="form-control" id="input35" placeholder="" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-4 col-form-label labeldark">Reason If any.</label>
                                    <div className="col-sm-6">
                                        <input type="textbox" value={Leavereason} onChange={handleLeavereason} className="form-control" id="input35" placeholder="" />
                                    </div>
                                </div>

                            </div>

    
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label labeldark"><strong>Area of Concern</strong></label>
                                <div className="col-sm-9">
                                   <textarea name="" className='form-control' value={concernarea} onChange={handleconcernarea}  id=""></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label labeldark"><strong>Expected Outcomes</strong></label>
                                <div className="col-sm-9">
                                   <textarea name="" className='form-control' value={outcomeexpect} onChange={handleoutcomeexpect} id=""></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <label className="col-sm-3 col-form-label"></label>
                                <div className="col-sm-9">
                                    <div className="d-md-flex d-grid align-items-center gap-3">
                                        <button type="button" onClick={handlesubmit} className="btn btn-primary px-4">Submit</button>
                                        <button type="button" onClick={handlereset} className="btn btn-light px-4">Reset</button>
                                        <Button onClick={Printform}>PRINT</Button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            <Footer headerColor={headerColor}/>
        </div>
    )
}

export default EvaluationHR
