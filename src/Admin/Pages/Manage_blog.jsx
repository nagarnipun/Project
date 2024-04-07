import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Manage_blog() {

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/blog`);
    console.log(res.data);
    setData(res.data);
  }

  const deleteid = async (id) => {
    const res = await axios.delete(`http://localhost:3000/blog/${id}`);
    fetch();
  }


  return (
    <div>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section id="main-content">
                <section className="wrapper">
                  <h3><i className="fa fa-angle-right" /> Manage Blog</h3>

                  <div className="row mt">
                    <div className="col-md-12">
                      <div className="content-panel">
                        <table className="table table-striped table-advance table-hover">
                          <thead>
                            <tr>
                              <th><i className="fa fa-bullhorn" /> ID</th>
                              <th>Image </th>
                              <th>Name</th>
                              <th>Description</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.map((value, index, arr) => {
                                return (
                                  <tr key={index}>
                                    <td>{value.id}</td>
                                    <td><img src={value.img} width="50%" alt="" /></td>
                                    <td>{value.name}</td>
                                    <td>{value.desc}</td>

                                    <td>
                                      <button className="btn btn-success btn-xs"><i className="fa fa-check" /></button>
                                      <button className="btn btn-primary btn-xs"><i className="fa fa-pencil" /></button>
                                      <button className="btn btn-danger btn-xs" onClick={() => deleteid(value.id)} ><i className="fa fa-trash-o " /></button>
                                    </td>
                                  </tr>
                                )
                              })
                            }



                          </tbody>
                        </table>
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

export default Manage_blog