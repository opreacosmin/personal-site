import React from "react";
import './Contact.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { AppWrap, MotionWrap } from '../../wrapper';

function Contact(){
    return (
        <>

                <div className='contact-wrapper'>
                    <h1>Contact me!</h1>
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
                                    <input type="text"
                                           className="form-control"
                                           id="subject"
                                           placeholder="SUBJECT"
                                           name="subject"
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

                            <button className='form-btn'
                                    buttonStyle='btn--outline'>
                                    <span>Send</span>
                                    <SendOutlinedIcon className='icon'/>
                            </button>
                        </form>
                    </div>
                </div>

        </>
    );

}

export default AppWrap(
    MotionWrap(Contact, 'app__skills'),
    'contact',
    'app__whitebg',
);