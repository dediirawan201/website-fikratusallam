import React from 'react'
import './pricecard.scss';

const PriceCard = ({price,type}) => {
    return (
        <div className="price-container">
            <div className="wrapper-price">
                $<span>{price}</span>/month
            </div>
                <button className="type">{type} Plan</button>
                <ul className="list">
                    <li>200 handuk bermerk</li>
                    <li>100 pakaian yang sudah jadi</li>
                    <li>wanginya tidak tertolong</li>
                    <li>rumahnya wangi dan rapih</li>
                </ul>
                <button className="btn">Join US</button>
            
        </div>
    )
}

export default PriceCard
