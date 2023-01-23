import React from "react";
import './About.css'
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import frntend_img  from './img.png'
import bckend_img from './img_1.png'

function About(){


    return (
        <>
            <div className='about-container'>
                <div className='post'>
                    <h2 className='post-title'>
                        I know that <span> </span>
                        <span>Good Design</span>
                        <br/>
                        Means <span> </span>
                        <span>Good Business</span>
                    </h2>
                </div>

                <div className="app__profiles">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="about-item"
                    >
                        <img src={bckend_img} alt={''} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>Back-end Developer</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>I have extensive experience in backend programming, developed through college projects and professional work.
                            I have a strong understanding of creating robust and efficient applications and have applied these skills in real-world scenarios through freelancing.
                            I am adept in using Java, Node.js and SQL, popular programming languages for building scalable and high-performance systems.</p>

                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="about-item"
                    >
                        <img src={frntend_img} alt={''} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>Front-end Developer</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            I am proficient in several technologies, including React, CSS, and JavaScript, which I have taught myself and gained the necessary knowledge and techniques to create visually appealing and user-friendly websites.
                            I am constantly seeking out new opportunities to improve and master my skillset  and keep up to date with the latest trends and developments in the field.</p>

                    </motion.div>
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