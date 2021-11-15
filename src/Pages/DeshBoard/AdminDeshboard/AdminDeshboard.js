import AddAdmin from './AddAdmin/AddAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageUserOrder from './ManageUserOrder/ManageUserOrder';
import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import ManageAllProduct from './ManageAllProduct/ManageAllProduct';
import UseAuth from '../../../Hook/UseAuth';
import LogIn from '../../LogIn/LogIn';

 const AdminTopics=()=> {
    let { path, url } = useRouteMatch();
    const {UserLogOut}=UseAuth();

    return (
        <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-12 border-end border-secondary '>
                <h2 className='my-5'>Admin Menu</h2>
                <ul className='list-group text-start'>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`${url}/ManageUserOrder`}>Manage User Order</Link>
                    </li>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`${url}/AddProduct`}>Add Product</Link>
                    </li>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`${url}/AddAdmin`}>Add Admin</Link>
                    </li>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`${url}/ManageAllProduct`}>Manage All Product</Link>
                    </li>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`/LogIn`}> <p onClick={UserLogOut}>Log out</p> </Link>
                    </li>
                </ul>
            </div>
            <div className='col-lg-10 col-md-9 col-sm-12'>
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/ManageUserOrder`}>
                        <ManageUserOrder />
                    </Route>
                    <Route path={`${path}/AddProduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/AddAdmin`}>
                        <AddAdmin />
                    </Route>
                    <Route path={`${path}/ManageAllProduct`}>
                        <ManageAllProduct />
                    </Route>
                    <Route path={`${path}/LogIn`}>
                        <LogIn />
                    </Route>

                </Switch>
            </div>
        </div>
    );
}

export default AdminTopics;
