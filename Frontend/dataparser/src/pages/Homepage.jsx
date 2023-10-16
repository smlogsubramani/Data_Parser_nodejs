import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faFileImage } from '@fortawesome/free-regular-svg-icons';
import { faFileWord } from '@fortawesome/free-regular-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { faFileZipper } from '@fortawesome/free-regular-svg-icons';


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
            {/* <h2 className='service-head'>
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
            </div>
            <div className="icons-spacing"></div>
            <div id='service-cont' className="row">
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract IMAGE data</p>
              </div>
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract CSV data</p>                       
              </div>
              <div className="col">
              <FontAwesomeIcon  icon={faFilePdf} className="pdf-icon-service" />
              <p className='icon-top-space'>Extract Zip data</p>
              </div>

              </div> */}
              
        </div>
        <section class="section services-section" id="services">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>Services</h2>
                    <p>These are the sevices provided by our data Emersion platform</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                    <FontAwesomeIcon  icon={faFilePdf} />
                    </div>
                    <div class="feature-content">
                        <h5>Pdf Data</h5>
                        <p>This Pdf data extraction is used to get the user files data and can be fetched on our platform</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                    <FontAwesomeIcon  icon={faFileImage} />
                    </div>
                    <div class="feature-content">
                        <h5>Image Data</h5>
                        <p>This Image extraction is used to get the user image and details can be fetched on our platform</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                    <FontAwesomeIcon  icon={faFileWord} />
                    </div>
                    <div class="feature-content">
                        <h5>Word Data</h5>
                        <p>This Word extraction is used to get the user Word file and details can be fetched on our platform</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                    <FontAwesomeIcon  icon={faFileExcel} />
                    </div>
                    <div class="feature-content">
                        <h5>Excel Data</h5>
                        <p>This Word extraction is used to get the user Word file and details can be fetched on our platform</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                    <FontAwesomeIcon  icon={faFileZipper} />
                    </div>
                    <div class="feature-content">
                        <h5>Zip Data</h5>
                        <p>This Zip extraction is used to get the user Zip file and details can be fetched on our platform</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                    <FontAwesomeIcon  icon={faFile}/>
                    </div>
                    <div class="feature-content">
                        <h5>Csv Data</h5>
                        <p>This CSV extraction is used to get the user Csv file and details can be fetched on our platform</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
    </div>
  )
}

export default Homepage