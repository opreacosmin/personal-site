import React from "react";
import './Work.css'
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function Work(){
    return (
        <>
            <div className='work-wrapper'>
                <NavBar/>
                <h1>My Projects</h1>
                <div className='cards-wrapper'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <Footer/>
            </div>
        </>
    );

}

export default Work;