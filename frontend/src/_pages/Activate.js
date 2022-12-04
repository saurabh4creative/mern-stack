import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import userActions from '../_redux/_actions/userActions';


const Activate = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);
  const { isLoading, isMessage, status, userData } = useSelector(state=>state.registerReducer);
  const { firstName, lastName, email } = userData || {};

  const navigate = useNavigate()

  useEffect(()=>{
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      dispatch(userActions.register_start());
      dispatch(userActions.user_activate(token));

      if( status ){
           navigate('/login');
      }
  }, [token, dispatch, status, navigate]);
  
  return (
      <>
          <div className='login-page pt-5 pb-5'>
                   <div className='container'>
                         <div className='row justify-content-center'>
                              <div className='col-lg-5'>
                                   <div className='text-center mb-4'>
                                        <img src="/assets/images/logo.svg" alt="" className="rounded-circle" height="34" />
                                   </div>
                                   <div className='form-inline bg-white mx-auto p-4'>
                                        <div className='in-box p-2'>
                                            <h5 className='text-center mb-2'>User Activation</h5>
                                            <p className='text-center'>Please Wait for a While Minute</p>
 
                                            { !isLoading ? <>
                                                    {
                                                        firstName || lastName || email ? 
                                                        <>
                                                            <div className='no-load'>
                                                                <div className="form-group mb-3">
                                                                    <label>First Name</label> 
                                                                    <div className="form-control">{firstName}</div>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label>Last Name</label> 
                                                                    <div className="form-control">{lastName}</div>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label>Email</label> 
                                                                    <div className="form-control">{email}</div>
                                                                </div> 
                                                            </div>
                                                        </> : '' 
                                                    } 
                                                    
                                            </> : <><div className='text-center mb-3'>Please Wait</div></>  } 
                                            {
                                                    isLoading && 
                                                    <>
                                                        <button type='submit' className="btn btn-primary btn-block w-100" >
                                                                <span className="spinner-border spinner-border-sm" />
                                                        </button> 
                                                    </>
                                            } 
                                            {
                                                    !isLoading && !status ? 
                                                    <>
                                                        <div className='alert alert-danger mb-0 text-center'>
                                                            {isMessage}
                                                        </div>
                                                    </> : '' 
                                            }
                                            { 
                                                    status && 
                                                    <>
                                                        <div className='alert alert-info mb-0 text-center'>
                                                            {isMessage}
                                                        </div> 
                                                    </>   
                                            } 

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
      </>
  )
}

export default Activate