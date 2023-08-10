
import React,{ useEffect, useState } from 'react'
export default function Settings() {
  const [ themes,setThemes ] = useState()
    useEffect(()=>{
      if(themes==="dark"){
        localStorage.setItem("themes","dark")
      }
      else{
        localStorage.setItem("themes","light")
      }
    },[themes])
  return (
    <div className='menue'>
      <div className="btn-group">
        <button>Profile</button>
        <button style={StyleSheet.button}>
          <select name="themes" style={StyleSheet.select} onChange={(e)=>setThemes(e.target.value)}>
            <option value="light" style={{backgroundColor:"black",color:"white"}}>Themes</option>
            <option value="dark" style={StyleSheet.optButton}>Dark</option>
            <option value="light" style={StyleSheet.optButton}>Light</option>
          </select>
        </button>
        <button>Logout</button>
      </div>
    </div>
  )
}

const StyleSheet = {
    button:{
        fontSize: "1em",
        padding: "10px 30px",
        borderRadius: "20px",
        cursor: "pointer",
        border:"1px solid white",
        color:"black",
        transition: ".3s",
    },
    select:{
      border:"none" ,
      outline:"none" ,
      background:"none",
      width:"100%",
    },
    optButton:{
      width:"300px",
      
    }
}