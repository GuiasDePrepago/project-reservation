import React from 'react'
const Contact = () => {
    return (
        <div className="contactbg">
            <div className="container contact">
                <div className="row">
                    <div className="col-md-8 col-12 mx-auto">
                        <div className="card shadow-lg border-0 p-4 specialOpacity">
                            <h1 className="text-center text-white display-4 d-inline-block colorblack">Contact us</h1>
                            <div className="form-group my-2">
                                <div className="row">
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input type="text" className="form-control-lg" placeholder="Full name" required />
                                    </div>
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input type="text" className="form-control-lg" placeholder="Email Address" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-5">
                                <div className="row">
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input type="email" className="form-control-lg" placeholder="Country of origin" required />
                                    </div>
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input type="tel" className="form-control-lg" placeholder="Phone number" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea className="form-control" row="20" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <div className="mt-5 col-md-8 col-12 mx-auto my-2">
                                <button className="btn btn-outline-dark btn-lg btn-block">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact