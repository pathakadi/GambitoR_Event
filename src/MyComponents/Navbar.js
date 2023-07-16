import React from 'react';
import img from "./navLogo.png";
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
    let navLogo = {
        position: "relative",
        width: "25%",
        maxWidth: "14em",
        zIndex: "10",
        marginLeft: "5vw",
        marginTop: "5vh",
    }
    let navElement = {
        marginTop: "3vh",
        marginLeft: "45vw"
    }
    let navElement1 = {
        marginTop: "3vh",
        marginLeft: "1%"
    }
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-xxl bg-body-tertiary py-0">
                <div className="container-fluid my-10 text-white" style={{ backgroundColor: "#100B47" }}>
                    <img alt="img" style={navLogo} src={img} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item " style={navElement}>
                                <Link className="nav-link active text-white" aria-current="page" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item" style={navElement1}>
                                <Link className="nav-link active text-center text-white" aria-current="page" to="/event">EVENTS</Link>
                            </li>
                            <li className="nav-item" style={navElement1}>
                                <Link className="nav-link active text-center text-white" aria-current="page" to="/contact">CONTACTS</Link>
                            </li>
                            <li className="nav-item" style={navElement1}>
                                <Link className="nav-link active bg-warning rounded text-center text-white" style={{ paddingLeft: "1vw" }} aria-current="page" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </BrowserRouter>
    )
}

export default Navbar;
