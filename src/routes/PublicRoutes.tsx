import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuthenticated = false;

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute = ({ element }: PublicRouteProps) => {

  return !isAuthenticated ? element : <Navigate to='/' />
}

export default PublicRoute
