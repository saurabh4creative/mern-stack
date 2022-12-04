import React, { useEffect, useRef } from 'react'
import BreadCrumb from '../_views/BreadCrumb' 
import TicketRow from '../_components/TicketRow'
import { useSelector, useDispatch } from 'react-redux'
import ticketActions from '../_redux/_actions/ticketActions'
import SideBar from '../_views/SideBar';
import Loader from '../_components/Loader';
import Message from '../_components/Message';
import { Link } from 'react-router-dom'

const YourWork = () => {
     
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch();  
    const { isLoading, assignTickets, isError } = useSelector(state=>state.ticketReducer);

    useEffect(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        dispatch(ticketActions.ticket_fetch());
        dispatch(ticketActions.works_tickets()); 
    }, [dispatch])

    return (
        <>
            <SideBar />
            <div className='web-layout pt-4 px-4'>
                <BreadCrumb title="All Issues" />

                <div className='user-layout'>
                     
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div>
                             {Object.keys(assignTickets).length} Issues Found
                        </div>
                        <div>
                             <Link to={'/ticket/create'} className="btn btn-primary waves-effect waves-light">Add Issue</Link>
                        </div>
                    </div> 

                    <div className='project-list'>
                            { isLoading &&  <Loader /> } 

                            { isError &&  <Message type="danger" message={isError}/>  }

                            { !Object.keys(assignTickets).length && !isLoading && <Message type="info" message={'No Issues Found'} /> }

                            { !isLoading && Object.keys(assignTickets).length > 0 &&  
                                  <table className='table default-table'>
                                        <thead>
                                                <tr>
                                                     <td>Type</td>
                                                     <td>Issue</td>
                                                     <td>Project</td>
                                                     <td>Priority</td>
                                                     <td>Status</td>
                                                     <td>Reporter</td>
                                                     <td>Assignee</td>
                                                     <td>Create On</td>
                                                     <td>Updated On</td>
                                                </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                assignTickets?.map((item)=>{
                                                    return <TicketRow key={item._id} data={item} />
                                                })    
                                            }
                                        </tbody>
                                 </table>  
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

export default YourWork