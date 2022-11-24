import React, { useEffect, useRef } from 'react'
import BreadCrumb from '../_views/BreadCrumb' 
import TicketRow from '../_components/TicketRow'
import { useSelector, useDispatch } from 'react-redux'
import ticketActions from '../_redux/_actions/ticketActions'


const MyWork = () => {
     
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch();  
    const { isLoading, reportarTickets } = useSelector(state=>state.ticketReducer);
 
    useEffect(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        dispatch(ticketActions.ticket_fetch());
        dispatch(ticketActions.works_tickets()); 
    }, [dispatch])

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <BreadCrumb title="Your Work" />

                    {
                            isLoading ? <>
                                <div className='col-12'>
                                        <div className="spinner-border text-primary m-1" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                </div>
                            </> : <>
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
                                                    Object.keys(reportarTickets).length > 0 &&  reportarTickets?.map((item)=>{ 
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
                </div>
            </div>
        </div>
    )
}

export default MyWork