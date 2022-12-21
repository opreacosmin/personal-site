import React from "react";
import './About.css'
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../Footer/Footer";
import { AppWrap, MotionWrap } from '../../wrapper';

function About(){
    return (
        <>
            <div className='about-container'>
                <div className='post-container'>
                    <div className='post'>
                        <h2 className='post-title'>
                            I know that <br/>
                            <span>Good Design</span>
                            <br/>
                            means <br/>
                            <span>Good Business</span>
                        </h2>
                    </div>
                    <h3>Hello i m cosmin sdgdfgsdfg sdfg sdg sfd gs gfdgsdfgsdfgsdfgsdgs sdgsfdgsdfgsdfdgsdfgsdf</h3>
                </div>
            </div>
        </>
    );

}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);