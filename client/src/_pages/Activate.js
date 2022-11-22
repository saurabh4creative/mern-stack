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
          <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-primary bg-soft">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">User Activation</h5>
                                                <p>Please Wait for a While</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src="/assets/images/profile-img.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0"> 
                                    <div>
                                        <Link to={'/'}>
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img src="/assets/images/logo.svg" alt="" className="rounded-circle" height="34" />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        { !isLoading ? <>
                                                {
                                                     firstName || lastName || email ? 
                                                     <>
                                                        <div className='no-load'>
                                                            <div className="form-group">
                                                                <label>First Name</label> 
                                                                <div className="form-control">{firstName}</div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Last Name</label> 
                                                                <div className="form-control">{lastName}</div>
                                                            </div>
                                                            <div className="form-group">
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
                                    </div> 
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <div>
                                    <p>Already have an account ? <Link to="/login">Sign In</Link> </p>
                                    <p>© <script>{`document.write(new Date().getFullYear())`}</script> Skote. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand</p>
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