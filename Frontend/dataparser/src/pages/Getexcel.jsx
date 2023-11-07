import { useRef } from "react";
import React from 'react';
import Footer from "../components/Footer";

const Getexcel = () => {
    const fileInputRef = useRef(null);

    const handleClick = () => {
      fileInputRef.current.click();
    };
  
    return (
      <div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".xlsx, .xls"
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
              console.log('Selected file:', selectedFile);
            }
          }}
        />
        <section className='blackbg'>
          <div className="row">
            <h2 className='service-head'>Upload the Excel documents here!</h2>
          </div>
          <div className="container">
            <button onClick={handleClick} className='service-btn'>Click here</button>
          </div>
        </section>
        <Footer/>
      </div>
    );
}

export default Getexcel