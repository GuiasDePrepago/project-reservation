import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free CockTail",
                info: "Enjoy and taste our traditional drinks that we offer"
            },
            {
                icon:<FaHiking/>,
                title: "Excursion",
                info: "Get ready for the different excursions that we offer inside and outside the city"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Transportation",
                info: "Free transportation to soccer stadiums by presenting your tickets"
            },
            {
                icon:<FaBeer/>,
                title: "Fan zone",
                info: "We have permission from the government to sell alcohol to the public"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Fan services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                        return(
                            <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                                <div className="card shadow-lg border-0 p-4">
                                    <article className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                    </article>              
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        ) 
    }
}