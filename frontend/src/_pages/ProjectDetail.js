 import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import TicketRow from '../_components/TicketRow';  
import BreadCrumb from '../_views/BreadCrumb';
import { useSelector, useDispatch } from 'react-redux' 
import projectActions from '../_redux/_actions/projectActions'; 
import moment from 'moment';
import MD5 from "crypto-js/md5"
import SideBar from '../_views/SideBar'
import Loader from '../_components/Loader';
import Message from '../_components/Message';

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

    const bugColor = {
        "Done"  : 'done',
        "Hold"  : 'hold',
        "To Do" : 'todo', 
    };

    return (
        <>
                <SideBar />
                <div className='web-layout pt-4 px-4'>
                    <BreadCrumb title="Project Overview" />

                    <div className='user-layout'>
                        
                        <div className='d-flex justify-content-between align-items-center mb-4'>
                                <div>
                                    {tickets.length} Issue Found
                                </div>
                                <div>
                                    <Link to={'/project'} className="btn btn-primary waves-effect waves-light">All Projects</Link>
                                </div>
                        </div> 

                        { isLoading &&  <Loader /> } 

                        { isError &&  <Message type="danger" message={isError}/>  }

                        
                        { !isLoading && <>
                            <div className='project-details mb-5'>
                                    <h5>{title}</h5>
                                    <p className="text-muted mt-3 mb-4">{discription}</p>
                                    <ul className="navbar-nav d-flex align-items-center flex-row gap-3">
                                        <li>
                                            <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <div className={`typeinfo ${bugColor[status]}`}>
                                                                { status === 'Done' && <i className="fa fa-check"></i> }
                                                                { status === 'Hold' && <i className="fa fa-circle"></i> }
                                                                { status === 'To Do' && <i className="fa fa-bookmark"></i> } 
                                                        </div>
                                                    </div>
                                                    <div>{ status }</div>
                                            </div> 
                                        </li> 
                                        <li>
                                            <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <div className={`typeinfo Feature`}>
                                                            <i className='fa fa-calendar'></i>     
                                                        </div>
                                                    </div>
                                                    <div> { moment(createdAt).format('D MMM, YY') }</div>
                                            </div>  
                                        </li> 
                                        <li>
                                            <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <div className={`typeinfo hold`}>
                                                            <i className='fa fa-pen'></i>     
                                                        </div>
                                                    </div>
                                                    <div> {tickets.length} Tickets </div>
                                            </div>  
                                        </li> 
                                        <li>
                                            <div className='d-flex align-items-center gap-2'>
                                                    <div>
                                                        <div className={`typeinfo done`}>
                                                            <i className='fa fa-user'></i>     
                                                        </div>
                                                    </div>
                                                    <div>{isUser?.firstName} {isUser?.lastName}</div>
                                            </div>  
                                        </li>
                                    </ul>
                            </div>
                        </>}    

                            { Object.keys(tickets).length > 0 ? <> 
                                <div className='project-list'>
                                        <table className="table default-table">
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
                                                        Object.keys(tickets).length > 0 &&  tickets?.map((item)=>{ 
                                                            return  <TicketRow key={item._id} data={item} />
                                                        })      
                                                    }
                                                </tbody>
                                        </table> 
                                </div>
                            </> : 
                            <>
                                { !isLoading && <Message type="danger" message={'No Issues Found'} /> }
                            </>
                        } 
                    </div>
                </div>
        </>
    )
}

export default ProjectDetail