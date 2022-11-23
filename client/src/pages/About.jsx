import React from 'react'
import {Link} from 'react-router-dom';
function About() {
    return (
        <div className="aboutbg">
            <div className="container aboutus">
                <div className="row">
                    <div className="col-md-5 col-12 my-auto card specialOpacity">
                        <h1 className="display-4 text-center my-5">About Us </h1>
                        <p className="about_info text-justify"><b> World Cup Hotel is the largest hotel that offers the best experience 
                                                                    of rest and excursions in Qatar, our rooms are the best to rest and 
                                                                    enjoy the stay, they have international recognition.</b></p>
                        
                        <p className="about_info text-justify"><b> Our services are fully accessible and free for our clients, we have 
                                                                    the best facilities in the region.</b></p>

                        <p className="about_info text-justify"><b> What are you waiting for? Book your best experience!</b></p>


                        <div className="text-center col-md-6 col-12 mx-auto">
                            <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                        </div>
                    </div>

                    <div className="col-md-2 col-12 my-auto">

                    </div>

                    <div className="col-md-5 col-12 my-auto card specialOpacity">
                        <div className="about_company">
                            <h1 className="display-4">About Company</h1>
                            <div className="pt-4">
                                <p className="about_info text-justify"><b>World Cup Company Resorts is distinguished by the quality of its 
                                                                        5-diamond hotels, international recognition and awards from the 
                                                                        International Hotel Network in the section on luxury hotels, 
                                                                        sustainable projects and quality of services.</b></p>
                                
                                <p className="about_info text-justify"><b>At World Cup Company Resorts we are not only satisfied with providing 
                                                                        lodging services, we want you to have the best experience in the city 
                                                                        and for that we provide external services such as tour guides, 
                                                                        transportation, among others.</b></p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default About;