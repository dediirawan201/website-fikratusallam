import React, { useState } from 'react'
import { MiniCard } from '../../atoms';
import './service.scss';
import ReactPlayer from 'react-player';

const Service = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="container-service">
            <div className="left">
                <img className={( open && "buka")} src="img/service.png" />
                <ReactPlayer className={( !open &&  "buka")}  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
     
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1 className="title">Simple process to start</h1>
                    <p className="desc">bagaikan langit yang telah 
                    memberikan kehangatan yang bersinar agak lemah lembut
                    dan menawan dalam menarungi samudra dalam</p>
                    <div className="card-container">
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </div> 
                    <button className="btn" onClick={() => setOpen(true)}>
                        <img src="img/play.png"/> How It Works
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Service;
