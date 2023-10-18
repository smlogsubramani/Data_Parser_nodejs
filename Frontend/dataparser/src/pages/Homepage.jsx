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
        
        {/* TIMELINE */}
        <div class="container">                      
        <div class="row text-center justify-content-center mb-5">
        <div class="col-xl-6 col-lg-8">
            <h2 class="font-weight-bold">Data Emersion</h2>
            <p class="text-muted">These process is common for all the types of file and document extraction.</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">1</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Click Service</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Import Files</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">3</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">File Upload Complete</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">4</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Data Extraction</p>
                    </div>
                </div>
                <div class="timeline-step mb-0">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">5</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Data Displayed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

        {/* FOOTER  */}
        <div class="footer">
	    <div class="container">		
		<div class="row text-center">						
			<div class="col-lg-11 col-sm-11 col-xs-11">
				<div class="footer_menu">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Service</a></li>
                        <li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>						
				<div class="footer_copyright">
					<p>© 2023 Loga. All Rights Reserved.</p>
				</div>	
				<div class="footer_profile">
					<ul>
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
					</ul>
				    </div>						
			        </div>						
		        </div>				
	        </div>
        </div>
    </div>
  )
}

export default Homepage