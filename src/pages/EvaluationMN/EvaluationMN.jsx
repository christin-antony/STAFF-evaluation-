import React, { useState, useRef } from 'react'
import Header from '../../components/Header/Header'
import './EvaluationMN.css'
import Addproject from '../../components/Addproject/Addproject'
import { useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { Button } from 'react-bootstrap';
import Theme from '../../components/Dashboard-1/Dashboard-1-Theme/Theme'
import Footer from '../../components/Footer/Footer'


const EvaluationMN = ({ theme, handleThemeChange, headerColor, setHeaderColor }) => {
    const { name } = useParams()
    const [Contribution, setContribution] = useState()
    const [Development, setDevelopment] = useState()
    const [Satisfaction, setSatisfaction] = useState()
    const [concernarea, setconcernarea] = useState()
    const [outcomeexpect, setoutcomeexpect] = useState()
    const [Overall, setOverall] = useState()
    const [Comments, setComments] = useState()
    //custom jsx for pdf
    const Pdfjsx = () =>{
                return (
                    <>
                    
                      <div className="contain">
                    <img src={logo} className='logopdf' alt="" />
                <div className="col-lg-8 contain  mt-5">
                
                    <div className="bgnone ">
                    
                            <h5 className="mb-3">Staff Evaluation by MN ({name})</h5>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label"><strong>Contribution to Organizational Goals: </strong></label>
                                <div className="col-sm-2">
                                    <label className='col-form-label'>{Contribution}</label>

                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label"><strong>Professional Development and Growth : </strong></label>
                                <div className="col-sm-2">
                                <label className='col-form-label'>{Development}</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label"><strong>Customer/Client Satisfaction : </strong></label>
                                <div className="col-sm-2">
                                <label className='col-form-label'>{Satisfaction}</label>
                                </div>
                            </div>
                           


                            <div className="row mb-3">
                                <label className="col-sm-5 col-form-label"><strong>Area of Concern</strong></label>
                                <div className="col-sm-5">
                                    <label name=""className='col-form-label'  value={concernarea}   id="">{concernarea}</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-5 col-form-label"><strong>Expected Outcomes</strong></label>
                                <div className="col-sm-5">
                                    <label name="" className='col-form-label' id="">{outcomeexpect}</label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-5 col-form-label"><strong>Overall Evaluation: : </strong></label>
                                <div className="col-sm-5">
                                <label className='col-form-label'>{Overall}</label>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-5 col-form-label"><strong>General Comments and Feedback:</strong></label>
                                <div className="col-sm-5">
                                    <label name="" className='col-form-label'  id="">{Comments}</label>
                                </div>
                            </div>
                            </div>
                            </div>
                            
                            </div>      
                             </>
                  );
                
    }



    //functions


//generte pdf
const generatePDF = () => {
    const html = ReactDOMServer.renderToString(<Pdfjsx logo={logo}/>)
    html2pdf().from(html).save()
  };

   const handleComments = (e) =>{
        setComments(e.target.value)
   }
   const handleContribution = (e) =>{
        setContribution(e.target.value)
   }
   const handleDevelopment = (e) =>{
    setDevelopment(e.target.value)
   }
   const handleOverall = (e) =>{
    setOverall(e.target.value)
   }
    const handleconcernarea = (e) => {
        setconcernarea(e.target.value)
    }
    const handleoutcomeexpect = (e) => {
        setoutcomeexpect(e.target.value)
    }
    const handleSatisfaction = (e) =>{
        setSatisfaction(e.target.value)
    }



    const handlesubmit = () => {
        console.log({
            Contribution,Overall,outcomeexpect,Development,Satisfaction,Comments
        }
        );
    }
    const handlereset = () => {
        
        setComments('')
        setContribution('')
        setDevelopment('')
        setOverall('')
        setSatisfaction('')
        setoutcomeexpect('')
        setconcernarea('')
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

            <div className="row height">
                <div className="col-lg-8 mx-auto mt-5">
                    <div className="card">
                        <div className="card-body p-4 print" ref={printRef}>
                            <h5 className="mb-3">Staff Evaluation by MN ({name})</h5>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Contribution to Organizational Goals: </strong></label>
                                <div className="col-sm-2">
                                    <select value={Contribution} onChange={handleContribution} className="form-select" id="input39">
                                        <option defaultValue="">Score</option>
                                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                                    </select>

                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Professional Development and Growth : </strong></label>
                                <div className="col-sm-2">
                                    <select value={Development} onChange={handleDevelopment} className="form-select" id="input39">
                                        <option defaultValue="">Score</option>
                                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Customer/Client Satisfaction : </strong></label>
                                <div className="col-sm-2">
                                    <select value={Satisfaction} onChange={handleSatisfaction} className="form-select" id="input39">
                                        <option defaultValue="">Score</option>
                                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                                    </select>
                                </div>
                            </div>
                           


                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label labeldark"><strong>Area of Concern</strong></label>
                                <div className="col-sm-9">
                                    <textarea name="" className='form-control' value={concernarea} onChange={handleconcernarea} id=""></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label labeldark"><strong>Expected Outcomes</strong></label>
                                <div className="col-sm-9">
                                    <textarea name="" className='form-control' value={outcomeexpect} onChange={handleoutcomeexpect} id=""></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Overall Evaluation: : </strong></label>
                                <div className="col-sm-2">
                                    <select value={Overall} onChange={handleOverall} className="form-select" id="input39">
                                        <option defaultValue="">Score</option>
                                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label labeldark"><strong>General Comments and Feedback:</strong></label>
                                <div className="col-sm-9">
                                    <textarea name="" className='form-control' value={Comments} onChange={handleComments} id=""></textarea>
                                </div>
                            </div>
                           
                            <div className="row">
                                <label className="col-sm-3 col-form-label"></label>
                                <div className="col-sm-9">
                                    <div className="d-md-flex d-grid align-items-center gap-3">
                                        <button type="button" onClick={handlesubmit} className="btn btn-primary px-4">Submit</button>
                                        <button type="button" onClick={handlereset} className="btn btn-light px-4">Reset</button>
                                        <button type="button" onClick={generatePDF} className="btn btn-light px-4">PDF</button>
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

export default EvaluationMN;
