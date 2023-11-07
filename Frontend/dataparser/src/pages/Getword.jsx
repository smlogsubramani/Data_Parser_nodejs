import { useRef } from "react";
import React from 'react';
import Footer from "../components/Footer";


export const Getword = () => {
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
          accept=".doc , .docx"
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
              console.log('Selected file:', selectedFile);
            }
          }}
        />
        <section className='blackbg'>
          <div className="row">
            <h2 className='service-head'>Upload the Word documents here!</h2>
          </div>
          <div className="container">
            <button onClick={handleClick} className='service-btn'>Click here</button>
          </div>
        </section>
        <Footer/>
      </div>
    );
}
