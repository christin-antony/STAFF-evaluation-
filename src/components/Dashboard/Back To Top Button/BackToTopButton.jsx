/* import React, { useState, useEffect } from 'react';
import { RiArrowUpFill } from "react-icons/ri";

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scrolling
    const handleScroll = () => {
        setIsVisible(window.scrollY > 300); 
    };

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Attach scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once (on mount) and cleans up on unmount

    // Render the button if isVisible is true
    return (
        <button 
            className="back-to-top bg-primary" 
            onClick={scrollToTop} 
            style={{
                opacity: isVisible ? '1' : '0',
                display: isVisible ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '9px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                zIndex: '1000'
            }}
        >
            <RiArrowUpFill/>
        </button>
    );
}

export default BackToTopButton; */

import React from 'react';
import ScrollToTop from "react-scroll-to-top"; 
import { PiArrowUpFill } from "react-icons/pi";

function BackToTopButton() {
    return (
        <ScrollToTop 
            className="bg-primary" 
            smooth 
            style={{ 
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                zIndex: '1000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            component={<PiArrowUpFill style={{ color: 'white', fontWeight: 'bolder' }} />}
        />
    );
}

export default BackToTopButton; 