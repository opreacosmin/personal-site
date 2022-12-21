import React from 'react';
import './App.css';
import { About, Footer, Header, Skills, Contact, Work } from './containers';
import { NavBar } from './components';


function App() {
    return (
        <>
        <div className="app">
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

export default App;