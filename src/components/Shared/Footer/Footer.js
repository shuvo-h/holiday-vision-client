import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <Row className="text-white py-4">
                <Col md={3} sm={6} className='d-none d-sm-block'>
                    <h4>SOLUTIONS</h4>
                    <ul className="list-unstyled">
                        <li><Link className="footer-item" to='/'>Tours</Link></li>
                        <li><Link className="footer-item" to='/'>Destinations</Link></li>
                        <li><Link className="footer-item" to='/'>Testimonials</Link></li>
                    </ul>
                </Col>
                <Col  md={3} sm={6} xs={6}>
                    <h4>QUICK LINKS</h4>
                    <ul className="list-unstyled">
                        <li><Link className="footer-item" to='/'>Discover</Link></li>
                        <li><Link className="footer-item" to='/'>Upcoming Tours</Link></li>
                        <li><Link className="footer-item" to='/'>Payment Options</Link></li>
                        <li><Link className="footer-item" to='/'>FAQs</Link></li>
                    </ul>
                </Col>
                <Col  md={3} sm={6}  className='d-none d-sm-block'>
                    <h4>RESOURCES</h4>
                    <ul className="list-unstyled">
                        <li><Link className="footer-item" to='/'>Terms of Use</Link></li>
                        <li><Link className="footer-item" to='/'>Privacy Policy</Link></li>
                        <li><Link className="footer-item" to='/'>Security</Link></li>
                        <li><Link className="footer-item" to='/'>Information</Link></li>
                    </ul>
                </Col>
                <Col  md={3} sm={6}  xs={6}>
                    <h4>CONTACT US</h4>
                    <p className="fw-bold mb-0 text-success">HOLIDAY VISION</p>
                    <p>3831 Circle Drive, Houston,Texas,77027 <br />
                     Phone: 832-481-7310 <br />
                        832-882-1732 <br />
                        Email: pkh1zx@tmail.net</p>

                </Col>
            </Row>
        </footer>
    );
};

export default Footer;