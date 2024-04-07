import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Profile() {

  const redirect=useNavigate();

  useEffect(() => {
    fetch();
  }, []);

  const [singledata, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
    console.log(res);
    setData(res.data);
  }



  return (
    <div>
      {/* about section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <div className="about_taital">Profile</div>

                <h2>
                  Name : {singledata.name}
                </h2>
                <h2>
                  Email : {singledata.email}
                </h2>
                <h2>
                  Mobile : {singledata.mobile}
                </h2>

                <button type="button" class="btn btn-primary" onClick={() => redirect('/editprofile/' + singledata.id)} >
                  Edit Profile
                </button>

              </div>
            </div>
            <div className="col-md-6">
              <img src={singledata.img} width="75%" alt />

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile
