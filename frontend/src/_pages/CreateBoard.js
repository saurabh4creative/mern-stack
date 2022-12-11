import React, { useEffect, useRef, useState } from 'react'
import BreadCrumb from '../_views/BreadCrumb'
import SideBar from '../_views/SideBar'; 
import axios from 'axios';
import { BASE_URL } from '../_helpers/config';
import { useForm } from "react-hook-form"
import Loader from '../_components/Loader';
import Message from '../_components/Message';
import { useNavigate } from 'react-router-dom';

const CreateBoard = () => {

  const dataFetchedRef = useRef(false); 
  const { register, handleSubmit, reset } = useForm();
  const [ user, setUser ] = useState({}); 
  const [ error, setError ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ response, setResponse ] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
         
        setIsLoading(true);
        
        const getData = async () => {
            try{   
                const userResponse   = await axios.get(`${BASE_URL}/api/v1/tickets/create`);
                setUser(userResponse.data.users);
                setIsLoading(false);
            }catch(err){
                setError(err.message); 
                setIsLoading(false);
            }
        }

        getData(); 
  }, []); 

  const onSubmit = async (data) => {
        setResponse('');
        try{   
            const submitResponse = await axios.post(`${BASE_URL}/api/v1/users/create`, data); 
            reset();
            if( submitResponse.data.status ){
                setResponse(submitResponse.data.message);
                setTimeout(()=>{
                    navigate('/board');
                }, 500);
            }   
        }catch(err){
            setError(err.message);  
        } 
  }
 
  return (
        <>
             <SideBar />
             <div className='web-layout pt-4 px-4'>
                 <BreadCrumb title="Add New Board" />

                 { isLoading && <Loader /> }

                 { error && <Message type="danger" message={error}/> }

                 { Object.keys(user).length > 0 ? <>
                    <div className='create-board'>
                        <div className={`sprint-form mb-3`}>
                                <div className='sprint-bg p-3'>
                                    <form onSubmit={handleSubmit(onSubmit)}>  
                                        <div className="mb-3 row"> 
                                            <div className="col-md-12">
                                                <label>Board Name</label> 
                                                <input {...register("name", { required: true })} placeholder='Board Name' className="form-control" type="text"  />
                                            </div>
                                        </div>
                                        <div className="mb-3 row"> 
                                            <div className="col-md-12">
                                                <label>Board Discription</label> 
                                                <textarea {...register("discription", { required: true })} placeholder='Board Discription' rows={3} className="form-control"   />
                                            </div>
                                        </div>

                                        <div className="mb-3 row"> 
                                            <div className="col-md-6">
                                                <label>Start Date</label>  
                                                <input {...register("start", { required: true })} placeholder='Board Name' className="form-control" type="date"  />
                                            </div>
                                            <div className="col-md-6">
                                                <label>End Date</label>
                                                <input {...register("end", { required: true })} placeholder='Board Name' className="form-control" type="date"  />
                                            </div>
                                        </div>  
                                        
                                        <div className="mb-3 row"> 
                                            <div className="col-md-12">
                                                <label>Select Members</label>
                                                <select multiple {...register("user", { required: true })} className='form-control'>
                                                    <option>Select Members</option>
                                                    {
                                                        Object.keys(user).length > 0 &&

                                                        Object.values(user).map((item)=>{
                                                                return <option key={item._id} value={item._id}>{item.firstName} {item.lastName}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className='submit-btn'>
                                            <button className="btn btn-primary waves-effect waves-light">Submit</button>
                                        </div>
                                    </form> 

                                    { response && <Message type="info" message={response}/> }
                                </div>
                        </div>
                    </div> 
                 </> : null }
             </div>
        </>
  )
}

export default CreateBoard