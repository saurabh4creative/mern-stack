import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import BreadCrumb from '../_views/BreadCrumb'
import { useSelector, useDispatch } from 'react-redux'
import ticketActions from '../_redux/_actions/ticketActions'
import axios from 'axios';
import { BASE_URL } from '../_helpers/config';
import {  useForm } from "react-hook-form"
import { Editor } from 'react-bootstrap-editor';
import SideBar from '../_views/SideBar'
import Loader from '../_components/Loader'
import Message from '../_components/Message'

const EditTicket = () => {

    const { id } = useParams();
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch();
    const { isLoading, ticketDetail, get_projects, get_users, isError, isMessage } = useSelector(state => state.ticketReducer);
    const { register, handleSubmit, setValue  } = useForm();
    const [ isLoad, setIsLoad ] = useState(false);
    const [ statusRes, setStatusRs ] = useState(false);
    const [ message, setMessage ] = useState(''); 
    const navigate = useNavigate()

    const { priority, title, type, estimate, status, points, project, reportar, assignee, discription} = ticketDetail;

    const changeVal = async () => {
        await setValue("project", project?._id);
        await setValue("priority", priority);
        await setValue("title", title);
        await setValue("type", type);
        await setValue("reportar", reportar?._id);
        await setValue("assignee", assignee?._id);
        await setValue("estimate", estimate);
        await setValue("status", status);
        await setValue("points", points);
    }

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        dispatch( ticketActions.ticket_fetch() );
        dispatch( ticketActions.get_details() ).then(()=>{
            dispatch( ticketActions.ticket_detail(id) );
        });  
    }, [id, dispatch]); 

    const onSubmit = (data) => {
        setIsLoad(true);
        axios.post(`${BASE_URL}/api/v1/tickets/edit/${id}`, data).then((res)=>{
            setStatusRs(true);
            setMessage('Edit Successfully');
            setIsLoad(false); 
            setTimeout(()=>{
                navigate(`/ticket/${id}`);
            },500);
        }).catch((err)=>{
            setStatusRs(true);
            setMessage(err.message); 
        });
    }  
 
    changeVal();

    return (
        <>
            <SideBar></SideBar>
            <div className='web-layout pt-4 px-4'>
                <BreadCrumb title="Edit Issue" />
                
                { isLoading ?  <Loader /> : <>
                        {
                             Object.keys(ticketDetail).length > 0 && 

                             <div className='user-layout'>
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
                                                <Editor {...register("discription")} name="discription" onChange={(val)=>{setValue('discription', val)}} value={discription} />
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

                                    { statusRes &&  <Message type="info" message={message}/> }
                                </div>
                        }
                </> } 

                { isError &&  <Message type="danger" message={isError}/>  }
                 
            </div>
        </>
    )
}

export default EditTicket