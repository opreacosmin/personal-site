import React from 'react';
import { About, Footer, Header, Skills, Contact, Work } from '../containers';
import  {NavBar}  from '../components';


function Home() {
    return (
        <>
            <div className="home">
                <NavBar/>
                <Header/>
                <About/>
                <Work/>
                <Skills/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;