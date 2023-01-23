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
            <title>404 page Not Found - RuralServer</title>
            <meta name="description" content="" />

            </Head>

            <div className="box-container limit-width">

                <Header />

                <section className="services sec-normal sec-bg4">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center pt-5">
                                    <h1>404 Page Not Found!</h1>
                                    <p>Please check your url.</p>
                                    <h2 className="section-heading">Why Choose Ruralserver?</h2>
                                    <p className="section-subheading">Solutions to meet every Web Design & Development need Powering 1800+ Web Professionals globally with confidence. </p>
                                </div>
                                <div className="col-md-12 col-lg-4 wow animated fadeInUp fast">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <div className="plans badge feat bg-pink">Premium</div>
                                        <img className="svg" src="/fonts/svg/helpdesk.svg" alt="" />
                                        <div className="title mergecolor">Support 24x7x365</div>
                                        <p className="subtitle seccolor">
                                            Get instant help from our rapid support team
                                        </p>
                                        <a href="/about-ruralserver/" className="btn btn-default-yellow-fill">Read more</a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 wow animated fadeInUp">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <div className="plans badge feat bg-pink">Control Panel</div>
                                        <img className="svg" src="/fonts/svg/window.svg" alt="" />
                                        <div className="title mergecolor">Directadmin fast hosting</div>
                                        <p className="subtitle seccolor">
                                            Included Softaculous, CloudLinux and Jetbackup
                                        </p>
                                        <a href="/about-ruralserver/" className="btn btn-default-yellow-fill">Read more</a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 wow animated fadeInUp fast">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img className="svg" src="/fonts/svg/cloudmanaged.svg" alt="" />
                                        <div className="title mergecolor">Perfomance Optimized</div>
                                        <p className="subtitle seccolor">All shared hosting optimised with CloudLinux</p>
                                        <a href="/about-ruralserver/" className="btn btn-default-yellow-fill">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services maping sec-normal sec-grad-grey-to-grey bg-colorstyle bottompadding">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading text-white mergecolor">Our Datacenters are Located in
                                        7 Regions</h2>
                                    <p className="section-subheading text-muted mergecolor"><span className="golink">Lorem ipsum dolor</span> sit
                                        amet, consectetur adipiscing elit sed, do eiusmod tempor <span
                                            className="c-pink">incididunt lorem ipsum</span> dolor sit amet</p>
                                </div>
                                <div className="col-md-12 pt-5 scrollme position-relative">
                                    <img src="/patterns/map.svg" className="lazyload w-10 animateme" alt="Load Balancing"
                                         data-when="view" data-from="1" data-to="0" data-opacity="0" />
                                    <span className="datacenters montreal" data-bs-toggle="popover"
                                          data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                          title="Montreal"
                                          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                    <span className="datacenters newyork" data-bs-toggle="popover"
                                          data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                          title="New York"
                                          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                    <span className="datacenters portugal" data-bs-toggle="popover"
                                          data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                          title="Portugal"
                                          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                    <span className="datacenters london" data-bs-toggle="popover"
                                          data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                          title="London"
                                          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                    <span className="datacenters moskow" data-bs-toggle="popover"
                                          data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                          title="Moskow"
                                          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                    <span className="datacenters hongkong" data-bs-toggle="popover"
                                          data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                          title="Hong Kong"
                                          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                    <span className="datacenters singapure" data-bs-toggle="popover"
                                          data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                          title="Singapure"
                                          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
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