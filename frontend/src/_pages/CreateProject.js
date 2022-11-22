import React from 'react'
import BreadCrumb from '../_views/BreadCrumb'
import { useForm } from "react-hook-form"
import axios from 'axios';
import { BASE_URL } from '../_helpers/config';
import { useSelector } from 'react-redux';

const CreateProject = () => {
    const { register, handleSubmit, reset } = useForm();
    const { _id } =  useSelector(state=>state.userReducer.user);
  
    const onSubmit = (data) => {
        reset();  
        data._id = _id;
        axios.post(`${BASE_URL}/api/v1/projects/create`, data).then((res)=>{
             console.log(res);
        }).catch((err)=>{
             console.log(err);
        })
    };

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                            <BreadCrumb title="Add Project" /> 
                            
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Create New Project</h4>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row mb-4">
                                                <label className="col-form-label col-lg-2">Project Name</label>
                                                <div className="col-lg-10">
                                                    <input {...register("title", { required: true })} name="title" type="text" className="form-control" placeholder="Enter Project Name..." />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <label className="col-form-label col-lg-2">Project Description</label>
                                                <div className="col-lg-10">
                                                    <textarea {...register("discription", { required: true })} name="discription"  className="form-control" rows={3} placeholder="Enter Project Description..." />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <label  className="col-form-label col-lg-2">Status</label>
                                                <div className="col-lg-10">
                                                    <select {...register("status", { required: true })} name="status"  className='form-control'>
                                                         <option>Select</option>
                                                         <option value="Backlog">Backlog</option>
                                                         <option value="To Do">To Do</option>
                                                         <option value="To Do">WIP</option>
                                                         <option value="Hold">Hold</option>
                                                         <option value="Pending">Pending</option>
                                                         <option value="Done">Done</option>
                                                         <option value="Completed">Completed</option>
                                                    </select>
                                                </div>
                                            </div> 
                                            
                                            <div className="row justify-content-end">
                                                <div className="col-lg-10">
                                                    <button type="submit" className="btn btn-primary">Create Project</button>
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

export default CreateProject