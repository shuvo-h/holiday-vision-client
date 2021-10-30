import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const NavBarTravel = () => {
    const {user, logOut} = useAuth();
    
    return (
        <>
            <Navbar className="px-5" expand="lg" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/" className="text-warning ms-xl-5 fw-bold fs-2">Holiday Vision</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            
                            <Nav.Link as={NavHashLink} to="/home">Home</Nav.Link>
                                <Nav.Link  as={NavHashLink} to="/home#packages">Packages</Nav.Link>
                                <Nav.Link  as={NavHashLink} to="/home#blogs" smooth >Blogs</Nav.Link>
                                <Nav.Link  as={NavHashLink} to="/home#destination" smooth >Destinations</Nav.Link>
                                    {
                                        user.email && <>
                                            <Nav.Link as={NavLink} to="/user-booking">My Bookings</Nav.Link>
                                            <Nav.Link as={NavLink} to="/manage-all-booking">Manage Bookings</Nav.Link>
                                            <Nav.Link as={NavLink} to="/add-new-package">Add New Package</Nav.Link>

                                            <NavDropdown title={user.displayName} className="border rounded mx-2" id="collasible-nav-dropdown">
                                                <NavDropdown.Item as={NavLink} to="/">Profile</NavDropdown.Item>
                                                <NavDropdown.Item as={NavLink} to="/user-booking">My Bookings</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item onClick={()=>logOut()} as={NavLink} to="/">Logout</NavDropdown.Item>
                                            </NavDropdown>
                                        </>
                                    }
                                    {
                                        user.email? <button onClick={()=>logOut()} className="border rounded fw-bold">Logout</button> : <Nav.Link  as={NavLink}  to="/login">Login</Nav.Link>
                                    }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </>
    );
};

export default NavBarTravel;