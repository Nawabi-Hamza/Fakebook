

import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
import { StyleSheet } from "./Style"
export default function RegisterVarify() {
  return (
    <div className='login register-varify' style={StyleSheet.beforeForm}>
        <center>
            <h1>FakeBook</h1>
            <form action="" style={StyleSheet.form}>
                <div className="radioGroup">
                <i class="bi bi-check-circle-fill"></i>
                  <i class="bi bi-check-circle"></i>
                  <i class="bi bi-check-circle"></i>
                </div>
                <h3 style={StyleSheet.header1}>Varify</h3>
                <p>Please check Your Email for code...</p>
                {/* <p className='text-danger'>Your code is wrong you can try 3 times</p> */}
                 <input type="text" className='sameBtn'  placeholder='Your Code' style={StyleSheet.input}/>
                 <button className='sameBtn' style={StyleSheet.button}>Send code again</button>
                 <button className='sameBtn' style={StyleSheet.button}>Varify</button>
                 <Link to="/register" style={StyleSheet.Link}>
                  <button className='sameBtn' style={StyleSheet.button}>Back</button>
                 </Link>
                 <Link to="/login" style={{color:"black"}}>
                    <button id='registerBtn' style={StyleSheet.register}>Login</button>
                 </Link>
                 <span className='forgetpassword' style={StyleSheet.forgetPasswrod}><Link to="/" style={StyleSheet.forgetLink}>Forget Password ?</Link></span>
            </form>
        </center>
    </div>
  )
}
