import React from 'react'
import "../App.css"
export default function Home() {
  return (
    <div className='home' style={StyleSheet.home}>
        <div className="create-post" style={StyleSheet.createPost}>
            create your post in here
        </div>
        <div className="show-posts">
            <div className="single-post" style={StyleSheet.singlePost}>
                Home
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit amet magni quod inventore aliquid aut provident sed temporibus cum nulla id natus, minima officiis debitis doloremque numquam quas, recusandae ipsa sit! Dolorem quia consequuntur, neque odit temporibus quisquam explicabo at corporis impedit nisi quo araerat d.

            </div>
            <div className="single-post" style={StyleSheet.singlePost}>
                Home
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit amet magni quod inventore aliquid aut provident sed temporibus cum nulla id natus, minima officiis debitis doloremque numquam quas, recusandae ipsa sit! Dolorem quia consequuntur, neque odit temporibus quisquam explicabo at corporis impedit nisi quo architecto, voluptas numquam nostrum voluptates tenetur ipsum ipsa porro, provident non? Animi recusandae pariatur architecto? Harum ipsa pariatur aliquam 

            </div>
        </div>
    </div>
  )
}


const StyleSheet = {
    home:{
        width:"35%",
        position:"relative",
        
    },
    createPost:{
        boxSizing: "border-box",
        padding: "20px",
        width: "100%",
        backgroundColor:"skyblue",
        borderRadius: "20px",
        marginTop: "10px",
        marginBottom: "20px",
    },
    singlePost:{
        width:"100%",
        marginBottom: "20px",
        backgroundColor: "rgb(226, 220, 220)",
        borderRadius: "20px",
        boxSizing: "border-box",
        padding:"20px",
    }
}