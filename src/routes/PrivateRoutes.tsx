import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuthenticated = true;

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {

  return isAuthenticated ? element : <Navigate to='/login' />
}

export default PrivateRoute
