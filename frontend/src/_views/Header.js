import React, { useEffect, useState } from 'react'
import { useLocation, Link } from "react-router-dom"

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  const hidePages = ['', '/register', '/login', '/activate'];
  const location  = useLocation();
  
  const { pathname, key } = location;

  useEffect(()=>{ 
      setHideHeader(hidePages.includes(pathname)); 
  }, [key, pathname])
  
  return (
       <>
             {
                  !hideHeader && 
                  <>
                            <header id="page-topbar">
                                <div className="navbar-header">
                                    <div className="d-flex">
 
                                        <div className="navbar-brand-box"> 
                                            <Link to="/" className="logo logo-light">
                                                <span className="logo-sm">
                                                    <img src="/assets/images/logo-light.svg" alt="" height="22" />
                                                </span>
                                                <span className="logo-lg">
                                                    <img src="/assets/images/logo-light.png" alt="" height="19" />
                                                </span>
                                            </Link>
                                        </div>

                                        <button type="button" className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                                            <i className="fa fa-fw fa-bars" />
                                        </button>
 
                                        <form className="app-search d-none d-lg-block">
                                            <div className="position-relative">
                                                <input type="text" className="form-control" placeholder="Search..." />
                                                <span className="bx bx-search-alt" />
                                            </div>
                                        </form> 
                                    </div>

                                    <div className="d-flex">
  
                                        <div className="dropdown d-inline-block">
                                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span> 
                                            </button> 
                                        </div>

                                        <div className="dropdown d-inline-block">
                                            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                                <i className="bx bx-cog bx-spin" />
                                            </button>
                                        </div>
                            
                                    </div>
                                </div>
                            </header>

                            <div className="topnav">
                                <div className="container-fluid">
                                    <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                                        <div className="collapse navbar-collapse" id="topnav-menu-content">
                                            <ul className="navbar-nav">

                                                <li className="nav-item">
                                                    <Link className="nav-link dropdown-toggle arrow-none" to="/dashboard" id="topnav-dashboard" role="button">
                                                        <i className="bx bx-home-circle me-2" /><span key="t-dashboards">Dashboards</span>
                                                    </Link> 
                                                </li> 

                                                <li className="nav-item">
                                                    <Link className="nav-link dropdown-toggle arrow-none" to="/project" id="topnav-dashboard" role="button">
                                                        <i className="bx bx-home-circle me-2" /><span key="t-dashboards">Projects</span>
                                                    </Link> 
                                                </li> 

                                                <li className="nav-item">
                                                    <Link className="nav-link dropdown-toggle arrow-none" to="/ticket" id="topnav-dashboard" role="button">
                                                        <i className="bx bx-home-circle me-2" /><span key="t-dashboards">Tickets</span>
                                                    </Link> 
                                                </li> 

                                                <li className="nav-item">
                                                    <Link className="nav-link dropdown-toggle arrow-none" to="/your-work" id="topnav-dashboard" role="button">
                                                        <i className="bx bx-home-circle me-2" /><span key="t-dashboards">Your Work</span>
                                                    </Link> 
                                                </li> 

                                                <li className="nav-item">
                                                    <Link className="nav-link dropdown-toggle arrow-none" to="/my-work" id="topnav-dashboard" role="button">
                                                        <i className="bx bx-home-circle me-2" /><span key="t-dashboards">My Work</span>
                                                    </Link> 
                                                </li> 

                                                <li className="nav-item">
                                                    <Link className="nav-link dropdown-toggle arrow-none" to="/ticket" id="topnav-dashboard" role="button">
                                                        <i className="bx bx-home-circle me-2" /><span key="t-dashboards">Board</span>
                                                    </Link> 
                                                </li>  

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                  </>
             }
       </>
  )
}

export default Header