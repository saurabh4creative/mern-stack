import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import BreadCrumb from '../_views/BreadCrumb'
import { useSelector, useDispatch } from 'react-redux'
import ticketActions from '../_redux/_actions/ticketActions'
import moment from 'moment';

const TicketDetail = () => {
    const { id } = useParams();
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch();
    const { isLoading, ticketDetail, isError, isMessage } = useSelector(state => state.ticketReducer);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        dispatch(ticketActions.ticket_fetch());
        dispatch(ticketActions.ticket_detail(id));
    }, [id])

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <BreadCrumb title="Ticket Detail" />

                    {
                        isLoading ?
                            <>
                                <div className='col-12'>
                                    <div className="spinner-border text-primary m-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </> :
                            <>
                                <div className='row'>
                                    <div className='col-xl-9'> 
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="fs-17 mb-4">
                                                     {ticketDetail?.title}
                                                </h4>
                                                
                                                <div className='d-flex gap-4 pb-4'>
                                                      
                                                      <div className='cols'>
                                                           <div className='btn-info'>
                                                                 <p>Edit</p>
                                                                 <Link to={`/ticket/edit/${ticketDetail._id}`} className="btn btn-primary waves-effect btn-label waves-light">
                                                                     <i className="bx bx-smile label-icon" /> Edit
                                                                 </Link>
                                                           </div>
                                                      </div>
                                                      
                                                      <div className='cols'>
                                                           <div className='btn-info'>
                                                                 <p>Type</p>
                                                                 <Link to="/" className="btn btn-primary waves-effect btn-label waves-light">
                                                                     <i className="bx bx-smile label-icon" /> {ticketDetail?.type}
                                                                 </Link>
                                                           </div>
                                                      </div>

                                                      <div className='cols'>
                                                           <div className='btn-info'>
                                                                 <p>Priority</p>
                                                                 <Link to="/" className="btn btn-primary waves-effect btn-label waves-light">
                                                                     <i className="bx bx-smile label-icon" /> {ticketDetail?.priority}
                                                                 </Link>
                                                           </div>
                                                      </div>

                                                      <div className='cols'>
                                                           <div className='btn-info'>
                                                                 <p>Status</p>
                                                                 <Link to="/" className="btn btn-primary waves-effect btn-label waves-light">
                                                                     <i className="bx bx-smile label-icon" /> {ticketDetail?.status}
                                                                 </Link>
                                                           </div>
                                                      </div>
                                                </div>
  
                                                <h4 className="card-title mb-4">Discription</h4>

                                                <div className="shadow-none p-3 bg-light rounded">
                                                    <div dangerouslySetInnerHTML={{__html : ticketDetail?.discription}}></div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="card">
                                            <div className="card-body">

                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="col">Project</th>
                                                                <td scope="col">{ticketDetail?.project?.title}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Estimate</th>
                                                                <td>
                                                                    {
                                                                         ticketDetail?.estimate ? ticketDetail?.estimate : '---'
                                                                    }
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Reportar</th>
                                                                <td>{ticketDetail?.reportar?.firstName} {ticketDetail?.reportar?.lastName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Assignee</th>
                                                                <td>{ticketDetail?.assignee?.firstName} {ticketDetail?.assignee?.lastName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Created ON</th>
                                                                <td>{moment(ticketDetail?.createdAt).format('D MMM, YY | h:mm:ss A')}</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Last Update</th>
                                                                <td>{moment(ticketDetail?.updatedAt).format('D MMM, YY | h:mm:ss A')}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }

                    {
                        isError &&
                        <>
                            <div className='alert alert-danger'>
                                {isMessage}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default TicketDetail