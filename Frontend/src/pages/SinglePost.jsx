
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet } from './StyleSheet'
import "./Style.css"
export default function SinglePost() {
    const [ like,setLike ] = useState(false)
    const changeLike = ()=>{
        setLike(!like)
    }
  return (
    <div className='home' style={StyleSheet.home}>
    <div className="show-posts">
            <div className="single-post" style={StyleSheet.singlePost}>
                <div className="image">
                    <img src="../image/wallpaperflare.com_wallpaper (2).jpg" style={StyleSheet.image} alt="" />
                </div>
                <p style={StyleSheet.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div>
                    <textarea rows="3" placeholder={"Your Comment . . ."} style={StyleSheet.textAria}></textarea>
                </div>
                <div className="btnGroup" style={StyleSheet.btnGroup}>
                    <button style={StyleSheet.button1} onClick={changeLike}>{like? <i className="bi bi-heart-fill"></i>:<i className="bi bi-heart"></i>} &nbsp; Like</button>
                    <Link to="/single/post" style={StyleSheet.links}><button style={StyleSheet.button2}><i className="bi bi-send"></i> &nbsp; POST</button></Link>
                </div>
                   <Link to='/'>
                        <i class="bi bi-arrow-bar-left btn" style={StyleSheet.singleArrowToHome}></i>
                   </Link> 
            </div>
        </div>
        
        {/* Comments Section */}
        <div className="comments" style={StyleSheet.commentContainer}>
            <div className="anotherComment" style={StyleSheet.comments}>
                <div style={StyleSheet.singleHeader}>
                <img src="../image/wallpaperflare.com_wallpaper (3).jpg" style={StyleSheet.commentImage} alt="" />
                    <h5>Username</h5>
                </div>
                <div style={StyleSheet.textComments}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt magni ipsum, mollitia cupiditate impedit iste similique modi labore minus sapiente distinctio totam possimus, error reprehenderit excepturi ipsam exercitationem blanditiis!</p>
                </div>
            </div>
            <div className="anotherComment" style={StyleSheet.comments}>
                <div style={StyleSheet.singleHeader}>
                <img src="../image/wallpaperflare.com_wallpaper (3).jpg" style={StyleSheet.commentImage} alt="" />
                    <h5>Username</h5>
                </div>
                <div style={StyleSheet.textComments}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt magni ipsum, mollitia cupiditate impedit iste similique modi labore minus sapiente distinctio totam possimus, error reprehenderit excepturi ipsam exercitationem blanditiis!</p>
                </div>
            </div>
            <div className="anotherComment" style={StyleSheet.comments}>
                <div style={StyleSheet.singleHeader}>
                <img src="../image/wallpaperflare.com_wallpaper (3).jpg" style={StyleSheet.commentImage} alt="" />
                    <h5>Username</h5>
                </div>
                <div style={StyleSheet.textComments}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt magni ipsum, mollitia cupiditate impedit iste similique modi labore minus sapiente distinctio totam possimus, error reprehenderit excepturi ipsam exercitationem blanditiis!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
