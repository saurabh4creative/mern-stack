 import React, { useEffect, useRef } from 'react' 
import { useDispatch } from 'react-redux'
import userActions from '../_redux/_actions/userActions' 
import SideBar from '../_views/SideBar';

const Dashboard = () => {
  const dispatch = useDispatch(); 
  const dataFetchedRef = useRef(false); 

  useEffect(()=>{
    if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

    dispatch( userActions.dashboard_start() ); 
    dispatch( userActions.dashboard_success() ); 
  },[]);   

  return (
        <>
            <SideBar></SideBar>
            <div className='web-layout pt-4 ps-4'>
                 
            </div>
        </>
  )
}

export default Dashboard