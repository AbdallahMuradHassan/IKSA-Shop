import React from 'react'

export default function Contact() {
    return (
        <div className="contact-area pb-100px">
            <div className="container">

                <div className="custom-row-2">
                    <div className="col-lg-4 col-md-5 mb-lm-60px col-sm-12 col-xs-12 w-sm-100">
                        <div className="contact-info-wrap">
                            <div className="single-contact-info">
                                <div className="contact-icon">
                                    <i className="ion-android-call"></i>
                                </div>
                                <div className="contact-info-dec">
                                    <p><a href="tel:+962790000000">+962 79 000 00000</a></p>
                                </div>
                            </div>
                            <div className="single-contact-info">
                                <div className="contact-icon">
                                    <i className="ion-android-globe"></i>
                                </div>
                                <div className="contact-info-dec">
                                    <p><a href="mailto:EventHub.2024@outlook.com">EventHub.2024@outlook.com</a></p>
                                </div>
                            </div>
                            <div className="single-contact-info">
                                <div className="contact-icon">
                                    <i className="ion-android-pin"></i>
                                </div>
                                <div className="contact-info-dec">
                                    <p>Amman / Jordan</p>
                                </div>
                            </div>
                            <div className="contact-social">
                                <h3>Follow Us</h3>
                                <div className="social-info">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="ion-social-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-social-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-social-youtube"></i></a>
                                        </li>


                                        <li>
                                            <a href="#"><i className="ion-social-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                        <div className="contact-form">
                            <div className="contact-title mb-30">
                                <h2>Get In Touch</h2>
                            </div>
                            <form className="contact-form-style" id="contact-form" action="Contact.php" method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input name="Name" placeholder="Name*" type="text" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input name="Email_Address" placeholder="Email Address*" type="email" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input name="Subject" placeholder="Subject*" type="text" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="Message" placeholder="Your Message*"></textarea>
                                        <button className="submit" name="Submit" type="submit">SEND</button>
                                    </div>
                                </div>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
