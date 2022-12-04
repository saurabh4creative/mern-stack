import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom'
import Tooltip from 'react-bootstrap/Tooltip'; 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const TicketRow = (props) => {
 const { type, title, updatedAt, createdAt, _id, priority, status } = props.data;

 const bugColor = {
        "Bug" : 'danger',
        "Story" : 'warning',
        "Task" : 'success',
        "Feature" : "warning",
        "Low" : 'success',
        "Medium" : 'warning',
        "Normal" : 'success',
        "High" : 'danger',
        "Emergency" : 'danger',
        'Critical' : 'danger'  
  };

  return (
        <tr>
            <td> 
                <OverlayTrigger overlay={(props) => (
                        <Tooltip {...props}>
                            {type}
                        </Tooltip>
                )}
                    placement="top"
                >
                    <div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" className={`typeinfo ${type}`}>
                        { type === 'Task' && <i className="fa fa-check"></i> }
                        { type === 'Story' && <i className="fa fa-bookmark"></i> }
                        { type === 'Bug' && <i className="fa fa-circle"></i> }
                        { type === 'Feature' && <i className="fa fa-gear"></i> }
                    </div> 
                </OverlayTrigger> 
            </td>
            <td><Link className='nav-link' to={`/ticket/${_id}`}>{title}</Link></td>
            <td><Link className='nav-link' to={`/project/${props.data.project._id}`}>{props.data.project.title}</Link></td>
            <td>
                 

                <OverlayTrigger overlay={(props) => (
                        <Tooltip {...props}>
                            {priority}
                        </Tooltip>
                )}
                    placement="top"
                >
                    <div className={`typeinfoP ${priority}`}>
                        {   
                            priority == 'Low' || priority == 'Medium' ? <i className="fa fa-arrow-down" /> : <i className="fa fa-arrow-up" /> 
                        }
                    </div> 
                </OverlayTrigger> 
            </td>
            <td>{status}</td>
            <td>{props.data?.reportar?.firstName || 'Unassigned'} {props.data?.reportar?.lastName}</td>
            <td>{props.data?.assignee?.firstName || 'Unassigned'} {props.data?.assignee?.lastName}</td>
            <td>{ moment(createdAt).format('D MMM, YY') }</td>
            <td>{ moment(updatedAt).format('D MMM, YY') }</td>
        </tr>
  )
}

export default TicketRow