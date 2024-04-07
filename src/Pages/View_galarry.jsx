import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function View_galarry() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const {id}= useParams();

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog?id=${id}`);
        console.log(res);
        setData(res.data);
    }



    return (
        <div>
            {/* gallery section start */}
            <div className="gallery_section layout_padding">
                <div className="container">
                    {/* service section start */}
                    <div className="about_section layout_padding">
                        <div className="container">
                            <div className="row">
                                <div className="about_taital  text-center"> Our Blog</div><br />
                                <p className="gallery_text mb-5">Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
                                {
                                    data.map((value, index) => {
                                        return (
                                            <div key={index} className="col-md-4 mx-auto">
                                                <div className="card shadow-lg mb-5 bg-white" >
                                                    <img className="card-img-top" src={value.img} alt="Card image" width="100%" height="100px"/>
                                                    <div className="card-body">
                                                        <h4 className="card-title">Service Name:{value.name}</h4>
                                                        <p className="card-text">Description:{value.desc}</p>
                                                        <a href="#" className="btn btn-primary">See Blog</a>
                                                    </div>
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
            </div>
        </div>
    )
}

export default View_galarry