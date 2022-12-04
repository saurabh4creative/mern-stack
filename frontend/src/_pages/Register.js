import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../_redux/_actions/userActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { isLoading, isMessage, status } = useSelector(state=>state.registerReducer);

  const onSubmit = (data) => {
       reset();
       dispatch( userActions.register_start() );
       dispatch( userActions.register_success(data) );
  };
  
  useEffect(()=>{
       status ? toast.success(isMessage) : toast.error(isMessage) 
  }, [isMessage, status])
  
  return (
       <>
             <div className='login-page pt-5 pb-5'>
                   <div className='container'>
                         <div className='row justify-content-center'>
                              <div className='col-lg-5'>
                                   <div className='text-center mb-4'>
                                        <img src="assets/images/logo.svg" alt="" className="rounded-circle" height="34" />
                                   </div>
                                   <div className='form-inline bg-white mx-auto p-4'>
                                        <div className='in-box p-2'>
                                            <h5 className='text-center mb-2'>Free Register</h5>
                                            <p className='text-center'>Get your free Skote account now.</p>

                                            <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                                            
                                                <div className='row'>
                                                    <div className='col-12'>
                                                            <div className='mb-3'>
                                                                <div className="form-group">
                                                                    <label>First Name</label> 
                                                                    <input  {...register("firstName", { required: true })} name="firstName" className="form-control" placeholder="Enter your firstname" type="text" />
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div className='col-12'>
                                                            <div className='mb-3'>
                                                                <div className="form-group">
                                                                    <label>Last Name</label> 
                                                                    <input {...register("lastName", { required: true })} name="lastName" className="form-control" placeholder="Enter your firstname" type="text" />
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
    
                                                <div className='mb-3'>
                                                    <div className="form-group">
                                                        <label>Email</label> 
                                                        <input {...register("email", { required: true })} name="email" className="form-control" placeholder="Enter your email" type="text" />
                                                    </div>
                                                </div>

                                                <div className='mb-3'>
                                                    <div className="form-group">
                                                        <label>Password</label> 
                                                        <input {...register("password", { required: true })} name="password" className="form-control" placeholder="Enter your password" type="password" />
                                                    </div>
                                                </div>

                                                <div className='mb-3'>
                                                    <div className="form-group">
                                                        <label>Confirm Password</label> 
                                                        <input {...register("c_password", { required: true })} name="c_password" className="form-control" placeholder="Enter your confirm password" type="password" />
                                                    </div>
                                                </div>
                            
                                                <div className="mt-4 d-grid">
                                                    <button className="btn btn-primary waves-effect waves-light" type="submit">
                                                        {isLoading ? <><span className="spinner-border spinner-border-sm" /></> : 'Create Account'} 
                                                    </button>
                                                </div>  
                                            </form>

                                            <div className="mt-4 text-center">
                                                <div>
                                                    <p className='mb-0'>Already have an account ? <Link to="/login">Sign In</Link> </p>
                                                </div>
                                            </div> 
                                            
                                        </div>
                                   </div>
                              </div>
                         </div>
                   </div>
             </div>

             <ToastContainer />
       </>
  )
}

export default Register