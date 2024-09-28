import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuthenticated = true;

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute = ({ element }: PublicRouteProps) => {

  return !isAuthenticated ? element : <Navigate to='/' />
}

export default PublicRoute
