import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Service() {


    const redirect = useNavigate();

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

            {/* service section start */}
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="row"><div className="about_taital  text-center"> Our Service</div><br />
                        <p className="gallery_text mb-5">Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>

                        {
                            data.map((value, index) => {
                                return (

                                    <div key={index} className="col-md-4 col-sm-6 mx-auto" >
                                        <a href="javascript:void(0)" onClick={() => redirect('/view_service/' + value.id)}>
                                            <div className="card shadow-lg mb-5 bg-white" >
                                                <img className="card-img-top" src={value.img} alt="Card image" width="100%" height="200px"/>
                                                <div className="card-body">
                                                    <h4 className="card-title">{value.name}</h4>
                                                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                                    <a href="#" className="btn btn-primary">View Service</a>
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

            {/* services section start */}
            <div className="layout_padding">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="about_taital">Services</h1>
                            <p className="about_text">Typesetting industry lorem Ipsum is simply dummy text of the </p>
                        </div>
                    </div>
                    <div className="services_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 col-md-4">
                                <div className="box_main active">
                                    <div className="house_icon">
                                        <img src="images/icon1.png" className="image_1" />
                                        <img src="images/icon1.png" className="image_2" />
                                    </div>
                                    <h3 className="decorate_text">Original Coffee</h3>
                                    <p className="tation_text">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                    <div className="readmore_bt"><a href="#">Read More</a></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-4">
                                <div className="box_main">
                                    <div className="house_icon">
                                        <img src="images/icon2.png" className="image_1" />
                                        <img src="images/icon2.png" className="image_2" />
                                    </div>
                                    <h3 className="decorate_text">20 Coffee Flavors</h3>
                                    <p className="tation_text">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                    <div className="readmore_bt"><a href="#">Read More</a></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-4">
                                <div className="box_main">
                                    <div className="house_icon">
                                        <img src="images/icon3.png" className="image_1" />
                                        <img src="images/icon3.png" className="image_2" />
                                    </div>
                                    <h3 className="decorate_text">Pleasant Abient</h3>
                                    <p className="tation_text">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                                    <div className="readmore_bt"><a href="#">Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* services section end */}
        </div>
    )
}

export default Service