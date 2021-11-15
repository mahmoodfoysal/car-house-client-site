import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, InputGroup, Table } from 'react-bootstrap';
import UseAuth from '../../../../Hook/UseAuth';
const Review = () => {
    const { user } = UseAuth();
    const [CustomerProducts, setCustomerProducts] = useState([]);
    const [UserReview,setUserReview]=useState({});
    const takeUserReview=e=>{
        const field =e.target.name;
        const value = e.target.value;
        const getInfo ={...UserReview};
        getInfo[field]=value;
        setUserReview(getInfo);
        console.log(UserReview);
    }
    useEffect(() => {
        axios.get(`https://powerful-fjord-91287.herokuapp.com/customerOrder/${user.email}`)
            .then(res => {
                setCustomerProducts(res.data);
            });
    }, [user.email]);
    const reviewInsert=e => {
        axios.post(`https://powerful-fjord-91287.herokuapp.com/reviewOrder`,UserReview)
            .then(res => {
            });
            e.preventDefault();
        }
    return (
        <div>
            <h2 className='mt-5'>All Buy Products </h2>
            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Give Rate</th>
                        <th>Order Number</th>
                        <th>Review</th>
                        <th>Submit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CustomerProducts.map(ProductInfo => <tr key={ProductInfo._id}>
                            <td><InputGroup className="mb-1">
                                <FormControl onBlur={takeUserReview} name='userName' value={ProductInfo.userName} readOnly
                                /> </InputGroup></td>
                            <td><Form.Select onBlur={takeUserReview} name='rate' aria-label="Default select example">
                                <option >select point</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </Form.Select></td>
                            <td><InputGroup className="mb-1">
                                <FormControl onBlur={takeUserReview} name='peoductId' value={ProductInfo.product_Id} readOnly
                                /> </InputGroup> </td>
                            <td><InputGroup className="mb-1">
                                <FormControl onChange={takeUserReview} name='review' placeholder='please write your feedback'
                                /> </InputGroup> </td>
                                <td> <Button onClick={reviewInsert}>Add Review</Button> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Review;