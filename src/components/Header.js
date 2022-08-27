import React from "react";
import loginpng from "../images/login.png"
import "../styles/header.css";

function Header() {
    return (

        <table>
            <tr>
                <td rowspan="2"> <img src={require('../images/logo.png')} width={"250"} height={"250px"} alt={"logo"} /> </td>
                <td><center><h1 style={{ fontSize: "80px", color: "blue"}}>"Travelopedia" Travel Agency</h1></center></td>
                <td rowspan="2"><div class="container" style={{backgroundColor : 'transparent'}}>
                    <img src={loginpng} alt={"login"} width={"100%"} />
                    <button class="btn" onclick="alert('Hello world!')">Login</button>
                </div>
                </td>
            </tr>
            <tr>
                <td>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: "#e3f2fd" }}>
                            <ul className="navbar-nav mr-auto" style={{ fontSize: "20px" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="cat">Home<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: "25px" }} >
                                    <a className="nav-link" href="#">Categories</a>
                                </li>
                                <li className="nav-item active" style={{ paddingLeft: "25px" }} >
                                    <a className="nav-link" href="/CountryList/">Tour Packages</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: "25px" }}>
                                    <a className="nav-link" href="#">Plan Your Travel</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: "25px" }}>
                                    <a className="nav-link" href="#">Reservations</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: "25px" }}>
                                    <a className="nav-link" href="#">Airline Ticketing</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: "25px" }}>
                                    <a className="nav-link" href="#">Travel Items</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav></td>
            </tr>
        </table>
    )
}

export default Header;