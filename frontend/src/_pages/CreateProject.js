import React, { useState } from 'react'
import BreadCrumb from '../_views/BreadCrumb'
import { useForm } from "react-hook-form" 
import { useSelector, useDispatch } from 'react-redux';
import projectActions from '../_redux/_actions/projectActions';
import SideBar from '../_views/SideBar';
import { Link } from 'react-router-dom';

const CreateProject = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const { isLoading, isError, isMessage } = useSelector(state=>state.projectReducer);
    const [ show, setShow ] = useState(false);
    
    const onSubmit = (data) => {
        reset();
        dispatch(projectActions.project_start());
        dispatch(projectActions.project_create_success(data)); 
        setShow(true);
    }; 

    return (
        <>
                <SideBar />
                <div className='web-layout pt-4 px-4'>
                    <BreadCrumb title="Create Project" />

                    <div className='user-layout'>
                        
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div></div>
                                <div>
                                    <Link to={'/project'} className="btn btn-primary waves-effect waves-light">All Projects</Link>
                                </div>
                        </div> 

                        <div className='row'>
                              <div className='col-lg-5'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row mb-4">
                                            <label>Project Name</label>
                                            <div className="col-lg-12">
                                                <input {...register("title", { required: true })} name="title" type="text" className="form-control" placeholder="Enter Project Name..." />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <label>Project Description</label>
                                            <div className="col-lg-12">
                                                <textarea {...register("discription", { required: true })} name="discription" className="form-control" rows={3} placeholder="Enter Project Description..." />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <label>Status</label>
                                            <div className="col-lg-12">
                                                <select {...register("status", { required: true })} name="status" className='form-control'>
                                                    <option>Select</option>
                                                    <option value="To Do">To Do</option>
                                                    <option value="Hold">Hold</option>
                                                    <option value="Done">Done</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row justify-content-end">
                                            <div className="col-lg-12">
                                                <button disabled={isLoading} type="submit" className="btn btn-primary">
                                                    {isLoading ? <><span className="spinner-border spinner-border-sm" /></> : 'Create Project'}
                                                </button>

                                                { show && isMessage &&  
                                                    <>
                                                        <div className={`mb-0 mt-4 alert alert-${isError ? 'danger' : 'success'}`}>
                                                            {isMessage}
                                                        </div>    
                                                    </> 
                                                }
                                            </div>
                                        </div>
                                    </form>
                              </div>     
                        </div> 
                    </div>
                </div>
        </>

    )
}

export default CreateProject