import React, { useState, useEffect } from 'react'
import axios from 'axios';





function Contact() {
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contacts`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        massage: ""
    });
    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = (e) => {
        var result = true;
        if (formvalue.name == "") {
            alert('Name field is required !');
            result = false;
        }
        if (formvalue.email == "") {
            alert('Email field is required !');
            result = false;
        }
        if (formvalue.mobile == "") {
            alert('Mobile field is required !');
            result = false;
        }
        if (formvalue.massage == "") {
            alert('Massage field is required !');
            result = false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/contacts`, formvalue);
            setFormvalue({ ...formvalue, name: "", email: "", mobile: "", massage: "" });
            alert('Contact added success');
            return false;
        }
    }

    return (
        <div>
            {/* contact section start */}
            <div className="contact_section layout_padding">
                <div className="container">
                    <h1 className="contact_text">Contact Us</h1>
                </div>
            </div>
            <div className="contact_section_2 layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 padding_1">
                            <form id="contact Form">
                                <div className="form-group">
                                    <label For="name">Name:</label>
                                    <input type="text" onChange={changeHandel} name="name" value={formvalue.name} className="form-control" id="name" required />
                                </div>
                                <div className="form-group">
                                    <label For="email">Email address:</label>
                                    <input type="email" onChange={changeHandel} name="email" value={formvalue.email} className="form-control" id="email" required />
                                </div>
                                <div className="form-group">
                                    <label For="mobile">Mobile:</label>
                                    <input type="number" onChange={changeHandel} name="mobile" value={formvalue.mobile} className="form-control" id="mobile" required />
                                </div>
                                <div className="form-group">
                                    <label For="massage">Enter your Massage:</label>
                                    <textarea type="text" name="massage" onChange={changeHandel} value={formvalue.massage} className="form-control" ></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-sm-2 control-label">
                                        <button type="submit" onClick={submitHandel} className="btn btn-theme">Submit</button>
                                    </label>
                                </div>
                            </form>

                        </div>
                        <div className="col-md-6 padding_0">
                            <div className="map-responsive">
                                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={508} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact section end */}
        </div>
    )
}

export default Contact