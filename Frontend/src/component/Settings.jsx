
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StyleSheet } from './LeftRight'
import "./Style.css"

export default function Settings() {
  const location = useLocation()
    const url = location.pathname.split('/')[1]
    function changeThemes(e){
        if(e==="dark"){
          localStorage.setItem("themes","dark")
          window.location.reload()
        }else{
          localStorage.setItem("themes","light")
          window.location.reload()
        }
    }
  return (
    <div className='menue' style={StyleSheet.settings}>
      <div className="btn-group" >
      <button><Link to={url==="profile" ? "/home":"/profile"} style={StyleSheet.settingLink}>{url==="profile" ? "Home":"Profile"}</Link></button>
        <button style={StyleSheet.settingButton} >
          <select name="themes" style={StyleSheet.settingSelect} onChange={(e)=> changeThemes(e.target.value)}>
            <option value="light" style={StyleSheet.settingThemes}>Themes</option>
            <option value="dark" style={StyleSheet.settingOptButton}>Dark</option>
            <option value="light" style={StyleSheet.settingOptButton}>Light</option>
          </select>
        </button>
        <button style={StyleSheet.settingLink}>Logout</button>
      </div>
    </div>
  )
}

// const StyleSheetInternal = {
//     button:{
//         fontSize: "1em",
//         padding: "10px 30px",
//         borderRadius: "20px",
//         cursor: "pointer",
//         border:"1px solid white",
//         // color:"black",
//         transition: ".3s",
//     },
//     select:{
//       border:"none" ,
//       outline:"none" ,
//       background:"none",
//       width:"100%",
//     },
//     optButton:{
//       width:"300px",
//     },
//     link:{
//       textDecoration:"none",
//       color:'black',
//     }
// }