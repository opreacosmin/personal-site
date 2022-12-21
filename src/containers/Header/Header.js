import React from "react";
import './Header.css'
import gif from '../../resources/spinning-logo.gif'
import {Button} from "../../components/Buttons/Button";
import { motion } from 'framer-motion';
import circle from '../../resources/assets/circle.svg'
import reacticn from '../../resources/assets/react.png'
import cssicn from '../../resources/assets/css.png'
import jsicn from '../../resources/assets/javascript.png'
import { AppWrap } from '../../wrapper';

function Header(){

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    return(

        <>
            <div className='header-container'>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="header-info"
                    >

                        <div className='badge'>
                            <div className='greeting'>
                                <span>👋</span>
                                <div>
                                    <p className="p-text">Hello, I am</p>
                                    <h1 className="head-text">Cosmin</h1>
                                </div>
                            </div>
                            <div className="tag">
                                <p className="p-text">Web Developer</p>
                                <p className="p-text">Freelancer</p>
                            </div>
                        </div>
                     </motion.div>

                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delayChildren: 0.5 }}
                        className="app__header-img"
                    >
                        <motion.img
                            whileInView={{ scale: [0, 1] }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            src={circle}
                            alt="profile_circle"
                            className="overlay_circle"
                        />
                    </motion.div>

                    <motion.div
                        variants={scaleVariants}
                        whileInView={scaleVariants.whileInView}
                        className="app__header-circles"
                    >
                        <div className="circle1" >
                            <img src={cssicn} alt="profile_bg" />
                        </div>
                        <div className="circle2" >
                            <img src={reacticn} alt="profile_bg" />
                        </div>
                        <div className="circle3" >
                            <img src={jsicn} alt="profile_bg" />
                        </div>
                    </motion.div>
                </div>

        </>
    )
}

export default AppWrap(Header, 'home');
