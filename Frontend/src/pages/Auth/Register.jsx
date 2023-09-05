

import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
import { StyleSheet } from "./Style"
export default function Register() {
  return (
    <div className='login' style={StyleSheet.beforeForm}>
        <center>
            <h1>FakeBook</h1>
            <form action="" style={StyleSheet.form}>
                <div className="radioGroup">
                  {/* <input type="radio" name="register" id="" defaultChecked /> */}
                  {/* <i class="bi bi-check-circle-fill"></i> */}
                  <i class="bi bi-check-circle"></i>
                  <i class="bi bi-check-circle"></i>
                  <i class="bi bi-check-circle"></i>
                  {/* <input type="radio" name="register" id="" disabled/>
                  <input type="radio" name="register" id="" disabled/> */}
                </div>
                <h3 style={StyleSheet.header1}>Register</h3>
                 <input type="text" className='sameBtn'  placeholder='Username' style={StyleSheet.input}/>
                 <input type="email" className='sameBtn'  placeholder='Email' style={StyleSheet.input}/>
                 {/* <input type="number" className='sameBtn' placeholder='Phone' style={StyleSheet.input}/> */}
                 <input type="password" className='sameBtn' placeholder='Password' style={StyleSheet.input}/>
                 <input type="password" className='sameBtn' placeholder='ReType Password' style={StyleSheet.input}/>
                 <div className='recapcha' style={StyleSheet.recaptcha}>
                 <input type="checkbox" name="" style={StyleSheet.chackBox} id="" /><a href="/" style={StyleSheet.Link}>accept all policy</a> 
                 </div>
                 <Link to="/register/varify" style={StyleSheet.Link}>
                  <button className='sameBtn' style={StyleSheet.button}>Register</button>
                 </Link>
                 <button className='sameBtn' style={StyleSheet.button}>Register With Google</button>
                 <Link to="/login" style={{color:"black"}}>
                    <button id='registerBtn' style={StyleSheet.register}>Login</button>
                 </Link>
                 <span className='forgetpassword' style={StyleSheet.forgetPasswrod}><Link to="/" style={StyleSheet.forgetLink}>Forget Password ?</Link></span>
            </form>
        </center>
    </div>
  )
}
