import React from "react";
import './Header.css'
import { motion } from 'framer-motion';
import reacticn from '../../resources/assets/react.png'
import cssicn from '../../resources/assets/css.png'
import jsicn from '../../resources/assets/javascript.png'
import {AppWrap, MotionWrap} from '../../wrapper';

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
                                <div className="content__container">
                                    <p className="content__container__text">
                                        <span>👋</span>Hello
                                    </p>
                                <ul className="content__container__list">
                                    <li className="content__container__list__item">world !</li>
                                    <li className="content__container__list__item">clients !</li>
                                    <li className="content__container__list__item">everybody !</li>
                                </ul>
                                </div>
                            </div>

                            <div className='concept-six'>
                                <h1>I am </h1>
                                <div className='word'>
                                    <div className='char'>O</div>
                                    <div className='char'>P</div>
                                    <div className='char'>R</div>
                                    <div className='char'>E</div>
                                    <div className='char'>A</div>
                                    <div className='char'> </div>
                                    <div className='char'>C</div>
                                    <div className='char'>O</div>
                                    <div className='char'>S</div>
                                    <div className='char'>M</div>
                                    <div className='char'>I</div>
                                    <div className='char'>N</div>
                                </div>
                            </div>

                            <div className="tag">
                                <h1>Full-stack developer</h1>
                            </div>
                        </div>
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