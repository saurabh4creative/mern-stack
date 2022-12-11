import React, { useEffect, useRef, useState } from 'react'
import BreadCrumb from '../_views/BreadCrumb'
import SideBar from '../_views/SideBar';
import { DragDropContext } from '@hello-pangea/dnd';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import axios from 'axios';
import { BASE_URL } from '../_helpers/config';
import IssueBox from '../_components/IssueBox';
import Accordion from 'react-bootstrap/Accordion';
import moment from 'moment';   
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Loader from '../_components/Loader';
import Message from '../_components/Message';

const Board = () => {

  const dataFetchedRef = useRef(false);
  const [ tickets, setTickets ] = useState({});
  const [ board, setBoard] = useState({});
  const [ createSprint, setCreateSprint ] = useState(false);
  const { register, handleSubmit } = useForm();
  const [ user, setUser ] = useState({});
  const [ sLoader, setSLoader ] = useState(false);
  const [ tLoader, setTLoader ] = useState(false);
  const [ error, setError ] = useState('');

  useEffect(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        setSLoader(true);
        setTLoader(true)
        
        const getData = async () => {
            try{
                const ticketResponse = await axios.get(`${BASE_URL}/api/v1/tickets/all`);
                setTickets(ticketResponse.data.tickets);
                setTLoader(false);
    
                const boardResponse  = await axios.get(`${BASE_URL}/api/v1/users/karbon`);
                setBoard(boardResponse.data.data); 
                setSLoader(false);
    
                const userResponse   = await axios.get(`${BASE_URL}/api/v1/tickets/create`);
                setUser(userResponse.data.users)
            }catch(err){
                setError(err.message);
                setSLoader(false);
                setTLoader(false);
            }
        }

        getData(); 
  }, []); 

  const onSubmit = async (data) => {
        const submitResponse = await axios.post(`${BASE_URL}/api/v1/users/create`, data);
        
        const boardResponse  = await axios.get(`${BASE_URL}/api/v1/users/karbon`);
        setBoard(boardResponse.data.data); 
  }

  const onDragEnd = (data) => {
     console.log(data);
     
     if( data.draggableId == data.source.droppableId ){
          return false;
     }

     if( data.destination.droppableId != "leftDrag" ){
          const ticketID = data.draggableId;
          const id =  data.destination.droppableId;

          const responseTicket = tickets.filter((item) => {
            if( item._id === ticketID ){
                 item.board = [id];
            }
            return item;
         });

         setTickets(responseTicket); 

         const updateBoard = board.map((item)=>{
            if( item._id == id ){
                item.tickets.push( tickets.find((item) => item._id === ticketID ) )
            } 

            return item;
         })

         setBoard(updateBoard);

         axios.post(`${BASE_URL}/api/v1/users/karbon/update`, { id : id, ticket_ID : ticketID }).then((res)=>{
              console.log(res); 
         });
     }
  }

  return (
        <>
             <SideBar />
             <div className='web-layout pt-4 px-4'>
                 <BreadCrumb title="Karbon Board" />

                 { !tLoader && !sLoader && error && <Message type="danger" message={error}/> }
                 
                 <DragDropContext onDragEnd={onDragEnd}>
                        <div className='user-layout'>
                            <div className='row'>
                                    <div className='col-lg-3'>
                                        <h6><b>BackLogs</b></h6>
                                        { tLoader && <Loader /> }
                                        { Object.keys(tickets).length > 0 && <>
                                            <div className='sprint-bg h-ober p-3 h-aj'>
                                                <Droppable key={1} droppableId={'leftDrag'} index={1}>    
                                                    {(provided, snapshot) => (
                                                        <div ref={provided.innerRef} {...provided.droppableprops} {...provided.draggableprops} {...provided.draghandleprops} >
                                                            { 
                                                            Object.keys(tickets).length > 0 &&  tickets?.filter((item=>item.board.length == 0)).filter((item=>item.status != 'Done')).map((item, index)=>{
                                                                        return (         
                                                                            <Draggable key={item._id} draggableId={item._id} index={index}>
                                                                                {(provided, snapshot) => (
                                                                                        <div
                                                                                            ref={provided.innerRef}
                                                                                            {...provided.draggableProps}
                                                                                            {...provided.dragHandleProps}
                                                                                            className={`mt-3 lasts`} 
                                                                                        >
                                                                                            <div key={item._id} className="mb-3"><IssueBox  item={item} key={item._id}/></div> 
                                                                                        </div> 
                                                                                )}
                                                                            </Draggable> 
                                                                        )
                                                                })
                                                            } 

                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Droppable> 
                                            </div> 
                                        </> }
                                    </div>
                                    <div className='col-lg-9'>
                                        <div className='row justify-content-between'>
                                             <div className='col'>
                                                    <h6><b>All Sprints</b></h6>
                                             </div>
                                             <div className='col'>
                                                    <div className='text-end'>
                                                         <p className='mb-0'><Link to={`/board/create`}>Create Sprint</Link></p>
                                                    </div>
                                             </div>
                                        </div>

                                        <div className={`sprint-form mb-3 ${createSprint ? 'd-block' : 'd-none'}`}>
                                              <div className='sprint-bg p-3'>
                                                    <h6>Add New Sprint</h6>

                                                    <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>  
                                                        <div className="mb-3 row"> 
                                                            <div className="col-md-12">
                                                                <input {...register("name", { required: true })} placeholder='Board Name' className="form-control" type="text"  />
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 row"> 
                                                            <div className="col-md-12">
                                                                <textarea {...register("discription", { required: true })} placeholder='Board Discription' rows={3} className="form-control"   />
                                                            </div>
                                                        </div>

                                                        <div className="mb-3 row"> 
                                                            <div className="col-md-6">
                                                                <input {...register("start", { required: true })} placeholder='Board Name' className="form-control" type="date"  />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input {...register("end", { required: true })} placeholder='Board Name' className="form-control" type="date"  />
                                                            </div>
                                                        </div>  
                                                        
                                                        <div className="mb-3 row"> 
                                                            <div className="col-md-12">
                                                                <select multiple {...register("user", { required: true })} className='form-control'>
                                                                    <option>Select Members</option>
                                                                    {
                                                                        Object.keys(user).length > 0 &&

                                                                        Object.values(user).map((item)=>{
                                                                                return <option key={item._id} value={item._id}>{item.firstName} {item.lastName}</option>
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className='submit-btn'>
                                                            <button className="btn btn-primary waves-effect waves-light">Submit</button>
                                                        </div>
                                                    </form> 
                                              </div>
                                        </div>
                                        
                                        { sLoader && <Loader /> }
                                        
                                        { Object.keys(board).length > 0 && <>
                                        <div className='sprint-bg accordien p-3'>
                                            <Accordion defaultActiveKey="0" className='my-n3'>
                                                {
                                                    Object.values(board).map((item, index)=>{
                                                        const ticketsSprint = item.tickets;
                                                        const { isActive, name, createdAt, start, end, status } = item;
                                                        
                                                        return ( 
                                                                <Droppable key={item._id} droppableId={item._id} index={index}>    
                                                                    {(provided, snapshot) => (
                                                                        <div className='my-3' id={item._id} ref={provided.innerRef} {...provided.droppableprops} {...provided.draggableprops} {...provided.draghandleprops} >
                                                                                
                                                                                <Draggable key={item._id} draggableId={item._id} index={index}>
                                                                                    {(provided, snapshot) => (
                                                                                            <div
                                                                                                ref={provided.innerRef}
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                className={`no-scroll  ${item.isActive ? 'active' : 'noActive'}`}  
                                                                                            >

                                                                                            <div className='actibe'>   
                                                                                                <Accordion.Item eventKey={index}>
                                                                                                    <Accordion.Header>
                                                                                                        <div className='d-flex w-100 f-14 align-items-center justify-content-between'>
                                                                                                            <div>
                                                                                                                <p className="card-title mb-2">{name}</p>
                                                                                                                <p className='mb-0'>{Object.keys(ticketsSprint).length} Issues Found</p> 
                                                                                                            </div>
                                                                                                            <div className="d-flex chans gap-3 align-items-center">
                                                                                                                    <div>
                                                                                                                        Status <br />
                                                                                                                        { status }
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
                                                                                                                        Days<br />
                                                                                                                        {moment(end).diff( moment(start), 'days') + 1}
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
                                                                                                                                            <td><Link className='text-dark' to={`/ticket/${item._id}`}>{item.title}</Link></td>
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
                                                                                                                        No Issues Found
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
                                                                                                                <div className='col d-flex gap-3 justify-content-end text-end'>
                                                                                                                        <Link className='btn btn-info' to={`/board/${item._id}`}>View</Link>
                                                                                                                        <Link className='btn btn-info' to={`/board/edit/${item._id}`}>Edit</Link>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                    </div>
                                                                                                    </Accordion.Body>
                                                                                                </Accordion.Item> 
                                                                                                </div> 
                                                                                            </div> 
                                                                                    )}
                                                                                </Draggable> 

                                                                                <div className='hide-placeholder'>{provided.placeholder}</div>      
                                                                            </div>
                                                                        )}   
                                                                </Droppable>     
                                                        )
                                                    })
                                                }
                                            </Accordion> 
                                        </div>
                                        </> }
                                    </div>
                            </div>
                        </div>
                 </DragDropContext> 
             </div>
        </>
  )
}

export default Board