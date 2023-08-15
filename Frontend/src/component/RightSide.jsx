import React, { useState } from 'react'
// import "../App.css"
// import "./rightSide.css";
import Settings from './Settings';
import { StyleSheet } from './LeftRight';
import "./Style.css"

export default function RightSide() {
    let num = 0;
    const [ search,setSearch ] = useState("")
  return (
    <>
        <div className='right-side'  >
                <span className='title' style={StyleSheet.title}>Your Friend</span> 
                    <div className='followers' style={StyleSheet.right}>
                        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder={`Find Your Friend`} style={StyleSheet.searchInput} />

                        {folower && folower.filter((item)=>{
                    return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
                }).map((item)=>(
                            <div className='follow' style={StyleSheet.un_follow} key={num++}>
                                <div className='left' style={StyleSheet.left}>
                                    
                                <img src={item.image} alt="none" style={StyleSheet.leftImage} />
                                <a href="/" style={StyleSheet.link}>
                                    <h6>
                                        {item.name}
                                    </h6>
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
        name:"Ansar",
        image:"../image/wallpaperflare.com_wallpaper (4).jpg"
    },
    {
        name:"Khalid",
        image:"../image/wallpaperflare.com_wallpaper (3).jpg"
    },
    {
        name:"Aziz",
        image:"../image/wallpaperflare.com_wallpaper.jpg"
    }
]
