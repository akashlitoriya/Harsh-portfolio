import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = "";
  if(token !== null || token !== ""){
    return {Children}
  }else{
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute
