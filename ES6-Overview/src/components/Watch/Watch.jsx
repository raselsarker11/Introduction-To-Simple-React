
import React from 'react';

const Watch = ({watch}) => {

    const {name, price} = watch;
    return (
        <div>
            <h1>Watches: {name}</h1>
            <p>Price : {price}</p>
        </div>
    );
};

export default Watch;