import React from 'react'
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'

const ProtectedRoute = ({children}) => {
  const token = useSelector(state => state.user.token);
  if(token != null && token != ""){
    return children;
  }else{
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute
