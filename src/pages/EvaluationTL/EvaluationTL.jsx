import React, { useState ,useRef} from 'react'
import Header from '../../components/Header/Header'
import './EvaluationTL.css'
import Addproject from '../../components/Addproject/Addproject'
import { useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { Button } from 'react-bootstrap';
import Theme from '../../components/Dashboard-1/Dashboard-1-Theme/Theme'
import Footer from '../../components/Footer/Footer'


const EvaluationTL = ({ theme, handleThemeChange, headerColor, setHeaderColor }) => {
    const {name} = useParams()
    

    const [taskcompletion, settaskcompletion] = useState()
    const [workquality, setworkquality] = useState()
    const [attention2detail, setattention2detail] = useState()
    const [productivity, setproductivity] = useState()
    const [innovationndcreativity, setinnovationndcreativity] = useState()
    const [mentorship, setmentorship] = useState()
    const [improvement, setimprovement] = useState()
    const [resolution, setresolution] = useState()
    const [decisionmaking, setdecisionmaking] = useState()
    const [organizationalskill, setorganizationalskill] = useState()
    const [reworknderror, setreworknderror] = useState()
    const [communication, setcommunication] = useState()
    const [technicalskills, settechnicalskills] = useState()
    const [problemsolving, setproblemsolving] = useState()
    const [communicationskill, setcommunicationskill] = useState()
    const [collabration, setcollabration] = useState()
    const [initiative, setinitiative] = useState()
    const [adaptability, setadaptability] = useState()
    const [projectmanagement, setprojectmanagement] = useState()
    const [concernarea, setconcernarea] = useState()
    const [outcomeexpect, setoutcomeexpect] = useState()
    const [removecount, setremovecount] = useState()
    const [count, setCount] = useState(1);
    const [projectsData, setProjectsData] = useState([{
        id: '',
        ProjectName: '',
        Description: '',
        Role: '',
        Score: ''
    },]);

    



    // const [projectsData, setProjectsData] = useState([]);
    const handleProjectUpdate = (index, updatedProject) => {
        console.log(projectsData);
        const newProjectsData = [...projectsData];
        newProjectsData[index] = updatedProject;
        setProjectsData(newProjectsData);
    };

    //functions
    const handletaskcompletion = (e) => {
        settaskcompletion(e.target.value)
    }
    const handleworkquality = (e) => {
        setworkquality(e.target.value)
    }
    const handleattention2detail = (e) => {
        setattention2detail(e.target.value)
    }
    const handleproductivity = (e) => {
        setproductivity(e.target.value)
    }
    const handleinnovationndcreativity = (e) => {
        setinnovationndcreativity(e.target.value)
    }
    const handlementorship = (e) => {
        setmentorship(e.target.value)
    }
    const handleimprovement = (e) => {
        setimprovement(e.target.value)
    }
    const handleresolution = (e) => {
        setresolution(e.target.value)
    }
    const handledecisionmaking = (e) => {
        setdecisionmaking(e.target.value)
    }
    const handleorganizationalskill = (e) => {
        setorganizationalskill(e.target.value)
    }
    const handlereworknderror = (e) => {
        setreworknderror(e.target.value)
    }
    const handlecommunication = (e) => {
        setcommunication(e.target.value)
    }
    const handletechnicalskills = (e) => {
        settechnicalskills(e.target.value)
    }
    const handleproblemsolving = (e) => {
        setproblemsolving(e.target.value)
    }
    const handlecommunicationskill = (e) => {
        setcommunicationskill(e.target.value)
    }
    const handlecollabration = (e) => {
        setcollabration(e.target.value)
    }
    const handleinitiative = (e) => {
        setinitiative(e.target.value)
    }
    const handleadaptability = (e) => {
        setadaptability(e.target.value)
    }
    const handleprojectmanagement = (e) => {
        setprojectmanagement(e.target.value)
    }
    const handleconcernarea = (e) => {
        setconcernarea(e.target.value)
    }
    const handleoutcomeexpect = (e) => {
        setoutcomeexpect(e.target.value)
    }


    // Function to add project data to state
    const addProjectData = (project) => {
        let projectdata = []
        
        for(let i =0 ;i< count;i++){
            let projectName = document.querySelector(`input[name = ProjectName${i}` )
            let description = document.querySelector(`textarea[name = Description${i}` )
            let role = document.querySelector(`input[name = Role${i}` )
            let score = document.querySelector(`select[name = Score${i}` )
            let arr = [projectName.value,description.value,role.value,score.value]
            projectdata.push(arr)
            
            

        }
        console.log(projectdata);


    };

    const handlesubmit = () => {
        console.log({
            taskcompletion,
            workquality,
            attention2detail,
            productivity,
            innovationndcreativity,
            mentorship,
            improvement,
            resolution,
            decisionmaking,
            organizationalskill,
            reworknderror,
            communication,
            technicalskills,
            problemsolving,
            communicationskill,
            collabration,
            initiative,
            adaptability,
            projectmanagement,
            projectsData
            
        }
        );
        addProjectData()


    }
    const handlereset = () => {
        settaskcompletion('')
        setworkquality('')
        setattention2detail('')
        setproductivity('')
        setinnovationndcreativity('')
        setmentorship('')
        setimprovement('')
        setresolution('')
        setdecisionmaking('')
        setorganizationalskill('')
        setreworknderror('')
        setcommunication('')
        settechnicalskills('')
        setcommunicationskill('')
        setcollabration('')
        setinitiative('')
        setadaptability('')
        setprojectmanagement('')
        setconcernarea('')
        setoutcomeexpect('')
        setCount(1)

        setProjectsData([{
            id: '',
            ProjectName: '',
            Description: '',
            Role: '',
            Score: ''
        }])

     
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
                            <h5 className="mb-3">Staff Evaluation by TL ({name})</h5>
                            <div className="row mb-3">
                                <label className="col-sm-10 col-form-label labeldark"><strong>Task Completion : </strong>How effectively does the employee meet assigned deadlines and complete tasks?</label>
                                <div className="col-sm-2">
                                    <select value={taskcompletion} onChange={handletaskcompletion} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Work Quality : </strong>How accurate, thorough, and reliable is the employee's work output?</label>
                                <div className="col-sm-2">
                                    <select value={workquality} onChange={handleworkquality} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Attention to Detail : </strong>How meticulous is the employee in performing tasks and checking work?</label>
                                <div className="col-sm-2">
                                    <select value={attention2detail} onChange={handleattention2detail} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong> Productivity : </strong>How efficient is the employee in managing tasks and projects within the allocated time?</label>
                                <div className="col-sm-2">
                                    <select value={productivity} onChange={handleproductivity} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Innovation and Creativity : </strong>How often does the employee bring new ideas and perspectives to improve the work
                                    process?    </label>
                                <div className="col-sm-2">
                                    <select value={innovationndcreativity} onChange={handleinnovationndcreativity} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Knowledge Sharing and Mentorship: : </strong>Does the employee contribute to the team by sharing knowledge and mentoring
                                    colleagues?</label>
                                <div className="col-sm-2">
                                    <select value={mentorship} onChange={handlementorship} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Continuous Improvement : </strong>Is the employee committed to personal development and improving work processes?</label>
                                <div className="col-sm-2">
                                    <select value={improvement} onChange={handleimprovement} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Conflict Resolution : </strong>How effective is the employee in resolving conflicts and ensuring a harmonious work
                                    environment?</label>
                                <div className="col-sm-2">
                                    <select value={resolution} onChange={handleresolution} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Decision-Making: </strong>How well does the employee make decisions under various circumstances, and how
                                    effective are those decisions?</label>
                                <div className="col-sm-2">
                                    <select value={decisionmaking} onChange={handledecisionmaking} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Organizational Skills : </strong>How well does the employee organize tasks, manage time, and prioritize activities for
                                    maximum productivity?</label>
                                <div className="col-sm-2">
                                    <select value={organizationalskill} onChange={handleorganizationalskill} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Rework and Error Correction: </strong>How often does the employee have to redo or correct their work?</label>
                                <div className="col-sm-2">
                                    <select value={reworknderror} onChange={handlereworknderror} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Interpersonal Skills and Communication: </strong>How effectively does the employee build and maintain relationships with colleagues?
                                    How clear and effective is their communication with others?</label>
                                <div className="col-sm-2">
                                    <select value={communication} onChange={handlecommunication} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Technical Skills and Proficiency : </strong>How proficient is the employee in the necessary technical skills for their role?</label>
                                <div className="col-sm-2">
                                    <select value={technicalskills} onChange={handletechnicalskills} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Problem-Solving Abilities : </strong>How well does the employee manage projects, resources, and timelines?</label>
                                <div className="col-sm-2">
                                    <select value={problemsolving} onChange={handleproblemsolving} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Project Management: </strong>How well does the employee manage projects, resources, and timelines?</label>
                                <div className="col-sm-2">
                                    <select value={projectmanagement} onChange={handleprojectmanagement} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Communication Skills : </strong>How clear, effective, and open is the employee in their communication?</label>
                                <div className="col-sm-2">
                                    <select value={communicationskill} onChange={handlecommunicationskill} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label  labeldark"><strong>Collaboration and Teamwork : </strong>How well does the employee collaborate with team members and contribute to a
                                    positive team environment?</label>
                                <div className="col-sm-2">
                                    <select value={collabration} onChange={handlecollabration} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Initiative : </strong>Does the employee take the initiative to improve processes, take on new tasks, or lead
                                    projects?</label>
                                <div className="col-sm-2">
                                    <select value={initiative} onChange={handleinitiative} className="form-select" id="input39">
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
                                <label className="col-sm-10 col-form-label labeldark"><strong>Adaptability: </strong>How well does the employee adapt to changes, new tasks, or unexpected challenges in
                                    their work?</label>
                                <div className="col-sm-2">
                                    <select value={adaptability} onChange={handleadaptability} className="form-select" id="input39">
                                        <option defaultValue="">Score</option>
                                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                                    </select>
                                </div>
                            </div>

                            <Addproject setCount={setCount} count={count} handleProjectUpdate={handleProjectUpdate} projectsData={projectsData} removecount={removecount} />




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

export default EvaluationTL;
