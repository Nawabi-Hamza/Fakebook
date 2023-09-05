import React, { useState } from 'react'
import "./Style.css"
import { StyleSheet } from './Style'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api'
import axios from "axios";
import LoginStorage from "../../context/AuthContext"

export default function Login() {
  const [ u_email,setEmail ] = useState("")
  const [ u_password,setPassword ] = useState("")
  const [ error,setError ] = useState(null)
  const [ check,setCheck ] = useState(false)
  const navigate = useNavigate()
  // const location = useLocation()
  // console.log(location)
  // console.log(u_email)
  // console.log(u_password)
  const handleLogin = async(e)=>{
    e.preventDefault();
    const value = {
      email:u_email,
      password:u_password
    }
    if(u_email && u_password && check)
      try{ 
        const res =await axios.post(`${api}/authentication/login`,value)
        // console.log(res)
        LoginStorage(res.data)
        setTimeout(()=>{
          window.location.reload()
          navigate('/')
        },2000)
      }catch(error){
        setError(error?.response?.data?.message)
      }
      else{
        if(!check){
          setError("Please check the policy ...")
        }
        else{
          setError("Please fill all field !")
        }
    }
    // alert("hello")
  }
  return (
    <div className='login' style={StyleSheet.beforeForm}>
        <center>
            <h1>FakeBook</h1>
            <form action="" style={StyleSheet.form}>
                <h3 style={StyleSheet.header1}>Login</h3>
                <div className="error" style={{color:"red"}}>{error? error:null}</div>
                 <input type="email" className='sameBtn' onChange={(e)=> setEmail(e.target.value)}  placeholder='Email' style={StyleSheet.input} required="true" />
                 <input type="password" className='sameBtn' onChange={(e)=> setPassword(e.target.value)} placeholder='Password' style={StyleSheet.input} required="true"/>
                 <div className='recapcha' style={StyleSheet.recaptcha}>
                 <input type="checkbox" onChange={()=>setCheck(!check)} name="" style={StyleSheet.chackBox} id="" /><a href="/" style={StyleSheet.Link}>accept all policy</a> 
                 </div>
                 <button className='sameBtn' style={StyleSheet.button} onClick={handleLogin}>Login</button>
                 <button className='sameBtn' style={StyleSheet.button}>Login With Google</button>
                 <Link to="/register" style={{color:"black"}}>
                    <button id='registerBtn' style={StyleSheet.register}>Register</button>
                 </Link>
                 <span className='forgetpassword' style={StyleSheet.forgetPasswrod}><Link to="/" style={StyleSheet.forgetLink}>Forget Password ?</Link></span>
            </form>
        </center>
    </div>
  )
}
