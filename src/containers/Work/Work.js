import React, {useEffect, useState} from "react";
import './Work.css'
import { motion } from 'framer-motion';

import {Card} from "../../components";
import { AppWrap, MotionWrap } from '../../wrapper';
import db from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Work(){

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const fetchPost = async () => {

        await getDocs(collection(db, "projects"))
            .then((querySnapshot)=>{
                setLoading(true);
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setProjects(newData);
                setFilterWork(newData);
                setLoading(false);

            })

    }

    useEffect(()=>{
        fetchPost();
    }, [])


    const handleWorkFilter = (item) => {
        setActiveFilter(item);

        if (item === 'All') {
            setFilterWork(projects);
        } else {
            setFilterWork(projects.filter((projects) => projects.tags.includes(item)));
        }
    };

    return (
        <>
            <div className='work-container'>
                <h1>Portfolio</h1>

                <div className="app__work-filter">
                    {['Web App', 'Mobile App', 'All'].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleWorkFilter(item)}
                            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <div className='cards-wrapper'>
                    { loading &&
                        <>
                            <div className='loading'>
                                <p>loading</p>
                                <div className="lds-ellipsis">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>

                            </div>

                        </>

                    }

                    {
                        filterWork?.map((p, i) => (
                            <Card key={i}
                                title={p.title}
                                image={p.image}
                                description={p.description}
                            />
                        ))
                    }

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

{/*}
<div className='cards-wrapper'>
    { loading &&
        <>
            <div className='loading'>
                <p>loading</p>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>

        </>

    }

    {
        projects?.map((p) => (
            <Card
                title={p.title}
                image={p.logo}
                description={p.description}
            />
        ))
    }

</div>
*/}