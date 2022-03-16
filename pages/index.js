import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
return (
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Antler - Hosting Provider & WHMCS Template</title>
<meta name="description" content="" />
<link href="img/favicon.ico" rel="shortcut icon" />
</head>
<body >
<div className="box-container limit-width">
<section id="settings"> </section>
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

<section id="owl-demo" className="owl-carousel owl-theme owl-loaded owl-drag slider-02 scrollme">
<div className="full h-100 sec-bg6 bg-colorstyle">
<div className="vc-parent">
<div className="vc-child">
<div className="top-banner">
<div className="container pe-5">
<img className="svg custom-element-right" src="patterns/ddoslayers.svg" alt="DDos Monitoring" />
<div className="wow animated fadeInUp fast col-sm-12 col-md-5">
    <div className="heading mergecolor">DDoS <br/><span id="typed2"></span> <br/>Websites</div>
    <h3 className="subheading text-break seccolor">Automatic Mitigation for Sophisticated DDoS that quickly defeats attacks without impacting site performance. Starting for only <strong className="c-pink">$19.99/year</strong><br/>
    </h3>
    <a href="ddos" className="btn btn-default-yellow-fill me-2 mb-2">Get Prices</a>
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
<img className="svg custom-element-right" src="patterns/api.svg" alt="Dedicated Server" />
<div className="col-sm-12 col-md-6">
    <div className="heading mergecolor">Dedicated <br/>Server with <br/> <span id="typed1"></span></div>
    <h3 className="subheading text-break seccolor">Powerful servers with high-end resources that will guarantee resource exclusivity, starting at just <strong className="c-pink">$90.22/mo</strong><br/>
    </h3>
</div>
<a href="dedicated" className="btn btn-default-yellow-fill me-2 mb-2">Get Prices</a>
<a href="dedicated" className="btn btn-default-pink-fill mb-2">Learn more</a>
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
<img className="svg custom-element-right" src="patterns/cloudvps.svg" alt="Cloud VPS Server" />
<div className="col-sm-12 col-md-6">
    <h1 className="heading mergecolor">Virtual <br/>Cloud <br/>Servers</h1>
    <h3 className="subheading seccolor">
        <i className="c-pink feat fas fa-check-circle me-2"></i> Immediate scalability<br/>
        <i className="c-pink feat fas fa-check-circle me-2"></i> High performance<br/>
        <i className="c-pink feat fas fa-check-circle me-2"></i> Fast deployment
    </h3>
</div>
<a href="vps" className="btn btn-default-yellow-fill me-2 mb-2">Get Prices</a>
<a href="vps" className="btn btn-default-pink-fill mb-2">Learn more</a>
</div>
</div>
</div>
</div>
</div>
</section>
<img className="blobleft svg d-none" src="img/background/blob.svg" alt="Blob Background" />

<section className="pricing special sec-bg2 bg-colorstyle specialposition">
<div className="container">
<div className="sec-up-slider nopadding">
<div className="row">
<div className="col-md-12 col-lg-4">
<div className="wrapper first noshadow">
<div className="top-content bg-seccolorstyle topradius">
    <img className="svg mb-3" src="fonts/svg/cloudfiber.svg" alt="" />
        <div className="title">Shared Hosting</div>
        <div className="fromer seccolor">Starting at:</div>
        <div className="price seccolor"><sup>$</sup>8.19 <span className="period">/month</span></div>
        <a href="hosting" className="btn btn-default-yellow-fill">All plans</a>
</div>
<ul className="list-info">
    <li><i className="icon-drives"></i> <span className="c-purple">DISK</span><br/> <span>250GB SSD</span></li>
    <li><i className="icon-speed"></i> <span className="c-purple">DATA</span><br/> <span>1TB Bandwidth</span></li>
    <li><i className="icon-emailopen"></i> <span className="c-purple">EMAIL</span><br/> <span>120 Emails</span></li>
    <li><i className="icon-domains"></i> <span className="c-purple">TLD</span><br/> <span>30 Domains</span></li>
</ul>
</div>
</div>
<div className="col-md-12 col-lg-4">
<div className="wrapper noshadow">
<div className="plans badge feat bg-pink">recommended</div>
<div className="top-content bg-seccolorstyle topradius">
    <img className="svg mb-3" src="fonts/svg/dedicated.svg" alt="" />
        <div className="title">Dedicated Server</div>
        <div className="fromer seccolor">annually get (20% discount)</div>
        <div className="price seccolor"><sup>$</sup>82.00 <span className="period">/month</span></div>
        <a href="configurator" className="btn btn-default-yellow-fill">Configure</a>
</div>
<ul className="list-info bg-purple">
    <li><i className="icon-cpu"></i> <span className="c-pink">CPU</span><br/> <span>4x 3.20Ghz 2 Cores</span></li>
    <li><i className="icon-ram"></i> <span className="c-pink">RAM</span><br/> <span>16GB (up to 32GB)</span></li>
    <li><i className="icon-drivessd"></i> <span className="c-pink">DRIVES</span><br/> <span>2 x 1TB SATA 3.5</span></li>
    <li><i className="icon-git"></i> <span className="c-pink">UPLINK</span><br/> <span>1Gbps - 20TB</span></li>
</ul>
</div>
</div>
<div className="col-md-12 col-lg-4">
<div className="wrapper third noshadow">
<div className="top-content bg-seccolorstyle topradius">
    <img className="svg mb-3" src="fonts/svg/vps.svg" alt="" />
        <div className="title">Cloud VPS</div>
        <div className="fromer seccolor">Starting at:</div>
        <div className="price seccolor"><sup>$</sup>9.99 <span className="period">/month</span></div>
        <a href="vps" className="btn btn-default-yellow-fill">All plans</a>
</div>
<ul className="list-info">
    <li><i className="icon-cpu"></i> <span className="c-purple">CPU</span><br/> <span>2 Cores</span></li>
    <li><i className="icon-ram"></i> <span className="c-purple">RAM</span><br/> <span>2GB Memory</span></li>
    <li><i className="icon-drives"></i> <span className="c-purple">DISK</span><br/> <span>20GB SSD Space</span></li>
    <li><i className="icon-speed"></i> <span className="c-purple">DATA</span><br/> <span>1TB Bandwidth</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="balancing sec-normal bg-colorstyle">
<div className="h-services">
<div className="container">
<div className="randomline">
<div className="bigline"></div>
<div className="smallline"></div>
</div>
<div className="row">
<div className="col-md-12 text-center">
<h2 className="section-heading whitecolor mergecolor">Cloud Load Balancing</h2>
<p className="section-subheading whitecolor mergecolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
<div className="col-md-12">
<div className="wrap-service load">
<div className="wow animated fadeInUp fast">
    <img className="svg mt-50 w-100 ltr-img d-block" src="patterns/balancing.svg" alt="Load Balancing" />
        <img className="svg mt-50 w-100 rtl-img d-none" src="patterns/balancing-rtl.svg" alt="Load Balancing" />
</div>
<div className="row text-info text-center">
    <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[1] Users</b> <br/>
        <span className="info seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
    </div>
    <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[2] Load Balancing</b> <br/>
        <span className="info seccolor">Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae omnis iste</span>
    </div>
    <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[3] Cloud Servers</b> <br/>
        <span className="info seccolor">Omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<svg className="division-ontop bg-white d-none" viewBox="0 0 1440 150">
<path fill="#fdd700" fill-opacity="1" d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
</path>
</svg>


    <Footer />
</div>

<a href="#" className="cd-top"> <i className="fas fa-angle-up"></i> </a>

</body>

)
}
