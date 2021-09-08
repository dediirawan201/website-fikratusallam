import React from 'react'
import Footer from '../Footer';
import './contact.scss';

const Contact = () => {
    return (
        <div className="container-contact">
            <div className="wrapper">
                <div className="form-container">
                    <h1 className="title">
                        Questions? <br/> Let's Get in Touch
                    </h1>
                    <form>
                       <div className="left-form">
                           <input type="text" placeholder="your name"/>
                           <input type="text" placeholder="your email"/>
                           <input type="text" placeholder="subject"/>
                        </div> 
                       <div className="right-form">
                        <textarea placeholder="your message"></textarea>
                        <button className="btn" type="button">Send</button>   
                        </div> 
                    </form>
                </div>
                <div className="address-container">
                    <div className="address-item">
                      <img src="img/map.png"/>
                      <span>pekayon jaya, Bekasi, JawaBarat</span>  
                    </div>
                    <div className="address-item">
                      <img src="img/phone.png"/>
                      <span>021 - 9239232</span>  
                    </div>
                    <div className="address-item">
                      <img src="img/send.png"/>
                      <span>dedi@gmail.com</span>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
