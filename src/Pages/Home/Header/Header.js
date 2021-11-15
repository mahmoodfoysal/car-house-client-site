import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth';


const Header = () => {
     const { user, UserLogOut ,admin } = UseAuth ();
    return (
        <div>
            <h2>header</h2>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/home">Car House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-decoration-none">
                            <Link className="text-decoration-none text-light mx-2" to='/Home'>Home</Link>
                            <Link className="text-decoration-none text-light mx-2" to='/SellingProduct'>Products</Link>
                            {admin && <Link className="text-decoration-none text-light mx-2" to='/AdminDeshboard'>AdminDeshboard</Link>}
                            {(admin || user.email) && <Link className="text-decoration-none text-light mx-2" to='/CustomerDeshboard'>CustomerDeshboard</Link>}
                            <Link className='text-light text-decoration-none me-3' to="/login">{!user.email ? 'Log In' :
                                <p onClick={UserLogOut} >log Out</p>}</Link>
                        </Nav>
                        <Nav >
                            <Link className='text-light text-decoration-none me-3' to="/login">{!user.email ? 'welcome' :
                                `welcome ${user.displayName}`}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;