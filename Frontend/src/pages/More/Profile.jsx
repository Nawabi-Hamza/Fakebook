

import React, { useState } from 'react'
import { StyleSheet } from './profile_style'
import "./Style.css"
export default function Profile() {
  const [ image,setImage ] = useState(false)
  const [ bio,setBio ] = useState(false)
  const showImage = ()=>{
    setImage(!image)
  }
  const showBio = ()=>{
    setBio(!bio)
  }
  const textBio = "Never Give Up"
  return (
    <div className='profile' style={StyleSheet.profile} >
        <div className="profileHeader">
          <img src="./image/wallpaperflare.com_wallpaper (1).jpg" alt="" style={StyleSheet.profileImage}/>
          <h6>Username</h6>
          <p>Hamza Nawabi</p>
          <h6>Email</h6>
          <p>hamza.nawabi119@gmail.com</p>
          <h6>Bio</h6>
          {bio?
          <><input type="text" defaultValue={textBio} style={StyleSheet.bioInput} /><button style={StyleSheet.button}>Update</button><button style={StyleSheet.button}  onClick={showBio}>Cancel</button><br /></>:
          <p>{textBio}</p>
          }
          
          {image? 
          <><input type="file" style={StyleSheet.updateImage} /><button style={StyleSheet.button}>Update</button><button style={StyleSheet.button}  onClick={showImage}>Cancel</button><br /></>:null
          }
          <button style={StyleSheet.button}>Change Password</button>
          {image? null:
          <button style={StyleSheet.button} onClick={showImage}>Change Profile</button>
          }
          <button style={StyleSheet.button} onClick={showBio}>Change Bio</button>
        </div>
        <hr />
        <h3>Your Freind</h3>
          <div className="friend-card" style={StyleSheet.friendCard}>
            <div className="single-friend" style={StyleSheet.singleFriendCard}>
              <div className="header">
                <img src="./image/wallpaperflare.com_wallpaper (1).jpg" alt="" style={StyleSheet.friendCardImage}/>
              </div>
              <h6 style={StyleSheet.friendUserName}>Ali Jan</h6>
              <div className="friendBtnGroup" style={StyleSheet.friendBtnGroup}>
                <button style={StyleSheet.friendButton}>UnFollow</button>
                <button style={StyleSheet.friendButton}>Profile</button>
              </div>
            </div>
            <div className="single-friend" style={StyleSheet.singleFriendCard}>
              <div className="header">
                <img src="./image/wallpaperflare.com_wallpaper (2).jpg" alt="" style={StyleSheet.friendCardImage}/>
              </div>
              <h6 style={StyleSheet.friendUserName}>Ali Jan</h6>
              <div className="friendBtnGroup" style={StyleSheet.friendBtnGroup}>
                <button style={StyleSheet.friendButton}>UnFollow</button>
                <button style={StyleSheet.friendButton}>Profile</button>
              </div>
            </div>
            <div className="single-friend" style={StyleSheet.singleFriendCard}>
              <div className="header">
                <img src="./image/wallpaperflare.com_wallpaper (3).jpg" alt="" style={StyleSheet.friendCardImage}/>
              </div>
              <h6 style={StyleSheet.friendUserName}>Ali Jan</h6>
              <div className="friendBtnGroup" style={StyleSheet.friendBtnGroup}>
                <button style={StyleSheet.friendButton}>UnFollow</button>
                <button style={StyleSheet.friendButton}>Profile</button>
              </div>
            </div>
            <div className="single-friend" style={StyleSheet.singleFriendCard}>
              <div className="header">
                <img src="./image/wallpaperflare.com_wallpaper (3).jpg" alt="" style={StyleSheet.friendCardImage}/>
              </div>
              <h6 style={StyleSheet.friendUserName}>Ali Jan</h6>
              <div className="friendBtnGroup" style={StyleSheet.friendBtnGroup}>
                <button style={StyleSheet.friendButton}>UnFollow</button>
                <button style={StyleSheet.friendButton}>Profile</button>
              </div>
            </div>
            
          </div>
        <hr />
        <h3>Your Posts</h3>
        <div className="allPosts">
          <div className="header">
            <div className="userPost">
              <img src="./image/wallpaperflare.com_wallpaper (3).jpg" alt="" style={StyleSheet.profileImage} />
              <i class="bi bi-trash3" style={StyleSheet.icons}></i> &nbsp;
              <i class="bi bi-pencil-square" style={StyleSheet.icons}></i>
            </div>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam nam cum eum, mollitia voluptatum nobis corrupti atque ipsa, velit dolorum minima. Autem sint, quam debitis possimus aut modi beatae?</p>
          </div>
        </div>

        <div className="allPosts">
          <div className="header">
            <div className="userPost">
              <img src="./image/wallpaperflare.com_wallpaper (3).jpg" alt="" style={StyleSheet.profileImage} />
              <i class="bi bi-trash3" style={StyleSheet.icons}></i> &nbsp;
              <i class="bi bi-pencil-square" style={StyleSheet.icons}></i>
            </div>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam nam cum eum, mollitia voluptatum nobis corrupti atque ipsa, velit dolorum minima. Autem sint, quam debitis possimus aut modi beatae?</p>
          </div>
        </div>
    </div>
  )
}
