import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import BreadCrumb from '../_views/BreadCrumb'
import { useSelector, useDispatch } from 'react-redux'
import ticketActions from '../_redux/_actions/ticketActions'
import moment from 'moment';
import SideBar from '../_views/SideBar'
import Loader from '../_components/Loader'
import Message from '../_components/Message'

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
    }, [id, dispatch])

    return (
        <>
            <SideBar />
            <div className='web-layout pt-4 px-4'>
                
                <BreadCrumb title="Issue Detail" />
                
                { isLoading && <Loader /> }

                { isError &&  <Message type="danger" message={isMessage}/>  }

                { !isLoading && Object.keys(ticketDetail).length > 0 && 
                  <>
                       <div className='user-layout'>
                            <div className='row'>
                                    <div className='col-lg-8'>
                                        <div className='issue-tracking'>
                                                
                                                <div className='d-flex mb-4 gap-3 title-ts'>
                                                    <div>
                                                            <div className={`typeinfo ${ticketDetail?.type}`}>
                                                                { ticketDetail?.type === 'Task' && <i className="fa fa-check"></i> }
                                                                { ticketDetail?.type === 'Story' && <i className="fa fa-bookmark"></i> }
                                                                { ticketDetail?.type === 'Bug' && <i className="fa fa-circle"></i> }
                                                                { ticketDetail?.type === 'Feature' && <i className="fa fa-gear"></i> }
                                                            </div> 
                                                    </div>
                                                    <div>
                                                            <h4 className='m-0 pt-2'>{ticketDetail?.title}</h4>
                                                    </div>
                                                </div>

                                                <h6>Description</h6>

                                                <div className="shadow-none p-3 mt-3 mb-4 bg-light rounded">
                                                    <div dangerouslySetInnerHTML={{__html : ticketDetail?.discription}}></div>
                                                </div> 

                                                <h6>Activity</h6>
                                        </div>
                                    </div>

                                    <div className='col-lg-4'>
                                        <div className='sprint-bg chns p-3'>
                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Status</label>
                                                    <p className='mb-0'>{ticketDetail?.status}</p>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Priority</label>
                                                    <div className='mb-0'> 
                                                        <div title={ticketDetail?.priority} className={`typeinfoP ${ticketDetail?.priority}`}>
                                                            {   
                                                                ticketDetail?.priority === 'Low' || ticketDetail?.priority === 'Medium' ? <i className="fa fa-arrow-down" /> : <i className="fa fa-arrow-up" /> 
                                                            }
                                                        </div> 
                                                    </div>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Project Name</label>
                                                    <p className='mb-0'>{ticketDetail?.project?.title}</p>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Estimate</label>
                                                    <p className='mb-0'>{ ticketDetail?.estimate ? ticketDetail?.estimate : '---' }</p>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Reportar</label>
                                                    <p className='mb-0'>{ticketDetail?.reportar?.firstName} {ticketDetail?.reportar?.lastName}</p>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Assignee</label>
                                                    <p className='mb-0'>{ticketDetail?.assignee?.firstName} {ticketDetail?.assignee?.lastName}</p>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Create On</label>
                                                    <p className='mb-0'>{moment(ticketDetail?.createdAt).format('D MMM, YY | h:mm:ss A')}</p>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Updated On</label>
                                                    <p className='mb-0'>{moment(ticketDetail?.updatedAt).format('D MMM, YY | h:mm:ss A')}</p>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Sprint</label>
                                                    <div className='d-flex gap-2'>{
                                                        ticketDetail?.board?.map((item)=>{
                                                                return ( <span key={item._id}><Link to={`/board/${item._id}`}>{item.name}</Link></span> )
                                                        })
                                                    }</div>
                                                </div>

                                                <div className='col-boxs issue-list bg-white p-3 mb-3'>
                                                    <label>Story Point</label>
                                                    <p className='mb-0'>{ticketDetail?.points}</p>
                                                </div>
                                        </div>

                                        <div className='d-flex mt-4 justify-content-start'>
                                            <div>
                                                <Link to={`/ticket/edit/${ticketDetail._id}`} className='btn btn-primary w-100 waves-effect waves-light'>Edit Issue</Link>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                  </> 
                  }
            </div>
        </>
    )
}

export default TicketDetail