import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/user-auth'
import toast, { Toaster } from 'react-hot-toast';

export default function loginGuard(props) {

    const { Islogged } = useContext(AuthContext)
    toast.error('Please Sign in First', {
        position: "buttom center"
    });
   
    if (Islogged) {
        return props.children
    } else {
    
  return (
    <>
         <Toaster />
                <Navigate to='/login' />
    
    </>
    )
}
}
