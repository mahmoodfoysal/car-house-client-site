import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Nothing from './HomeProduct/Nothing';
import HomeProduct from './HomeProduct/HomeProduct';
import ProductRating from './HomeProduct/ProductRating/ProductRating';
import { Link } from 'react-router-dom';

const Home = () => {
    const [Product, setProduct] = useState([]);
    const [ProductReview, setProductReview] = useState([]);
    useEffect(() => {
        axios.get('https://powerful-fjord-91287.herokuapp.com/product')
            .then(res => {
                setProduct(res.data);
            });
    }, []);
    useEffect(() => {
        axios.get('https://powerful-fjord-91287.herokuapp.com/reviewOrder')
            .then(res => {
                // console.log(res.data);
                setProductReview(res.data);
            });
    }, []);
    let count = 0;
    console.log(Product);
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.themeslide.com/2017/05/09135832/bgK6DX.png" height="650px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='row mb-5'>
                            <div className='col-lg-9'></div>
                            <div className='col-lg-3'>
                                <h3>Upcoming car House...</h3>
                                <Link className="text-decoration-none text-light mx-2 btn btn-primary" to='/SellingProduct'>Click For More</Link>
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://continental-motor.com/uploads/main-slider/Continental%20Showroom.jpg" height="650px"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://skytechgeek.com/wp-content/uploads/2017/12/cardealer.jpg" height="650px"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
            <div className='container mt-5'>
                <h2>Our Products</h2>
                <Row xs={1} md={2} lg={3} className="g-2">
                    {
                        Product.map(Products => {
                            count++;
                            if (count <= 6) {
                                return <HomeProduct key={Products._id} value={Products}></HomeProduct>
                            } else {
                                return <Nothing key={Products._id}></Nothing>
                            }
                        })
                    }
                </Row>
                < div className='container my-5' >
                    <h2>Special Discount on Pre Booking</h2>
                    < div className='row d-flex justify-content-center align-items-center' >
                        <div className='col-md-6 col-sm-12 px-3 my-5'>
                            <h3> <span className='fs-3 text-danger'>For Pre Booking</span> : <span className='fs-6 fst-italic'>Please contact our <span className='fs-4 text-danger'>email address</span> and get <span className='fs-4 text-danger'>8%</span> extra discount.</span> </h3>
                        </div>
                        <div className='col-md-6 col-sm-12 my-5'>
                            <Carousel fade>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block "
                                        src="https://media.themeslide.com/2017/05/09135832/bgK6DX.png" height="260px" width="550px"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block "
                                        src="https://continental-motor.com/uploads/main-slider/Continental%20Showroom.jpg" height="260px" width="550px"
                                        alt="nilachol-banderban"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block "
                                        src="https://skytechgeek.com/wp-content/uploads/2017/12/cardealer.jpg" height="260px" width="550px"
                                        alt="nilachol-banderban"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div >
                </div >
                < div className='container my-5' >
                    <h2>Users Review</h2>
                    <Row xs={1} md={2} lg={2} className="g-2">
                        {
                            ProductReview.map(Review => <ProductRating key={Review._id}
                                Review={Review}></ProductRating>)
                        }
                    </Row>
                </div >
            </div>
        </div>
    );
};

export default Home;