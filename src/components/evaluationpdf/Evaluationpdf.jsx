// Import necessary modules
import React from 'react';
import html2pdf from 'html2pdf.js';
import ReactDOMServer from 'react-dom/server';
// Define your React component
const Evaluationpdf = () => {
  const Pdfjsx = () => {
    return (
      <>
        <h1>Hi</h1>
      </>
    );
  };

  // Generate PDF from the rendered JSX
  const generatePDF = () => {
    const html = ReactDOMServer.renderToString(<Pdfjsx />);

    html2pdf().from(html).save();
  };

  return (
    <>
      <button onClick={generatePDF}>Generate PDF</button>
    </>
  );
};

export default Evaluationpdf;
