import React, { useEffect, useState } from 'react'
import BreadCrumb from '../_views/BreadCrumb'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TicketRow from '../_components/TicketRow'

const YourWork = () => {
    
    const [list, setList] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/v1/tickets/my-ticket`).then((res)=>{
             console.log(res);
             setList(res.data.ticketAssign)
        }).catch((err)=>{
             console.log(err);
        })
    }, [])

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <BreadCrumb title="Your Work" />

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
    )
}

export default YourWork