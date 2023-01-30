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
            <title>Tos</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />

                <div className="top-header">
                    <div className="total-grad-inverse"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wrapper">
                                    <div className="heading mb-0">General Terms And Conditions</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cd-filter-block checkbox-group mb-0">
                                    <label><a href=""><i className="fas fa-search"></i></a></label>
                                    <input type="text" className="input" placeholder="Search.."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section id="gotop" className="blog motpath pb-80 bg-colorstyle">
                    <div className="container">
                        <div className="row">
                            <!-- sidebar -->
                            <div className="col-md-12 col-lg-4">
                                <aside id="sidebar" className="sidebar mt-80 sec-bg1 bg-seccolorstyle noshadow">
                                    <div className="menu categories clear">
                                        <h5 className="mergecolor"><b>Terms</b></h5>
                                        <hr>
                                            <div className="heading pt-2"><a href="#gotop" id="showall"
                                                                             className="gocheck active seccolor"><img
                                                className="svg me-3" src="/fonts/svg/select.svg"
                                                alt="Dedicated Server"/> All General Terms</a></div>
                                            <div className="heading pt-2"><a href="#gotop"
                                                                             className="gocheck showSingle seccolor"
                                                                             target="1"><img className="svg me-3"
                                                                                             src="/fonts/svg/managedserver.svg"
                                                                                             alt="Shared Hosting"/> Servers
                                                Policies</a></div>
                                            <div className="heading pt-2"><a href="#gotop"
                                                                             className="gocheck showSingle seccolor"
                                                                             target="2"><img className="svg me-3"
                                                                                             src="/fonts/svg/privacy.svg"
                                                                                             alt="Cloud Reseller"/> Privacy
                                                Policy</a></div>
                                            <div className="heading pt-2"><a href="#gotop"
                                                                             className="gocheck showSingle seccolor"
                                                                             target="3"><img className="svg me-3"
                                                                                             src="/fonts/svg/network.svg"
                                                                                             alt="Dedicated Server"/> Cookie
                                                Statement</a></div>
                                            <div className="heading pt-2"><a href="#gotop"
                                                                             className="gocheck showSingle seccolor"
                                                                             target="4"><img className="svg me-3"
                                                                                             src="/fonts/svg/learning.svg"
                                                                                             alt="Dedicated Server"/> Legal</a>
                                            </div>
                                            <div className="heading pt-2"><a href="#gotop"
                                                                             className="gocheck showSingle seccolor"
                                                                             target="5"><img className="svg me-3"
                                                                                             src="/fonts/svg/meeting.svg"
                                                                                             alt="Dedicated Server"/> Affiliate
                                                Status</a></div>
                                    </div>
                                </aside>
                            </div>
                            <div className="pt-35 col-md-12 col-lg-8">
                                <div id="sidebar_content" className="wrap-blog">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 knowledge">
                                            <div id="div3" className="wrapper targetDiv mt-5 bg-seccolorstyle noshadow">
                                                <h5><a href="" className="category"><b>Cookie Statement</b></a> <span
                                                    className="float-end c-grey seccolor">[v2 04/2017]</span></h5>
                                                <hr>
                                                    <a href="">[1] Cookies and crawling</a>
                                                    <div className="blog-info">
                                                        <p className="seccolor">Lorem ipsum, or lipsum as it is
                                                            sometimes known, is dummy text used in laying out print,
                                                            graphic or web designs. The passage is <i
                                                                className="golink">attributed to an
                                                                unknown</i> typesetter in <span
                                                                className="text-dark seccolor">the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</span>
                                                        </p>
                                                    </div>
                                                    <br>
                                                        <div className="blog-info">
                                                            <p className="seccolor">[a] Lorem ipsum, or lipsum as it is
                                                                sometimes known, is dummy text used in laying out print,
                                                                graphic or web designs. The passage is.</p>
                                                        </div>
                                                        <br>
                                                            <div className="blog-info">
                                                                <p className="seccolor">[b] From its medieval origins to
                                                                    the digital era, learn everything there is to know
                                                                    about the ubiquitous lorem ipsum passage.</p>
                                                            </div>
                                            </div>
                                            <div id="div2" className="wrapper targetDiv mt-5 bg-seccolorstyle noshadow">
                                                <h5><a href="" className="category"><b>Privacy Policy</b></a> <span
                                                    className="float-end c-grey seccolor">[v2 04/2017]</span></h5>
                                                <hr>
                                                    <a href="">[1] Registration and use of personal data</a>
                                                    <div className="blog-info">
                                                        <p className="seccolor">Lorem ipsum, or lipsum as it is
                                                            sometimes known, is dummy text used in laying out print,
                                                            graphic or web designs. The passage is <i
                                                                className="golink">attributed to an
                                                                unknown</i> typesetter in <span
                                                                className="text-dark seccolor">the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</span>
                                                        </p>
                                                    </div>
                                                    <br>
                                                        <div className="blog-info">
                                                            <p className="seccolor">[1.1] From its medieval origins to
                                                                the digital era, learn everything there is to know about
                                                                the ubiquitous lorem ipsum passage.</p>
                                                        </div>
                                                        <br>
                                                            <div className="blog-info">
                                                                <p className="seccolor">[a] Lorem ipsum, or lipsum as it
                                                                    is sometimes known, is dummy text used in laying out
                                                                    print, graphic or web designs. The passage is.</p>
                                                            </div>
                                                            <br>
                                                                <div className="blog-info">
                                                                    <p className="seccolor">[b] From its medieval
                                                                        origins to the digital era, learn everything
                                                                        there is to know about the ubiquitous lorem
                                                                        ipsum passage.</p>
                                                                </div>
                                                                <br>
                                                                    <a href="">[2] Data for service provision</a>
                                                                    <div className="blog-info">
                                                                        <p className="seccolor">Lorem ipsum, or lipsum
                                                                            as it is sometimes known, is dummy text used
                                                                            in laying out print, graphic or web designs.
                                                                            The passage is <i
                                                                                className="golink">attributed</i> to an
                                                                            unknown typesetter in the 15th century who
                                                                            is thought to have scrambled parts of
                                                                            Cicero's De Finibus Bonorum et Malorum for
                                                                            use in a type specimen book. It usually
                                                                            begins with</p>
                                                                    </div>
                                                                    <br>
                                                                        <div className="blog-info">
                                                                            <p className="seccolor">[2.1] From its
                                                                                medieval origins to the digital era,
                                                                                learn everything there is to know about
                                                                                the ubiquitous lorem ipsum passage.</p>
                                                                        </div>
                                            </div>
                                            <div id="div1" className="wrapper targetDiv mt-5 bg-seccolorstyle noshadow">
                                                <h5><b><a href="" className="category">Servers Policies</a></b> <span
                                                    className="float-end c-grey seccolor">[v2 09/2018]</span></h5>
                                                <hr>
                                                    <a href="">[1] Cloud Servers Agreement</a>
                                                    <div className="blog-info">
                                                        <p className="seccolor">Lorem ipsum, or lipsum as it is
                                                            sometimes known, is dummy text used in laying out print,
                                                            graphic or web designs. The passage is <i
                                                                className="golink">attributed to an
                                                                unknown</i> typesetter in <span
                                                                className="text-dark seccolor">the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</span>
                                                        </p>
                                                    </div>
                                                    <br>
                                                        <div className="blog-info">
                                                            <p className="seccolor">[1.1] From its medieval origins to
                                                                the digital era, learn everything there is to know about
                                                                the ubiquitous lorem ipsum passage.</p>
                                                        </div>
                                                        <br>
                                                            <div className="blog-info">
                                                                <p className="seccolor">[a] Lorem ipsum, or lipsum as it
                                                                    is sometimes known, is dummy text used in laying out
                                                                    print, graphic or web designs. The passage is.</p>
                                                            </div>
                                                            <br>
                                                                <a href="">[2] Support and Monitoring Servers</a>
                                                                <div className="blog-info">
                                                                    <p className="seccolor">Lorem ipsum, or lipsum as it
                                                                        is sometimes known, is dummy text used in laying
                                                                        out print, graphic or web designs. The passage
                                                                        is <i className="golink">attributed</i> to an
                                                                        unknown typesetter in the 15th century who is
                                                                        thought to have scrambled parts of Cicero's De
                                                                        Finibus Bonorum et Malorum for use in a type
                                                                        specimen book. It usually begins with</p>
                                                                </div>
                                                                <br>
                                                                    <div className="blog-info">
                                                                        <p className="seccolor">[2.1] From its medieval
                                                                            origins to the digital era, learn everything
                                                                            there is to know about the ubiquitous lorem
                                                                            ipsum passage.</p>
                                                                    </div>
                                            </div>
                                            <div id="div4" className="wrapper targetDiv mt-5 bg-seccolorstyle noshadow">
                                                <h5><a href="" className="category"><b>Legal</b></a> <span
                                                    className="float-end c-grey seccolor">[v3 01/2018]</span></h5>
                                                <hr>
                                                    <a href="">[1] Procedure for Changing Authorised Email</a>
                                                    <div className="blog-info">
                                                        <p className="seccolor">Lorem ipsum, or lipsum as it is
                                                            sometimes known, is dummy text used in laying out print,
                                                            graphic or web designs. The passage is <i
                                                                className="golink">attributed to an
                                                                unknown</i> typesetter in <span
                                                                className="text-dark seccolor">the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</span>
                                                        </p>
                                                    </div>
                                                    <br>
                                                        <div className="blog-info">
                                                            <p className="seccolor">[a] Lorem ipsum, or lipsum as it is
                                                                sometimes known, is dummy text used in laying out print,
                                                                graphic or web designs. The passage is.</p>
                                                        </div>
                                                        <br>
                                                            <div className="blog-info">
                                                                <p className="seccolor">[b] From its medieval origins to
                                                                    the digital era, learn everything there is to know
                                                                    about the ubiquitous lorem ipsum passage.</p>
                                                            </div>
                                            </div>
                                            <div id="div5" className="wrapper targetDiv mt-5 bg-seccolorstyle noshadow">
                                                <h5><a href="" className="category"><b>Affiliate Status</b></a> <span
                                                    className="float-end c-grey seccolor">[v2 04/2017]</span></h5>
                                                <hr>
                                                    <a href="">[1] Obligations while affiliate Antler</a>
                                                    <div className="blog-info">
                                                        <p className="seccolor">Lorem ipsum, or lipsum as it is
                                                            sometimes known, is dummy text used in laying out print,
                                                            graphic or web designs. The passage is <i
                                                                className="golink">attributed to an
                                                                unknown</i> typesetter in <span
                                                                className="text-dark seccolor">the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</span>
                                                        </p>
                                                    </div>
                                                    <br>
                                                        <div className="blog-info">
                                                            <p className="seccolor">[1.1] From its medieval origins to
                                                                the digital era, learn everything there is to know about
                                                                the ubiquitous lorem ipsum passage.</p>
                                                        </div>
                                                        <br>
                                                            <div className="blog-info">
                                                                <p className="seccolor">[a] Lorem ipsum, or lipsum as it
                                                                    is sometimes known, is dummy text used in laying out
                                                                    print, graphic or web designs. The passage is.</p>
                                                            </div>
                                                            <br>
                                                                <div className="blog-info">
                                                                    <p className="seccolor">[b] From its medieval
                                                                        origins to the digital era, learn everything
                                                                        there is to know about the ubiquitous lorem
                                                                        ipsum passage.</p>
                                                                </div>
                                                                <br>
                                                                    <a href="">[2] Advantages of affiliate Antler</a>
                                                                    <div className="blog-info">
                                                                        <p className="seccolor">Lorem ipsum, or lipsum
                                                                            as it is sometimes known, is dummy text used
                                                                            in laying out print, graphic or web designs.
                                                                            The passage is <i
                                                                                className="golink">attributed</i> to an
                                                                            unknown typesetter in the 15th century who
                                                                            is thought to have scrambled parts of
                                                                            Cicero's De Finibus Bonorum et Malorum for
                                                                            use in a type specimen book. It usually
                                                                            begins with</p>
                                                                    </div>
                                                                    <br>
                                                                        <div className="blog-info">
                                                                            <p className="seccolor">[2.1] From its
                                                                                medieval origins to the digital era,
                                                                                learn everything there is to know about
                                                                                the ubiquitous lorem ipsum passage.</p>
                                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services help pt-4 pb-80 bg-colorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="javascript:void(Tawk_API.toggle())" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/livechat.svg" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Live Chat</div>
                                                <div className="description seccolor">Lorem Ipsum is simply dummy text
                                                    printing.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="contact.html" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/emailopen.svg" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Send Ticket</div>
                                                <div className="description seccolor">Lorem Ipsum is simply dummy text
                                                    printing.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="knowledgebase.html" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/phone.svg" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Phone Now</div>
                                                <div className="description seccolor">Lorem Ipsum is simply dummy text
                                                    printing.
                                                </div>
                                            </div>
                                        </a>
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