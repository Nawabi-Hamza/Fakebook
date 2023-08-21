

import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
import { RegisterStyleSheet } from "./Style"
export default function Register() {
  return (
    <div className='login'>
        <center>
            <h1>FakeBook</h1>
            <form action="" style={RegisterStyleSheet.form}>
                <h3 style={RegisterStyleSheet.header1}>Register</h3>
                 <input type="text" className='sameBtn'  placeholder='Username' style={RegisterStyleSheet.input}/>
                 <input type="email" className='sameBtn'  placeholder='Email' style={RegisterStyleSheet.input}/>
                 {/* <input type="number" className='sameBtn' placeholder='Phone' style={RegisterStyleSheet.input}/> */}
                 <input type="password" className='sameBtn' placeholder='Password' style={RegisterStyleSheet.input}/>
                 <input type="password" className='sameBtn' placeholder='ReType Password' style={RegisterStyleSheet.input}/>
                 <div className='recapcha' style={RegisterStyleSheet.recaptcha}>
                 <input type="checkbox" name="" style={RegisterStyleSheet.chackBox} id="" />accept all policy

                 </div>
                 <button className='sameBtn' style={RegisterStyleSheet.button}>Register</button>
                 <button className='sameBtn' style={RegisterStyleSheet.button}>Register With Google</button>
                 <Link to="/login" style={{color:"black"}}>
                    <button id='registerBtn' style={RegisterStyleSheet.register}>Login</button>
                 </Link>
                 <span className='forgetpassword' style={RegisterStyleSheet.forgetPasswrod}><Link to="/" style={StyleSheet.forgetLink}>Forget Password ?</Link></span>
            </form>
        </center>
    </div>
  )
}
