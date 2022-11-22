import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TicketRow from '../_components/TicketRow';
import { BASE_URL } from '../_helpers/config';
import BreadCrumb from '../_views/BreadCrumb';

const ProjectDetail = () => {
    const { id } = useParams();

    const [list, setList] = useState({});
    
    useEffect(()=>{
        axios.get(`${BASE_URL}/api/v1/projects/detail/${id}`).then((res)=>{
            setList(res.data.tickets);
        })
    }, [id]);

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <BreadCrumb title="Project Detail - Bigrock India" />

                        <div className="row">
                            <div className="col-xl-12"><div className="card"><div className="card-body"><div className="d-flex"><div className="flex-shrink-0 me-4"><div className="avatar-md"><span className="avatar-title rounded-circle bg-light text-danger font-size-16"><img src="assets/images/companies/img-1.png" alt="" height="30" /></span></div></div><div className="flex-grow-1 overflow-hidden"><h5 className="text-truncate font-size-15"><a className="text-dark" href="/project/637c03bd86ef8141778277b6">Bigrock India</a></h5><p className="text-muted mb-4">It will be as simple as Occidental</p><div className="avatar-group"><div className="avatar-group-item"><img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xs" />   Kunal Shaw</div></div></div></div></div><div className="px-4 py-3 border-top"><ul className="list-inline mb-0"><li className="list-inline-item me-3"><span className="badge bg-success">Completed</span></li><li className="list-inline-item me-3"><i className="bx bx-calendar me-1" /> 22 Nov, 22</li><li className="list-inline-item me-3"><i className="bx bx-comment-dots me-1" /> 214</li></ul></div></div></div>
                        </div>

                        <div className='mb-3'></div>

                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">All Tickets</h4>
                            <div className="page-title-right"></div>
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

export default ProjectDetail