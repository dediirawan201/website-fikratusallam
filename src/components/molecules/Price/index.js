import React from 'react'
import { PriceCard } from '../..';
import './price.scss';

const Price = () => {
    return (
        <div className="container-price">
            <PriceCard price="10" type="Basic"/>
            <PriceCard price="20" type="Premium"/>
            <PriceCard price="30" type="Advance"/>
        </div>
    )
}

export default Price
