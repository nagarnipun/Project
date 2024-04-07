import React from 'react'

function Ad_register() {
    return (

        <div>
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <div className="row">
                                    <div className="col-md-12 padding_0">
                                        <div className="container mt-1">
                                            <h2>Register</h2>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">
                                                        Username
                                                    </label>
                                                    <input type="text" className="form-control" id="username" name="username" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">
                                                        Email
                                                    </label>
                                                    <input type="email" className="form-control" id="email" name="email" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="phonenumber" className="form-label">
                                                        Phone Number
                                                    </label>
                                                    <input type="phonenumber" className="form-control" id="phonenumber" name="phonenumber" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">
                                                        Password
                                                    </label>
                                                    <input type="password" className="form-control" id="password" name="password" />
                                                </div>
                                                <button type="submit" className="btn btn-primary mb-3">
                                                    Register
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default Ad_register