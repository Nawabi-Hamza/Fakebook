import React from 'react'
import { StyleSheet } from './StyleSheet'
import "./Style.css"
import { Link } from 'react-router-dom'

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
    }
]

export default function LeftSide() {
  return (<>
    <div className="navIcons">
            <div className="settingIcon">
               <center>
               <i class="bi bi-person-circle"></i>
                <span>Profile</span>
               </center>
            </div>
            <div className="leftIcon">
                <center>
                <i class="bi bi-person-fill-add"></i>
                <span>Follower</span>
                </center>
            </div> 
        
            <div className="rightIcon">
                <center>
                <i class="bi bi-people"></i>
                <span>Friend</span>
                </center>
            </div>
            <div className="settingIcon">
               <center>
               <i class="bi bi-palette"></i>
                <span>Themes</span>
               </center>
            </div>
            <div className="settingIcon">
                <center>
                <i class="bi bi-box-arrow-right"></i>
                <span>Logout</span>
                </center>
            </div>
        
    </div>
    <div className='left-side' style={StyleSheet.leftSide}>
               <span className='title' style={StyleSheet.title}> Find New Friend</span> 
        <div className="un-followers" style={StyleSheet.leftSide_unFollower}>
                {folower && folower.map((item)=>(
                    <div className='un-follow' style={StyleSheet.un_follow}>
                        <div className='left' style={StyleSheet.left}>
                        <img src={item.image} alt="none" style={StyleSheet.leftImage}/>
                        <a href="/" style={StyleSheet.link}>
                            <h3>{item.name}</h3>
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

