    export default function Header() {
    return (
      <>
          <div className="sec-bg3 p-2 pe-3 infonews">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 news">
                          <div className="m-0 h6">
                              <div className="badge bg-purple me-2">news</div>
                              <small className="text-light">Gaming Servers Page Already Available. <a
                                  className="c-yellow" href="gaming">See Live Demo <i
                                  className="fas fa-arrow-circle-right"></i></a></small>
                          </div>
                      </div>
                      <div className="col-md-6 link">
                          <div className="infonews-nav float-end">
                              <a href="blog-grid">Blog</a>
                              <a href="contact">Support</a>
                              <a href="login">myAntler</a>
                              <a href="tel:1300-656-1046">+ (123) 1300-656-1046</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="menu-wrap">
              <div className="nav-menu">
                  <div className="container">
                      <div className="row">
                          <div className="col-2 col-md-2">
                              <a href="index">
                                  <img className="svg logo-menu d-block" src="img/logo.svg" alt="logo Antler" />
                                      <img className="svg logo-menu d-none" src="img/logo-light.svg" alt="logo Antler" />
                              </a>
                          </div>
                          <nav id="menu" className="col-10 col-md-10">
                              <div className="navigation float-end">
                                  <button className="menu-toggle">
                                      <span className="icon"></span>
                                      <span className="icon"></span>
                                      <span className="icon"></span>
                                  </button>
                                  <ul className="main-menu nav navbar-nav navbar-right">
                                      <li className="menu-item menu-item-has-children me-2">
                                          <a className="m-0 pe-1 v-stroke" href="#" data-i18n="[html]header.home"> </a>
                                          <div className="badge bg-pink me-4 wow animated shake delay-1s visible">NEW
                                          </div>
                                          <ul className="sub-menu dropdown bg-colorstyle">
                                              <li className="menu-item"><a className="mergecolor" href="index"
                                                                           data-i18n="[html]submenu.homedefault"> </a>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor" href="homevideo"
                                                                           data-i18n="[html]submenu.homevideo"> </a>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor" href="homeimage"
                                                                           data-i18n="[html]submenu.homeimage"> </a>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor" href="homegaming"
                                                                           data-i18n="[html]submenu.homegaming"> </a>
                                                  <div className="menu badge feat bg-purple">NEW</div>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor" href="home3d"
                                                                           data-i18n="[html]submenu.home3d"> </a>
                                                  <div className="menu badge feat bg-purple">NEW</div>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor"
                                                                           href="http://inebur.com/whmcs/?systpl=antler-rtl&language=arabic"
                                                                           target="_blank">WHMCS (RTL) </a>
                                                  <div className="menu badge feat bg-pink">HOT</div>
                                              </li>
                                          </ul>
                                      </li>
                                      <li className="menu-item menu-item-has-children me-2">
                                          <a className="m-0 pe-1 v-stroke" href="#"
                                             data-i18n="[html]header.services"> </a>
                                          <div className="badge bg-pink me-4">PRO</div>
                                          <div className="sub-menu menu-large bg-colorstyle">
                                              <div className="service-list">
                                                  <div className="service">
                                                      <img className="svg" src="fonts/svg/cloudfiber.svg"
                                                           alt="Shared Hosting" />
                                                          <div className="media-body">
                                                              <a className="menu-item mergecolor" href="hosting"
                                                                 data-i18n="[html]submenu.hosting"> </a>
                                                              <p className="seccolor">Sed ut perspiciatis unde omnis
                                                                  iste natus</p>
                                                          </div>
                                                  </div>
                                                  <div className="service">
                                                      <img className="svg" src="fonts/svg/reseller.svg"
                                                           alt="Cloud Reseller" />
                                                          <div className="media-body">
                                                              <a className="menu-item mergecolor" href="reseller"
                                                                 data-i18n="[html]submenu.reseller"> </a>
                                                              <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                  consectetur</p>
                                                          </div>
                                                  </div>
                                                  <div className="service">
                                                      <img className="svg" src="fonts/svg/dedicated.svg"
                                                           alt="Dedicated Server" />
                                                          <div className="media-body">
                                                              <a className="menu-item mergecolor" href="dedicated"
                                                                 data-i18n="[html]submenu.dedicated"> </a>
                                                              <div className="menu badge feat bg-pink">FILTER</div>
                                                              <p className="seccolor">But I must explain to you how all
                                                                  this</p>
                                                          </div>
                                                  </div>
                                                  <div className="service">
                                                      <img className="svg" src="fonts/svg/vps.svg" alt="Cloud VPS" />
                                                          <div className="media-body">
                                                              <a className="menu-item mergecolor" href="vps"
                                                                 data-i18n="[html]submenu.vps"> </a>
                                                              <div className="menu badge feat bg-grey">SSD</div>
                                                              <p className="seccolor">At vero eos et accusamus et iusto
                                                                  odio</p>
                                                          </div>
                                                  </div>
                                                  <div className="service">
                                                      <img className="svg" src="fonts/svg/wordpress.svg"
                                                           alt="WordPress Hosting" />
                                                          <div className="media-body">
                                                              <a className="menu-item mergecolor" href="wordpress"
                                                                 data-i18n="[html]submenu.wordpress"> </a>
                                                              <p className="seccolor">On the other hand, we denounce
                                                                  with</p>
                                                          </div>
                                                  </div>
                                                  <div className="service">
                                                      <img className="svg" src="fonts/svg/domains.svg" alt="Domains" />
                                                          <div className="media-body">
                                                              <a className="menu-item mergecolor" href="domains"
                                                                 data-i18n="[html]submenu.domains"> </a>
                                                              <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                  consectetur</p>
                                                          </div>
                                                  </div>
                                                  <div className="service">
                                                      <img className="svg" src="fonts/svg/code.svg"
                                                           alt="Developer Hosting" />
                                                          <div className="media-body">
                                                              <a className="menu-item mergecolor" href="developer"
                                                                 data-i18n="[html]submenu.developer"> </a>
                                                              <p className="seccolor">ed ut perspiciatis unde omnis iste
                                                                  natus</p>
                                                          </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                      <li className="menu-item menu-item-has-children">
                                          <a className="v-stroke" href="#" data-i18n="[html]header.pages"> </a>
                                          <div className="sub-menu megamenu-list">
                                              <div className="container">
                                                  <div className="row">
                                                      <div className="service-list col-md-9 bg-colorstyle">
                                                          <div className="row">
                                                              <div className="col-4 service">
                                                                  <div className="media-body">
                                                                      <div className="top-head">
                                                                          <img className="svg"
                                                                               src="fonts/svg/favorite.svg"
                                                                               alt="Services" />
                                                                              <div
                                                                                  className="menu-item c-grey mergecolor"
                                                                                  data-i18n="[html]submenu.services"></div>
                                                                      </div>
                                                                      <hr/>
                                                                          <ul>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor"
                                                                                  href="emailsecurity"
                                                                                  data-i18n="[html]submenu.emailsecurity"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="ssl"
                                                                                  data-i18n="[html]submenu.ssl"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="email"
                                                                                  data-i18n="[html]submenu.email"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="magento"
                                                                                  data-i18n="[html]submenu.magento"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="gsuite"
                                                                                  data-i18n="[html]submenu.gsuite"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="iptv"
                                                                                  data-i18n="[html]submenu.iptv"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="gaming"
                                                                                  data-i18n="[html]submenu.gaming"> </a>
                                                                                  <div
                                                                                      className="badge inside bg-pink">NEW
                                                                                  </div>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor"
                                                                                  href="radiostream"
                                                                                  data-i18n="[html]submenu.radiostream"> </a>
                                                                                  <div
                                                                                      className="badge inside bg-pink">NEW
                                                                                  </div>
                                                                              </li>
                                                                          </ul>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-body">
                                                                      <div className="top-head">
                                                                          <img className="svg"
                                                                               src="fonts/svg/infrastructure.svg"
                                                                               alt="Infrastructure" />
                                                                              <div
                                                                                  className="menu-item c-grey mergecolor"
                                                                                  data-i18n="[html]submenu.infrastructure"></div>
                                                                      </div>
                                                                      <hr/>
                                                                          <ul>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="ddos"
                                                                                  data-i18n="[html]submenu.ddos"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor"
                                                                                  href="datacenter"
                                                                                  data-i18n="[html]submenu.datacenter"> </a>
                                                                                  <div
                                                                                      className="badge inside bg-grey">TOP
                                                                                  </div>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="about"
                                                                                  data-i18n="[html]submenu.about"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="database"
                                                                                  data-i18n="[html]submenu.database"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="elements"
                                                                                  data-i18n="[html]submenu.elements"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="voip"
                                                                                  data-i18n="[html]submenu.voip"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="voice"
                                                                                  data-i18n="[html]submenu.voice"> </a>
                                                                                  <div
                                                                                      className="badge inside bg-pink">NEW
                                                                                  </div>
                                                                              </li>
                                                                          </ul>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-body">
                                                                      <div className="top-head">
                                                                          <img className="svg"
                                                                               src="fonts/svg/global.svg" alt="Global"/>
                                                                              <div
                                                                                  className="menu-item c-grey mergecolor"
                                                                                  data-i18n="[html]submenu.others"></div>
                                                                      </div>
                                                                      <hr/>
                                                                          <ul>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="payments"
                                                                                  data-i18n="[html]submenu.payments"> </a>
                                                                                  <div
                                                                                      className="badge inside bg-pink">NEW
                                                                                  </div>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor"
                                                                                  href="configurator"
                                                                                  data-i18n="[html]submenu.config"> </a>
                                                                                  <div
                                                                                      className="badge inside bg-grey">HOT
                                                                                  </div>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="cart"
                                                                                  data-i18n="[html]submenu.cart"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor"
                                                                                  href="blog-grid"
                                                                                  data-i18n="[html]submenu.bloggrid"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="checkout"
                                                                                  data-i18n="[html]submenu.checkout"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="soon"
                                                                                  data-i18n="[html]submenu.soon"> </a>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor" href="promos"
                                                                                  data-i18n="[html]submenu.promos"> </a>
                                                                                  <i className="fas fa-tags c-pink ms-2"></i>
                                                                              </li>
                                                                              <li className="menu-item"><a
                                                                                  className="mergecolor"
                                                                                  href="blackfriday"
                                                                                  data-i18n="[html]submenu.blackfriday"> </a>
                                                                                  <div
                                                                                      className="badge inside bg-pink">HOT
                                                                                  </div>
                                                                              </li>
                                                                          </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="start-offer col-md-3">
                                                          <div className="inner">
                                                              <h4 className="title my-3">Cloud VPS SSD <br/>Get 50%
                                                                  Discount</h4>
                                                              <div className="inner-content mb-4">Enjoy increased
                                                                  flexibility and get the performance you need with SSD
                                                                  Storage.
                                                              </div>
                                                              <span className="m-0">Before <del className="c-pink">$20.00 /mo</del></span><br/>
                                                              <h4 className="m-0"><b>Now</b> <b className="c-pink">$9.99
                                                                  /mo</b></h4>
                                                              <a href="vps" className="btn btn-default-pink-fill mt-4">See
                                                                  Plans</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                      <li className="menu-item menu-item-has-children">
                                          <a className="v-stroke" href="#" data-i18n="[html]header.features"></a>
                                          <ul className="sub-menu bg-colorstyle">
                                              <li className="menu-item"><a className="mergecolor"
                                                                           href="http://inebur.com/whmcs/?systpl=antler"
                                                                           target="_blank"
                                                                           data-i18n="[html]submenu.whmcs"> </a>
                                                  <div className="menu badge feat bg-pink">HOT</div>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor"
                                                                           href="http://inebur.com/whmcs/cart.php?carttpl=antler&systpl=antler"
                                                                           target="_blank"
                                                                           data-i18n="[html]submenu.orderform"> </a>
                                                  <div className="menu badge feat bg-grey">TOP</div>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor"
                                                                           href="http://inebur.com/antler/email/"
                                                                           target="_blank"
                                                                           data-i18n="[html]submenu.whmcsemail"> </a>
                                                  <div className="menu badge feat bg-grey">TOP</div>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor"
                                                                           href="http://inebur.com/antler/newsletter/"
                                                                           target="_blank"
                                                                           data-i18n="[html]submenu.whmcsnewsletter"> </a>
                                                  <div className="menu badge feat bg-grey">TOP</div>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor" href="pricing"
                                                                           data-i18n="[html]submenu.pricing"> </a></li>
                                              <li className="menu-item"><a className="mergecolor" href="sliders"
                                                                           data-i18n="[html]submenu.sliders"> </a></li>
                                              <li className="menu-item"><a className="mergecolor" href="configurator"
                                                                           data-i18n="[html]submenu.config"> </a>
                                                  <div className="menu badge feat bg-pink">NEW</div>
                                              </li>
                                              <li className="menu-item"><a className="mergecolor" href="404"
                                                                           data-i18n="[html]submenu.error"> </a></li>
                                              <li className="menu-item"><a className="mergecolor" href="login"
                                                                           data-i18n="[html]submenu.register"> </a></li>
                                              <li className="menu-item"><a className="mergecolor" href="login"
                                                                           data-i18n="[html]header.login"> </a></li>
                                              <li className="menu-item"><a className="mergecolor" href="elements"
                                                                           data-i18n="[html]submenu.elements"> </a></li>
                                              <li className="menu-item"><a className="mergecolor" href="sections"
                                                                           data-i18n="[html]submenu.sections"> </a></li>
                                          </ul>
                                      </li>
                                      <li className="menu-item menu-item-has-children menu-last">
                                          <a className="v-stroke" href="#" data-i18n="[html]header.support"></a>
                                          <div className="sub-menu megamenu">
                                              <div className="container">
                                                  <div className="row">
                                                      <div className="service-list col-md-9 bg-colorstyle">
                                                          <div className="row">
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="fonts/svg/bookmark.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor"
                                                                         href="knowledgebase-list"
                                                                         data-i18n="[html]submenu.knowlist"> </a>
                                                                      <p className="seccolor">Lorem ipsum dolor sit
                                                                          amet, consectetur adipiscing</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="fonts/svg/book.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor"
                                                                         href="knowledgebase-article"
                                                                         data-i18n="[html]submenu.knowarticle"> </a>
                                                                      <p className="seccolor">Eaque ipsa quae ab illo
                                                                          inventore veritatis et quasi</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="fonts/svg/emailopen.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor" href="contact"
                                                                         data-i18n="[html]submenu.contact"> </a>
                                                                      <p className="seccolor">Lorem ipsum dolor sit
                                                                          amet, consectetur adipiscing</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="fonts/svg/compare.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor" href="legal"
                                                                         data-i18n="[html]submenu.legal"> </a>
                                                                      <div className="badge inside bg-grey ms-1">NEW
                                                                      </div>
                                                                      <p className="seccolor">Eaque ipsa quae ab illo
                                                                          inventore veritatis et quasi</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="fonts/svg/blog.svg"
                                                                           alt="Knowledgebase"/>
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <div>
                                                                          <a className="menu-item mergecolor"
                                                                             href="blog-details"
                                                                             data-i18n="[html]submenu.blogdetails"> </a>
                                                                          <div
                                                                              className="badge inside bg-pink ms-1">HOT
                                                                          </div>
                                                                      </div>
                                                                      <p className="seccolor">Lorem ipsum dolor sit
                                                                          amet, consectetur adipiscing</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="fonts/svg/question.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor" href="faq"
                                                                         data-i18n="[html]submenu.faq"> </a>
                                                                      <p className="seccolor">Eaque ipsa quae ab illo
                                                                          inventore veritatis et quasi</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="start-offer col-md-3">
                                                          <div className="inner">
                                                              <h4 className="title my-3">Support Premium</h4>
                                                              <div className="inner-content"><span>Call us:</span> <b>+
                                                                  (123) 1300-656-1046</b> HeadQuarters - No.01 - 399-0
                                                                  Lorem Street City Melbourne
                                                              </div>
                                                              <a href="contact"
                                                                 className="btn btn-default-yellow-fill mt-4">Contact
                                                                  Us</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                      <div className="tech-box">
                                          <img className="svg" src="img/menu.svg" alt="" data-bs-toggle="offcanvas"
                                               data-bs-target="#offcanvasWithBackdrop"
                                               aria-controls="offcanvasWithBackdrop" />
                                      </div>
                                      <li className="menu-item">
                                          <a className="pe-0 me-0" href="login">
                                              <div className="btn btn-default-yellow-fill question"><span
                                                  data-i18n="[html]header.login"></span> <i
                                                  className="fas fa-lock ps-1"></i></div>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
          <div className="menu-wrap mobile">
              <div className="container">
                  <div className="row">
                      <div className="col-6">
                          <a href="index"><img className="svg logo-menu d-block" src="img/logo.svg"
                                               alt="logo Antler"/></a>
                          <a href="index"><img className="svg logo-menu d-none" src="img/logo-light.svg"
                                               alt="logo Antler"/></a>
                      </div>
                      <div className="col-6">
                          <nav className="nav-menu float-end d-flex">
                              <div className="tech-box">
                                  <img className="svg" src="img/menu.svg" alt="" data-bs-toggle="offcanvas"
                                       data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"/>
                              </div>
                              <button id="nav-toggle" className="menu-toggle">
                                  <span className="icon"></span>
                                  <span className="icon"></span>
                                  <span className="icon"></span>
                              </button>
                              <div className="main-menu bg-seccolorstyle">
                                  <div className="menu-item">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Home <div
                                          className="badge bg-purple">NEW</div></a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="index">Home Default</a>
                                          <a className="dropdown-item menu-item" href="homevideo">Home Video</a>
                                          <a className="dropdown-item menu-item" href="homeimage">Home Image</a>
                                          <a className="dropdown-item menu-item" href="homegaming">Home Gaming <div
                                              className="badge inside bg-purple ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="home3d">Home 3D <div
                                              className="badge inside bg-purple ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item"
                                             href="http://inebur.com/whmcs/?systpl=antler-rtl&language=arabic"
                                             target="_blank">WHMCS (RTL)
                                              <div className="badge inside bg-pink ms-2">HOT</div></a>
                                      </div>
                                  </div>
                                  <div className="menu-item">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Hosting <div
                                          className="badge bg-purple">PRO</div></a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="hosting">Shared Hosting</a>
                                          <a className="dropdown-item menu-item" href="reseller">Cloud Reseller</a>
                                          <a className="dropdown-item menu-item" href="dedicated">Dedicated Server</a>
                                          <a className="dropdown-item menu-item" href="vps">Cloud VPS</a>
                                          <a className="dropdown-item menu-item" href="wordpress">WordPress Hosting</a>
                                          <a className="dropdown-item menu-item" href="domains">Domain Names</a>
                                          <a className="dropdown-item menu-item" href="developer">Developer Hosting</a>
                                      </div>
                                  </div>
                                  <div className="menu-item">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Pages</a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="emailsecurity">Email Security</a>
                                          <a className="dropdown-item menu-item" href="ssl">SSL Certificates</a>
                                          <a className="dropdown-item menu-item" href="email">Enterprise Email</a>
                                          <a className="dropdown-item menu-item" href="magento">Magento Pro</a>
                                          <a className="dropdown-item menu-item" href="gsuite"> Suite - Google</a>
                                          <a className="dropdown-item menu-item" href="iptv">IPTV System</a>
                                          <a className="dropdown-item menu-item" href="gaming">Gaming Server</a>
                                          <a className="dropdown-item menu-item" href="radiostream">Radio Stream <div
                                              className="badge inside bg-pink ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="ddos">DDoS Protection</a>
                                          <a className="dropdown-item menu-item" href="datacenter">Datacenter <div
                                              className="badge inside bg-grey ms-2">TOP</div></a>
                                          <a className="dropdown-item menu-item" href="about">About Us</a>
                                          <a className="dropdown-item menu-item"
                                             href="database">Database-as-a-Service</a>
                                          <a className="dropdown-item menu-item" href="elements">Elements</a>
                                          <a className="dropdown-item menu-item" href="voip">Virtual Numbers</a>
                                          <a className="dropdown-item menu-item" href="voice">Voice Server <div
                                              className="badge inside bg-pink ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="payments">Payment Methods <div
                                              className="badge inside bg-pink ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="configurator">Configurator <div
                                              className="badge inside bg-grey ms-2">HOT</div></a>
                                          <a className="dropdown-item menu-item" href="cart">Cart</a>
                                          <a className="dropdown-item menu-item" href="checkout">Checkout</a>
                                          <a className="dropdown-item menu-item" href="soon">Coming Soon</a>
                                          <a className="dropdown-item menu-item" href="promos">Promotions</a>
                                          <a className="dropdown-item menu-item" href="blackfriday">Blackfriday <div
                                              className="badge inside bg-pink ms-2">HOT</div></a>
                                      </div>
                                  </div>
                                  <div className="menu-item">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Features</a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item"
                                             href="http://inebur.com/whmcs/?systpl=antler" target="_blank">WHMCS
                                              Template <div className="badge inside bg-pink">HOT</div></a>
                                          <a className="dropdown-item menu-item"
                                             href="http://inebur.com/whmcs/cart.php?carttpl=antler&systpl=antler"
                                             target="_blank">Order Form Template <div
                                              className="badge inside bg-grey">TOP</div></a>
                                          <a className="dropdown-item menu-item" href="http://inebur.com/antler/email/"
                                             target="_blank">HMCS Email Template <div
                                              className="badge inside bg-grey">TOP</div></a>
                                          <a className="dropdown-item menu-item"
                                             href="http://inebur.com/antler/newsletter/" target="_blank">WHMCS
                                              Newsletter Template <div className="badge inside bg-grey">TOP</div></a>
                                          <a className="dropdown-item menu-item" href="pricing">Pricing Options</a>
                                          <a className="dropdown-item menu-item" href="sliders">Content Sliders</a>
                                          <a className="dropdown-item menu-item" href="configurator">Configurator</a>
                                          <a className="dropdown-item menu-item" href="404">404 Error</a>
                                          <a className="dropdown-item menu-item" href="login">Register</a>
                                          <a className="dropdown-item menu-item" href="login">Client Area</a>
                                          <a className="dropdown-item menu-item" href="elements">Elements</a>
                                          <a className="dropdown-item menu-item" href="sections">Sections</a>
                                      </div>
                                  </div>
                                  <div className="menu-item menu-last">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Support</a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="knowledgebase-list">Knowlege
                                              List</a>
                                          <a className="dropdown-item menu-item" href="knowledgebase-article">Knowlege
                                              Article</a>
                                          <a className="dropdown-item menu-item" href="contact">Contact Us</a>
                                          <a className="dropdown-item menu-item" href="legal">Legal</a>
                                          <a className="dropdown-item menu-item" href="blog-details">Blog</a>
                                          <a className="dropdown-item menu-item" href="faq">Faq</a>
                                      </div>
                                  </div>
                                  <div className="float-start w-100 mt-3">
                                      <p className="c-grey-light seccolor"><small> Phone: + (123) 1300-656-1046</small>
                                      </p>
                                      <p className="c-grey-light seccolor"><small>Email: antler@mail.com</small></p>
                                  </div>
                                  <div>
                                      <a href="login">
                                          <div className="btn btn-default-yellow-fill mt-3">CLIENT AREA</div>
                                      </a>
                                  </div>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
          <section id="drop-lng" className="btn-group btn-group-toggle toplang">
              <label data-lng="en-US" htmlFor="option1" className="btn btn-secondary me-2">
                  <input type="radio" name="options" id="option1" checked /> EN
              </label>
              <label data-lng="pt-PT" htmlFor="option2" className="btn btn-secondary">
                  <input type="radio" name="options" id="option2" /> PT
              </label>
          </section>

      </>
  )
}
