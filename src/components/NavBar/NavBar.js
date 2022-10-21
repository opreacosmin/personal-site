import React from "react";
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './../../resources/img.png'
import {Link} from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function navBar(){
    return(

        <>
            <div className='navbar'>
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
                </div>
                <div className='nav-links'>
                    <Link to='/' className='link'>
                        <img src={logo} alt={''}/>
                    </Link>
                    <Link to='/About' className='link'> About </Link>
                    <Link to='/Work' className='link'> Work </Link>
                    <Link to='/Contact' className='link'> Contact </Link>
                </div>
            </div>
        </>
    )
}

export default navBar;