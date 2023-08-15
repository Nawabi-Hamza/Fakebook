
const themes = localStorage.getItem("themes")

// function TextColor(){
//     if(themes==="light") return "black"
//     else return "white"
// }
function BgColor(){
    if(themes==="light") return "#f8f9fa"
    else return "#101927a7"
}
function BtnBgColor(){
    if(themes==="light") return "rgb(209, 248, 229)"
    else return "#5eb088"
}
function TextColor(){
    if(themes==="light") return "black"
    else return "white"
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
        backgroundColor:BgColor(),
        borderRadius: "20px",
        marginTop: "10px",
        marginBottom: "20px",
    },
    singlePost:{
        width:"100%",
        marginBottom: "30px",
        backgroundColor: BgColor(),
        borderRadius: "20px",
        boxSizing: "border-box",
        padding:"0px",

    },
    image:{
        width:"100%",
        borderRadius:"20px 20px 0px 0px",
        padding:"4px",
        border:'1px solid gray'
    },
    paragraph:{
        padding:"10px 20px",
        border:"1px solid gray",
        borderTop:"0px",
        borderBottom:"0px",
        borderRight:"0px",
        marginTop:"20px"
    },
    links:{
        textDecoration:"none",
        color:TextColor(),
    },
    btnGroup:{
        width:"100%",
        height:"40px"
        // padding:"0px 20px"
    },
    button1:{
        width:"50%",
        border:"none",
        backgroundColor:BtnBgColor(),
        borderRadius:"0px 0px 0px 20px",
        padding:"10px 0px"

    },
    button2:{
        width:"50%",
        border:"none",
        backgroundColor:BtnBgColor(),
        borderRadius:"0px 0px 20px 0px",
        padding:"10px 0px"

    },
    textAria:{
        width:"100%",
        border:"none",
        padding:'10px',
        marginBottom:"-5px",
        backgroundColor:BgColor(),
        color:TextColor(),
        outline:"none"
    },
    commentContainer:{
        padding:"0px 5px",
        
    },
    comments:{
        padding:"20px",
        backgroundColor:BtnBgColor(),
        borderRadius:'10px',
        margin:"10px 0px"
        // display:"flex",
        // gap:10
    },
    commentImage:{
        height:"3rem",
        width:"3rem",
        borderRadius:"50%"
    },
    singleHeader:{
        display:"flex",
        alignItems:"center",
        gap:10
    },
    textComments:{
        marginTop:"15px",
        fontSize:"12px",
    },
    singleArrowToHome:{
        fontSize:"30px",
        position:'fixed',
        top:'80px',
        zIndex:"90",
        color:TextColor(),
        fontWeight:"1800",
        backgroundColor:BgColor(),
    },
    prevImage:{
        width:"100%",
        margin:"10px auto"
    },
    contentPost:{
        display:"block",
        width:"100%",
        margin:"10px auto",
        backgroundColor:BgColor(),
        color:TextColor(),
        borderColor:"gray",
        // height:"auto"
    },
    createPostHeader:{
        display:"flex",
        justifyContent:"space-between",
        // height:"auto",
        alignItems:"center",
    },
    postButton:{
        // width:"auto",
        border:"none",
        backgroundColor:BtnBgColor(),
        borderRadius:"20px",
        padding:"10px 15px",
    },
    fileInput:{
        backgroundColor:BgColor(),
        color:TextColor(),
        borderColor:"gray",         
    }
   
}

export {StyleSheet}





