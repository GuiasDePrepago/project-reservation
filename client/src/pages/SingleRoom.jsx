// import the useContext hook from 'react', no need for Component since we are using an RFC
import React, { useContext} from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

// import the useParams hook from React Router
import {Link, useParams} from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

// Transform the RCC to an RFC
export default function SingleRoom() {
    // Get the slug using React Router's useParams hook
    const { slug } = useParams();
    
    // Get the context we defined in context.js using React's useContext hook
    const context = useContext(RoomContext);

    // Similar to the tutorial, we access the getRoom function through our context (no need for 'this')
    const { getRoom } = context;

    // Get the room object that matches our slug like in the tutorial (no need to access state)
    const room = getRoom(slug);
        if(!room){
            return (<div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">SORRY</h1>
                                <h3>No such room could be found...</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
            <>
            <StyledHero img={mainImg || defaultBcg }>
           
            <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn btn-primary">Back To Rooms</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
                    {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </div>)
                    })}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>Details</h3>
                      <p>{description}</p>
                   </article>
                   <article className="info">
                      <h3>Info</h3>
                      <h6>Price : USD {price}</h6>
                      <h6>Size  : {size} ft²</h6>
                      <h6>Max capacity : {" "} {capacity > 1 ? `${capacity} people`: `${capacity} person`} </h6>
                      <h6>{pets? 'Pets allowed': 'NO pets allowed'}</h6>
                      <h6>{breakfast && "Breakfast included"}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    {extras.map((item,index) => {
                          return <li key={index}>{item}</li>
                    })}
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${slug}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Book Now</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
