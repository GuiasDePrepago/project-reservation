import React, { Component, useState, useContext } from 'react'
import { RoomContext } from '../context';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from '../images/room-3.jpeg';
export default function Booknow() {
    const { slug } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
   
    const handleChangeStart = (date) => {
   
        setStartDate(date)
      
    }
    const handleChangeEnd = (date) => {

        setEndDate(date)
       
    }
    const calculateDaysLeft = (startDate, endDate) => {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        return endDate.diff(startDate, "days");
    }
    const context = useContext(RoomContext);
    const contextType = RoomContext;
    {
        const { getRoom } = context;
        const room = getRoom(slug);
        const daysLeft = calculateDaysLeft(startDate, endDate);
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
        const {name,capacity,size,price,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
             <div className="container my-5">
             <div className="row">
                 <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                     <div>
                         <h1 className="display-4">Booking</h1>
                     </div>
                     <div className="row">
                         <div className="col-md-6 col-12 my-auto">
                             <img src={mainImg || defaultBcg} className="img-fluid" alt="selected room" />
                         </div>
                         <div className="col-md-6 col-12 my-auto">
                             <h1>Rooms Details</h1>
                             <table className="table">
                                 <thead className="thead-light">
                                     <tr>
                                         <th>Room Type</th>
                                         <td>{name}</td>
                                     </tr>
                                     <tr>
                                         <th>Capacity</th>
                                         <td>{capacity}</td>
                                     </tr>
                                     <tr>
                                         <th>Size</th>
                                         <td>{size} ft²</td>
                                     </tr>
                                     <tr>
                                         <th>Breakfast</th>
                                         <td>{breakfast === true ? `Included`: `Not Included`}</td>
                                     </tr>
                                     <tr>
                                         <th>Pets</th>
                                         <td>{pets ===true ? `Allowed` : `Not Allowed`}</td>
                                     </tr>
                                 </thead>
                             </table>
                         </div>
                     </div>
                     <div className="row my-3">
                         <div className="col-md-6 col-12">
                             <div className="form-group">
                                 <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
                                 <DatePicker selected={startDate} onChange={handleChangeStart} className="form-control" />
                             </div>
                         </div>
                         <div className="col-md-6 col-12">
                             <div className="form-group">
                                 <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
                                 <DatePicker selected={endDate} onChange={handleChangeEnd} className="form-control" />
                             </div>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-6 col-12">
                             <h6 className="font-weight-bolder">Number of days : {daysLeft}</h6>
                             <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
                         </div>
                         <div className="col-md-6 col-12">
                             <h6 className="font-weight-bold">Price per day : <span className="badge badge-info">USD {price}</span></h6>
                             <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">USD {daysLeft*price}</span></h6>
                         </div>
                     </div>
                     <div className="row my-4">
                         <div className="col-md-6 col-12">
                             <div className="form-group">
                                 <label htmlFor="payment" className="font-weight-bolder">Select payment Options</label>
                                 <select className="form-control">
                                     <option value="Credit">Credit Card</option>
                                     <option value="Debit">Debit Card</option>
                                     <option value="checkin">Pay during Checkin</option>
                                 </select>
                             </div>
                         </div>
                         <div className="col-md-6 col-12 my-auto">
                             <div className="col-md-6 col-12 float-right">
                                 <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Confirm Booking</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="modal fade" id="thanks">
                 <div className="modal-dialog modal-dialog-centered">
                     <div className="modal-content">
                         <div className="modal-body p-4">
                             <h3>Thank you </h3>
                             <p className="lead">Booked successfully</p>
                         </div>
                         <div className="modal-footer">
                             <Link to="/" className="btn btn-dark">Go to Home</Link>
                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        )
    }
}