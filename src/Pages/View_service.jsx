import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function View_service() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const { id } = useParams();

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services?cate_id=${id}`);
        console.log(res);
        setData(res.data);
    }

    return (
        <div>
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="about_taital  text-center">View Product</div><br />
                        <p className="gallery_text mb-5">Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>

                        {
                            data.map((value, index) => {
                                return (
                                    <div key={index} className=" col-md-4 mx-auto">
                                        <div className="card shadow-lg mb-5 bg-white" >
                                            <img className="card-img-top" src={value.img} alt="Card image" />
                                            <div className="card-body">
                                                <h3 className="card-title">Sevice Name:{value.name}</h3>
                                                <h4 className="card-title">Description: {value.desc}</h4>
                                                <h4 className='card-title'>{value.price}/- Rs</h4>
                                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                                <a href="#" className="btn btn-primary">See Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View_service