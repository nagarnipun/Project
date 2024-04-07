import React, { useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



function Ad_header() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('adminid'))) {
            redirect('/admin');
        }
    }, []);

    const adminlogout = () => {
        localStorage.removeItem('aname');
        localStorage.removeItem('adminid');
        toast.success('Logout Succes');
        redirect('/adminlogin');

    }


    return (
        <div>
            {/*header section start */}
            <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="logo"><Link to="/admin"><h1>DASHBOARD</h1></Link></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className='nav-item'>
                                    <NavLink to="/adminlogin" className="nav-link">Login</NavLink>
                                </li >
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                        Employee
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbardrop">
                                        <NavLink class="dropdown-item nav-link" to="/addemployee">Add</NavLink><br /><hr />
                                        <NavLink class="dropdown-item nav-link" to="/manageemployee">Manage</NavLink>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop1" data-toggle="dropdown">
                                        Categories
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbardrop1">
                                        <NavLink class="dropdown-item nav-link" to="/addcategories">  Add </NavLink><br /><hr />
                                        <NavLink class="dropdown-item nav-link" to="/managecategories">Manage </NavLink>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop2" data-toggle="dropdown">
                                        Service
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbardrop2">
                                        <NavLink class="dropdown-item nav-link" to="/addservice">Add</NavLink><br /><hr />
                                        <NavLink class="dropdown-item nav-link" to="/manageservice">Manage </NavLink>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                        Blog                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbardrop">
                                        <NavLink class="dropdown-item nav-link" to="/addblog">Add</NavLink><br /><hr />
                                        <NavLink class="dropdown-item nav-link" to="/manageblog">Manage</NavLink>
                                    </div>
                                </li>

                                <li className='nav-item'>
                                    <NavLink to="/manageuser" className="nav-link">Manage user</NavLink>
                                </li >
                                <li className='nav-item'>
                                    <NavLink to="/managecontact" className="nav-link">Manage Contact</NavLink>
                                </li >
                                <li className='nav-item nav-link '>
                                    <a className="logout text-white" href="javascript:void(0)" onClick={adminlogout}>Logout</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/*header section end */}

        </div>

    )
}

export default Ad_header