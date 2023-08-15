import React, { useState } from 'react'
import "../App.css"
import { StyleSheet } from './StyleSheet'
import { Link } from "react-router-dom"
import "./Style.css"
export default function Home() {
    const [ like,setLike ] = useState(false)
    const [ like2,setLike2 ] = useState(false)
    const changeLike = ()=>{
        setLike(!like)
    }
    const changeLike2 = ()=>{
        setLike2(!like2)
    }
   
    const [file, setFile] = useState();
    const [ showCreate,setShowCreate ] = useState(false)
    function handleShow(){
        setShowCreate(!showCreate)
        setFile(false)
    }
    function handleChange(e) {
        // console.log(e.target.files);
        if(e.target.files && e.target.files[0]){
            setFile(URL.createObjectURL(e.target.files[0]));
        }            
    }
  return (
    <div className='home' style={StyleSheet.home}>
        <div className="create-post" style={StyleSheet.createPost}>
            <div style={StyleSheet.createPostHeader}>
                <h6>Create Your Post </h6> {showCreate? <div><button style={StyleSheet.postButton}>Post</button><button style={StyleSheet.postButton} onClick={handleShow}>Cancel</button></div>:<button style={StyleSheet.postButton} onClick={handleShow}>Create A Post</button>}
            </div>
            {showCreate?
            <>
            <br />
            <textarea name="" id=""  rows="3" className='form-control' style={StyleSheet.contentPost}>Your Content . . .</textarea>
             <input type="file" class="form-control" style={StyleSheet.fileInput} onChange={handleChange} />
            <br />
                <img src={file? file:null} style={StyleSheet.prevImage} alt=''/>
            
            </>:null
            }
        </div>
        {/* <SinglePost /> */}             
        <div className="show-posts">
            <div className="single-post" style={StyleSheet.singlePost}>
                <div className="image">
                    <img src="./image/wallpaperflare.com_wallpaper (1).jpg" style={StyleSheet.image} alt="" />
                </div>
                <p style={StyleSheet.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquid aut provident sed temporibus cum nulla id natus, minima o Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos alias eum, ad quam mollitia sit sunt quisquam excepturi aliquid cupiditate recusandae ea non sed cum. Soluta eaque cupiditate ipsam.
                </p>
                <div className="btnGroup" style={StyleSheet.btnGroup}>
                    <button style={StyleSheet.button1} onClick={changeLike}>{like? <i className="bi bi-heart-fill"></i>:<i className="bi bi-heart"></i>} &nbsp; Like</button>
                    <Link to="/post/1" style={StyleSheet.links}><button style={StyleSheet.button2}><i className="bi bi-send"></i> &nbsp; Comment</button></Link>
                </div>
            </div>
            
        </div>
        <div className="show-posts">
            <div className="single-post" style={StyleSheet.singlePost}>
                <div className="image">
                    <img src="./image/wallpaperflare.com_wallpaper (2).jpg" style={StyleSheet.image} alt="" />
                </div>
                <p style={StyleSheet.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquid aut provident sed temporibus cum nulla id natus, minima o Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos alias eum, ad quam mollitia sit sunt quisquam excepturi aliquid cupiditate recusandae ea non sed cum. Soluta eaque cupiditate ipsam.
                </p>
                <div className="btnGroup" style={StyleSheet.btnGroup}>
                    <button style={StyleSheet.button1} onClick={changeLike2}>{like2? <i className="bi bi-heart-fill"></i>:<i className="bi bi-heart"></i>} &nbsp; Like</button>
                    <Link to="/post/2" style={StyleSheet.links}><button style={StyleSheet.button2}><i className="bi bi-send"></i> &nbsp; Comment</button></Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}


