import { Link } from "react-router-dom";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { MdLocationOn } from 'react-icons/md';
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../../assets/imges/LOGO1.jpg'
import paymentIcon from '../../assets/imges/Icons/payment.png'

function Footers() {

    const scrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    };

    return (
        <>
            <div className="footer-area">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
                                    <div className="single-wedge">
                                        <h4 className="footer-herading">IksaShop</h4>

                                        <div className="need_help">
                                            <a href="https://maps.app.goo.gl/wVi29vNLfCSrJWAj7">   <p > <MdLocationOn className="imgForIon" /> Amman / Jordan</p></a>
                                            <p >
                                                <a href="tel:+962781021110"><AiFillPhone className="imgForIon" /> Telephone: +962781021110</a>
                                            </p>
                                            <p>
                                                <a href="mailto:IksaShop@gmail.com"><AiOutlineMail className="imgForIon" /> Email: IksaShop@gmail.com</a>
                                            </p>
                                        </div>

                                        <div className="social_follow">
                                            <ul>
                                                <li className="Icon" title="facebook"><a href="#" target="_blank"><ImFacebook className="Icon facebook" /><span className="facebook">Facebook</span></a>
                                                </li>
                                                <li className="Icon" title="whatsapp"><a href="https://api.whatsapp.com/send/?phone=%2B962781021110&text&type=phone_number&app_absent=0" target="_blank"><AiOutlineWhatsApp className="Icon whatsapp" /><span className="whatsapp">whatsapp</span></a>
                                                </li>
                                                <li className="Icon" title="instagram"><a href="https://www.instagram.com/iksaShop/" target="_blank"><AiOutlineInstagram className="Icon instagram-gradient" /><span className="instagram-gradient">instagram</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-lg-3">
                                    <div className="single-wedge">
                                        <h4 className="footer-herading">Main Links</h4>
                                        <ul className="footer-links">
                                            <li><Link to="/" onClick={() => { scrollToUp() }}><AiFillHome className="imgForIon" /> Home</Link></li>
                                            <li><Link to="/product" onClick={() => { scrollToUp() }}><AiFillProduct className="imgForIon" /> Products</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-lg-3">
                                    <div className="single-wedge">
                                        <h4 className="footer-herading">More Links</h4>
                                        <ul className="footer-links">
                                            <li><Link to="/about" onClick={() => { scrollToUp() }}>About</Link></li>
                                            <li><Link to="https://api.whatsapp.com/send/?phone=%2B962781021110&text&type=phone_number&app_absent=0" onClick={() => { scrollToUp() }}>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <Link to="/" onClick={() => { scrollToUp() }}>
                                        <img
                                            src={Logo}
                                            alt="IksaShop Logo"
                                            className="img-responsive m-auto"
                                        />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Footer Bottom */}
            < div className="footer-bottom" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="copy-text">IksaShop © 2026. All Rights Reserved.</p>
                        </div>

                        <div className="col-md-6 text-right">
                            <img
                                src={paymentIcon}
                                alt="Payment Methods"
                                className="img-responsive"
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Footers;
