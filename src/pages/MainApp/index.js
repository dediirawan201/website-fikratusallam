import React, { useState } from 'react'
import './mainapp.scss';
import {AnimatedShapes, Header,IntoShape,Intro,Menu} from '../../components';



const MainApp = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
        <div className="main-app-wrapper">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Intro/>
            <IntoShape/>
            <AnimatedShapes/>
        </div>
        <div className="main-app-wrapper"></div>
        </>
    )
}

export default MainApp;
