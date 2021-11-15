import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hook/UseAuth';

const SelectProduct = () => {
    const { user } = UseAuth();
    const { productId } = useParams();
    const [Product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://powerful-fjord-91287.herokuapp.com/product/${productId}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            });
    }, [productId]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const rawData=data;
        console.log(rawData);

        axios.post('https://powerful-fjord-91287.herokuapp.com/customerOrder', data)
            .then(response => {
                console.log(response);
                reset();
            });
    }
    const { ProductName, ProductImage, ProductDetails, price } = Product;
    return (
        <div className='container my-5'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 col-sm-12 my-5'>
                    <img className='rounded w-100' src={ProductImage} alt="" /></div>
                <div className='col-md-6 col-sm-12 px-3 my-5'>
                    <h3> <span className='fs-2 text-danger text-decoration-underline'>{ProductName}</span> : <span className='fs-6 fst-italic'>{ProductDetails}</span> </h3>
                    <h6> <span className='text-danger'>Around cost</span> : $ {price}</h6>
                </div>
            </div>
            <div className='container mt-5'>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className='col-lg-6'>
                        <input class="form-control" value={user.displayName} {...register("userName")} placeholder='userName' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" value={user.email} {...register("userEmail")} placeholder='userEmail' />
                    </div>
                    <div className='col-lg-12'>
                        <input class="form-control" value={productId} {...register("product_Id")} placeholder='product_Id' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("userAddress")} placeholder='Address' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("userPhoneNumber")} placeholder='userPhoneNumber' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("OrederState")} value="pending" />
                    </div>
                    <input className='btn btn-primary w-25 text-center' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default SelectProduct;