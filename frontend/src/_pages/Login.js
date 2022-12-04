import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../_redux/_actions/userActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { isLogin, isLoading, isMessage, status } = useSelector(state=>state.userReducer);
  const navigate = useNavigate()
  
  const onSubmit = (data) => {
       reset(); 
       dispatch( userActions.login_start() )
       dispatch( userActions.login_success(data) )
  };

  useEffect(()=>{
       if( isLogin ){
            setTimeout(()=>{
                navigate('/dashboard');
            }, 500);
       } 
  }, [isLogin, navigate])

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
                                            <h5 className='text-center mb-2'>Welcome Back !</h5>
                                            <p className='text-center'>Sign in to continue to Skote.</p>

                                            <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
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
                            
                                                <div className="mt-4 d-grid">
                                                    <button className="btn btn-primary waves-effect waves-light" type="submit">
                                                        {isLoading ? <><span className="spinner-border spinner-border-sm" /></> : 'Login'} 
                                                    </button>
                                                </div>  
                                            </form>

                                            <div className="mt-4 text-center">
                                                <div>
                                                    <p className='m-0'>Already have an account ? <Link to="/register">Sign Up</Link> </p>
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

export default Login