import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../_helpers/config'
import BreadCrumb from '../_views/BreadCrumb'
import moment from 'moment';

const ProjectList = () => {
  const [list, setList] = useState({});

  useEffect(()=>{
       axios.get(`${BASE_URL}/api/v1/projects/all`).then((res)=>{
            console.log(res);
            setList(res.data.projects);
       })
  }, [])  

  return (
       <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                           <BreadCrumb title="All Projects" />

                           <div className='d-flex justify-content-end mb-4'>
                                <Link to={'/project/create'} className="btn btn-primary waves-effect waves-light">Add Project</Link>
                           </div> 
                           
                           <div className="row">
                                
                                {
                                    Object.keys(list).length > 0 &&  list?.map((item)=>{ 
                                          const { title, discription, createdAt, _id, isUser : {firstName, lastName}, status } = item;
                                          return (
                                              <div key={_id} className="col-xl-4 col-sm-6">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 me-4">
                                                                    <div className="avatar-md">
                                                                        <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                                            <img src="assets/images/companies/img-1.png" alt="" height="30" />
                                                                        </span>
                                                                    </div>
                                                                </div> 
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate font-size-15">
                                                                        <Link to={`/project/${item._id}`} className="text-dark">{title}</Link>
                                                                    </h5>
                                                                    <p className="text-muted mb-4">
                                                                        {discription}
                                                                    </p>

                                                                    <div className='avatar-group'>
                                                                         <div className='avatar-group-item'>
                                                                                <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xs" />
                                                                                &nbsp;&nbsp; {firstName} {lastName}
                                                                         </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-4 py-3 border-top">
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item me-3"> 
                                                                    <span className={`badge bg-${status == 'Completed' ? 'success' : 'info'}`}>{status}</span>
                                                                </li>
                                                                <li className="list-inline-item me-3">
                                                                    <i className="bx bx-calendar me-1" /> { moment(createdAt).format('D MMM, YY') }
                                                                </li>
                                                                <li className="list-inline-item me-3">
                                                                    <i className="bx bx-comment-dots me-1" /> 214
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                              </div>
                                          )
                                    }) 
                                } 
                           </div>
                    </div> 
                </div>
            </div>
       </>
  )
}

export default ProjectList