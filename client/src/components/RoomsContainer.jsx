import React, {useContext} from 'react'
import RoomFilter from './RoomsFilter'
import RoomList from './RoomsList'
import {RoomContext} from '../context'
import Loading from './Loading'

export default function RoomContainer() {
  const context = useContext(RoomContext);
  const {loading, sortedRooms, rooms} = context;

  if(loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms}/>
      <RoomList rooms={sortedRooms}/>
    </>
  );
}