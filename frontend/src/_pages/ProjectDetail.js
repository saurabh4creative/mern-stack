 import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import TicketRow from '../_components/TicketRow';  
import BreadCrumb from '../_views/BreadCrumb';
import { useSelector, useDispatch } from 'react-redux' 
import projectActions from '../_redux/_actions/projectActions'; 
import moment from 'moment';
import MD5 from "crypto-js/md5"

const ProjectDetail = () => {
    const dispatch = useDispatch();   
    const dataFetchedRef = useRef(false);
    const { isLoading, isError, isMessage, tickets, projectDetail } = useSelector(state=>state.projectReducer);
    const { title, discription, createdAt, isUser, status, _id } = projectDetail || {};

    const { id } = useParams(); 
    
    useEffect(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        
        dispatch(projectActions.project_start());
        dispatch(projectActions.project_detail_success(id)); 
    }, [id]);

    const avtarName = (name) => {
        return name ? name.split('')[0] : '';
    } 

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <BreadCrumb title="Project Detail" />

                        <div className='d-flex justify-content-end mb-4'>
                            <Link to={'/project/create'} className="btn btn-primary waves-effect waves-light">Add Project</Link>
                        </div> 

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
                            isLoading ? 
                            <>
                                <div className='col-12'>
                                        <div className="spinner-border text-primary m-1" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                </div>
                            </> 
                            :
                            <>
                                
                                {
                                    Object.keys(projectDetail).length > 0 && 
                                    <>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-4">
                                                                <div className="avatar-md">
                                                                    <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                                        <img className='rounded-circle' src={`https://www.gravatar.com/avatar/${MD5(_id).toString()}?d=retro&s=72`} alt="" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-15">
                                                                    {title}
                                                                </h5>
                                                                <p className="text-muted mb-4">{discription}</p>
                                                                <div className='avatar-group align-items-center gap-2'>
                                                                        <div className="avatar-group-item">
                                                                            <div className="avatar-xs">
                                                                                <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                                                    {avtarName(isUser?.firstName)}{avtarName(isUser?.lastName)}
                                                                                </span>
                                                                            </div>  
                                                                    </div>
                                                                    {isUser?.firstName} {isUser?.lastName}
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
                                                            <i className="bx bx-calendar me-1" /> 
                                                            { moment(createdAt).format('D MMM, YY') }
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <i className="bx bx-comment-dots me-1" /> 214
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mb-3'></div>

                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 className="mb-sm-0 font-size-18">All Tickets</h4>
                                        <div className="page-title-right"></div>
                                    </div>

                                    <div className='d-flex justify-content-end mb-4'>
                                        <Link to={'/ticket/create'} className="btn btn-primary waves-effect waves-light">Add Ticket</Link>
                                    </div>

                                    <div className="row">
                                        <div className='col-lg-12'>
                                            <div className="table-responsive">
                                                <table className="table project-list-table table-nowrap align-middle table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Type</th>
                                                            <th scope="col">Summary</th>
                                                            <th scope="col">Project Name</th>
                                                            <th scope="col">Priority</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Reporter</th>
                                                            <th scope="col">Assignee</th>
                                                            <th scope="col">Created ON</th>
                                                            <th scope="col">Last Updated</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            Object.keys(tickets).length > 0 &&  tickets?.map((item)=>{ 
                                                                    return (
                                                                        <TicketRow key={item._id} data={item} />
                                                                    )
                                                            }) 
                                                        } 
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                         
                                    </>
                                } 
                            </>
                        } 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetail