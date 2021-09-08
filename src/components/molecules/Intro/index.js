import React from 'react'
import './intro.scss';

const Intro = () => {
    return (
        <div className="container-intro">
            <div className="left-intro">
                <h1 className="h1-intro">Adventure in creative age</h1>
                <p className="p-intro">hal nya yang membuat kita lebih 
                    bahagia adalah melakukan sesuatu
                    dengan penuh harap dan suka
                </p>
                <div className="info-intro">
                    <button className="button-intro">
                        Start a Project
                    </button>
                    <div className="contact">
                    <span className="phone">Call us (0896 1683 6431)</span>
                    <span className="contactText">For any question or concern</span>
                    </div>
                </div>
            </div>
            <div className="right-intro">
                <img src="assets/img/logo-yayasan.png"/>
            </div>
        </div>
    )
}

export default Intro;
