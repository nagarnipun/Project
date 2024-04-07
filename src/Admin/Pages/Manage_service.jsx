import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';




function Manage_service() {

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/services`);
    console.log(res.data);
    setData(res.data);
  }

  const deleteid = async (id) => {
    const res = await axios.delete(`http://localhost:3000/services/${id}`);
    fetch();
  }


  
  const [formvalue,setFormvalue]=useState({
    id:"",
    cate_id: "",
     name:"",
    desc:"",
    price:"",
    img:""
    });

  
  const [editid, setid] = useState("");
  const editHandel = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`);
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
    if (formvalue.Categories == "") {
      toast.error('Categories field is required !');
      result = false;
      return false;
    }


    if (formvalue.name == "") {
      toast.error('Name field is required !');
      result = false;
      return false;
    }
    
    if (formvalue.desc == "") {
      toast.error('Description field is required !');
      result = false;
      return false;
    }
    if (formvalue.price == "") {
      toast.error('Price field is required !');
      result = false;
      return false;
    }

    if (formvalue.img == "") {
      toast.error('Img field is required !');
      result = false;
      return false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation())
     {
      const res = await axios.patch(`http://localhost:3000/services/${editid}`, formvalue);
      setFormvalue({ ...formvalue, cate_id:"",name:"",desc:"",price:"", img: "" });
      toast.success('Update Success');
      fetch();

    }
  }


  return (

    <div>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <section id="main-content">
                <section className="wrapper">
                  <h3><i className="fa fa-angle-right" /> Manage Services</h3>

                  <div className="content-panel">
                    <hr />
                    <table className="table table-striped table-advance table-hover">
                      <thead>
                        <tr>
                          <th><i className="fa fa-bullhorn" /> ID</th>
                          <th>Categories Id</th>
                          <th>Image </th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Price</th>
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
                                <td>{value.cate_id}</td>
                                <td><img src={value.img} width="50px" alt="" /></td>
                                <td>{value.name}</td>
                                <td>{value.desc}</td>
                                <td>{value.price}</td>

                                <td>
                                  <button className="btn btn-success btn-xs"><i className="fa fa-check" /></button>
                                  <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" onClick={()=>editHandel(value.id)}><i className="fa fa-pencil" /></button>
                                  <button className="btn btn-danger btn-xs" onClick={() => deleteid(value.id)} ><i className="fa fa-trash-o " /></button>
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
                                      <label className="col-sm-2 col-sm-2 control-label">price</label>
                                      <div className="col-sm-10">
                                        <input type="text" name="price" className="form-control" onChange={changeHandel}  value={formvalue.price}/>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="col-sm-2 col-sm-2 control-label">Desc</label>
                                      <div className="col-sm-10">
                                        <input type="text" name="desc" className="form-control" value={formvalue.desc} onChange={changeHandel} />
                                      </div>
                                    </div>
         
                                    <div className="form-group">
                                      <label className="col-sm-2 col-sm-2 control-label">Image URL</label>
                                      <div className="col-sm-10">
                                        <input type="url" name="img" className="form-control" onChange={changeHandel} value={formvalue.img}/>
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
                  </div>{/* /row */}
                </section>{/* --/wrapper --*/}
              </section>{/* /MAIN CONTENT */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Manage_service