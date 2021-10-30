import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';

const BookingForm = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const [bookingPackage,setBookingPackage] = useState({});
    const {cover_area, meals, pkg_img, pkg_title, pkg_txt, tour_date, tour_duration, _id} = bookingPackage;
    useEffect(()=>{
        fetch(`http://localhost:5000/package/${id}`)
            .then(res=>res.json())
            .then(data=>setBookingPackage(data))
    },[id])
    
    const onSubmit = bookingInfo => {
        bookingInfo.booking_pkg_id = _id;
        bookingInfo.status = "Pending";
        
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                alert("booking request accepted. Wait to accept.")
            }
        })
    };
    return (
        <div className="container">
            <div>
                <h2>{pkg_title}</h2>
                <p>{cover_area}</p>
                <p>{meals}</p>
                <p>{tour_date}</p>
                <img src={pkg_img} alt="" />
            </div>
            <div>
                <h2>Fillup the Booking form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">
                        Name:
                        <input {...register("firstName")} value={user.displayName} placeholder="Full name"/>
                    </label> <br />
                    <label htmlFor="">
                        Email Address: 
                        <input {...register("email")} value={user.email} placeholder="Email Address"/>
                    </label> <br />
                    <label htmlFor="">
                        Mobile Number: 
                        <input {...register("mobileNumber")}  placeholder="Mobile Number"/>
                    </label><br />
                    <label htmlFor="">
                        Address:
                        <input {...register("address")}  placeholder="Address"/>
                    </label><br />
                    <button type="submit">Booking Request</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;

