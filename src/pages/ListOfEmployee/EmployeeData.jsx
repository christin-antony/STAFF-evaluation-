import React, { useState, useEffect, useRef } from 'react';
import Table from "./Table/Table.jsx";
import html2pdf from 'html2pdf.js';
import Header from '../../components/Header/Header.jsx'; 
import Theme from '../../components/Dashboard-1/Dashboard-1-Theme/Theme.jsx';
import Footer from '../../components/Footer/Footer.jsx';




const DataTable = ({ theme, handleThemeChange, headerColor, setHeaderColor }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [initialLimit, setInitialLimit] = useState(0);
  const [finalLimit, setFinalLimit] = useState(10);
  const entriesPerPage = 10;
  const totalEntries = 57;

  const contentRef = useRef(null);

  const handleDownloadPDF = () => {
    const input = contentRef.current;
    html2pdf().from(input).save();
  };

  const handleCopyTable = () => {
    const table = document.getElementById('dataTable');
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
      alert('Table copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }

    window.getSelection().removeAllRanges();
  };

  const handlePrintTable = () => {
    const printContents = document.getElementById('table-responsive').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  useEffect(() => {
    setInitialLimit((currentPage - 1) * entriesPerPage);
    setFinalLimit(Math.min(currentPage * entriesPerPage, totalEntries));
  }, [currentPage]);

  const handleSearchInput = (event) => {
    console.log(event.target.value);
  };

  const data = [
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    }, {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	dubai",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	dubai",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "prasandh",
      position: "developer",
      office: "	Tokyo",
      age: "25",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    }, {
      name: "Garrett Winters",
      position: "developer",
      office: "	dubai",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "developer",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    }, {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    }, {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    }, {
      name: "Garrett Winters",
      position: "Accountant",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "developer",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "developer",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "developer",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
    {
      name: "Garrett Winters",
      position: "developer",
      office: "	Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "170,750"
    },
  ];

  const downloadCSV = () => {
    const headers = ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'];
    const rows = data.map(row => [row.name, row.position, row.office, row.age, row.date, row.salary]);

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += headers.join(',') + '\n';
    csvContent += rows.map(row => row.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
         <Header theme={theme} handleThemeChange={handleThemeChange} headerColor={headerColor} />
         <Theme theme={theme} onIconClick={handleThemeChange} setHeaderColor={setHeaderColor} />
      <h5 className='mt'>DATATABLE IMPORT</h5>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <nav aria-label="...">
              <ul className="pagination pagination-sm mb-3">
                <li className="page-item">
                  <a className="page-link" href="#" onClick={handleCopyTable}>Copy</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" onClick={downloadCSV}>Excel</a>
                </li>
                <li className="page-item">
                  <a onClick={handleDownloadPDF} className="page-link" href="#">Pdf</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" onClick={handlePrintTable}>Print</a>
                </li>
              </ul>
            </nav>
            <div
              className="search-bar"
              data-bs-toggle="modal"
              data-bs-target="#SearchModal"
              style={{ background: "white", borderRadius: '10px', width: '200px' }}
            >
              <div className="input-group" style={{ height: '30px' }}>
                <span
                  className="input-group-text"
                  style={{ width: '75px', border: 'none', background: 'inherit' }}
                >
                  <h6>Search:</h6>
                </span>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleSearchInput}
                  style={{ borderColor: '#14525', outline: 'none', background: 'inherit', borderRadius: '5px 5px 5px 5px', height: '30px' }}
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div ref={contentRef} className="table-responsive" id='table-responsive'>
            <table id="dataTable" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(initialLimit, finalLimit).map((employee, index) => (
                  <Table key={index}
                    name={employee.name}
                    position={employee.position}
                    office={employee.office}
                    age={employee.age}
                    date={employee.date}
                    salary={employee.salary} />
                ))}
              </tbody>
            </table>
          </div>

          <div className=''>
            <nav aria-label="...">
              <p>Showing {initialLimit + 1} to {finalLimit} of {totalEntries} entries</p>
              <ul className="pagination justify-content-end">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
                </li>
                {[...Array(Math.ceil(totalEntries / entriesPerPage))].map((_, index) => (
                  <li key={index} onClick={() => setCurrentPage(index + 1)} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#">{index + 1}</a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(totalEntries / entriesPerPage) ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer headerColor={headerColor}/>
    </div>
  );
};

export default DataTable;
