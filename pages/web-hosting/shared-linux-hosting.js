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



                <Footer />
            </div>
            <a href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </a>
            <Js />
        </>
    )
}