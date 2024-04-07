import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Add_employee() {

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/employee`);
    console.log(res.data);
    setData(res.data);
  }

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: ""
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = (e) => {
    var result = true;
    if (formvalue.name == "") {
      alert('Name field is required !');
      result = false;
    }
    if (formvalue.email == "") {
      alert('Email field is required !');
      result = false;
    }
    if (formvalue.password == "") {
      alert('Password field is required !');
      result = false;
    }
    if (formvalue.mobile == "") {
      alert('Mobile field is required !');
      result = false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/employee`, formvalue);
      setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
      alert('Employee added success');
      return false;
    }
  }

  return (
    <div>
      
      <div className="about_section layout_padding">
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h2>Add Employee</h2>
                <form >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" name="name" onChange={changeHandel} value={formvalue.name} className="form-control" />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="position" className="form-label">
                      Email
                    </label>
                    <input type="email" name="email" onChange={changeHandel} value={formvalue.email} className="form-control" />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="department" className="form-label">
                      Password
                    </label>
                    <input type="password" name="password" onChange={changeHandel} value={formvalue.password} className="form-control" />

                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">mobile</label>
                    <div >
                      <input type="number" name="mobile" onChange={changeHandel} value={formvalue.mobile} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      <button type="submit" onClick={submitHandel} className="btn btn-theme">Submit</button>
                    </label>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Add_employee