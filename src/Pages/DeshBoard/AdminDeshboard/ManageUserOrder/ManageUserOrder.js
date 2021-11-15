import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
const ManageUserOrder = () => {
    const [CustomerProducts, setCustomerProducts] = useState([]);
    const [updateStatus,setUpdateStatus]=useState({});
    useEffect(() => {
        axios.get('https://powerful-fjord-91287.herokuapp.com/customerOrder')
            .then(res => {
                console.log(res.data);
                setCustomerProducts(res.data);
            });
    }, []);
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
    const changeState=e=>{
        const updateState = e.target.value;
        const UpdateInfo = { OrederState: updateState };
        console.log(UpdateInfo);
        setUpdateStatus(UpdateInfo);
    }
    const handelUpdateState = (id) => {
        // http://localhost:4000/customerOrder/${id}
        fetch(`https://powerful-fjord-91287.herokuapp.com/customerOrder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update');
                }
            });

    }
    return (
        <div>
            <h2 className='mt-5'>All Customer Products Information </h2>
            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                        <th>Order Number</th>
                        <th>Order State</th>
                        <th>Decision</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CustomerProducts.map(ProductInfo => <tr key={ProductInfo._id}>
                            <td>{ProductInfo.userName}</td>
                            <td>{ProductInfo.userAddress}</td>
                            <td>{ProductInfo.product_Id}</td>
                            <td><select onBlur={changeState} className="form-select" aria-label="Default select example">
                                <option defaultValue>{ProductInfo.OrederState}</option>
                                <option value="shipping">shipping</option>
                            </select></td>
                            <td> <Button onClick={() => {
                                handelDelete(ProductInfo._id)
                            }}>X</Button> </td>
                            <td> <Button onClick={() => {
                                handelUpdateState(ProductInfo._id)
                            }}>OK</Button> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageUserOrder;