import React from 'react'
import { Link } from 'react-router-dom';

const IssueBox = ({item}) => {
    const { type, title, _id, priority, reportar : {firstName, lastName}, points, status } = item;
    return (
        <div data-component="issueBox" key={_id} className='box-panel'>
            <div className='issue-list bg-white p-3'>
                <p className='mb-3'><Link className='text-dark' to={`/ticket/${_id}`}>{title}</Link></p>

                <div className='row justify-content-between'>
                    <div className='col'>
                        <div className='ops'>
                             { points > 0 && <div className="typeinfo">{points}</div> }
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-flex justify-content-end gap-2'>
                            <div>
                                <div className={`typeinfo ${type}`}>
                                    {type === 'Task' && <i className="fa fa-check"></i>}
                                    {type === 'Story' && <i className="fa fa-bookmark"></i>}
                                    {type === 'Bug' && <i className="fa fa-circle"></i>}
                                    {type === 'Feature' && <i className="fa fa-gear"></i>}
                                </div>
                            </div>
                            <div>
                                <div className={`typeinfoP ${priority}`}>
                                    {
                                        priority == 'Low' || priority == 'Medium' ? <i className="fa fa-arrow-down" /> : <i className="fa fa-arrow-up" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IssueBox