import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate=useNavigate()
    let handleLogout=async()=>{
       sessionStorage.clear()
        navigate('/users/login-user')
      }
  return <>
  <div className='d-flex justify-content-end'>
    <Button>LOGIN</Button>
    <Button>SIGNUP</Button>
  <Button  variant='danger' onClick={()=>handleLogout()}>Logout</Button>
  </div>
</>
}

export default Navbar