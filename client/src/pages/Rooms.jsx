import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Available Rooms" subtitle="The best experience in Qatar">
        </Banner>
        <RoomsContainer/>
    </div>
    )
}

export default Rooms