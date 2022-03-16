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
<div class="box-container limit-width">
<section id="settings"> </section>
<div id="spinner-area">
<div class="spinner">
<div class="double-bounce1"></div>
<div class="double-bounce2"></div>
<div class="spinner-txt">Antler...</div>
</div>
</div>

<div class="body-borders" data-border="20">
<div class="top-border bg-white"></div>
<div class="right-border bg-white"></div>
<div class="bottom-border bg-white"></div>
<div class="left-border bg-white"></div>
</div>

    <Header/>

<section id="owl-demo" class="owl-carousel owl-theme owl-loaded owl-drag slider-02 scrollme">
<div class="full h-100 sec-bg6 bg-colorstyle">
<div class="vc-parent">
<div class="vc-child">
<div class="top-banner">
<div class="container pe-5">
<img class="svg custom-element-right" src="patterns/ddoslayers.svg" alt="DDos Monitoring" />
<div class="wow animated fadeInUp fast col-sm-12 col-md-5">
    <div class="heading mergecolor">DDoS <br/><span id="typed2"></span> <br/>Websites</div>
    <h3 class="subheading text-break seccolor">Automatic Mitigation for Sophisticated DDoS that quickly defeats attacks without impacting site performance. Starting for only <strong class="c-pink">$19.99/year</strong><br/>
    </h3>
    <a href="ddos" class="btn btn-default-yellow-fill me-2 mb-2">Get Prices</a>
    <a href="ddos" class="btn btn-default-pink-fill mb-2">Learn more</a>
</div>
</div>
<div class="owl-dots"></div>
</div>
</div>
</div>
</div>
<div class="full h-100 sec-bg6 bg-colorstyle">
<div class="vc-parent">
<div class="vc-child">
<div class="top-banner">
<div class="container pe-5">
<img class="svg custom-element-right" src="patterns/api.svg" alt="Dedicated Server" />
<div class="col-sm-12 col-md-6">
    <div class="heading mergecolor">Dedicated <br/>Server with <br/> <span id="typed1"></span></div>
    <h3 class="subheading text-break seccolor">Powerful servers with high-end resources that will guarantee resource exclusivity, starting at just <strong class="c-pink">$90.22/mo</strong><br/>
    </h3>
</div>
<a href="dedicated" class="btn btn-default-yellow-fill me-2 mb-2">Get Prices</a>
<a href="dedicated" class="btn btn-default-pink-fill mb-2">Learn more</a>
</div>
<div class="owl-dots"></div>
</div>
</div>
</div>
</div>
<div class="full h-100 sec-bg6 bg-colorstyle">
<div class="vc-parent">
<div class="vc-child">
<div class="top-banner">
<div class="container pe-5">
<img class="svg custom-element-right" src="patterns/cloudvps.svg" alt="Cloud VPS Server" />
<div class="col-sm-12 col-md-6">
    <h1 class="heading mergecolor">Virtual <br/>Cloud <br/>Servers</h1>
    <h3 class="subheading seccolor">
        <i class="c-pink feat fas fa-check-circle me-2"></i> Immediate scalability<br/>
        <i class="c-pink feat fas fa-check-circle me-2"></i> High performance<br/>
        <i class="c-pink feat fas fa-check-circle me-2"></i> Fast deployment
    </h3>
</div>
<a href="vps" class="btn btn-default-yellow-fill me-2 mb-2">Get Prices</a>
<a href="vps" class="btn btn-default-pink-fill mb-2">Learn more</a>
</div>
</div>
</div>
</div>
</div>
</section>
<img class="blobleft svg d-none" src="img/background/blob.svg" alt="Blob Background" />

<section class="pricing special sec-bg2 bg-colorstyle specialposition">
<div class="container">
<div class="sec-up-slider nopadding">
<div class="row">
<div class="col-md-12 col-lg-4">
<div class="wrapper first noshadow">
<div class="top-content bg-seccolorstyle topradius">
    <img class="svg mb-3" src="fonts/svg/cloudfiber.svg" alt="" />
        <div class="title">Shared Hosting</div>
        <div class="fromer seccolor">Starting at:</div>
        <div class="price seccolor"><sup>$</sup>8.19 <span class="period">/month</span></div>
        <a href="hosting" class="btn btn-default-yellow-fill">All plans</a>
</div>
<ul class="list-info">
    <li><i class="icon-drives"></i> <span class="c-purple">DISK</span><br/> <span>250GB SSD</span></li>
    <li><i class="icon-speed"></i> <span class="c-purple">DATA</span><br/> <span>1TB Bandwidth</span></li>
    <li><i class="icon-emailopen"></i> <span class="c-purple">EMAIL</span><br/> <span>120 Emails</span></li>
    <li><i class="icon-domains"></i> <span class="c-purple">TLD</span><br/> <span>30 Domains</span></li>
</ul>
</div>
</div>
<div class="col-md-12 col-lg-4">
<div class="wrapper noshadow">
<div class="plans badge feat bg-pink">recommended</div>
<div class="top-content bg-seccolorstyle topradius">
    <img class="svg mb-3" src="fonts/svg/dedicated.svg" alt="" />
        <div class="title">Dedicated Server</div>
        <div class="fromer seccolor">annually get (20% discount)</div>
        <div class="price seccolor"><sup>$</sup>82.00 <span class="period">/month</span></div>
        <a href="configurator" class="btn btn-default-yellow-fill">Configure</a>
</div>
<ul class="list-info bg-purple">
    <li><i class="icon-cpu"></i> <span class="c-pink">CPU</span><br/> <span>4x 3.20Ghz 2 Cores</span></li>
    <li><i class="icon-ram"></i> <span class="c-pink">RAM</span><br/> <span>16GB (up to 32GB)</span></li>
    <li><i class="icon-drivessd"></i> <span class="c-pink">DRIVES</span><br/> <span>2 x 1TB SATA 3.5</span></li>
    <li><i class="icon-git"></i> <span class="c-pink">UPLINK</span><br/> <span>1Gbps - 20TB</span></li>
</ul>
</div>
</div>
<div class="col-md-12 col-lg-4">
<div class="wrapper third noshadow">
<div class="top-content bg-seccolorstyle topradius">
    <img class="svg mb-3" src="fonts/svg/vps.svg" alt="" />
        <div class="title">Cloud VPS</div>
        <div class="fromer seccolor">Starting at:</div>
        <div class="price seccolor"><sup>$</sup>9.99 <span class="period">/month</span></div>
        <a href="vps" class="btn btn-default-yellow-fill">All plans</a>
</div>
<ul class="list-info">
    <li><i class="icon-cpu"></i> <span class="c-purple">CPU</span><br/> <span>2 Cores</span></li>
    <li><i class="icon-ram"></i> <span class="c-purple">RAM</span><br/> <span>2GB Memory</span></li>
    <li><i class="icon-drives"></i> <span class="c-purple">DISK</span><br/> <span>20GB SSD Space</span></li>
    <li><i class="icon-speed"></i> <span class="c-purple">DATA</span><br/> <span>1TB Bandwidth</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="balancing sec-normal bg-colorstyle">
<div class="h-services">
<div class="container">
<div class="randomline">
<div class="bigline"></div>
<div class="smallline"></div>
</div>
<div class="row">
<div class="col-md-12 text-center">
<h2 class="section-heading whitecolor mergecolor">Cloud Load Balancing</h2>
<p class="section-subheading whitecolor mergecolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
<div class="col-md-12">
<div class="wrap-service load">
<div class="wow animated fadeInUp fast">
    <img class="svg mt-50 w-100 ltr-img d-block" src="patterns/balancing.svg" alt="Load Balancing" />
        <img class="svg mt-50 w-100 rtl-img d-none" src="patterns/balancing-rtl.svg" alt="Load Balancing" />
</div>
<div class="row text-info text-center">
    <div class="col-md-4 pb-2 pt-5"><b class="c-purple">[1] Users</b> <br/>
        <span class="info seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
    </div>
    <div class="col-md-4 pb-2 pt-5"><b class="c-purple">[2] Load Balancing</b> <br/>
        <span class="info seccolor">Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae omnis iste</span>
    </div>
    <div class="col-md-4 pb-2 pt-5"><b class="c-purple">[3] Cloud Servers</b> <br/>
        <span class="info seccolor">Omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<svg class="division-ontop bg-white d-none" viewBox="0 0 1440 150">
<path fill="#fdd700" fill-opacity="1" d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
</path>
</svg>


    <Footer />
</div>

<a href="#" class="cd-top"> <i class="fas fa-angle-up"></i> </a>

</body>

)
}
