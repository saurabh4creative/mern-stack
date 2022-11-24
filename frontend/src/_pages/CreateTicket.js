import React, { useEffect, useState } from 'react'
import BreadCrumb from '../_views/BreadCrumb'
import {  useForm } from "react-hook-form"
import axios from 'axios';
import { BASE_URL } from '../_helpers/config';
import { useSelector } from 'react-redux';
import { Editor } from 'react-bootstrap-editor';
 
const CreateTicket = () => {
    const { register, handleSubmit, setValue  } = useForm();
    const { _id } =  useSelector(state=>state.userReducer.user);
    const [ projects, setProjects ] = useState([]);
    const [ users, setUsers ] = useState([]);


    useEffect(()=>{
        axios.get(`${BASE_URL}/api/v1/tickets/create`).then((res)=>{
            const { users, projects } = res.data;
            setProjects(projects);
            setUsers(users);
        })
    }, [])
  
    const onSubmit = (data) => {
        axios.post(`${BASE_URL}/api/v1/tickets/create`, data).then((res)=>{
             console.log(res);
        }).catch((err)=>{
             console.log(err, _id);
        }) 
    };
 

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <BreadCrumb title="Create Ticket" /> 

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Create New Ticket</h4>
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

                                                    <Editor {...register("discription")} name="discription" onChange={(val)=>{setValue('discription', val)}} value="<p></p>" />

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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTicket