import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import axios from 'axios';


const ProductRating = (props) => {
    const { userName, review, rate, peoductId } = props.Review;
    const aboutTour = review.substring(0, 280);
    const [Product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://powerful-fjord-91287.herokuapp.com/product/${peoductId}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            });
    }, [peoductId]);
    return (
        <div>
            <Col >
                <Card className="my-3">
                    <Card.Body>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-12'>
                                <Card.Img className="p-2" variant="top" src={Product.ProductImage} width="350px" height="250px" />
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <Card.Title className='text-success'>{userName}</Card.Title>
                                <Card.Text>
                                    {aboutTour} .
                                </Card.Text>
                                <Rating name="disabled" value={rate} readOnly />
                            </div>
                        </div>


                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ProductRating;