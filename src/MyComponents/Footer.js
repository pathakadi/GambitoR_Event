import React from 'react';
import Logo from './FootLogo.png';
import img from './FootIITR.png';
import { FaFacebook , FaInstagram , FaTwitter , FaYoutube , FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="container my-4 mx-2">
                <footer className="bg-indigo text-center text-lg-start text-white" style={{width: "98vw" , height: "35vh"}}>
                    <div className="container p-4">
                        <div className="row my-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-2uto">
                                    <img src={Logo} alt='' style={{width: "12vw" , height: "20vh"}} />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="/about" className="text-white list-group-item list-group-item"><i className="fas pe-3"></i>ABOUT</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/event" className="text-white list-group-item"><i className="fas pe-3"></i>EVENTS</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/contact" className="text-white list-group-item"><i className="fas pe-3"></i>CONTACT</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/initiators" className="text-white list-group-item"><i className="fas pe-3"></i>INITIATORS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="/resources" className="text-white list-group-item"><i className="fas pe-3"></i>RESOURCES</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/syllabus" className="text-white list-group-item"><i className="fas pe-3"></i>SYLLABUS</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/pyq" className="text-white list-group-item"><i className="fas pe-3"></i>PRACTICE PAPER</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/faqs" className="text-white list-group-item"><i className="fas pe-3"></i>FAQs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">FOLLOW US</h5>
                                <ul className='list-unstyled list-group list-group-horizontal justify-content-center'>
                                    <li className='mx-2'>
                                        <a href="https://www.facebook.com/Outreach-Cell-IIT-Roorkee-102873668810173/" target='_blank' rel="noreferrer">
                                            <FaFacebook color="white"/>
                                        </a>
                                    </li>
                                    <li className='mx-2'>
                                        <a href="https://www.instagram.com/outreachiitr/?hl=en" target='_blank' rel="noreferrer">
                                        <FaInstagram color="white"/>
                                        </a>
                                    </li>
                                    <li className='mx-2'>
                                        <a href="https://www.twitter.com" target='_blank' rel="noreferrer">
                                            <FaTwitter color="white"/>
                                        </a>
                                    </li>
                                    <li className='mx-2'>
                                        <a href="https://www.youtube.com" target='_blank' rel="noreferrer">
                                            <FaYoutube color="white"/>
                                        </a>
                                    </li>
                                    <li className='mx-2'>
                                        <a href="https://www.linkedin.com/company/outreach-cell-jit-roorkee/" target='_blank' rel="noreferrer">
                                            <FaLinkedin color="white"/>
                                        </a>
                                    </li>
                                </ul>
                                <img src={img} alt="" className='my-3 justify-content-center '/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3 text-secondary" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>PRIVACY POLICY | COPYRIGHT | TERMS</div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
