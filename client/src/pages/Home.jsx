import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero"></Hero>
        <Banner title="Creating unforgettable memories." subtitle="Enjoy the World Cup with the best comfort and service in Qatar.">
                <Link to="/rooms" className="btn btn-primary">
                      Rooms available
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>
    )
}