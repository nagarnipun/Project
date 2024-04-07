import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Ad_login() {


    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('adminid')) {
            redirect('/admin');
        }
        else {

        }
    }, []);


    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",

    });
    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = (e) => {
        var result = true;

        if (formvalue.email == "") {
            toast.error('email field is required !');
            result = false;
        }
        if (formvalue.password == "") {
            toast.error('Password field is required !');
            result = false;
        }

        return result;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    //session
                    localStorage.setItem('uname', res.data[0].name);
                    localStorage.setItem('adminid', res.data[0].id);
                    toast.success('Login sucess');
                    redirect('/admin')
                }
                else {
                    setFormvalue({ ...formvalue, email: "", password: "" })
                    toast.error("password not match");
                    return false
                }
            }
            else {
                setFormvalue({ ...formvalue, email: "", password: "" });
                toast.error("Email Doesn't Exit");
                return false
            }
        }
    }


    return (
        <div className="container">
            {/* Outer Row */}
            <div className="row justify-content-center">

                <div className="card o-hidden border-5 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-md-12" />
                            <div className="text-center">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form action='/' method='post' onSubmit={submitHandel}>

                                        <div className="form-group">
                                            <input type="email" onChange={changeHandel} name="email" value={formvalue.email} className="form-control" placeholder='email' id="email" required />

                                        </div>
                                        <div className="form-group">
                                            <input type="password" onChange={changeHandel} name="password" value={formvalue.password} className="form-control" placeholder='password' id="password" required />

                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-sm-2 col-sm-2 control-label">
                                                <button type="submit" name="submit" className="btn btn-theme">Log In</button>
                                            </label>
                                        </div>


                                        <hr />
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw" /> Login with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                        </a>
                                    </form>
                                    <hr />
                                    <h4>Not register ? <Link to="/signup">click here </Link> or go to <Link to="/admin">Home</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ad_login