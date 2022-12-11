import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom' 
import BreadCrumb from '../_views/BreadCrumb';
import SideBar from '../_views/SideBar';
import { DragDropContext } from '@hello-pangea/dnd';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { BASE_URL } from '../_helpers/config';
import Loader from '../_components/Loader';
import moment from 'moment';
import IssueBox from '../_components/IssueBox';
import Message from '../_components/Message';

const BoardDetail = () => {
  
  const {id} = useParams();

  const [ticket, setTickets] = useState({}); 
  const [sprint, setSprint] = useState([])
  const [active, setActive] = useState(false);
  const [disable, setDisable] = useState(false);
  const dataFetchedRef = useRef(false);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState('');
  const [p_array, setParray] = useState([]);
  const [ showModel, setShowModel ] = useState(false);

  useEffect(()=>{
     if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        axios.get(`${BASE_URL}/api/v1/users/karbon/${id}`).then((res)=>{ 
            setIsloading(false);
            if( !res.data.status ){
                setError(res.data.message);
            }else{
               setTickets(res.data.data.tickets)  
               setSprint(res.data.data);
               setParray( [...new Set(Object.values(res.data.data.tickets).map((item)=> item.project.title))] ); 
            }
        }).catch((err)=>{
            setIsloading(false);
            setError(err.message);
        });  
  }, [id]);

  const update_status = (t_id, status) => {
        setDisable(true);
        axios.post(`${BASE_URL}/api/v1/tickets/edit/${t_id}`, { status }).then((res)=>{
             setDisable(false);
        })
  };

  const karbon = {
       "Backlog" : 'Backlog',
       'ToDo' : 'To Do',
       'InProgress' : 'In Progress',
       'Done' : 'Done',
  };    

  let fCounter = 0;
 
   const onDragEnd = (data) => {
       setActive(false);
       const name = karbon[data.destination.droppableId];
       const id = data.draggableId; 
       if( name && id ){ 
           const res = Object.values(ticket).map((item)=>{
                if( item._id === id ){
                     item.status = name;
                }  
                return item;
           }) 
           setTickets(res)  
           update_status(id, name);
       }
   };

   const userIssues = (userID) => {
       if( userID === 'All'  ){
          setTickets(sprint.tickets);
       }else{
          const filterUser = Object.values(sprint.tickets).filter((item)=> item.assignee._id == userID);
          setTickets(filterUser); 
       } 
   } 

   const projectIssues = (title) => {
     if( title === 'All'  ){
        setTickets(sprint.tickets);
     }else{
        const filterProject = Object.values(sprint.tickets).filter((item)=> item.project.title == title);
        setTickets(filterProject); 
     } 
   }
   
   const startSprint = (sprint_id) => {  
       const body = {
          sprint_id : sprint_id,
          isActive :  true,
       }
       axios.post(`${BASE_URL}/api/v1/users/karbon/active`, body).then((res)=>{
            console.log(res);
       });
   }

   const stopSprint = (sprint_id) => {  
     const tickts = Object.values(sprint.tickets).filter((item)=> item.status != 'Done').map((item)=>item._id);
     const ticktp = Object.values(sprint.tickets).filter((item)=> item.status == 'Done').map((item)=>item._id);
     
     const body = {
        sprint_id : sprint_id,
        isActive  : false,
        ticketR   : tickts,
        ticketP   : ticktp,
     } 
     
     axios.post(`${BASE_URL}/api/v1/users/karbon/active`, body).then((res)=>{
          console.log(res);
     }); 
   } 
   

   return (
       <>
            <SideBar />

            { showModel && <> 
            <div className='model-show'>
                  <div className='container'>
                       <div className='row justify-content-center'>
                             <div className='col-lg-5'>
                                  <div className='bg-white position-relative p-4'>
                                        <button onClick={()=>{setShowModel(false)}} className='cls-btn'>X</button>
                                        <h5 className='mb-3'>Are you sure want to Start ?</h5>
                                        <ul>
                                              <li>Start From: {moment(sprint?.start).format('D MMM, YY | h:mm:ss A')}</li>
                                              <li>End To: {moment(sprint?.end).format('D MMM, YY | h:mm:ss A')}</li>
                                              <li>Total Issues: {Object.keys(ticket).length}</li>
                                              <li>Remaining Days: {moment(sprint?.end).diff( moment(new Date()), 'days')}</li>
                                              <li>Story Points: {Object.keys(ticket).length > 0 && Object.values(ticket).map((item) => item.points).reduce((acc, it) => acc+it)}</li>
                                              <li>Pending Issues : {Object.values(sprint.tickets).filter((item)=> item.status != 'Done').map((item)=>item._id).length}</li>
                                        </ul>
                                        <div className='d-flex gap-4'>
                                             <button onClick={()=>{startSprint(sprint._id)}} className='btn btn-primary waves-effect waves-light'>Start Sprint</button>
                                             <button onClick={()=>{stopSprint(sprint._id)}} className='btn btn-primary waves-effect waves-light'>Stop Sprint</button>
                                        </div>
                                  </div>
                             </div>
                       </div>
                  </div>
            </div>
            </> }
            
            <div className='web-layout p-4'>
                <BreadCrumb title="Sprint Detail" />

                { isLoading &&  <Loader /> }

                { error && <Message type="danger" message={error}/> }

                { Object.keys(sprint).length > 0 && <> 
                
                    <div className='sprint-single'>
                         <div className='start-dates row mb-4'>
                              <div className='col'>
                                   <div className='sprint-bg p-3'>
                                        <h6><b>{sprint.name}</b> - {sprint.status}</h6>
                                        <p>{sprint?.discription}</p>
                                        {
                                            sprint?.isActive ? 
                                               <button onClick={()=>{setShowModel(true)}} className='btn btn-primary waves-effect waves-light'>Stop Sprint</button>
                                            : 
                                               <button onClick={()=>{setShowModel(true)}} className='btn btn-primary waves-effect waves-light'>Start Sprint</button>
                                        } 
                                   </div>
                              </div>
                         </div> 

                         <div className='start-dates row mb-4'>
                              <div className='col'>
                                   <div className='sprint-bg p-3'>
                                        Start From <br />{moment(sprint?.start).format('D MMM, YY | h:mm:ss A')}
                                   </div>
                              </div>
                              <div className='col'>
                                   <div className='sprint-bg p-3'>
                                        End To <br />{moment(sprint?.end).format('D MMM, YY | h:mm:ss A')}
                                   </div>
                              </div>
                              <div className='col'>
                                   <div className='sprint-bg p-3'>
                                        Total Issues <br /> 
                                        {Object.keys(ticket).length}
                                   </div>
                              </div>
                              <div className='col'>
                                   <div className='sprint-bg p-3'>
                                        Total Days <br /> 
                                        {moment(sprint?.end).diff( moment(sprint?.start), 'days')}
                                   </div>
                              </div>
                              <div className='col'>
                                   <div className='sprint-bg p-3'>
                                        Remaining Days <br /> 
                                        {moment(sprint?.end).diff( moment(new Date()), 'days')}
                                   </div>
                              </div> 
                              <div className='col'>
                                   <div className='sprint-bg p-3'>
                                        Story Points <br /> 
                                        {Object.keys(ticket).length > 0 && Object.values(ticket).map((item) => item.points).reduce((acc, it) => acc+it)} &nbsp;
                                   </div>
                              </div> 
                         </div> 
                    </div>

                    <div className='sprint-filter mb-4'>
                         <div className='quick-filter d-flex gap-3'>
                              <b>QUICK FILTERS</b> : 
                              
                              <span onClick={()=>{userIssues('All')}} className='text-primary cpointer'>All</span>
                              
                              {
                                   Object.keys(sprint.listUser).length > 0 &&
                                   
                                   Object.values(sprint.listUser).map((item)=>{
                                        return (
                                             <span key={item._id} onClick={()=>{userIssues(item._id)}} className='text-dark cpointer'>
                                                  {item.firstName} {item.lastName} ({ Object.values(sprint.tickets).filter((data)=> data.assignee._id == item._id).length})
                                             </span>
                                        )
                                   })
                              }
                         </div> 
                    </div>

                    <div className='sprint-filter mb-4'>
                         <div className='quick-filter d-flex gap-3'>
                              <b>PROJECT FILTERS</b> :

                              <span onClick={()=>{userIssues('All')}} className='text-primary cpointer'>All</span>
                              
                              {
                                   Object.keys(ticket).length > 0 && 
                                   
                                   p_array.map((item)=>{
                                        return (
                                             <span key={item} onClick={()=>{projectIssues(item)}} className='text-dark cpointer'>
                                                  {item} ({ Object.values(sprint.tickets).filter((data)=> data.project.title == item).length})
                                             </span>
                                        )
                                   })
                              }
                         </div>
                    </div>    
     
                    <div className='user-layout'> 
                         <div className='sprint-board'>
     
                                   <div className='row'>

                                   <DragDropContext 
                                   onDragEnd={onDragEnd}
                                   >
                                   {
                                        Object.entries(karbon).map(([item, name])=>{
                                                  
                                             return (
                                                  <div id={item} className="col" key={item}>
                                                       <div className='sprint-bg h-100 d-flex flex-column p-3'>
                                                                 <div className='d-flex justify-content-between'>
                                                                      <div>
                                                                           <h6 className='mb-2'>{name}</h6>
                                                                      </div>
                                                                      <div>
                                                                           {Object.values(ticket).filter((data)=>data.status === name).length}
                                                                      </div>
                                                                 </div>
                                                                 
                                                                 <Droppable key={item} droppableId={item} index={fCounter++}>
                                                                      {(provided, snapshot) => (
                                                                           
                                                                           <div className={`hoc ${active ? 'active' : ''}`} ref={provided.innerRef} 
                                                                                {...provided.droppableProps} 
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps} 
                                                                           >
                                                                                {
                                                                                     Object.keys(ticket).length && 
                                                                                     
                                                                                     Object.values(ticket).filter((data)=>data.status === name).map((item, index)=>{
                                                                                          const { _id } = item;
                                                                                          return (
                                                                                               <Draggable key={_id} draggableId={_id} index={index}>
                                                                                                    {(provided, snapshot) => (
                                                                                                         <div
                                                                                                              ref={provided.innerRef}
                                                                                                              {...provided.draggableProps}
                                                                                                              {...provided.dragHandleProps}
                                                                                                              className={`mt-3 lasts ${disable && 'disableDrag'}`} 
                                                                                                         >
                                                                                                             <IssueBox item={item} key={item._id}/>  
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
                                                  </div>
                                             )
                                        })
                                   }
                                   </DragDropContext> 
                                        
                                   </div>
                         </div>
                    </div>

                </> }
            </div>
       </>
  )
}

export default BoardDetail