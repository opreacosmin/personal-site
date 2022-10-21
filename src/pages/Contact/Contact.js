import React from "react";
import './Contact.css'
import {Button} from "../../components/Buttons/Button";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import img from './../../resources/pexels-clark-van-der-beken-12117991.jpg'

function Contact(){
    return (
        <>
            <div className='contact'>
                <NavBar/>
                <div className='contact-wrapper'>
                    <h1>Contact me!</h1>
                    <p> For any questions feel free to message me, my mail is opreacosmin2000[at]gmail.com</p>
                    <div className='subscription-container'>
                        <form id="contact-form" className="form" role="form">

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input  type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="NAME"
                                            name="name"
                                            value="" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="email"
                                           className="form-control"
                                           id="email"
                                           placeholder="EMAIL"
                                           name="email"
                                           value="" required/>
                                </div>
                            </div>

                            <textarea className="form-control"
                                      rows="10"
                                      placeholder="MESSAGE"
                                      name="message"
                                      required/>

                            <Button className='form-btn' buttonStyle='btn--outline'>Send</Button>
                        </form>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    );

}

export default Contact;