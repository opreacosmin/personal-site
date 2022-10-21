import React from "react";
import './Header.css'
import gif from './../../resources/spinning-logo.gif'
import {Button} from "../Buttons/Button";

function Header(){
    return(

        <>
            <div className='header-container'>
                <div className='content'>
                    <div className='logo'>
                        <img src={gif} alt="" />
                    </div>
                    <div className='info'>
                        <p>Oprea Cosmin</p>
                        <p>Web Designer & Mobile Dev</p>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                        >
                            LEARN MORE
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;