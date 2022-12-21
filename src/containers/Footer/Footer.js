import React from "react";
import "./Footer.css";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){
    return (
        <>
            <div className="footer-container">
                <div className='contact-container'>
                    <h1>GET IN TOUCH</h1>
                    <p>For business inquiries or if you just want to chat about design
                        feel free to reach out to me</p>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/oprea-cosmin-alexandru-33b548195/'>
                            <LinkedInIcon className='icon'/>
                        </a>
                        <a href='https://www.instagram.com/cosmin.alexandru1/'>
                            <InstagramIcon className='icon'/>
                        </a>
                        <a href='https://twitter.com/Opreacosmin131'>
                            <TwitterIcon className='icon'/>
                        </a>
                        <a href='https://web.facebook.com/cosminutzu.alexandru.9/'>
                            <FacebookIcon className='icon'/>
                        </a>
                        <a href='https://github.com/opreacosmin'>
                            <GitHubIcon className='icon'/>
                        </a>
                        <a>
                            <MailOutlineIcon  className='icon'/>
                        </a>
                    </div>
                </div>

            </div>

            <div className='credits-container'>
                <p> Oprea Cosmin Alexandru©. All rights reserved</p>
            </div>

        </>
    );

}

export default Footer;