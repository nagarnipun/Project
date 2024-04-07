import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


    
function Header() {


    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('uname');
        localStorage.removeItem('userid');
        toast.success('Logout Succes');
        redirect('/');

    }

    return (
        <div>
            {/*header section start */}
            <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/galarry">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true" /></NavLink>
                                </li>
                                {(() => {
                                    if (localStorage.getItem('uname')) {
                                        return (
                                            <>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="javascript:void(0)" onClick={userlogout}>Logout</a>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/profile">
                                                        <i className='fa fa-user'> Hi.. {localStorage.getItem('uname')} / MyAccout</i>
                                                    </NavLink>
                                                </li>
                                            </>
                                        )
                                    }
                                    else {
                                        return (
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                            </li>
                                        )
                                    }
                                })()}


                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/*header section end */}

        </div>

    )
}

export default Header