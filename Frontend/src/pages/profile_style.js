
const themes = localStorage.getItem("themes")

function BtnBgColor(){
    if(themes==="light") return "rgb(209, 248, 229)"
    else return "#5eb088"
}
function TextColor(){
    if(themes==="light") return "black"
    else return "white"
}

const StyleSheet = {
    profile:{
        width:"35vw",
        marginTop:"4rem",
        // height:"80vh"
    },
    profileImage:{
        width:"100%",
        borderRadius:"20px",
        margin:"20px auto"
    },
    button:{
        fontSize: "1em",
        padding: "10px 30px",
        borderRadius: "20px",
        cursor: "pointer",
        border:`1px solid white`,
        color:"black",
        backgroundColor:BtnBgColor(),
        transition: ".3s",
        margin:"5px"
    },
    friendCard:{
        display:'flex',
        overflowX:"auto"
    },
    singleFriendCard:{
        width:"300px",
        margin:"10px"
    },
    friendCardImage:{
        width:"100%",
        borderRadius:"20px"
    },
    friendUserName:{
        margin:"10px 0px"
    },
    friendBtnGroup:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",

    },
    friendButton:{
        fontSize: ".9em",
        padding: "3px 10px",
        borderRadius: "20px",
        cursor: "pointer",
        border:`1px solid white`,
        color:"black",
        backgroundColor:BtnBgColor(),
        transition: ".3s",
        // margin:"5px"
    },
    icons:{
        fontSize:'20px',
        float:"right",
        margin:"0px 10px"
    },
    updateImage:{
        width:"200px",
        border:"none"
    },
    bioInput:{
        borderRadius:"20px",
        width:"auto",
        padding:"10px 20px",
        backgroundColor:'inherit',
        color:TextColor()
    }


}

export { StyleSheet }