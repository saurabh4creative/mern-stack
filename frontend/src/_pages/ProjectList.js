import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom' 
import BreadCrumb from '../_views/BreadCrumb'
import moment from 'moment';
import projectActions from '../_redux/_actions/projectActions'
import { useSelector, useDispatch } from 'react-redux'
import MD5 from "crypto-js/md5"

const ProjectList = () => {
  
  const dispatch = useDispatch();   
  const dataFetchedRef = useRef(false);
  const { isLoading, isError, isMessage, projects } = useSelector(state=>state.projectReducer);

  useEffect(()=>{
    if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

    dispatch(projectActions.project_start());
    dispatch(projectActions.project_list());
  }, [dispatch]); 

  const avtarName = (name) => {
     return name.split('')[0];
  } 

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
                                    isLoading && 
                                    <>
                                        <div className='col-12'>
                                              <div className="spinner-border text-primary m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                              </div>
                                        </div>
                                    </> 
                                }

                                {
                                    isError && 
                                    <>
                                        <div className='col-12'>
                                            <div className='alert alert-danger'>
                                                 {isMessage}
                                            </div>
                                        </div>    
                                    </> 
                                }
                                
                                {
                                    Object.keys(projects).length > 0 ?  projects?.map((item)=>{ 
                                          const { title, discription, createdAt, _id, isUser : {firstName, lastName}, status } = item;
                                          
                                          return (
                                              <div key={_id} className="col-xl-4 col-sm-6">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 me-4">
                                                                    <div className="avatar-md">
                                                                        <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                                            <img className='rounded-circle' src={`https://www.gravatar.com/avatar/${MD5(item._id).toString()}?d=retro&s=72`} alt="" />
                                                                        </span>
                                                                    </div>
                                                                </div> 
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate font-size-15">
                                                                        <Link to={`/project/${item._id}`} className="text-dark">{title}</Link>
                                                                    </h5>
                                                                    <p className="text-muted mb-4"> 
                                                                        {`${discription.substring(0, 50)}`} 
                                                                    </p>

                                                                    <div className='avatar-group align-items-center gap-2'>
                                                                         <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                                                        {avtarName(firstName)}{avtarName(lastName)}
                                                                                    </span>
                                                                                </div>  
                                                                        </div>
                                                                        {firstName} {lastName}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-4 py-3 border-top">
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item me-3"> 
                                                                    <span className={`badge bg-${status === 'Completed' ? 'success' : 'info'}`}>{status}</span>
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
                                    }) :

                                    <> 
                                        {
                                             !isLoading && 
                                             <>
                                                 <div className='col-12'>
                                                     <div className='alert alert-danger'>
                                                         No Projects Found...
                                                     </div>
                                                 </div> 
                                             </>
                                        }
                                    </>
                                } 
                           </div>
                    </div> 
                </div>
            </div>
       </>
  )
}

export default ProjectList