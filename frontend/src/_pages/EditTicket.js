import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BreadCrumb from '../_views/BreadCrumb'
import { useSelector, useDispatch } from 'react-redux'
import ticketActions from '../_redux/_actions/ticketActions'
import axios from 'axios';
import { BASE_URL } from '../_helpers/config';
import {  useForm } from "react-hook-form"
import { Editor } from 'react-bootstrap-editor';

const EditTicket = () => {
    const { id } = useParams();
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch();
    const { isLoading, ticketDetail, isError, isMessage } = useSelector(state => state.ticketReducer);
    const { register, handleSubmit, setValue  } = useForm();

    const [ projects, setProjects ] = useState([]);
    const [ users, setUsers ] = useState([]);
 

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        
        axios.get(`${BASE_URL}/api/v1/tickets/create`).then((res)=>{
            const { users, projects } = res.data;
            setProjects(projects);
            setUsers(users);

            dispatch(ticketActions.ticket_fetch());
            dispatch(ticketActions.ticket_detail(id));  
        })

       
    }, [id, ticketDetail]); 

    const onSubmit = (data) => {
        axios.post(`${BASE_URL}/api/v1/tickets/edit/${id}`, data).then((res)=>{
             console.log(res);
        });
    }

    setValue("project", ticketDetail?.project?._id);
    setValue("priority", ticketDetail?.priority);
    setValue("title", ticketDetail?.title);
    setValue("type", ticketDetail?.type);
    setValue("reportar", ticketDetail?.reportar?._id);
    setValue("assignee", ticketDetail?.assignee?._id);
    setValue("estimate", ticketDetail?.estimate);
    setValue("status", ticketDetail?.status);

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <BreadCrumb title="Edit Detail" />

                    {
                        isLoading ?
                            <>
                                <div className='col-12'>
                                    <div className="spinner-border text-primary m-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </> :
                            <>
                                { !isError && 
                                    <>
                             <form onSubmit={handleSubmit(onSubmit)}> 
                                <div className="row mb-4">
                                    <label htmlFor="projectname" className="col-form-label col-lg-2">Project Name</label>
                                    <div className="col-lg-10">
                                        <select {...register("project")} name="project" className='form-control'>
                                            <option>Select Project Name</option>
                                            {
                                                projects?.map((item)=>{
                                                    return (
                                                        <option key={item._id} value={item._id}>{item.title}</option>
                                                    );
                                                })
                                            } 
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="projectdesc" className="col-form-label col-lg-2">Select Priority</label>
                                    <div className="col-lg-10">
                                        <select {...register("priority")} name="priority" className='form-control'>
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
                                    <label htmlFor="projectdesc" className="col-form-label col-lg-2">Issue Type</label>
                                    <div className="col-lg-10">
                                        <select {...register("type")} className='form-control'>
                                            <option>Select</option> 
                                            <option>Bug</option> 
                                            <option>Story</option> 
                                            <option>Task</option>
                                            <option>Feature</option>
                                            <option>Evaluate</option>
                                            <option>Estimate</option>   
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="projectdesc" className="col-form-label col-lg-2">Short Summary</label>
                                    <div className="col-lg-10">
                                        <input {...register("title")} name="title" type="text" className="form-control" placeholder="Ticket Short Discription" />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="projectdesc" className="col-form-label col-lg-2">Project Description</label>
                                    <div className="col-lg-10">
                                        {/* <input {...register("discription")} name="discription" type="text" className="form-control" placeholder="Project Discription" /> */}

                                        <Editor {...register("discription")} name="discription" onChange={(val)=>{setValue('discription', val)}} value={ticketDetail?.discription} />

                                    </div>
                                </div> 

                                <div className="row mb-4">
                                    <label htmlFor="projectdesc" className="col-form-label col-lg-2">Reportar</label>
                                    <div className="col-lg-10">
                                        <select {...register("reportar")} className='form-control'>
                                            <option value={0}>Select</option>
                                            {
                                                users?.map((item)=>{
                                                    return (
                                                        <option key={item._id} value={item._id}>{item.firstName} {item.lastName}</option>
                                                    );
                                                })
                                            } 
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="projectdesc" className="col-form-label col-lg-2">Assignee</label>
                                    <div className="col-lg-10">
                                        <select {...register("assignee")} className='form-control'>
                                            <option value={0}>Select</option>
                                            {
                                                users?.map((item)=>{
                                                    return (
                                                        <option key={item._id} value={item._id}>{item.firstName} {item.lastName}</option>
                                                    );
                                                })
                                            } 
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label className="col-form-label col-lg-2">Estimate</label>
                                    <div className="col-lg-10">
                                        <input {...register("estimate")} name="estimate" type="text" className="form-control" placeholder="Estimate 2W 10D 1H 2D 20S" />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label className="col-form-label col-lg-2">Status</label>
                                    <div className="col-lg-10">
                                        <select {...register("status")} name="status" className='form-control'>
                                            <option value={0}>Select</option>
                                            <option>Backlog</option>
                                            <option>To Do</option>
                                            <option>Open</option>
                                            <option>Pending</option>
                                            <option>Abandonant</option>
                                            <option>Done</option>
                                            <option>ReOpen</option> 
                                        </select>
                                    </div>
                                </div>  

                                <div className="row justify-content-end">
                                    <div className="col-lg-10">
                                        <button type="submit" className="btn btn-primary">Create Ticket</button>
                                    </div>
                                </div>
                            </form> 
                                    </> 
                                }    
                            </>
                    }

                    {
                        isError &&
                        <>
                            <div className='alert alert-danger'>
                                {isMessage}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default EditTicket 