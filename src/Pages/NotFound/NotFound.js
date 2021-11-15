import React from 'react';
import { Image } from 'react-bootstrap';

const NotFound = () => {
    const imgUrl=`https://thumbs.dreamstime.com/b/error-page-not-found-glitch-vector-illustration-error-page-not-found-glitch-vector-illustration-114821200.jpg`;
    return (
        <div className='my-5'>
            <Image className='mt-5' src={imgUrl} fluid='true' rounded='true' />
        </div>
    );
};

export default NotFound;