import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddAdmin = () => {
    const [email, setEmail] = useState({});
    const getUser = e => {
        setEmail(e.target.value);
    }
    const handelAdmin = e => {
        const user = { email };
        console.log(user)
        fetch('https://powerful-fjord-91287.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                }
            })
            .catch(err=>console.log(err))
        e.preventDefault();
    }
    return (
        <div>
            <h2>AddAdmin</h2>
            <div className='container'>
                <Form >
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2" lg='4'>
                            Email
                        </Form.Label>
                        <Col sm="10" lg='6'>
                            <Form.Control className='ps-3' name='email' onBlur={getUser} placeholder="email@example.com" />
                        </Col>
                    </Form.Group>
                    <Button onClick={handelAdmin} variant="outline-success">Add</Button>
                </Form>

            </div>
        </div>
    );
};

export default AddAdmin;