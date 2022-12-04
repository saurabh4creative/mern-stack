import React, { useEffect, useRef, useState } from 'react'
import BreadCrumb from '../_views/BreadCrumb'
import {  useForm } from "react-hook-form"
import axios from 'axios';
import { BASE_URL } from '../_helpers/config';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'react-bootstrap-editor';
import SideBar from '../_views/SideBar';
import { Link } from 'react-router-dom'; 
import ticketActions from '../_redux/_actions/ticketActions';
import Loader from '../_components/Loader';
import Message from '../_components/Message';
 
const CreateTicket = () => {
    const { register, handleSubmit, setValue, reset  } = useForm();
    const { _id } =  useSelector(state=>state.userReducer.user); 
    const dispatch = useDispatch();
    const dataFetchedRef = useRef(false);
    const { isLoading, get_projects, get_users} = useSelector(state=>state.ticketReducer);
    const [ status, setStatus ] = useState(false);
    const [ message, setMessage ] = useState('');
    const [ isLoad, setIsLoad ] = useState(false);

    useEffect(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        dispatch( ticketActions.ticket_fetch() );
        dispatch( ticketActions.get_details() ); 
        setValue("reportar", _id);
    }, [])
  
    const onSubmit = (data) => {
        setIsLoad(true);
        axios.post(`${BASE_URL}/api/v1/tickets/create`, data).then((res)=>{
             setStatus(true);
             setMessage(res.data.message);
             setIsLoad(false); 
             reset();
        }).catch((err)=>{
             setStatus(true);
             setMessage(err.message);
             reset();
        }) 
    };
 

    return (
        <>
            <SideBar />
                <div className='web-layout pt-4 px-4 pb-4'>
                    <BreadCrumb title="Create Issue" />

                    <div className='user-layout'>
                        
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div></div>
                                <div>
                                    <Link to={'/ticket'} className="btn btn-primary waves-effect waves-light">All Issues</Link>
                                </div>
                        </div> 

                        { isLoading && <Loader /> }
                        
                        { !isLoading && <>
                        <div className='row'>
                              <div className='col-lg-12'>
                                    <form onSubmit={handleSubmit(onSubmit)} className="mb-4"> 
                                        <div className="row mb-4">
                                            <label>Project Name</label>
                                            <div className="col-lg-12">
                                                <select {...register("project", { required: true })} name="project" className='form-control'>
                                                    <option>Select Project</option>
                                                    {
                                                        get_projects?.map((item)=>{
                                                            return (
                                                                <option key={item._id} value={item._id}>{item.title}</option>
                                                            );
                                                        })
                                                    } 
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label>Select Priority</label>
                                            <div className="col-lg-12">
                                                <select {...register("priority", { required: true })} name="priority" className='form-control'>
                                                    <option>Select</option>
                                                    <option>Emergency</option>
                                                    <option>Critical</option>
                                                    <option>High</option>
                                                    <option>Medium</option>
                                                    <option>Low</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label >Issue Type</label>
                                            <div className="col-lg-12">
                                                <select {...register("type", { required: true })} className='form-control'>
                                                    <option>Select</option> 
                                                    <option>Bug</option> 
                                                    <option>Story</option> 
                                                    <option>Task</option>
                                                    <option>Feature</option>  
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label>Short Summary</label>
                                            <div className="col-lg-12">
                                                <input {...register("title", { required: true })} name="title" type="text" className="form-control" placeholder="Ticket Short Discription" />
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label>Project Description</label>
                                            <div className="col-lg-12">
                                                <Editor {...register("discription", { required: true })} name="discription" onChange={(val)=>{setValue('discription', val)}} value="<p></p>" />
                                            </div>
                                        </div> 

                                        <div className="row mb-4">
                                            <label>Reportar</label>
                                            <div className="col-lg-12">
                                                <select {...register("reportar", { required: true })} name="reportar" className='form-control'>
                                                    <option value={0}>Select</option>
                                                    {
                                                        get_users?.map((item)=>{
                                                            return (
                                                                <option key={item._id} value={item._id}>{item.firstName} {item.lastName}</option>
                                                            );
                                                        })
                                                    } 
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label>Assignee</label>
                                            <div className="col-lg-12">
                                                <select {...register("assignee", { required: true })} name="assignee" className='form-control'>
                                                    <option value={0}>Select</option>
                                                    {
                                                        get_users?.map((item)=>{
                                                            return (
                                                                <option key={item._id} value={item._id}>{item.firstName} {item.lastName}</option>
                                                            );
                                                        })
                                                    } 
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label>Estimate</label>
                                            <div className="col-lg-12">
                                                <input {...register("estimate", { required: true })} name="estimate" type="text" className="form-control" placeholder="Estimate 2W 10D 1H 2D 20S" />
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label>Story Point</label>
                                            <div className="col-lg-12">
                                                <input {...register("points", { required: true })} name="points" type="text" className="form-control" placeholder="Story Point" />
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <label>Status</label>
                                            <div className="col-lg-12">
                                                <select {...register("status", { required: true })} name="status" className='form-control'>
                                                    <option value={0}>Select</option>
                                                    <option>Backlog</option>
                                                    <option>To Do</option>
                                                    <option>Open</option>
                                                    <option>Pending</option> 
                                                    <option>Done</option> 
                                                </select>
                                            </div>
                                        </div>  

                                        <div className="row justify-content-end">
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">
                                                    {isLoad ? <><span className="spinner-border spinner-border-sm" /> &nbsp;&nbsp;Please Wait</> : 'Submit'} 
                                                </button>
                                            </div>
                                        </div>
                                    </form> 

                                    { status &&  <Message type="info" message={message}/> }
                              </div>     
                        </div> 
                        </> 
                        }
                    </div>
                </div>
        </>
    )
}

export default CreateTicket