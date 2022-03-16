import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="box-container limit-width">
            <Head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Antler - Hosting Provider & WHMCS Template</title>
                <meta name="description" content="" />
                <link href="img/favicon.ico" rel="shortcut icon"/>
            </Head>
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

            <Header/>

            <a href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </a>

            <Footer />
        </div>
    )
}
