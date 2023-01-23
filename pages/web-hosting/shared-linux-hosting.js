import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
            <title>Shared linux hosting</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />

                <div className="top-header item5 overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper">
                                    <h1 className="heading">Shared Hosting</h1>
                                    <h3 className="subheading col-sm-8">Blazing fast & stable hosting
                                        infrastructure</h3>
                                    <div id="run-switch" className="run-switch">
                                        <div className="mo">Monthly Price</div>
                                        <div className="switch"></div>
                                        <div className="an active">Anually Price</div>
                                    </div>
                                    <div className="included">
                                        <h4 className="mb-3">All plans include</h4>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> c-Panel or Plesk</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Unlimited email</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Free SSL certificate</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Redundant DNS</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Powerful SSD</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Support 24/7/365</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="gocontent godown gocheck" href="#scroll">
                    <img className="svg" src="/fonts/svg/arrowdown.svg" height="80" alt="features" />
                    <span>Features</span>
                </a>


                <section className="pricing special sec-uping pb-5 bg-colorstyle specialposition">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="row justify-content-end scrollme">
                            <div className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="enter" data-from="0"
                                 data-to="1" data-opacity="1" data-translatey="-20">
                                <div className="wrapper price-container text-start wow animated fadeInUp fast noshadow">
                                    <div className="plans badge feat bg-pink">30% Discount</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/cloudlinux.svg" alt="" />
                                        <div className="title">Business SSD</div>
                                        <div className="fromer seccolor">annually get (30% discount)</div>
                                        <div className="price-content">
                                            <div className="price seccolor">
                                                <del className="c-grey seccolor"><small><sup
                                                    className="coin seccolor">$</sup> <span
                                                    className="value seccolor">88.24</span></small></del>
                                            </div>
                                            <div className="price">
                                                <sup className="coin mergecolor">$</sup>
                                                <span className="discount mergecolor">62.00</span>
                                                <small className="mergecolor">/</small><span
                                                className="period annually mergecolor">year</span>
                                            </div>
                                        </div>
                                        <a href="http://inebur.com/whmcs/cart.php?a=add&pid=9&carttpl=antler"
                                           className="btn btn-default-yellow-fill">Order now</a>
                                    </div>

                                    <ul className="list-info">
                                        <li><i className="icon-drives"></i> <span className="c-purple">DISK</span><br/>
                                            <span>250GB SSD</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-purple">DATA</span><br/>
                                            <span>1TB Bandwidth</span></li>
                                        <li><i className="icon-emailopen"></i> <span
                                            className="c-purple">EMAIL</span><br/> <span>120 Emails</span></li>
                                        <li><i className="icon-domains"></i> <span className="c-purple">TLD</span><br/>
                                            <span>30 Domains</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="span" data-from="0"
                                 data-to="1" data-opacity="1" data-translatey="50">
                                <div className="wrapper price-container text-start wow animated fadeInUp noshadow">
                                    <div className="plans badge feat bg-grey">best value</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/cloudwindows.svg" alt="" />
                                        <div className="title">Pro SSD</div>
                                        <div className="fromer seccolor">annually get (20% discount)</div>
                                        <div className="price-content">
                                            <div className="price">
                                                <del className="c-grey seccolor"><small><sup
                                                    className="coin seccolor">$</sup> <span
                                                    className="value seccolor">112.99</span></small></del>
                                            </div>
                                            <div className="price">
                                                <sup className="coin mergecolor">$</sup>
                                                <span className="discount mergecolor">90.00</span>
                                                <small className="mergecolor">/</small><span
                                                className="period annually mergecolor">year</span>
                                            </div>
                                        </div>
                                        <a href="http://inebur.com/whmcs/cart.php?a=add&pid=10&carttpl=antler"
                                           className="btn btn-default-yellow-fill">Order now</a>
                                    </div>
                                    <ul className="list-info bg-purple">
                                        <li><i className="icon-drives"></i> <span className="c-pink">DISK</span><br/>
                                            <span>2TB SSD</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-pink">DATA</span><br/>
                                            <span>Unlimited Bandwidth</span></li>
                                        <li><i className="icon-emailopen"></i> <span className="c-pink">EMAIL</span><br/>
                                            <span>Unlimited Emails</span></li>
                                        <li><i className="icon-domains"></i> <span className="c-pink">TLD</span><br/>
                                            <span>Unlimited Domains</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="scroll" className="history-section feat01 sec-normal bg-colorstyle">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="sec-main sec-bg1 bg-colorstyle noshadow nopadding">
                            <div className="row">
                                <div className="col-md-12 col-lg-5 wow animated fadeInUp fast">
                                    <img className="svg first" src="assets/patterns/dns.svg" alt="dns redundant" />
                                </div>
                                <div className="col-md-12 col-lg-6 offset-lg-1">
                                    <div className="info-content">
                                        <h1 className="fw-bold mb-3 mergecolor">Redundant DNS</h1>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea
                                            of <a href="#" className="golink">denouncing pleasure</a> and praising pain
                                            was born and I will.</p>
                                    </div>
                                    <a href="#" className="btn btn-default-yellow-fill mt-3">Learn more</a>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="info-content">
                                        <h1 className="fw-bold mb-3 mergecolor">Remote Daily Backups</h1>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea
                                            of <a href="#" className="golink">denouncing pleasure</a> and praising
                                            pain was born and I will.</p>
                                    </div>
                                    <a href="" className="btn btn-default-yellow-fill mt-3">Backup now</a>
                                </div>
                                <div className="col-md-12 col-lg-5 offset-lg-1 wow animated fadeInUp fast">
                                    <img className="svg second" src="assets/patterns/backups.svg" alt="backups" />
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12 col-lg-5 wow animated fadeInUp fast">
                                    <img className="svg third" src="assets/patterns/monitoring.svg"
                                         alt="monitoring 24/7/365" />
                                </div>
                                <div className="col-md-12 col-lg-6 offset-lg-1">
                                    <div className="info-content">
                                        <h1 className="fw-bold mb-3 mergecolor">24/7/365 Monitoring</h1>
                                        <p className="seccolor">But I must explain to you how all this mistaken
                                            idea of <a href="#" className="golink">denouncing pleasure</a> and
                                            praising pain was born and I will.</p>
                                    </div>
                                    <a href="" className="btn btn-default-yellow-fill mt-3">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <svg className="division-ontop bg-white d-none" viewBox="0 0 1440 150">
                    <path fill="#fdd700" fill-opacity="1"
                          d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                    </path>
                </svg>

                <section className="services sec-normal motpath sec-bg4 scrollme">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading">Why choose Antler for your hosting?</h2>
                                    <p className="section-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <div className="plans badge feat bg-pink">Softaculous</div>
                                        <img className="svg" src="/fonts/svg/select.svg" height="60" alt="" />
                                        <div className="title mergecolor">Easy 1-click-installer</div>
                                        <p className="subtitle seccolor">
                                            Excepteur sint occaecat cupidatat non proident voluptate. Lorem ipsum
                                            dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <img className="svg" src="/fonts/svg/speed.svg" height="60" alt="" />
                                        <div className="title mergecolor">Superfast Websites</div>
                                        <p className="subtitle seccolor">
                                            Excepteur sint occaecat cupidatat non proident dolor. Lorem ipsum dolor
                                            sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <div className="plans badge feat bg-pink">Free</div>
                                        <img className="svg" src="/fonts/svg/inverse.svg" height="60" alt="" />
                                        <div className="title mergecolor">Website Migrations</div>
                                        <p className="subtitle seccolor">
                                            Excepteur sint occaecat cupidatat non proident voluptate. Lorem ipsum
                                            dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <Footer />
            </div>
            <a href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </a>
            <Js />
        </>
    )
}