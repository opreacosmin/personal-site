import React, {useState} from "react";
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../resources/img.png'
import {Link} from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [socialsClick, setSocialsClick] = useState(false);
    const handleSocialsClick = () => setSocialsClick(!socialsClick);

    return(

        <>
            <div className='navbar'>
                <div className='open-social-menu' onClick={handleSocialsClick}>
                    <p>Socials</p>
                </div>
                <div className={socialsClick ? 'socials-menu active': 'socials-menu'}>
                    <div className='nav-socials'>
                        <a href='https://www.linkedin.com/in/oprea-cosmin-alexandru-33b548195/'>
                            <LinkedInIcon/>
                        </a>
                        <a href='https://www.instagram.com/cosmin.alexandru1/'>
                            <InstagramIcon/>
                        </a>
                        <a href='https://twitter.com/Opreacosmin131'>
                            <TwitterIcon/>
                        </a>
                        <a href='https://web.facebook.com/cosminutzu.alexandru.9/'>
                            <FacebookIcon/>
                        </a>
                        <a href='https://github.com/opreacosmin'>
                            <GitHubIcon/>
                        </a>

                    </div>
                </div>
                <div className='nav-logo'>
                    <img src={logo} alt={''}/>
                </div>

                <div className='menu-icon' onClick={handleClick}>
                    <MenuIcon/>
                </div>
                <div className={click ? 'nav-menu active': 'nav-menu'}>
                    <div className='nav-links'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;