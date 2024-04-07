import React, { useState, useEffect } from 'react'
import axios from 'axios';


function AboutUs() {


  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
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
                <div className="about_taital">About Us</div>
                <p className="about_text">Full cleaning and housekeeping services for companies and households.</p>
                <p className="about_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                <div className="read_bt"><a href="#">Read More</a></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img"><img src="images/about-img.png" /></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="">
          <div className="about_taital_main">
            <div className="about_taital">Our Services</div>

             
            {
              data.map((value, index) => {
                return (
                  <div>
                    <div className='col-md-4'>
                      <img src={value.img}  width="75%" /><br />
                      <b>{value.name}</b>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
      {/* end service section */}
    </div>
  )
}

export default AboutUs