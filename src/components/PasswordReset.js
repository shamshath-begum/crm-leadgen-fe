import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../App'

function PasswordReset() {
    let[email,setEmail]=useState('')
    let[message,setMessage]=useState(false)

    let handleClick=async(e)=>{
     e.preventDefault()
      try {
         let res=await axios.post(`${url}/users/sendpasswordlink`,{email})
         console.log(res)
         if(res.status===204)
     {
      setEmail("")
      setMessage(true)
     }else{
toast.error("Invalid User")
     }
} catch (error) {
  toast.error(error.response.data.message)
}
    }
    
  return <>
  <div>
  <Card className='shadow col-lg-6 mx-auto mt-5'>
      <div className='text-center mt-5'>
         <h2>Enter Your Email</h2>
      </div>
    
      {
        message ? <h3 style={{color:"green"}}>password reset link send successfully in your Email</h3> : ""
      }
    <Form className='p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
       <Button className="col-lg-12" variant="primary"onClick={(e)=> handleClick(e)}> Send</Button>
    </Form>
    
    </Card>
  </div>
  </>
}

export default PasswordReset