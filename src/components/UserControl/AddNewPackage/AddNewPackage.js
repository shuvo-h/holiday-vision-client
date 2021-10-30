import React from 'react';
import { useForm } from "react-hook-form";


const AddNewPackage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleAddPackage = newPackage =>{
        fetch('http://localhost:5000/package/add',{
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
        <div>
            <h2>Add a new package</h2>
            <form onSubmit={handleSubmit(handleAddPackage)}>
                <label htmlFor="">Package TItle:
                    <input {...register("pkg_title", { required: true })} placeholder="Package Title" /> 
                    {errors.pkg_title && <span>This field is required</span>}
                </label>
                <label htmlFor=""> Package description: 
                    <textarea {...register("pkg_txt", { required: true })} placeholder="Package description" />
                    {errors.pkg_txt && <span>This field is required</span>}
                </label>
                <label htmlFor="">Package Image:
                    <input {...register("pkg_img", { required: true })} placeholder="Image url" />
                    {errors.pkg_img && <span>This field is required</span>}
                </label>
                <label htmlFor="">Tour Date:
                    <input {...register("tour_date", { required: true })} type="date" placeholder="Tour Date" />
                    {errors.tour_date && <span>This field is required</span>}
                </label>
                <label htmlFor="">Tour Duration:
                    <input {...register("tour_duration", { required: true })} type="number" placeholder="Tour Duration (days)" />
                    {errors.tour_duration && <span>This field is required</span>}
                </label>
                <label htmlFor="">Meals Cover:
                    <input {...register("meals", { required: true })} placeholder="Meals Cover" />
                    {errors.meals && <span>This field is required</span>}
                </label>
                <label htmlFor="">Covered Area:
                    <input {...register("cover_area", { required: true })} placeholder="Covered Area" />
                    {errors.cover_area && <span>This field is required</span>}
                </label>
            
            <button type="submit">Add Package</button>
    </form>
        </div>
    );
};

export default AddNewPackage;