import React from 'react'
import './feature.scss';

const Feature = () => {
    return (
        <div className="container-feature">
            <div className="left">
                <img src="img/app.png"/>
            </div>
            <div className="right">
                <span className="title">
                <b>good</b> design
                <br />
                <b>good</b> business
                </span>
                <span className="subTitle">
                    We know that good design mean good
                </span>
                <p className="desc">
                    we help you jb=now that our dream
                    comses true, i hope you that dream our for me
                </p>
                <button className="btn">learn more..</button>
            </div>
        </div>
    )
}

export default Feature;
