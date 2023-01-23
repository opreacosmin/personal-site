import React, {useState} from "react";
import './Card.css'
import img from '../../resources/pexels-gabriel-peter-696644.jpg'
import { motion } from 'framer-motion';

function Card({title, description, image }){

    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    return(
        <>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }} className="card-container">
                <div className="card">
                    <a href="">
                        <div className="card--display">
                            <img src={image} alt={''}/>
                            <h2>{title}</h2>
                        </div>

                        <div className="card--hover">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p className="link">Click to see project</p>
                        </div>
                    </a>
                    <div className="card--border"/>
                </div>
            </motion.div>
        </>
    )
}

export default Card;