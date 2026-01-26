import Logo from '../../assets/imges/LOGO1.jpg'
import paymentIcon from '../../assets/imges/Icons/payment.png'

function Footers() {
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
                                            <p className="add">Amman / Jordan</p>
                                            <p className="phone">
                                                <a href="tel:+962781021110">Telephone: +962781021110</a>
                                            </p>
                                            <p className="mail">
                                                <a href="mailto:IksaShop@gmail.com">Email: IksaShop@gmail.com</a>
                                            </p>
                                        </div>

                                        <div class="social_follow">
                                            <ul>
                                                <li class="facebook" title="facebook"><a href="#" target="_blank">Facebook</a>
                                                </li>
                                                <li class="twitter" title="twitter"><a href="#" target="_blank">Twitter</a>
                                                </li>
                                                <li class="youtube" title="youtube"><a href="#" target="_blank">YouTube</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-lg-3">
                                    <div className="single-wedge">
                                        <h4 className="footer-herading">Main Links</h4>
                                        <ul className="footer-links">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/events">Events</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-lg-3">
                                    <div className="single-wedge">
                                        <h4 className="footer-herading">More Links</h4>
                                        <ul className="footer-links">
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <a href="/">
                                        <img
                                            src={Logo}
                                            alt="IksaShop Logo"
                                            className="img-responsive m-auto"
                                        />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
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
            </div>
        </>
    );
}

export default Footers;
