import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

function Manage_employee() {


  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/employee`);
    console.log(res.data);
    setData(res.data);

  }


  const deleteid = async (id) => {
    const res = await axios.delete(`http://localhost:3000/employee/${id}`);
    fetch();
  }

  const [formvalue,setFormvalue]=useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: ""
});

    
  const [editid, setid] = useState("");
  const editHandel = async (id) => {
    const res = await axios.get(`http://localhost:3000/employee/${id}`);
    console.log(res);
    setFormvalue(res.data);
    setid(res.data.id);
  }


  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  }


  const validation = () => {
    var result = true;
    if (formvalue.name == "") {
      toast.error('Name field is required !');
      result = false;
      return false;
    }
    if (formvalue.email == "") {
      toast.error('Email field is required !');
      result = false;
      return false;
    }
    
    if (formvalue.password == "") {
      toast.error('password field is required !');
      result = false;
      return false;
    }
    if (formvalue.mobile == "") {
      toast.error('Mobile field is required !');
      result = false;
      return false;
    }
    
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation())
     {
      const res = await axios.patch(`http://localhost:3000/employee/${editid}`, formvalue);
      setFormvalue({ ...formvalue,name: "", email: "", password: "", mobile: ""  });
      toast.success('Update Success');
      fetch();

    }
  }

  return (
    <div className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mobile-menu-overlay" />
            <div className="main-container">
              <div className="pd-ltr-20 xs-pd-20-10">
                <div className="min-height-200px">
                  <div className="page-header">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="title">
                          <h4>Manage Employee</h4>
                        </div>

                      </div>
                      <div className="col-md-6 col-sm-12 text-right">
                        <div className="dropdown">
                          <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                            January 2018
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Export List</a>
                            <a className="dropdown-item" href="#">Policies</a>
                            <a className="dropdown-item" href="#">View Assets</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Simple Datatable start */}
                  <div className="card-box mb-30">

                    <div className="pb-20">
                      <table className="data-table table stripe hover nowrap">
                        <thead>
                          <tr>
                            <th><i className="fa fa-bullhorn" /> ID</th>
                            <th>Name</th>
                            <th>Email </th>
                            <th>Password </th>
                            <th>Status</th>
                            <th><i className=" fa fa-edit" /> Action</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.map((value, index, arr) => {
                              return (
                                <tr key={index}>
                                  <td>{value.id}</td>
                                  <td>{value.name}</td>
                                  <td>{value.email}</td>
                                  <td>{value.password}</td>
                                  <td>{value.status}</td>
                                  <td>
                                    <button className="btn btn-success btn-xs"><i className="fa fa-check" /></button>
                                    <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" onClick={()=>editHandel(value.id)}><i className="fa fa-pencil" /></button>
                                    <button className="btn btn-danger btn-xs" onClick={() => deleteid(value.id)}><i className="fa fa-trash-o " /></button>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                      
                    <div className="modal" id="myModal">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          {/* Modal Header */}
                          <div className="modal-header">
                            <h4 className="modal-title">Update Categories</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                          </div>
                          {/* Modal body */}
                          <div className="modal-body">
                            <div className="row mt">
                              <div className="col-lg-12">
                                <div className="form-panel">
                                  <form className="form-horizontal style-form" method="get">
                                    <div className="form-group">
                                      <label className="col-sm-2 col-sm-2 control-label">Name</label>
                                      <div className="col-sm-10">
                                        <input type="text" name="name" onChange={changeHandel}  value={formvalue.name}className="form-control" />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="col-sm-2 col-sm-2 control-label">Email</label>
                                      <div className="col-sm-10">
                                        <input type="text" name="email" className="form-control" onChange={changeHandel}  value={formvalue.email}/>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="col-sm-2 col-sm-2 control-label">Password</label>
                                      <div className="col-sm-10">
                                        <input type="text" name="password" value={formvalue.password} className="form-control" onChange={changeHandel} />
                                      </div>
                                    </div>
                                    
                                    <div className="form-group">
                                      <label className="col-sm-2 col-sm-2 control-label">Mobile</label>
                                      <div className="col-sm-10">
                                        <input type="text" name="mobile" className="form-control" value={formvalue.mobile} onChange={changeHandel} />
                                      </div>
                                    </div>
         
                                    <div className="form-group">
                                      <label className="col-sm-2 col-sm-2 control-label">
                                        <button type="submit" data-dismiss="modal" className="btn btn-theme" onClick={submitHandel}>Save</button>
                                      </label>
                                    </div>

                                  </form>
                                </div>
                              </div>{/* col-lg-12*/}
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                          </div>
                        </div>

                      </div>{/* /content-panel */}
                    </div>{/* /col-md-12 */}
                    </div>
                  </div>
                  {/* Simple Datatable End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Manage_employee