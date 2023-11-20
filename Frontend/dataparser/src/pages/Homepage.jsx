import React, { useState } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faFileImage } from '@fortawesome/free-regular-svg-icons';
import { faFileWord } from '@fortawesome/free-regular-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { faFileZipper } from '@fortawesome/free-regular-svg-icons';


const Homepage = () => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3000/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, body }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log(data); // Feedback received successfully
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    }
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

        {/* SERVICES */}
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
        
        {/* CONTACT  */}
        <section class="section gray-bg" id="contactus">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>Get In Touch</h2>
                    <p>Any Queries get info here!</p>
                </div>
            </div>
        </div>
        <div class="row flex-row-reverse">
            <div class="col-md-7 col-lg-8 m-15px-tb">
                <div class="contact-form">
                     <form action="/" method="post" class="contactform contact_form" id="contact_form" onSubmit={handleSubmit}>
                        <div class="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                        <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                        <div class="row">
                            {/* <div class="col-md-6">
                                <div class="form-group">
                                    <input id="name" type="text" placeholder="Full Name" class="form-control"/> 
                                </div>
                            </div> */}
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="email" type="email" placeholder="Email Address" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>  
                                </div>
                            </div>
                            {/* <div class="col-12">
                                <div class="form-group">
                                    <input id="subject" type="text" placeholder="Subject" class="form-control"/> 
                                </div>
                            </div> */}
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea id="message" placeholder="Message" class="form-control" rows="3" value={body} onChange={(e) => setBody(e.target.value)} /> 
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <button type='submit'>submit</button>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="send">
                                    <a id="send_message" class="px-btn theme" href="#"><span>Contact Us</span> <i class="arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-5 col-lg-4 m-15px-tb">
                <div class="contact-name">
                    <h5>Mail</h5>
                    <p>smlogasubramani@gmail.com</p>
                </div>
                <div class="contact-name">
                    <h5>Visit My Office</h5>
                    <p>Loga technologies,<br/>Porur chennai 116</p>
                </div>
                <div class="contact-name">
                    <h5>Phone</h5>
                    <p>+91 9790778113</p>
                </div>
                <div class="social-share nav">
                    <a class="linkedin" href="#">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </section>

        {/* FOOTER  */}
        <Footer/>
    </div>
  )
}

export default Homepage