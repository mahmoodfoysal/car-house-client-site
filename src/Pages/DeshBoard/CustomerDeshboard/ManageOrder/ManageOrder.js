import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import UseAuth from '../../../../Hook/UseAuth';
const ManageOrder = () => {
    const {user}=UseAuth();
    const [CustomerProducts, setCustomerProducts] = useState([]);
    useEffect(() => {
        axios.get(`https://powerful-fjord-91287.herokuapp.com/customerOrder/${user.email}`)
            .then(res => {
                console.log(res.data);
                setCustomerProducts(res.data);
            });
    }, [user.email]);
    const handelDelete = id => {
        const conform = window.confirm('Are you sure to delete this Oreder?');
        if (conform) {
            const url = `https://powerful-fjord-91287.herokuapp.com/customerOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted ');
                    }

                })

        }
    }
    return (
        <div>
            <h2 className='mt-5'>All Buy Products </h2>
            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                        <th>Order Number</th>
                        <th>Order State</th>
                        <th>Decision</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CustomerProducts.map(ProductInfo => <tr key={ProductInfo._id}>
                            <td>{ProductInfo.userName}</td>
                            <td>{ProductInfo.userAddress}</td>
                            <td>{ProductInfo.product_Id}</td>
                            <td>{ProductInfo.OrederState}</td>
                            <td> <Button onClick={() => {
                                handelDelete(ProductInfo._id)
                            }}>X</Button> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;