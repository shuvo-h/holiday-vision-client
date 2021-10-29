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
        <div className="container">
            <h2>Our Blog and Experiences</h2>
            <Row>
                {
                    blogs.map(blog=><Blog blog={blog} key={blog._id}></Blog>)
                }
            </Row>
        </div>
    );
};

export default Blogs;
