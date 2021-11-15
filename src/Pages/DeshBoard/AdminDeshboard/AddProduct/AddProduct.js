import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://powerful-fjord-91287.herokuapp.com/product', data)
            .then(response => {
                console.log(response);
                reset();
            })
    }
    return (
        <div>
            <h2 className='mt-5'>Add Product</h2>
            <div className='container mt-5 w-75'>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("ProductName")} placeholder='ProductName' />
                    </div>
                    <div className='col-lg-6'>
                        <input type="number" class="form-control" {...register("price")} placeholder='price' />
                    </div>
                    <div className='col-lg-12'>
                        <input class="form-control" {...register("ProductImage")} placeholder='ProductImage' />
                    </div>
                    <div className='col-lg-12'>
                        <input class="form-control" {...register("ProductDetails")} placeholder='ProductDetails' />
                    </div>
                    <input className='btn btn-primary w-25 text-center' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;
