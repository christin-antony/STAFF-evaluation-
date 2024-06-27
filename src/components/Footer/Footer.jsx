import React from 'react';
import './Footer.css';

const Footer = ({ headerColor }) => {
  return (
    <div>
      <footer className="page-footer" style={{ backgroundColor: headerColor }}>
        <p className="mb-0">Copyright © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
