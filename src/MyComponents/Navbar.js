import React from 'react';
import img from "./navLogo.png";

const Navbar = () => {
    let navLogo = {
        position: "relative",
        width: "25%",
        maxWidth: "14em",
        zIndex: "10" ,
        marginLeft : "5vw" ,
        marginTop : "5vh" ,
    }
    let navElement = {
        marginTop : "3vh" ,
        marginLeft : "40vw" 
    }
    let navElement1 = {
        marginTop : "3vh" ,
        marginLeft : "5%"
    }
    return (
        <nav className="navbar navbar-expand-xxl bg-body-tertiary py-0">
            <div className="container-fluid my-10 text-white"  style={{backgroundColor : "#100B47"}}>
                <img alt="img" style={navLogo} src={img} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item " style={navElement}>
                            <a className="nav-link active text-white" aria-current="page" href="/about">ABOUT</a>
                        </li>
                        <li className="nav-item" style={navElement1}>
                            <a className="nav-link active text-center text-white" aria-current="page" href="/event">EVENTS</a>
                        </li>
                        <li className="nav-item" style={navElement1}>
                            <a className="nav-link active text-center text-white" aria-current="page" href="/contact">CONTACTS</a>
                        </li>
                        <li className="nav-item" style={navElement1}>
                            <a className="nav-link active bg-warning rounded text-center text-white" style={{paddingLeft : "1vw"}} aria-current="page" href="/register">REGISTER</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
