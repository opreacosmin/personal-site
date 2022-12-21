import React from "react";
import './Card.css'
import img from '../../resources/pexels-gabriel-peter-696644.jpg'
import {Link} from "react-router-dom";


function Card(){
    return(
        <>
            <div className="card-container">
                <div className="card">
                    <a href="">
                    <div className="card--display">
                        <img src={img} alt={''}/>
                        <h2>Hot Tub Time Machine</h2>
                    </div>
                    <div className="card--hover">
                        <h2>Hot Tub Time Machine</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie
                            pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit
                            bibendum.</p>
                        <p className="link">Click to see project</p>
                    </div>
                </a>
                    <div className="card--border"/>
                </div>
            </div>
        </>
    )
}

export default Card;