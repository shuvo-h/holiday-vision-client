import React from 'react';
import { useForm } from "react-hook-form";
import './addNewPackage.css';

const AddNewPackage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleAddPackage = newPackage =>{
        fetch('https://fathomless-oasis-64789.herokuapp.com/package/add',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newPackage)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                alert("New package is added!")
            }
        })
    };
    return (
        <div className="package-add-container container p-3">
            <div className="package-add-form mx-auto p-3">
                <h2  className="text-center">Add a new package</h2>
                <form className="login-form d-flex flex-column"  onSubmit={handleSubmit(handleAddPackage)}>
                    <label htmlFor="">Package TItle:
                        <input  className="m-1 ms-4"  {...register("pkg_title", { required: true })} placeholder="Package Title" /> 
                        {errors.pkg_title && <span>This field is required</span>}
                    </label>
                    <label htmlFor=""> Package description: 
                        <textarea  className="m-1 ms-4"  {...register("pkg_txt", { required: true })} placeholder="Package description" />
                        {errors.pkg_txt && <span>This field is required</span>}
                    </label>
                    <label htmlFor="">Package Image:
                        <input  className="m-1 ms-4"  {...register("pkg_img", { required: true })} placeholder="Image url" />
                        {errors.pkg_img && <span>This field is required</span>}
                    </label>
                    <label htmlFor="">Tour Date:
                        <input  className="m-1 ms-4"  {...register("tour_date", { required: true })} type="date" placeholder="Tour Date" />
                        {errors.tour_date && <span>This field is required</span>}
                    </label>
                    <label htmlFor="">Tour Duration:
                        <input  className="m-1 ms-4"  {...register("tour_duration", { required: true })} type="number" placeholder="Tour Duration (days)" />
                        {errors.tour_duration && <span>This field is required</span>}
                    </label>
                    <label htmlFor="">Meals Cover:
                        <input  className="m-1 ms-4"  {...register("meals", { required: true })} placeholder="Meals Cover" />
                        {errors.meals && <span>This field is required</span>}
                    </label>
                    <label htmlFor="">Covered Area:
                        <input  className="m-1 ms-4"  {...register("cover_area", { required: true })} placeholder="Covered Area" />
                        {errors.cover_area && <span>This field is required</span>}
                    </label>
                
                    <button className="submit-btn border rounded px-4 py-1 m-2 fw-bold text-success"   type="submit">Add Package</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewPackage;