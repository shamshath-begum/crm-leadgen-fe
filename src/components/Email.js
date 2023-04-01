import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import axios from 'axios';
import { url } from '../App'
import { useNavigate } from 'react-router-dom';

function Email() {
    let[subject,setSubject]=useState("")
    let[message,setMessage]=useState("")
  let navigate=useNavigate()

let token=sessionStorage.getItem('token')
    let sendEmail=async()=>{
        try {
            let res=await axios.post(`${url}/send-mail`,{subject,message},{
              headers:{
                authorization:`Bearer ${token}`
              }
          
            })
            
            if(res.status===201){
              toast.success(res.data.message)
            }
          }catch (error) {
            toast.error(error.response.data.message)
            if(error.response.status===401)
            handleLogout()
          }
            }

            let handleLogout=async()=>{
    
                sessionStorage.clear()
                navigate('/users/login-user')
              }
          
    
  return <>
  <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>setSubject(e.target.value)}/>
      </Form.Group>
      <Form.Label>Message</Form.Label> 
      <FloatingLabel
        controlId="floatingTextarea"
        label="Enter Your Message"
        className="mb-3"
      >
      <Form.Control as="textarea" onChange={(e)=>setMessage(e.target.value)} />
      </FloatingLabel>

      <Button variant="primary" onClick={()=>{sendEmail()}}>
        Send Mail
      </Button>
    </Form>
  </>
}

export default Email