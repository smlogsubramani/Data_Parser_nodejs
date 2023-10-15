import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faFileImage } from '@fortawesome/free-regular-svg-icons';
import { faFileWord } from '@fortawesome/free-regular-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

const Homepage = () => {

  return (
    <div>

        <div className="head-box">
        
        <FontAwesomeIcon  icon={faFilePdf} className="left-wing animated-icon" />
        <FontAwesomeIcon  icon={faFileImage} className="left-wing1 animated-icon" />
        <FontAwesomeIcon  icon={faFileWord} className="right-wing animated-icon" />
        <FontAwesomeIcon  icon={faFileExcel} className="right-wing1 animated-icon" />
        
        {/* Dropping icons  */}

        <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon animated-icon" />
        <FontAwesomeIcon  icon={faFile} className="pdf-icon1 animated-icon" />
        <FontAwesomeIcon  icon={faFileWord} className="pdf-icon2 animated-icon" />
        <FontAwesomeIcon  icon={faFileExcel} className="pdf-icon3 animated-icon" />

        <div className="row">
            <h2 className='homepage-head'>
                Data Emersion
            </h2>
            <p className='head-subtitle'>Fetch your data from your files Instantly.</p>
          </div>
        </div>

        <div className="container">
            <h2 className='service-head'>
              Services
            </h2>
            <div id='service-cont' className="row">
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract PDF data</p>
              </div>
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract WORD data</p>
              </div>
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract EXCEL data</p>
              </div>
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract IMAGE data</p>
              </div>
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract CSV data</p>
              
              </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage