import React, { useState } from 'react'
import { StyleSheet } from './LeftRight'
import "./Style.css"
import { Link } from 'react-router-dom';

const folower = [
    {
        name:"Shafi Noori",
        image:"../image/wallpaperflare.com_wallpaper (1).jpg"
    },
    {
        name:"John",
        image:"../image/wallpaperflare.com_wallpaper (2).jpg"
    },
    {
        name:"Wahid",
        image:"../image/wallpaperflare.com_wallpaper (4).jpg"
    },
    {
        name:"Hamza",
        image:"../image/wallpaperflare.com_wallpaper (3).jpg"
    },
    {
        name:"Elyas",
        image:"../image/wallpaperflare.com_wallpaper.jpg"
    },
    {
        name:"Samad",
        image:"../image/wallpaperflare.com_wallpaper (4).jpg"
    },
    {
        name:"Ghafor",
        image:"../image/wallpaperflare.com_wallpaper (3).jpg"
    },
    {
        name:"Naimat",
        image:"../image/wallpaperflare.com_wallpaper.jpg"
    }
]

export default function LeftSide() {
    let num = 0;
    const theme = localStorage.getItem("themes")
    function changeThemes(e){
        if(e==="dark"){
          localStorage.setItem("themes","dark")
          window.location.reload()
        }else{
          localStorage.setItem("themes","light")
          window.location.reload()
        }
    }
    const [ search,setSearch ] = useState('')

  return (<>
    <div className="navIcons" style={theme==='dark'? StyleSheet.navIcon:null}>
            <div className="leftIcon" style={theme==='dark'? StyleSheet.navIcon:null}>
                <center>
                <Link to="/" style={StyleSheet.linkNav}>
                    {/* <i className="bi bi-person-fill-add"></i> */}
                    <i className="bi bi-house"></i>
                    <span>Home</span>
                </Link>
                </center>
            </div> 
            <div className="settingIcon" style={theme==='dark'? StyleSheet.navIcon:null}>
               <center>
               <Link to="/profile" style={StyleSheet.linkNav}>
               <i className="bi bi-person-circle"></i>
                <span>Profile</span>
                </Link>
               </center>
            </div>
        
            <div className="leftIcon" style={theme==='dark'? StyleSheet.navIcon:null}>
                <center>
                    <Link to="/" style={StyleSheet.linkNav}>
                        <i className="bi bi-people"></i>
                        <span>Friend</span>
                    </Link>
                </center>
            </div>
            <div className="settingIcon" style={theme==='dark'? StyleSheet.navIcon:null}>
               <center>
                    <i className="bi bi-palette"></i>
                <select style={theme==='dark'? StyleSheet.selectTheme:StyleSheet.selectThemeBlack}  onChange={(e)=> changeThemes(e.target.value)}>
                    <option value="light">Theme</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
               </center>
            </div>
            <div className="settingIcon" style={theme==='dark'? {backgroundColor:"black",color:"white"}:null}>
                <center>
                <i className="bi bi-box-arrow-right"></i>
                <span>Logout</span>
                </center>
            </div>
        
    </div>
    <div className='left-side' style={StyleSheet.leftSide}>
               <span className='title' style={StyleSheet.title}> Find New Friend 
                    {/* <Link to="/" style={StyleSheet.linkNav}>
                        &nbsp; &nbsp; <i className="bi bi-house"></i> Home
                    </Link> */}
                 </span> 
        <div className="un-followers" style={StyleSheet.leftSide_unFollower}>
            <input type="text" placeholder={`Find New Friend`} onChange={(e)=>setSearch(e.target.value)} style={StyleSheet.searchInput} />
                {folower && folower.filter((item)=>{
                    return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
                }).map((item)=>(
                    <div className='un-follow' style={StyleSheet.un_follow} key={num++}>
                        <div className='left' style={StyleSheet.left}>
                        <img src={item.image} alt="none" style={StyleSheet.leftImage}/>
                        <a href="/" style={StyleSheet.link}>
                            <h6>{item.name}</h6>
                        </a>
                        </div>
                        <div className="btn-group">
                            <button style={StyleSheet.button}>Follow</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  </>
  )
}

