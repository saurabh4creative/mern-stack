import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute( {children} ) { 
     const { isLogin }  = useSelector(state => state.userReducer);
     return isLogin ? children : <Navigate to={'/login'} />
}

export default PrivateRoute