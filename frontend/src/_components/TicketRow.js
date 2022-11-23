import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom'

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
        "Emergency" : 'danger'  
  };

  return (
        <tr>
            <td>
                <span className={`badge bg-${bugColor[type]}`}>{type}</span>  
            </td>
            <td><Link style={{color:"#000", fontWeight:500}} to={`/ticket/${_id}`}>{title}</Link></td>
            <td><Link to={`/project/${props.data.project._id}`}>{props.data.project.title}</Link></td>
            <td> 
                <span className={`badge bg-${bugColor[priority]}`}>{priority}</span>  
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