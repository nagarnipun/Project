import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



function Ad_signup() {

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    img: "",
    status: ""
  });
  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = (e) => {
    var result = true;

    if (formvalue.name == "") {
      toast.error('Name field is required !');
      result = false;
    }
    if (formvalue.email == "") {
      toast.error('Email field is required !');
      result = false;
    }
    if (formvalue.password == "") {
      toast.error('Password field is required !');
      result = false;
    }
    if (formvalue.mobile == "") {
      toast.error('Mobile field is required !');
      result = false;
    }

    if (formvalue.img == "") {
      toast.error('Image field is required !');
      result = false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/user`, formvalue);
      setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
      toast.success('User added success');
      return false;
    }
  }


  return (
    <div>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Sign Up</h2>
              <form id="signupForm">

                <div className="form-group">
                  <label For="name">Name:</label>
                  <input type="text" onChange={changeHandel} name="name" value={formvalue.name} className="form-control" id="name" required />
                </div>
                <div className="form-group">
                  <label For="email">Email address:</label>
                  <input type="email" onChange={changeHandel} name="email" value={formvalue.email} className="form-control" id="email" required />
                </div>
                <div className="form-group">
                  <label For="pwd">Password:</label>
                  <input type="password" onChange={changeHandel} name="password" value={formvalue.password} className="form-control" id="password" required />
                </div>
                <div className="form-group">
                  <label For="mobile">Mobile:</label>
                  <input type="number" onChange={changeHandel} name="mobile" value={formvalue.mobile} className="form-control" id="mobile" required />
                </div>
                <div className="form-group">
                  <label for="image">Image URL</label>

                  <input type="url" name="img" onChange={changeHandel} value={formvalue.img} className="form-control" />
                </div>

                <div className="form-group">
                  <label className="col-sm-2 col-sm-2 control-label">
                    <button type="submit" onClick={submitHandel} className="btn btn-theme">Submit</button>
                  </label>
                </div>

              </form>
              <div className="text-center">
                If you already registered ..<Link to="/login">Login</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Ad_signup