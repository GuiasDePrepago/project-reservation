import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context';
import Title from '../components/Title';
 
const getUnique = (items,value) => {
return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange , type ,capacity ,price,minPrice,maxPrice,breakfast
    } = context;

    let types = getUnique(rooms,'type');
    
    types = ['all',...types];
    
    types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
    });
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
    })
    return (
        <div className="container mt-5">
            <Title title="Search Rooms" />
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="type">Room Type</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">People</label>
                        <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    
                </div>
                <div className="col-md-4 col-12 ml-auto">
                    <div className="form-group">
                        <label htmlFor="price">Room Price USD {price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="custom-control custom-checkbox my-5">
                        <input type="checkbox" className="custom-control-input" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast" className="custom-control-label">Breakfast included</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
