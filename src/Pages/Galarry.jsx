import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Galarry() {

    
    const redirect = useNavigate();

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog`);
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
                                                <a href="javascript:void(0)" onClick={() => redirect('/view_galarry/' + value.id)}>
                                                <div className="card shadow-lg mb-5 bg-white" >
                                                    <img className="card-img-top" src={value.img} alt="Card image" width="100%" height="100px"/>
                                                    <div className="card-body">
                                                        <h4 className="card-title">Service Name:{value.name}</h4>
                                                        <p className="card-text">Description:{value.desc}</p>
                                                        <a href="#" className="btn btn-primary">See Blog</a>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* end service section */}


                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="gallery_taital">Our Gallery</h1>
                            <p className="gallery_text">Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
                        </div>
                    </div>
                    <div className>
                        <div className="gallery_section_2">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-1.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-2.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-3.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery_section_2">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-4.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-5.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="overlay">
                                                <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-6.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="overlay">
                                                <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery_section_2">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-7.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-8.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="container_main">
                                        <img src="images/img-9.png" alt="Avatar" className="image" />
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seemore_bt"><a href="#">See More</a></div>
                </div>
            </div>
            {/* gallery section end */}
        </div>
    )
}

export default Galarry