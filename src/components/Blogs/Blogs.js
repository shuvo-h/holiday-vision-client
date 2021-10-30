import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/allblogs')
            .then(res=>res.json())
            .then(data=>setBlogs(data))
    },[])
    return (
        <div className="container my-4">
            <h2 className="bg-light p-3 text-center mt-4">Our Blog and Experiences</h2>
            <Row className="my-4 g-3">
                {
                    blogs.map(blog=><Blog blog={blog} key={blog._id}></Blog>)
                }
            </Row>
        </div>
    );
};

export default Blogs;
