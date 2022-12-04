import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom' 
import BreadCrumb from '../_views/BreadCrumb';
import SideBar from '../_views/SideBar';
import { DragDropContext } from '@hello-pangea/dnd';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { BASE_URL } from '../_helpers/config';
import Loader from '../_components/Loader';
import moment, { months } from 'moment';
import IssueBox from '../_components/IssueBox';

const BoardDetail = () => {
  
  const {id} = useParams();

  const [ticket, setTickets] = useState({}); 
  const [sprint, setSprint] = useState([])
  const [active, setActive] = useState(false);
  const [disable, setDisable] = useState(false);
  const dataFetchedRef = useRef(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(()=>{
     if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        axios.get(`${BASE_URL}/api/v1/users/karbon/${id}`).then((res)=>{ 
            setTickets(res.data.data.tickets)  
            setSprint(res.data.data);
            setIsloading(false);
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
                if( item._id == id ){
                     item.status = name;
                }  
                return item;
           }) 
           setTickets(res)  
           update_status(id, name);
       }
   };

   

  return (
       <>
            <SideBar />
            
            <div className='web-layout p-4'>
                <BreadCrumb title="Sprint Detail" />

                { isLoading &&  <Loader /> }

                { Object.keys(sprint).length > 0 && <> 
                
                    <div className='sprint-single'>
                         <h6>{sprint.name}</h6>
                         <p>{sprint?.discription}</p>

                         <div className='start-dates d-flex mb-4 gap-4'>
                              <div className='sprint-bg p-3'>
                                    Start From - <br />{moment(sprint?.start).format('D MMM, YY | h:mm:ss A')}
                              </div>
                              <div className='sprint-bg p-3'>
                                    End To - <br />{moment(sprint?.end).format('D MMM, YY | h:mm:ss A')}
                              </div>
                              <div className='sprint-bg p-3'>
                                    Total Days - <br /> 
                                    {moment(sprint?.end).diff( moment(sprint?.start), 'days')}
                              </div>
                              <div className='sprint-bg p-3'>
                                    Remaining Days - <br /> 
                                    {moment(sprint?.end).diff( moment(new Date()), 'days')}
                              </div>
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
                                                                           {Object.values(ticket).filter((data)=>data.status == name).length}
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
                                                                                     
                                                                                     Object.values(ticket).filter((data)=>data.status == name).map((item, index)=>{
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