import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import BreadCrumb from '../_views/BreadCrumb' 
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../_redux/_actions/userActions'
import { Link } from 'react-router-dom';
import SideBar from '../_views/SideBar';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userData, isLoading, isError, isMessage } = useSelector(state => state.dashboardReducer);
  const dataFetchedRef = useRef(false);
  const { my_projects, my_tickets, all_projects, all_tickets } = userData;

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