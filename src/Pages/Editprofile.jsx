import React, { useEffect, useState } from 'react'
import { Link, redirect, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';


function Editprofile() {


  const redirect = useNavigate();

  useEffect(() => {
    editHandel()
  }, []);

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    mobile: "",
    img: "",
  });

  const { id } = useParams()  
  const editHandel = async () => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    setFormvalue(res.data);
    console.log(res.data);
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
    }
    if (formvalue.email == "") {
      toast.error('email field is required !');
      result = false;
    }
    if (formvalue.mobile == "") {
      toast.error('mobile field is required !');
      result = false;
    }
    if (formvalue.img == "") {
      toast.error('Img field is required !');
      result = false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
      setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "", img: "" });
      toast.success('Update success');
      redirect('/profile');
    }
  }



  return (
    <div>
      {/* about section start */}
      <div className="about_section layout_padding">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <form action="" method='post' onSubmit={submitHandel}>
                <div>
                  <input type="text" name='name' className='form-control mb-3' value={formvalue.name} onChange={changeHandel} placeholder="Name" />
                </div>
                <div>
                  <input type="email" name='email' className='form-control mb-3' value={formvalue.email} onChange={changeHandel} placeholder="email" />
                </div>

                <div>
                  <input type="number" name='mobile' className='form-control mb-3' value={formvalue.mobile} onChange={changeHandel} placeholder="mobile" />
                </div>
                <div>
                  <input type="url" name='img' className='form-control mb-3' value={formvalue.img} onChange={changeHandel} placeholder="Image" />
                </div>
                <div className='mt-3'>
                  <button type='submit'className='btn btn-primary' name='submit' >
                    Save
                  </button>
                </div>
                <br />
              </form>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Editprofile
