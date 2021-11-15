import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';

const LogIn = () => {
    const location = useLocation();
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({});
    const { user, userLogin } = UseAuth();
    const WellComeUser = e => {
        const field = e.target.name;
        const value = e.target.value;
        const getInfo = { ...userInfo };
        getInfo[field] = value;
        setUserInfo(getInfo);
        console.log(getInfo);
    }
    const handelUserLogin = e => {
        userLogin(userInfo.email, userInfo.password,location,history);
        e.preventDefault();
    }
    return (
        <div className='container mb-5'>
            <h2 className='my-5'>Log in form {user.displayName}</h2>
            {!user.email &&
                <Form className='my-3'>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2" lg='4'>
                            Email
                        </Form.Label>
                        <Col sm="10" lg='6'>
                            <Form.Control className='ps-3' name='email' onBlur={WellComeUser} placeholder="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2" lg='4'>
                            Password
                        </Form.Label>
                        <Col sm="10" lg='6'>
                            <Form.Control type="password" name='password' onBlur={WellComeUser} placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Button onClick={handelUserLogin} variant="outline-success">Log in</Button>
                </Form>
            }
            <p>------------------------------------------------------------------------</p>
            <Link className='text-dark text-decoration-none me-3' to="/Registration">Create A New Account</Link>
        </div>
    );
};

export default LogIn;