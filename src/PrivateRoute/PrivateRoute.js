import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useLocalState } from '../util/useLocalStorage';

const PrivateRoute = () => {
  let user_access = localStorage.setItem('user-logged', true)
  return user_access ? <Navigate to="/login" /> : '';
}


export default PrivateRoute;
