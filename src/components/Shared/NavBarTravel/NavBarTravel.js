import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const NavBarTravel = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Holiday Vision</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link  as={Link} href="#features">Packages</Nav.Link>
                {
                    user.email? <button onClick={()=>logOut()}>Logout</button> : <Nav.Link  as={NavLink}  to="/login">Login</Nav.Link>
                }
            </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBarTravel;