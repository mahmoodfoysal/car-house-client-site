import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import ProductDetail from './ProductDetail/ProductDetail';

const SellingProduct = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://powerful-fjord-91287.herokuapp.com/product')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            });
    }, []);
    return (
        <div>
            <h1 className='mt-5'> Product </h1>
            <div className='container my-5'>

                <Row xs={1} md={2} lg={3} className="g-2">
                    {
                        Products.map(Product => <ProductDetail key={Product._id} Product={Product}></ProductDetail>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default SellingProduct;