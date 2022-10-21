import React from "react";
import "./Footer.css";
import {Button} from "../Buttons/Button";
import background from "./../../resources/pexels-gabriel-peter-696644.jpg"
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link} from "react-router-dom";

function Footer(){
    return (
        <>
            <div className="footer-container">

                <div className='contact-container'>
                    <h1>GET IN TOUCH</h1>
                    <p>For business inquiries or if you just want to chat about design
                        feel free to message me at <br></br>opreacosmin2000[at]gmail.com</p>
                    <Link to='/Contact' className='link'>
                        <MailOutlineIcon className='mail-icon'/>
                    </Link>
                </div>

            </div>

            <div className='credits-container'>
                <p> ©. All rights reserved</p>
                <div className='socials'>
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
            </div>

        </>
    );

}

export default Footer;