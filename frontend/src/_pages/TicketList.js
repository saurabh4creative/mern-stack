import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../_helpers/config'
import BreadCrumb from '../_views/BreadCrumb'
import TicketRow from '../_components/TicketRow'
import { Link } from 'react-router-dom'

const TicketList = () => {

    const [list, setList] = useState({});
    
    useEffect(() => {
        axios.get(`${BASE_URL}/api/v1/tickets/all`).then((res) => {
            console.log(res);
            setList(res.data.tickets);
        })
    }, [])

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <BreadCrumb title="All Tickets" />

                        <div className='d-flex justify-content-end mb-2'>
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
                                                Object.keys(list).length > 0 &&  list?.map((item)=>{ 
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketList