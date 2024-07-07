import React from 'react';
import './LaunchServices.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import zIndex from '@mui/material/styles/zIndex';

const Contactus = () => {
  return (
    <div style={{zIndex:1001}}>
      <h1 className='slide-int'>Contact Us</h1>
      <div style={{display:"flex",alignItems:"center"}}>
        <h3 className='slide-int' style={{fontSize:'2rem'}}>stay in our orbit</h3>
        <div><Input placeholder="Enter your email" sx={{color:"white"}} />
        <div variant="outlined" sx={{boxShadow: "none",
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,zIndex:1001,
  ":hover": { boxShadow: "none", backgroundColor: "black", color: "white" },}}>Submit</div></div>
      </div>
    </div>
  )
}

export default Contactus
