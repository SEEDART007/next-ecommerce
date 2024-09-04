"use client"
import React, { ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'
type SubmitBtnProps = {
    children: React.ReactNode,
    className?:string

} & ComponentProps<'button'>
function SubmitBtn( {children,className,...props}:SubmitBtnProps) {
    const {pending} =useFormStatus();
   
  return (
    <button  {...props} disabled={pending} className='btn btn-primary btn-block'>
       
        {pending&&<span className='loading loading-spinner' />}
        {children}
        
        </button>
  )
}

export default SubmitBtn