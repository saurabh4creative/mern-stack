import React from 'react'
import MD5 from "crypto-js/md5"
import { Link } from 'react-router-dom'
import moment from 'moment';
import Tooltip from 'react-bootstrap/Tooltip'; 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const ProjectBox = ({data}) => {
    const bugColor = {
        "Done"  : 'done',
        "Hold"  : 'hold',
        "To Do" : 'todo', 
    };
    
    const avtarName = (name) => {
      return name.split('')[0];
    } 

    const { title, createdAt, updatedAt, _id, isUser : {firstName, lastName}, status } = data;

    return (
       <tr id={_id}>
            <td>
                <img className='rounded-circle' src={`https://www.gravatar.com/avatar/${MD5(data._id).toString()}?d=retro&s=30`} alt="" />
            </td>
            <td>
                <Link to={`/project/${_id}`} className="nav-link">{title}</Link>
            </td>
            <td> 
                
                <OverlayTrigger overlay={(props) => (
                        <Tooltip {...props}>
                            {status}
                        </Tooltip>
                )}
                    placement="top"
                >
                    <div className={`typeinfo ${bugColor[status]}`}>
                        { status === 'Done' && <i className="fa fa-check"></i> }
                        { status === 'Hold' && <i className="fa fa-circle"></i> }
                        { status === 'To Do' && <i className="fa fa-bookmark"></i> } 
                    </div> 
                </OverlayTrigger> 
            </td>
            <td>
                { moment(createdAt).format('D MMM, YY') }
            </td>
            <td>
                { moment(updatedAt).format('D MMM, YY') }
            </td>
            
            <td>
                 
                <OverlayTrigger overlay={(props) => (
                        <Tooltip {...props}>
                            {firstName} {lastName} 
                        </Tooltip>
                )}
                    placement="top"
                >
                    <div className="avatar-xs text-center">
                        <div className='sod d-inline-block'>
                            <span className="avatar-title rounded-circle bg-dangers text-white font-size-16">
                                {avtarName(firstName)}{avtarName(lastName)}
                            </span> 
                        </div>
                    </div>  
                </OverlayTrigger> 
            </td>
            <td>
                 
            </td>
       </tr>
  )
}

export default ProjectBox