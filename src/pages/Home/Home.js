import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import {Button} from "../../components/Buttons/Button";
import ScrollButton from "../../components/Buttons/ScrollButton";
import Footer from "../../components/Footer/Footer";
import './Home.css'
import Card from "../../components/Card/Card";

function Home() {
    return(
        <>
            <div className='home'>
                <NavBar/>
                <Header/>
                <div className='home-containers-wrapper'>

                    <div className='about-container'>
                        <div className='post'>
                            <h2 className='post-title'>About me: In consequatur dolorem est accusantium eveniet aut quibusdam similique qui autem omnis et consequatur fugiat. Aut sint impedit sed distinctio voluptate rem possimus alias. Eum aliquid dolor et nisi facilis non nihil quibusdam!</h2>
                        </div>
                        <p>Et dignissimos corporis qui sint tempora ut adipisci molestias sed inventore deleniti nam voluptas commodi aut quae sequi non tempora corrupti. Aut asperiores voluptate id delectus accusantium qui inventore expedita ut eaque eligendi in ipsum enim sit officia error hic quam fugiat. Quo possimus enim et soluta suscipit nam officiis pariatur aut consectetur laborum ut numquam impedit ex libero quas. Non eaque expedita sed debitis dolorem in natus adipisci.</p>
                    </div>


                    <div className='work-container'>
                        <h1>Latest Projects</h1>
                        <div className='cards-wrapper'>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>

                    <div className='experience-container'>
                        <div className=''>

                        </div>
                    </div>
                </div>

                <ScrollButton/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;