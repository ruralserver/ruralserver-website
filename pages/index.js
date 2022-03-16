import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Footer from '@components/Js'

export default function Home() {
    return (
        <>
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="box-container limit-width">

                <section id="settings"></section>

                <div id="spinner-area">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                        <div className="spinner-txt">Antler...</div>
                    </div>
                </div>

                <div className="body-borders" data-border="20">
                    <div className="top-border bg-white"></div>
                    <div className="right-border bg-white"></div>
                    <div className="bottom-border bg-white"></div>
                    <div className="left-border bg-white"></div>
                </div>
                <Header />

                <section id="owl-demo" className="owl-carousel owl-theme owl-loaded owl-drag slider-02 scrollme">
                    <div className="full h-100 sec-bg6 bg-colorstyle">
                        <div className="vc-parent">
                            <div className="vc-child">
                                <div className="top-banner">
                                    <div className="container pe-5">
                                        <img className="svg custom-element-right" src="patterns/ddoslayers.svg"
                                             alt="DDos Monitoring" />
                                            <div className="wow animated fadeInUp fast col-sm-12 col-md-5">
                                                <div className="heading mergecolor">DDoS <br/><span id="typed2"></span>
                                                    <br/>Websites</div>
                                                <h3 className="subheading text-break seccolor">Automatic Mitigation for
                                                    Sophisticated DDoS that quickly defeats attacks without impacting
                                                    site performance. Starting for only <strong
                                                        className="c-pink">$19.99/year</strong><br/>
                                                </h3>
                                                <a href="ddos" className="btn btn-default-yellow-fill me-2 mb-2">Get
                                                    Prices</a>
                                                <a href="ddos" className="btn btn-default-pink-fill mb-2">Learn more</a>
                                            </div>
                                    </div>
                                    <div className="owl-dots"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full h-100 sec-bg6 bg-colorstyle">
                        <div className="vc-parent">
                            <div className="vc-child">
                                <div className="top-banner">
                                    <div className="container pe-5">
                                        <img className="svg custom-element-right" src="patterns/api.svg"
                                             alt="Dedicated Server" />
                                            <div className="col-sm-12 col-md-6">
                                                <div className="heading mergecolor">Dedicated <br/>Server with <br/> <span
                                                    id="typed1"></span></div>
                                                <h3 className="subheading text-break seccolor">Powerful servers with
                                                    high-end resources that will guarantee resource exclusivity,
                                                    starting at just <strong className="c-pink">$90.22/mo</strong><br/>
                                                </h3>
                                            </div>
                                            <a href="dedicated" className="btn btn-default-yellow-fill me-2 mb-2">Get
                                                Prices</a>
                                            <a href="dedicated" className="btn btn-default-pink-fill mb-2">Learn
                                                more</a>
                                    </div>
                                    <div className="owl-dots"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full h-100 sec-bg6 bg-colorstyle">
                        <div className="vc-parent">
                            <div className="vc-child">
                                <div className="top-banner">
                                    <div className="container pe-5">
                                        <img className="svg custom-element-right" src="patterns/cloudvps.svg"
                                             alt="Cloud VPS Server" />
                                            <div className="col-sm-12 col-md-6">
                                                <h1 className="heading mergecolor">Virtual <br/>Cloud <br/>Servers</h1>
                                                <h3 className="subheading seccolor">
                                                    <i className="c-pink feat fas fa-check-circle me-2"></i> Immediate
                                                    scalability<br/>
                                                    <i className="c-pink feat fas fa-check-circle me-2"></i> High
                                                    performance<br/>
                                                    <i className="c-pink feat fas fa-check-circle me-2"></i> Fast
                                                    deployment
                                                </h3>
                                            </div>
                                            <a href="vps" className="btn btn-default-yellow-fill me-2 mb-2">Get
                                                Prices</a>
                                            <a href="vps" className="btn btn-default-pink-fill mb-2">Learn more</a>
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