import React, {useState} from "react";
import './Skills.css'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { AppWrap, MotionWrap } from '../../wrapper';

function Skills(){

    const [click, setClick] = useState(false);

    return (
        <>
            <div className='experience-container'>
                <div className='menu'>
                    <div className='menu-option' onClick={() => setClick(false) }>
                        <SchoolOutlinedIcon/>
                        <h2>Education</h2>
                    </div>
                    <div className='menu-option' onClick={() => setClick(true) }>
                        <WorkOutlineIcon/>
                        <h2>Experience</h2>
                    </div>
                </div>
                { !click ?
                    <div className='list'>
                        <div className='item'>
                            <h1>Babes-Bolyai University</h1>
                            <h2>Faculty of Mathematics and Computer Science | Cluj-Napoca</h2>
                            <h3>BACHELOR IN INFORMATICS | 2020 - 2023</h3>
                        </div>
                        <div className='item'>
                            <h1>Colegiul Național "Ion Neculce"</h1>
                            <h2>2016-2020 | Bucharest</h2>
                        </div>
                    </div>

                    : (
                        <div className='list'>
                            <div className='item'>
                                <h1>UI/UX Design consultant</h1>
                                <h2>Freelance</h2>
                                <p>07.2022-Present | Cluj-Napoca | Bucharest</p>
                            </div>

                        </div>
                    )
                }

            </div>
        </>
    );

}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);