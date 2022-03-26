export default function Footer() {
  return (
    <>
        <footer className="footer">
            <img className="logo-bg logo-footer" src="img/logos/symbol.svg" alt="logo" />
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="heading">Hosting</div>
                                <ul className="footer-menu">
                                    <li className="menu-item"><a href="hosting">Shared Hosting</a></li>
                                    <li className="menu-item"><a href="dedicated">Dedicated Server</a></li>
                                    <li className="menu-item"><a href="vps">Cloud Virtual (VPS)</a></li>
                                    <li className="menu-item"><a href="domains">Domain Names</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="heading">Support</div>
                                <ul className="footer-menu">
                                    <li className="menu-item"><a href="https://client.ruralserver.com/" target="_blank">Client Area</a></li>
                                    <li className="menu-item"><a href="https://client.ruralserver.com/knowledgebase.php" target="_blank">Knowledge Base</a></li>
                                    <li className="menu-item"><a href="https://client.ruralserver.com/contact.php" target="_blank">Contact Us</a></li>
                                    <li className="menu-item"><a href="https://client.ruralserver.com/announcements.php" target="_blank">Announcements</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="heading">Company</div>
                                <ul className="footer-menu">
                                    <li className="menu-item"><a href="about"> About RuralServer</a></li>
                                    <li className="menu-item"><a href="elements"> Terms of Service</a></li>
                                    <li className="menu-item"><a href="blog-details">Acceptable Use Policy</a></li>
                                    <li className="menu-item"><a href="legal">Privacy Policy</a></li>
                                    <li className="menu-item"><a href="legal">DMCA/Abuse Report</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <a><img className="svg logo-footer d-block" src="img/logos/logo.svg" alt="logo" /></a>
                                <a><img className="svg logo-footer d-none" src="img/logos/logo-dark.svg" alt="logo" /></a>
                                <div className="copyrigh">©2013 - 2022 RuralServer - All rights reserved</div>
                                <div className="soc-icons">
                                    <a href=""><i className="fab fa-facebook-f withborder noshadow"></i></a>
                                    <a href=""><i className="fab fa-youtube withborder noshadow"></i></a>
                                    <a href=""><i className="fab fa-twitter withborder noshadow"></i></a>
                                    <a href=""><i className="fab fa-instagram withborder noshadow"></i></a>
                                </div>
                                <a className="deploys-status" href="https://app.netlify.com/sites/ruralserver/deploys" target="_blank"><img src="https://api.netlify.com/api/v1/badges/5a613e66-9a5a-4bef-bca4-02042be43c08/deploy-status" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-35">
                    <div className="container pt-35">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="footer-menu">
                                    <li id="drop-cur" className="btn-group btn-group-toggle">
                                        <label data-cur="en-INR" htmlFor="option1" className="btn btn-secondary">
                                            <input type="radio" name="options" id="option1" checked /> <i
                                            className="fa-duotone fa-indian-rupee-sign"></i> INR
                                        </label>
                                        <label data-cur="pt-USD" htmlFor="option2" className="btn btn-secondary">
                                            <input type="radio" name="options" id="option2" /> <i
                                            className="fa-duotone fa-dollar-sign"></i> USD
                                        </label>
                                    </li>
                                    <li className="menu-item by">Hybrid Design With <span className="c-pink">♥</span> by <a href="https://www.srapsware.com/" target="_blank">Srapsware</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="payment-list">
                                    <li><p>Payments We Accept</p></li>
                                    <li><i className="fab fa-cc-paypal"></i></li>
                                    <li><i className="fab fa-cc-visa"></i></li>
                                    <li><i className="fab fa-cc-mastercard"></i></li>
                                    <li><i className="fab fa-cc-apple-pay"></i></li>
                                    <li><i className="fab fa-cc-discover"></i></li>
                                    <li><i className="fab fa-cc-amazon-pay"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>

    </>
  )
}
