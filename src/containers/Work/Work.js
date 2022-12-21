import React from "react";
import './Work.css'
import {Card} from "../../components";
import { AppWrap, MotionWrap } from '../../wrapper';

function Work(){
    return (
        <>
            <div className='work-container'>
                <h1>Portfolio</h1>
                <div className='cards-wrapper'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    );

}

export default AppWrap(
    MotionWrap(Work, 'app__skills'),
    'work',
    'app__whitebg',
);