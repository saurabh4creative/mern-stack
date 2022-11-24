import axios from 'axios';
import React, { useEffect } from 'react'
import BreadCrumb from '../_views/BreadCrumb'

const Dashboard = () => {

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/v1/users/dashboard`).then((res)=>{
        console.log(res);
    });
  },[]);  
  return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <BreadCrumb title="Dashboard" />
                    
                </div>
            </div>
        </div>
  )
}

export default Dashboard