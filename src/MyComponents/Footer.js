import React from 'react';
import Logo from './images/FootLogo.png';
import img from './images/FootIITR.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BrowserRouter , Link } from 'react-router-dom';

const Footer = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="container my-4 mx-2">
                    <footer className="bg-indigo text-center text-lg-start text-white" style={{ width: "98vw", height: "35vh" }}>
                        <div className="container p-4">
                            <div className="row my-4">
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-2uto">
                                        <img src={Logo} alt='' style={{ width: "12vw", height: "20vh" }} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/about" className="text-white list-group-item list-group-item"><i className="fas pe-3"></i>ABOUT</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/event" className="text-white list-group-item"><i className="fas pe-3"></i>EVENTS</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/contact" className="text-white list-group-item"><i className="fas pe-3"></i>CONTACT</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/initiators" className="text-white list-group-item"><i className="fas pe-3"></i>INITIATORS</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link to="/resources" className="text-white list-group-item"><i className="fas pe-3"></i>RESOURCES</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/syllabus" className="text-white list-group-item"><i className="fas pe-3"></i>SYLLABUS</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/pyq" className="text-white list-group-item"><i className="fas pe-3"></i>PRACTICE PAPER</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to="/faqs" className="text-white list-group-item"><i className="fas pe-3"></i>FAQs</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase mb-4">FOLLOW US</h5>
                                    <ul className='list-unstyled list-group list-group-horizontal justify-content-center'>
                                        <li className='mx-2'>
                                            <Link to="https://www.facebook.com/Outreach-Cell-IIT-Roorkee-102873668810173/" target='_blank' rel="noreferrer">
                                                <FaFacebook color="white" />
                                            </Link>
                                        </li>
                                        <li className='mx-2'>
                                            <Link to="https://www.instagram.com/outreachiitr/?hl=en" target='_blank' rel="noreferrer">
                                                <FaInstagram color="white" />
                                            </Link>
                                        </li>
                                        <li className='mx-2'>
                                            <Link to="https://www.twitter.com" target='_blank' rel="noreferrer">
                                                <FaTwitter color="white" />
                                            </Link>
                                        </li>
                                        <li className='mx-2'>
                                            <Link to="https://www.youtube.com" target='_blank' rel="noreferrer">
                                                <FaYoutube color="white" />
                                            </Link>
                                        </li>
                                        <li className='mx-2'>
                                            <Link to="https://www.linkedin.com/company/outreach-cell-jit-roorkee/" target='_blank' rel="noreferrer">
                                                <FaLinkedin color="white" />
                                            </Link>
                                        </li>
                                    </ul>
                                    <img src={img} alt="" className='my-3 justify-content-center ' />
                                </div>
                            </div>
                        </div>
                        <div className="text-center p-3 text-secondary" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>PRIVACY POLICY | COPYRIGHT | TERMS</div>
                    </footer>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Footer;
