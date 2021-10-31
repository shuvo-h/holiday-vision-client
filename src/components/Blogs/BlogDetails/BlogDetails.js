import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './blogDetails.css';

const BlogDetails = () => {
    const [blog,setBlog] = useState({})
    const {id} = useParams();
    const {Wittern_date, b_img, b_txt, blog_title, writer_address, writer_img, writer_name} = blog;
    useEffect(()=>{
        fetch(`https://fathomless-oasis-64789.herokuapp.com/blogs/${id}`)
            .then(res=>res.json())
            .then(data=>setBlog(data))
    },[id])
    
    return (
        <div className="blog-details-container container my-4">
            <h2 className="text-center mb-4">{blog_title}</h2>
            <Row>
                <Col md={6} sm={12}>
                    <img className="writer-img img-fluid rounded-circle" src={writer_img} alt="" />
                    <p className="mt-4 mb-2"><strong>{writer_name}</strong></p>
                    <p className="m-0">{Wittern_date}</p>
                    <p className="m-0">{writer_address}</p>
                </Col>
                <Col md={6} sm={12}>
                    <img className="blog-img float-md-end img-fluid p-2" src={b_img} alt="" />
                </Col>
            </Row>
            <div>{b_txt}</div>
        </div>
    );
};

export default BlogDetails;