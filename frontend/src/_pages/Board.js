import { Link } from 'react-router-dom';
import BreadCrumb from '../_views/BreadCrumb'
import SideBar from '../_views/SideBar';
import ticketActions from '../_redux/_actions/ticketActions' 
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../_components/Message';
import Loader from '../_components/Loader'; 
import axios from 'axios';
import moment from 'moment';   
import { useForm } from "react-hook-form"
import IssueBox from '../_components/IssueBox';
import Accordion from 'react-bootstrap/Accordion';

const Board = () => {
  
  const dataFetchedRef = useRef(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const { isLoading, isError, isMessage, isStatus, tickets } = useSelector(state=>state.ticketReducer);
  const [ board, setBoard] = useState({});
  const [ ticketID, setTicketID ] = useState('');
  const { register, handleSubmit, reset } = useForm();

  useEffect(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        dispatch(ticketActions.ticket_fetch());
        dispatch(ticketActions.ticket_success()); 

        axios.get('http://localhost:8080/api/v1/users/karbon').then((res)=>{
             setBoard(res.data.data);
        }) 

        axios.get('http://localhost:8080/api/v1/tickets/create').then((res)=>{
             setUser(res.data.users)
        })
  }, []); 
 
    const onDragStart = (id) => { 
        setTicketID(id);
    }

    const onDrop = (id) => { 
        axios.post(`http://localhost:8080/api/v1/users/karbon/update`, { id : id, ticket_ID : ticketID }).then((res)=>{
            console.log(res)
        })
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }


    const onSubmit = (data) => {
        axios.post('http://localhost:8080/api/v1/users/create', data).then((res)=>{
              console.log(res);
        })
   };

  return (
       <> 
            <SideBar />
            <div className='web-layout pt-4 px-4'>
                <BreadCrumb title="Karbon Board" />

                <div className='user-layout'>
                      <div className='row'>
                           <div className='col-lg-3'>
                                <p><b>BackLogs</b></p>

                                <div className='sprint-bg h-ober p-3'>
                                     
                                     { Object.keys(tickets).length > 0 && 
                                       
                                       Object.keys(tickets).length > 0 &&  tickets?.filter((item=>item.board.length == 0)).map((item)=>{
                                            return (
                                                <div key={item._id} className="mb-3"><IssueBox  item={item} key={item._id}/></div> 
                                            )
                                       })
                                     } 
                                     
                                </div>
                           </div>
                           <div className='col-lg-9'>
                                <div className='sprint-board'>
                                     <p><b>Sprints</b></p>

                                     <div className='sprint-bg accordien p-3'>
                                          <Accordion defaultActiveKey="0">
                                          {
                                              Object.keys(board).length > 0 && 
                                              
                                              Object.values(board).map((item, index)=>{
                                                const ticketsSprint = item.tickets;
                                                const { isActive, name, createdAt, start, end } = item;
                                                return (
                                                     <Accordion.Item key={item._id} eventKey={index}>
                                                        <Accordion.Header>
                                                            <div className='d-flex w-100 f-14 align-items-center justify-content-between'>
                                                                <div>
                                                                     <p className="card-title mb-2">{name}</p>
                                                                     <p className='mb-0'>{Object.keys(ticketsSprint).length} Issues Found</p> 
                                                                </div>
                                                                <div className="d-flex chans gap-3 align-items-center">
                                                                        <div>
                                                                              Status <br />
                                                                              { isActive ? 'Active' : 'In Active' }
                                                                        </div> 
                                                                        <div>
                                                                              Created On <br />
                                                                              {moment(createdAt).format('D MMM, YY')}
                                                                        </div> 
                                                                        <div>
                                                                              Start Date <br />
                                                                              {moment(start).format('D MMM, YY')}
                                                                        </div>
                                                                        <div>
                                                                              End Date <br />
                                                                              {moment(end).format('D MMM, YY')}
                                                                        </div>
                                                                        <div>
                                                                              Remain Days<br />
                                                                              {moment(end).diff( moment(new Date()), 'days')}
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className='sprint-tickets'>
                                                                {
                                                                Object.keys(ticketsSprint).length > 0 ? 
                                                                <>
                                                                    <div className='project-list pt-3 px-2'>
                                                                        <table className='table default-table'>
                                                                            <thead>
                                                                                  <tr>
                                                                                      <td>Type</td>
                                                                                      <td>Title</td>
                                                                                      <td>Priority</td>
                                                                                      <td>Project</td>
                                                                                      <td>Story</td>
                                                                                  </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                        Object.keys(ticketsSprint).length > 0 &&  ticketsSprint.map((item)=>{
                                                                                            const { type, priority } = item;
                                                                                            return (
                                                                                                <tr id={item._id} key={item._id}> 
                                                                                                    <td>
                                                                                                        <div className={`typeinfo ${type}`}>
                                                                                                            { type === 'Task' && <i className="fa fa-check"></i> }
                                                                                                            { type === 'Story' && <i className="fa fa-bookmark"></i> }
                                                                                                            { type === 'Bug' && <i className="fa fa-circle"></i> }
                                                                                                            { type === 'Feature' && <i className="fa fa-gear"></i> }
                                                                                                        </div>    
                                                                                                    </td>
                                                                                                    <td>{item.title}</td>
                                                                                                    <td> 
                                                                                                        <div className={`typeinfoP ${priority}`}>
                                                                                                            {   
                                                                                                                priority == 'Low' || priority == 'Medium' ? <i className="fa fa-arrow-down" /> : <i className="fa fa-arrow-up" /> 
                                                                                                            }
                                                                                                        </div> 
                                                                                                    </td>
                                                                                                    <td>{item.project.title}</td>
                                                                                                    <td>{item.points}</td> 
                                                                                                </tr>
                                                                                            )
                                                                                        })
                                                                                }
                                                                            </tbody>
                                                                        </table> 
                                                                    </div>
                                                                </> :  
                                                                <>
                                                                        <div className="alert alert-danger mt-4 mb-4" role="alert">
                                                                            No Tickets
                                                                        </div>
                                                                </>
                                                                }

                                                                <div className='row align-items-center'>
                                                                    <div className='col'>
                                                                            <p className='m-0 text-start'>
                                                                                    {ticketsSprint.length} Issues | &nbsp; 
                                                                                    
                                                                                    {ticketsSprint.reduce((acc, it)=> {
                                                                                        return acc + it.points;
                                                                                    }, 0)} Estimate
                                                                            </p>
                                                                    </div>
                                                                    <div className='col text-end'>
                                                                            <Link className='btn btn-info' to={`/board/${item._id}`}>View</Link>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item> 
                                                )
                                              })
                                              
                                          }
                                          </Accordion>
                                     </div>
                                </div>
                           </div>
                      </div>
                </div>
            </div>
       </>
  )
}

export default Board