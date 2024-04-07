import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Add_service() {

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  }

  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_id: "",
    name: "",
    desc: "",
    price: "",
    img: ""
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {
    var result = true;
    if (formvalue.name == "") {
      alert('Name field is required !');
      result = false;
    }
    if (formvalue.desc == "") {
      alert('Description field is required !');
      result = false;
    }
    if (formvalue.price == "") {
      alert('Price field is required !');
      result = false;
    }
    if (formvalue.img == "") {
      alert('Img field is required !');
      result = false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/services`, formvalue);
      setFormvalue({ ...formvalue, name: "", desc: "", price: "", img: "" });
      alert('Services add success');
      return false;
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
                  {/* BASIC FORM ELELEMNTS */}
                  <div className="form-panel">
                    <h4 className="mb"><i className="fa fa-angle-right" /> Add Services</h4>
                    <form className="form-horizontal style-form" method="get">

                      <div className="form-group">
                        <label className="col-sm-2 col-sm-2 control-label">Categories id</label>
                        <div className="col-sm-10">
                          <select name="cate_id" onChange={changeHandel} className='form-control'>
                            <option value="">------ Select Categories of Services -------</option>
                            {
                              data.map((value, index) => {
                                return (
                                  <option value={value.id}>{value.name}</option>
                                )
                              })
                            }
                          </select>

                        </div>
                      </div>

                      <div className="form-group">
                        <label className="col-sm-2 col-sm-2 control-label">Service Name</label>
                        <div className="col-sm-10">
                          <input type="text" name="name" onChange={changeHandel} value={formvalue.name} className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                          <textarea type="text" name="desc" onChange={changeHandel} value={formvalue.desc} className="form-control" ></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 col-sm-2 control-label">Service Price</label>
                        <div className="col-sm-10">
                          <input type="number" name="price" onChange={changeHandel} value={formvalue.price} className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 col-sm-2 control-label">Image URL</label>
                        <div className="col-sm-10">
                          <input type="url" name="img" onChange={changeHandel} value={formvalue.img} className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 col-sm-2 control-label">
                          <button type="submit" onClick={submitHandel} className="btn btn-theme">Submit</button>
                        </label>
                      </div>
                    </form>
                  </div>

                </section>{/* --/wrapper --*/}
              </section>{/* /MAIN CONTENT */}

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Add_service