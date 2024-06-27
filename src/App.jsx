import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import AddEmployee from './pages/Employee/AddEmployee';
import Userprofile from './pages/Profile/Userprofile';
import EmployeeData from './pages/ListOfEmployee/EmployeeData';
import EvaluationHR from './pages/EvalutionHR/EvaluationHR';
import EvaluationTL from './pages/EvaluationTL/EvaluationTL';
import EvaluationMN from './pages/EvaluationMN/EvaluationMN';
import Error500 from './pages/Error/Error500';
import Error400 from './pages/Error/Error400';
import Crm from './pages/CRM/Crm';
import Registration from './pages/Employee Registration/Registration';
import Evaluationpdf from './components/evaluationpdf/Evaluationpdf';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [headerColor, setHeaderColor] = useState("headercolor8");

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    const savedHeaderColor = localStorage.getItem('headerColor');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedHeaderColor) {
      setHeaderColor(savedHeaderColor);
    }
  }, []);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Home theme={theme} handleThemeChange={handleThemeChange}   headerColor={headerColor} setHeaderColor={setHeaderColor} />} />
        <Route path='/' element={<Signin theme={theme} handleThemeChange={handleThemeChange} />} />
        <Route path='/addemployee' element={<AddEmployee theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} setHeaderColor={setHeaderColor} />} />
        <Route path='/EmployeeData' element={<EmployeeData theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} setHeaderColor={setHeaderColor} />} />
        <Route path='/evaluationhr/:name' element={<EvaluationHR theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} setHeaderColor={setHeaderColor}  />} />
        <Route path='/evaluationtl/:name' element={<EvaluationTL theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor}  setHeaderColor={setHeaderColor} />} />
        <Route path='/evaluationmn/:name' element={<EvaluationMN theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} setHeaderColor={setHeaderColor}  />} />
        <Route path='/crm' element={<Crm theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} setHeaderColor={setHeaderColor}  />} />
        <Route path='/registration' element={<Registration theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor}  setHeaderColor={setHeaderColor} />} />
        <Route path='/userprofile' element={<Userprofile theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} setHeaderColor={setHeaderColor}  />} />
        <Route path='/552' element={<Evaluationpdf />} />
        <Route path='/error500' element={<Error500 />} />
        <Route path='/error400' element={<Error400 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
