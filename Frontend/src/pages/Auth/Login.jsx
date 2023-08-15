import React from 'react'
import "./Style.css"
import { StyleSheet } from './Style'
import { Link } from 'react-router-dom'
export default function login() {
  return (
    <div className='login'>
        <center>
            <h1>FakeBook</h1>
            <form action="" style={StyleSheet.form}>
                <h3 style={StyleSheet.header1}>Login</h3>
                 <input type="text" className='sameBtn'  placeholder='Email' style={StyleSheet.input}/>
                 <input type="password" className='sameBtn' placeholder='Password' style={StyleSheet.input}/>
                 <div className='recapcha' style={StyleSheet.recaptcha}>
                 <input type="checkbox" name="" style={StyleSheet.chackBox} id="" />accept all policy

                 </div>
                 <button className='sameBtn' style={StyleSheet.button}>Login</button>
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
