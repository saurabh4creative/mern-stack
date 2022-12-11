import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
        <div className='sideBar p-4'>
               <div className='top-section'>
                     <div className='sc-1'>
                           <h6>React Jira Clone</h6>
                           <p>Software Project</p>
                     </div>

                     <hr />

                     <div className='userList'>
                            <nav className="nav flex-column">
                                <Link className="nav-link text-dark ps-0 active" aria-current="page">
                                     Dashboard
                                </Link>
                                <Link to={'/project'} className="nav-link text-dark ps-0" >
                                     Projects
                                </Link>
                                <Link to={'/ticket'} className="nav-link text-dark ps-0" >
                                     All Issues 
                                </Link>
                                <Link to={'/my-issue'} className="nav-link text-dark ps-0" >
                                     My Issues 
                                </Link>
                                <Link to={'/assign-issue'} className="nav-link text-dark ps-0" >
                                     Assign To Me
                                </Link>
                                <Link to={'/board'} className="nav-link text-dark ps-0" >
                                     Board 
                                </Link>
                                <Link to={'/active-board'} className="nav-link text-dark ps-0" >
                                     Active Board 
                                </Link>
                            </nav>
                     </div>
               </div>
        </div>
  )
}

export default SideBar