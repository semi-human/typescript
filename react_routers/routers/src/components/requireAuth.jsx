import React from 'react'
import {Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth'

const RequireAuth = ({children}) => {
    const auth = useAuth();
    let location = useLocation();
    if(!auth.user)
    {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
}

export default RequireAuth