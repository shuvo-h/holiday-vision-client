import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './blog.css';

const Blog = (props) => {
    const {b_img, blog_title, b_txt, _id} = props.blog;

    return (
        <Col lg={12} md={12} sm={12} xs={12} >
            <Row className="blog-card p-3 rounded">
                <Col lg={3}  md={3} sm={12} xs={12}>
                    <img className="img-fluid d-block mx-auto" src={b_img} alt="" />
                </Col>
                <Col lg={9}  md={9} sm={12} xs={12}>
                    <h4 className="text-center my-2">{blog_title}</h4>
                    <p className="overflow-hidden">{b_txt.slice(0,500)} <Link to={`/blog-details/${_id}`} className="text-decoration-none">read more...</Link></p>
                </Col>
            </Row>
        </Col>
    );
};

export default Blog;