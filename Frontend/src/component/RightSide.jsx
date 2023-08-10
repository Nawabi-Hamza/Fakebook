import React from 'react'
// import "../App.css"
// import "./rightSide.css";
import Settings from './Settings';
import { StyleSheet } from './StyleSheet';
import "./Style.css"

export default function RightSide() {
  return (
    <>
        <div className='right-side'>
                <span className='title' style={StyleSheet.title}>Your Friend</span> 
                    <div className='followers'>
                        {folower && folower.map((item)=>(
                            <div className='follow' style={StyleSheet.un_follow}>
                                <div className='left' style={StyleSheet.left}>
                                    
                                <img src={item.image} alt="none" style={StyleSheet.leftImage} />
                                <a href="/" style={StyleSheet.link}>
                                    <h4>
                                        {item.name}
                                    </h4>
                                </a>
                                </div>
                                <div className="btn-group" >
                                    <button style={StyleSheet.button}>Profile</button>    
                                </div>
                            </div>
                        ))}
                    </div>
            <div className='settings'>
                <div className='title'>Settings</div>
            <Settings />
            </div>
        </div>
    </>
  )
}


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
