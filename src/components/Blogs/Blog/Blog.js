import React from 'react';
import { Col } from 'react-bootstrap';

const Blog = (props) => {
    const {b_img, blog_title} = props.blog;
    return (
        <Col>
            <img src={b_img} alt="" />
            <h6>{blog_title}</h6>
        </Col>
    );
};

export default Blog;