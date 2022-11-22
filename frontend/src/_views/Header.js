import React from 'react'

const Header = () => {
  return (
       <>
            <div className="main-header sticky nav nav-item hor-header" >
                <div className="main-container container">
                    <div className="main-header-left ">
                        <div className="responsive-logo">
                            <a href="index.php" className="header-logo">
                                <img src="../assets/img/brand/logo.png" className="mobile-logo logo-1" alt="logo" />
                                <img src="../assets/img/brand/logo-white.png" className="mobile-logo dark-logo-1" alt="logo" />
                            </a>
                        </div>
                        <div className="app-sidebar__toggle" data-bs-toggle="sidebar">
                            <a className="open-toggle" href="javascript:void(0);"><i className="header-icon fe fe-align-left" /></a>
                            <a className="close-toggle" href="javascript:void(0);"><i className="header-icon fe fe-x" /></a>
                        </div>
                        <div className="logo-horizontal">
                            <a href="index.php" className="header-logo">
                                <img src="../assets/img/brand/logo.png" className="mobile-logo logo-1" alt="logo" />
                                <img src="../assets/img/brand/logo-white.png" className="mobile-logo dark-logo-1" alt="logo" />
                            </a>
                        </div>
                        <div className="main-header-center ms-4 d-sm-none d-md-none d-lg-block form-group">
                            <input className="form-control" placeholder="Search..." type="search" />
                            <button className="btn"><i className="fas fa-search" /></button>
                        </div>
                    </div>
                    <div className="main-header-right">
                        <button className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fe fe-more-vertical " />
                        </button>
                        <div className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                <ul className="nav nav-item header-icons navbar-nav-right ms-auto">
                                    <li className="dropdown nav-item">
                                        <a className="new nav-link" data-bs-target="#country-selector" data-bs-toggle="modal" href=""><svg className="header-icon-svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z" /></svg></a>
                                    </li>
                                    <li className="dropdown nav-item">
                                        <a className="new nav-link theme-layout nav-link-bg layout-setting">
                                            <span className="dark-layout"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" /></svg></span>
                                            <span className="light-layout"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" /></svg></span>
                                        </a>
                                    </li>
                                    <li className="dropdown nav-item main-header-notification d-flex">
                                        <a className="new nav-link" data-bs-toggle="dropdown" href="javascript:void(0);">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" /><circle cx="10.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></svg>
                                            <span className="badge bg-warning header-badge">7</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="menu-header-content text-start border-bottom">
                                                <div className="d-flex">
                                                    <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">Shopping Cart</h6>
                                                    <span className="badge badge-pill bg-indigo ms-auto my-auto float-end">Items (05)</span>
                                                </div>
                                            </div>
                                            <div className="main-cart-list cart-scroll ps">
                                                <div className="d-flex border-bottom main-cart-item">
                                                    <div>
                                                        <a className="d-flex p-3" href="product-details.php">
                                                            <div className="drop-img cover-image" data-image-src="../assets/img/ecommerce/05.jpg" style={{ background: "url(\"../assets/img/ecommerce/05.jpg\") center center" }}>
                                                            </div>
                                                            <div className="ms-3 text-start">
                                                                <h5 className="mb-1 text-muted tx-13">Lence Camera</h5>
                                                                <div className="text-dark tx-semibold tx-12">1 * $ 189.00</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="ms-auto my-auto">
                                                        <a href="javascript:void(0);" className="p-3">
                                                            <i className="fe fe-trash-2 text-end text-danger" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="d-flex border-bottom main-cart-item">
                                                    <div>
                                                        <a className="d-flex p-3" href="product-details.php">
                                                            <div className="drop-img cover-image" data-image-src="../assets/img/ecommerce/02.jpg" style={{ background: "url(\"../assets/img/ecommerce/02.jpg\") center center" }}>
                                                            </div>
                                                            <div className="ms-3 text-start">
                                                                <h5 className="mb-1 text-muted tx-13">White Ear Buds</h5>
                                                                <div className="text-dark tx-semibold tx-12">3 * $ 59.00</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="ms-auto my-auto">
                                                        <a href="javascript:void(0);" className="p-3">
                                                            <i className="fe fe-trash-2 text-end text-danger" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="d-flex border-bottom main-cart-item">
                                                    <div>
                                                        <a className="d-flex p-3" href="product-details.php">
                                                            <div className="drop-img cover-image" data-image-src="../assets/img/ecommerce/12.jpg" style={{ background: "url(\"../assets/img/ecommerce/12.jpg\") center center" }}>
                                                            </div>
                                                            <div className="ms-3 text-start">
                                                                <h5 className="mb-1 text-muted tx-13">Branded Black Headset</h5>
                                                                <div className="text-dark tx-semibold tx-12">2 * $ 39.99</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="ms-auto my-auto">
                                                        <a href="javascript:void(0);" className="p-3">
                                                            <i className="fe fe-trash-2 text-end text-danger" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="d-flex border-bottom main-cart-item">
                                                    <div>
                                                        <a className="d-flex p-3" href="product-details.php">
                                                            <div className="drop-img cover-image" data-image-src="../assets/img/ecommerce/06.jpg" style={{ background: "url(\"../assets/img/ecommerce/06.jpg\") center center" }}>
                                                            </div>
                                                            <div className="ms-3 text-start">
                                                                <h5 className="mb-1 text-muted tx-13">Glass Decor Item</h5>
                                                                <div className="text-dark tx-semibold tx-12">5 * $ 5.99</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="ms-auto my-auto">
                                                        <a href="javascript:void(0);" className="p-3">
                                                            <i className="fe fe-trash-2 text-end text-danger" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="d-flex border-bottom main-cart-item">
                                                    <div>
                                                        <a className="d-flex p-3" href="product-details.php">
                                                            <div className="drop-img cover-image" data-image-src="../assets/img/ecommerce/04.jpg" style={{ background: "url(\"../assets/img/ecommerce/04.jpg\") center center" }}>
                                                            </div>
                                                            <div className="ms-3 text-start">
                                                                <h5 className="mb-1 text-muted tx-13">Pink Teddy Bear</h5>
                                                                <div className="text-dark tx-semibold tx-12">1 * $ 10.00</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="ms-auto my-auto">
                                                        <a href="javascript:void(0);" className="p-3">
                                                            <i className="fe fe-trash-2 text-end text-danger" />
                                                        </a>
                                                    </div>
                                                </div>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, right: 0 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }} /></div></div>
                                            <div className="dropdown-footer text-start">
                                                <a className="btn btn-primary btn-sm btn-w-md" href="check-out.php">Checkout</a>
                                                <span className="float-end mt-1 tx-semibold">Sub Total : $ 485.93</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown nav-item main-header-message">
                                        <a className="new nav-link" data-bs-toggle="dropdown" href="javascript:void(0);">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" /></svg>
                                            <span className="badge bg-secondary header-badge">5</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="menu-header-content text-start border-bottom">
                                                <div className="d-flex">
                                                    <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">Messages</h6>
                                                    <span className="badge badge-pill badge-warning ms-auto my-auto float-end">Mark All Read</span>
                                                </div>
                                                <p className="dropdown-title-text subtext mb-0 op-6 pb-0 tx-12 ">You have 4 unread messages</p>
                                            </div>
                                            <div className="main-message-list chat-scroll ps">
                                                <a href="chat.php" className="dropdown-item d-flex border-bottom">
                                                    <div className="  drop-img  cover-image  " data-image-src="../assets/img/faces/3.jpg" style={{ background: "url(\"../assets/img/faces/3.jpg\") center center" }}>
                                                        <span className="avatar-status bg-teal" />
                                                    </div>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Teri Dactyl</h5>
                                                        </div>
                                                        <p className="mb-0 desc">I'm sorry but i'm not sure how to help you with that......</p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">Mar 15 3:55 PM</p>
                                                    </div>
                                                </a>
                                                <a href="chat.php" className="dropdown-item d-flex border-bottom">
                                                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/2.jpg" style={{ background: "url(\"../assets/img/faces/2.jpg\") center center" }}>
                                                        <span className="avatar-status bg-teal" />
                                                    </div>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Allie Grater</h5>
                                                        </div>
                                                        <p className="mb-0 desc">All set ! Now, time to get to you now......</p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">Mar 06 01:12 AM</p>
                                                    </div>
                                                </a>
                                                <a href="chat.php" className="dropdown-item d-flex border-bottom">
                                                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/9.jpg" style={{ background: "url(\"../assets/img/faces/9.jpg\") center center" }}>
                                                        <span className="avatar-status bg-teal" />
                                                    </div>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Aida Bugg</h5>
                                                        </div>
                                                        <p className="mb-0 desc">Are you ready to pickup your Delivery...</p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">Feb 25 10:35 AM</p>
                                                    </div>
                                                </a>
                                                <a href="chat.php" className="dropdown-item d-flex border-bottom">
                                                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/12.jpg" style={{ background: "url(\"../assets/img/faces/12.jpg\") center center" }}>
                                                        <span className="avatar-status bg-teal" />
                                                    </div>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">John Quil</h5>
                                                        </div>
                                                        <p className="mb-0 desc">Here are some products ...</p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">Feb 12 05:12 PM</p>
                                                    </div>
                                                </a>
                                                <a href="chat.php" className="dropdown-item d-flex border-bottom">
                                                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/5.jpg" style={{ background: "url(\"../assets/img/faces/5.jpg\") center center" }}>
                                                        <span className="avatar-status bg-teal" />
                                                    </div>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Liz Erd</h5>
                                                        </div>
                                                        <p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">Jan 29 03:16 PM</p>
                                                    </div>
                                                </a>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, right: 0 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }} /></div></div>
                                            <div className="text-center dropdown-footer">
                                                <a className="btn btn-primary btn-sm btn-block text-center" href="chat.php">VIEW ALL</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown nav-item main-header-notification d-flex">
                                        <a className="new nav-link" data-bs-toggle="dropdown" href="javascript:void(0);">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" /></svg><span className=" pulse" />
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="menu-header-content text-start border-bottom">
                                                <div className="d-flex">
                                                    <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">Notifications</h6>
                                                    <span className="badge badge-pill badge-warning ms-auto my-auto float-end">Mark All Read</span>
                                                </div>
                                                <p className="dropdown-title-text subtext mb-0 op-6 pb-0 tx-12 ">You have 4 unread Notifications</p>
                                            </div>
                                            <div className="main-notification-list Notification-scroll ps">
                                                <a className="d-flex p-3 border-bottom" href="mail.php">
                                                    <div className="notifyimg bg-pink">
                                                        <i className="far fa-folder-open text-white" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">New files available</h5>
                                                        <div className="notification-subtext">10 hour ago</div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted" />
                                                    </div>
                                                </a>
                                                <a className="d-flex p-3  border-bottom" href="mail.php">
                                                    <div className="notifyimg bg-purple">
                                                        <i className="fab fa-delicious text-white" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">Updates Available</h5>
                                                        <div className="notification-subtext">2 days ago</div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted" />
                                                    </div>
                                                </a>
                                                <a className="d-flex p-3 border-bottom" href="mail.php">
                                                    <div className="notifyimg bg-success">
                                                        <i className="fa fa-cart-plus text-white" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">New Order Received</h5>
                                                        <div className="notification-subtext">1 hour ago</div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted" />
                                                    </div>
                                                </a>
                                                <a className="d-flex p-3 border-bottom" href="mail.php">
                                                    <div className="notifyimg bg-warning">
                                                        <i className="far fa-envelope-open text-white" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">New review received</h5>
                                                        <div className="notification-subtext">1 day ago</div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted" />
                                                    </div>
                                                </a>
                                                <a className="d-flex p-3 border-bottom" href="mail.php">
                                                    <div className="notifyimg bg-danger">
                                                        <i className="fab fa-wpforms text-white" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">22 verified registrations</h5>
                                                        <div className="notification-subtext">2 hour ago</div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted" />
                                                    </div>
                                                </a>
                                                <a className="d-flex p-3 border-bottom" href="mail.php">
                                                    <div className="">
                                                        <i className="far fa-check-square text-white notifyimg bg-success" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">Project has been approved</h5>
                                                        <span className="notification-subtext">4 hour ago</span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted" />
                                                    </div>
                                                </a>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, right: 0 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }} /></div></div>
                                            <div className="dropdown-footer">
                                                <a className="btn btn-primary btn-sm btn-block" href="mail.php">VIEW ALL</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item full-screen fullscreen-button">
                                        <a className="new nav-link full-screen-link" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" /></svg></a>
                                    </li>
                                    <li className="dropdown main-header-message right-toggle">
                                        <a className="new nav-link nav-link pe-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" /></svg>
                                        </a>
                                    </li>
                                    <li className="nav-link search-icon d-lg-none d-block">
                                        <form className="navbar-form" role="search">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search" />
                                                <span className="input-group-btn">
                                                    <button type="reset" className="btn btn-default">
                                                        <i className="fas fa-times" />
                                                    </button>
                                                    <button type="submit" className="btn btn-default nav-link resp-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="header-icon-svgs" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </form>
                                    </li>
                                    <li className="dropdown main-profile-menu nav nav-item nav-link ps-lg-2">
                                        <a className="new nav-link profile-user d-flex" href="" data-bs-toggle="dropdown"><img alt="" src="../assets/img/faces/2.jpg" className="" /></a>
                                        <div className="dropdown-menu">
                                            <div className="menu-header-content p-3 border-bottom">
                                                <div className="d-flex wd-100p">
                                                    <div className="main-img-user"><img alt="" src="../assets/img/faces/2.jpg" className="" /></div>
                                                    <div className="ms-3 my-auto">
                                                        <h6 className="tx-15 font-weight-semibold mb-0">Teri Dactyl</h6><span className="dropdown-title-text subtext op-6  tx-12">Premium Member</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="dropdown-item" href="profile.php"><i className="far fa-user-circle" />Profile</a>
                                            <a className="dropdown-item" href="chat.php"><i className="far fa-smile" /> chat</a>
                                            <a className="dropdown-item" href="mail-read.php"><i className="far fa-envelope " />Inbox</a>
                                            <a className="dropdown-item" href="mail.php"><i className="far fa-comment-dots" />Messages</a>
                                            <a className="dropdown-item" href="mail-settings.php"><i className="far fa-sun" />  Settings</a>
                                            <a className="dropdown-item" href="signup.php"><i className="far fa-arrow-alt-circle-left" /> Sign Out</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex">
                            <a className="demo-icon new nav-link" href="javascript:void(0);">
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs fa-spin" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" /><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky">
					<aside className="app-sidebar ps horizontal-main ps--active-y">
						<div className="main-sidebar-header active">
							<a className="header-logo active" href="index.php">
								<img src="../assets/img/brand/logo.png" className="main-logo  desktop-logo" alt="logo" />
								<img src="../assets/img/brand/logo-white.png" className="main-logo  desktop-dark" alt="logo" />
								<img src="../assets/img/brand/favicon.png" className="main-logo  mobile-logo" alt="logo" />
								<img src="../assets/img/brand/favicon-white.png" className="main-logo  mobile-dark" alt="logo" />
							</a>
						</div>
						<div className="main-sidemenu is-expanded container">
							<div className="slide-left disabled active d-none" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" /></svg></div>
							<ul className="side-menu open" style={{ marginRight: 0 }}>
								<li className="side-item side-item-category">Main</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" /></svg><span className="side-menu__label">Dashboards</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Dashboards</a></li>
										<li><a className="slide-item" href="index.php">Dashboard-1</a></li>
										<li><a className="slide-item" href="index1.php">Dashboard-2</a></li>
										<li><a className="slide-item" href="index2.php">Dashboard-3</a></li>
									</ul>
								</li>
								<li className="side-item side-item-category">WEB APPS</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" /></svg><span className="side-menu__label">Apps</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Apps</a></li>
										<li><a className="slide-item" href="cards.php">Cards</a></li>
										<li><a className="slide-item" href="draggablecards.php">Draggablecards</a></li>
										<li><a className="slide-item" href="rangeslider.php">Range-slider</a></li>
										<li><a className="slide-item" href="calendar.php">Calendar</a></li>
										<li><a className="slide-item" href="contacts.php">Contacts</a></li>
										<li><a className="slide-item" href="image-compare.php">Image-compare</a></li>
										<li><a className="slide-item" href="notification.php">Notification</a></li>
										<li><a className="slide-item" href="widget-notification.php">Widget-notification</a></li>
										<li><a className="slide-item" href="treeview.php">Treeview</a></li>
										<li><a className="slide-item" href="file-manager.php">File-manager</a></li>
										<li><a className="slide-item" href="file-manager1.php">File-manager1</a></li>
										<li><a className="slide-item" href="file-details.php">File-details</a></li>
									</ul>
								</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" /></svg><span className="side-menu__label">Elements</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Elements</a></li>
										<li><a className="slide-item" href="alerts.php">Alerts</a></li>
										<li><a className="slide-item" href="avatar.php">Avatar</a></li>
										<li><a className="slide-item" href="breadcrumbs.php">Breadcrumbs</a></li>
										<li><a className="slide-item" href="buttons.php">Buttons</a></li>
										<li><a className="slide-item" href="badge.php">Badge</a></li>
										<li><a className="slide-item" href="dropdown.php">Dropdown</a></li>
										<li><a className="slide-item" href="thumbnails.php">Thumbnails</a></li>
										<li><a className="slide-item" href="list-group.php">List Group</a></li>
										<li><a className="slide-item" href="navigation.php">Navigation</a></li>
										<li><a className="slide-item" href="images.php">Images</a></li>
										<li><a className="slide-item" href="pagination.php">Pagination</a></li>
										<li><a className="slide-item" href="popover.php">Popover</a></li>
										<li><a className="slide-item" href="progress.php">Progress</a></li>
										<li><a className="slide-item" href="spinners.php">Spinners</a></li>
										<li><a className="slide-item" href="media-object.php">Media Object</a></li>
										<li><a className="slide-item" href="typography.php">Typography</a></li>
										<li><a className="slide-item" href="tooltip.php">Tooltip</a></li>
										<li><a className="slide-item" href="toast.php">Toast</a></li>
										<li><a className="slide-item" href="tags.php">Tags</a></li>
										<li><a className="slide-item" href="tabs.php">Tabs</a></li>
									</ul>
								</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" /><path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" /></svg><span className="side-menu__label">Advanced UI</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Advanced UI</a></li>
										<li><a className="slide-item" href="accordion.php">Accordion</a></li>
										<li><a className="slide-item" href="carousel.php">Carousel</a></li>
										<li><a className="slide-item" href="collapse.php">Collapse</a></li>
										<li><a className="slide-item" href="modals.php">Modals</a></li>
										<li><a className="slide-item" href="timeline.php">Timeline</a></li>
										<li><a className="slide-item" href="sweet-alert.php">Sweet Alert</a></li>
										<li><a className="slide-item" href="rating.php">Ratings</a></li>
										<li><a className="slide-item" href="counters.php">Counters</a></li>
										<li><a className="slide-item" href="search.php">Search</a></li>
										<li><a className="slide-item" href="userlist.php">Userlist</a></li>
										<li><a className="slide-item" href="blog.php">Blog</a></li>
										<li><a className="slide-item" href="blog-details.php">Blog-details</a></li>
										<li><a className="slide-item" href="edit-post.php">Edit-post</a></li>
										<li><a className="slide-item" href="file-attached-tags.php">File Attachments</a></li>
									</ul>
								</li>
								<li className="side-item side-item-category">Pages</li>
								<li className="slide">
									<a className="side-menu__item active is-expanded" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" /><path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" /><path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" /></svg><span className="side-menu__label">Pages</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu open">
										<li className="side-menu__label1"><a href="javascript:void(0);">Pages</a></li>
										<li className="sub-slide">
											<a className="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Authentication</span><i className="sub-angle fe fe-chevron-right" /></a>
											<ul className="sub-slide-menu">
												<li><a className="sub-side-menu__item" href="signin.php">Sign In</a></li>
												<li><a className="sub-side-menu__item" href="signup.php">Sign Up</a></li>
												<li><a className="sub-side-menu__item" href="forgot.php">Forgot Password</a></li>
												<li><a className="sub-side-menu__item" href="reset.php">Reset Password</a></li>
												<li><a className="sub-side-menu__item" href="lockscreen.php">Lockscreen</a></li>
												<li><a className="sub-side-menu__item" href="underconstruction.php">UnderConstruction</a></li>
												<li><a className="sub-side-menu__item" href="404.php">404 Error</a></li>
												<li><a className="sub-side-menu__item" href="500.php">500 Error</a></li>
												<li><a className="sub-side-menu__item" href="501.php">501 Error</a></li>
											</ul>
										</li>
										<li className="sub-slide">
											<a className="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Switcher</span><i className="sub-angle fe fe-chevron-right" /></a>
											<ul className="sub-slide-menu">

												<li><a className="sub-side-menu__item" href="switcher-1.php">Switcher-1</a></li>
											</ul>
										</li>
										<li className="sub-slide">
											<a className="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Ecommerce</span><i className="sub-angle fe fe-chevron-right" /></a>
											<ul className="sub-slide-menu">
												<li><a className="sub-side-menu__item" href="shop.php">Shop</a></li>
												<li><a className="sub-side-menu__item" href="product-details.php">Product-Details</a></li>
												<li><a className="sub-side-menu__item" href="product-cart.php">Cart</a></li>
												<li><a className="sub-side-menu__item" href="check-out.php">Check-out</a></li>
												<li><a className="sub-side-menu__item" href="wish-list.php">Wish-list</a></li>
											</ul>
										</li>
										<li><a className="slide-item" href="profile.php">Profile</a></li>
										<li><a className="slide-item" href="profile-notifications.php">Notifications-list</a></li>
										<li><a className="slide-item" href="aboutus.php">About us</a></li>
										<li><a className="slide-item" href="settings.php">Settings</a></li>
										<li className="sub-slide">
											<a className="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Mail</span><i className="sub-angle fe fe-chevron-right" /></a>
											<ul className="sub-slide-menu">
												<li><a className="sub-side-menu__item" href="mail.php">Mail</a></li>
												<li><a className="sub-side-menu__item" href="mail-compose.php">Mail Compose</a></li>
												<li><a className="sub-side-menu__item" href="mail-read.php">Read-mail</a></li>
												<li><a className="sub-side-menu__item" href="mail-settings.php">mail-settings</a></li>
												<li><a className="sub-side-menu__item" href="chat.php">Chat</a></li>
											</ul>
										</li>
										<li><a className="slide-item" href="invoice.php">Invoice</a></li>
										<li><a className="slide-item" href="pricing.php">Pricing</a></li>
										<li><a className="slide-item" href="gallery.php">Gallery</a></li>
										<li><a className="slide-item" href="todotask.php">Todotask</a></li>
										<li><a className="slide-item" href="faq.php">Faqs</a></li>
										<li className=""><a className="slide-item active" href="empty.php">Empty Page</a></li>
									</ul>
								</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9-9 4.121-9 9 4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7-7-3.206-7-7 3.206-7 7-7zm5.284-2.293 1.412-1.416 3.01 3-1.413 1.417zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z" /><path d="M11 9h2v5h-2zm0 6h2v2h-2z" /></svg><span className="side-menu__label">Utilities</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Utilities</a></li>
										<li><a className="slide-item" href="background.php">Background</a></li>
										<li><a className="slide-item" href="border.php">Border</a></li>
										<li><a className="slide-item" href="display.php">Display</a></li>
										<li><a className="slide-item" href="flex.php">Flex</a></li>
										<li><a className="slide-item" href="height.php">Height</a></li>
										<li><a className="slide-item" href="margin.php">Margin</a></li>
										<li><a className="slide-item" href="padding.php">Padding</a></li>
										<li><a className="slide-item" href="position.php">Position</a></li>
										<li><a className="slide-item" href="width.php">Width</a></li>
										<li><a className="slide-item" href="extras.php">Extras</a></li>
									</ul>
								</li>
								<li className="side-item side-item-category">General</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" /></svg><span className="side-menu__label">Icons</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Icons</a></li>
										<li><a className="slide-item" href="icons.php">Font Awesome </a></li>
										<li><a className="slide-item" href="icons2.php">Material Design Icons</a></li>
										<li><a className="slide-item" href="icons3.php">Simple Line Icons</a></li>
										<li><a className="slide-item" href="icons4.php">Feather Icons</a></li>
										<li><a className="slide-item" href="icons5.php">Ionic Icons</a></li>
										<li><a className="slide-item" href="icons6.php">Flag Icons</a></li>
										<li><a className="slide-item" href="icons7.php">Pe7 Icons</a></li>
										<li><a className="slide-item" href="icons8.php">Themify Icons</a></li>
										<li><a className="slide-item" href="icons9.php">Typicons Icons</a></li>
										<li><a className="slide-item" href="icons10.php">Weather Icons</a></li>
										<li><a className="slide-item" href="icons11.php">Material Icons</a></li>
										<li><a className="slide-item" href="icons12.php">Bootstrap Icons</a></li>
									</ul>
								</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z" /></svg><span className="side-menu__label">Charts</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Charts</a></li>
										<li><a className="slide-item" href="chart-morris.php">Morris Charts</a></li>
										<li><a className="slide-item" href="chart-flot.php">Flot Charts</a></li>
										<li><a className="slide-item" href="chart-chartjs.php">ChartJS</a></li>
										<li><a className="slide-item" href="chart-echart.php">Echart</a></li>
										<li><a className="slide-item" href="chart-sparkline.php">Sparkline</a></li>
										<li><a className="slide-item" href="chart-peity.php">Chart-peity</a></li>
									</ul>
								</li>
								<li className="side-item side-item-category">MULTI LEVEL</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg><span className="side-menu__label">Menu-levels</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Menu-Levels</a></li>
										<li><a className="slide-item" href="javascript:void(0);">Level-1</a></li>
										<li className="sub-slide">
											<a className="slide-item" data-bs-toggle="sub-slide" href="javascript:void(0);"><span className="sub-side-menu__label">Level-2</span><i className="sub-angle fe fe-chevron-down me-4" /></a>
											<ul className="sub-slide-menu">
												<li><a className="sub-side-menu__item" href="javascript:void(0);">Level-2.1</a></li>
												<li><a className="sub-side-menu__item" href="javascript:void(0);">Level-2.2</a></li>
												<li className="sub-slide2">
													<a className="sub-side-menu__item" data-bs-toggle="sub-slide2" href="javascript:void(0);"><span className="sub-side-menu__label">Level-2.3</span><i className="sub-angle2 fe fe-chevron-down" /></a>
													<ul className="sub-slide-menu1">
														<li><a className="sub-slide-item2" href="javascript:void(0);">Level-2.3.1</a></li>
														<li><a className="sub-slide-item2" href="javascript:void(0);">Level-2.3.2</a></li>
														<li><a className="sub-slide-item2" href="javascript:void(0);">Level-2.3.3</a></li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="side-item side-item-category">COMPONENTS</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" /></svg><span className="side-menu__label">Forms</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Forms</a></li>
										<li><a className="slide-item" href="form-elements.php">Form Elements</a></li>
										<li><a className="slide-item" href="form-advanced.php">Advanced Forms</a></li>
										<li><a className="slide-item" href="form-layouts.php">Form Layouts</a></li>
										<li><a className="slide-item" href="form-validation.php">Form Validation</a></li>
										<li><a className="slide-item" href="form-wizards.php">Form Wizards</a></li>
										<li><a className="slide-item" href="form-editor.php">Form Editor</a></li>
										<li><a className="slide-item" href="form-sizes.php">Form-element-sizes</a></li>
										<li><a className="slide-item" href="form-input-spinners.php">Form Input Spinners</a></li>
									</ul>
								</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z" /></svg><span className="side-menu__label">Tables</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Tables</a></li>
										<li><a className="slide-item" href="table-basic.php">Basic Tables</a></li>
										<li><a className="slide-item" href="table-data.php">Data Tables</a></li>
								</ul>
								</li>
								<li className="slide">
									<a className="side-menu__item" href="widgets.php"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" /></svg><span className="side-menu__label">Widgets</span></a>
								</li>
								<li className="slide">
									<a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24"><path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" /></svg><span className="side-menu__label">Maps</span><i className="angle fe fe-chevron-right" /></a>
									<ul className="slide-menu">
										<li className="side-menu__label1"><a href="javascript:void(0);">Maps</a></li>
										<li><a className="slide-item" href="map-leaflet.php">Leaflet Maps</a></li>
										<li><a className="slide-item" href="map-vector.php">Vector Maps</a></li>
									</ul>
								</li>
							</ul>
							<div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg></div>
						</div>
					<div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, height: 57, right: 0 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 56 }} /></div></aside>
				</div>
       </>
  )
}

export default Header