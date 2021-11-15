import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeProduct = (props) => {
    const { _id,ProductName, ProductImage, ProductDetails, price } = props.value;
    const aboutTour=ProductDetails.substring(0,280);
    return (
        <div>
            <Col >
                <Card className="my-3">
                    <Card.Img className="p-2" variant="top" src={ProductImage} width="350px" height="250px" />
                    <Card.Body>
                        <Card.Title className='text-success'>{ProductName}</Card.Title>
                        <Card.Text>
                            About : {aboutTour} .
                        </Card.Text>
                        <Link to={`/selectoffer/${_id}`}><Button variant="warning">Around cost {price} taka</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HomeProduct;