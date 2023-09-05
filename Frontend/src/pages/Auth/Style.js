

const theme = localStorage.getItem("themes")
function color(){
    if(theme==="dark") return "white"
    else return "black"
}
function BgColor(){
        if(theme==="dark") return "rgb(13 17 23)"
        else return "none"
}
function TitleColor(){
    if(theme==="dark") return "white"
     else return "white"
}


const StyleSheet = {
    beforeForm:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:'95vh',

    },
    form:{
        border:`1px solid ${color()}`,
        position:"relative",
        width:"400px",
        height:"auto",
        borderRadius:"20px",
        boxSizeing:"border-box",
        padding:"50px 0px",
        backgroundColor:BgColor(),

    },
    header1:{
        margin:"30px auto",
    },
    input:{
        display:"block",
        margin:"10px auto",
        border:"0px",
        padding:"10px" ,
        borderRadius:"20px",
        width:"260px"

    },
    button:{
        display:"block",
        margin:"10px auto",
        padding:"10px" ,
        borderRadius:"20px",
        width:"260px",
        border:"none",
        backgroundColor:"rgb(209, 248, 229)",
        outline:"1px solid white",
        transition:".5s"
    },
    Link:{
        textDecoration:"none"
    },
    register:{
        position:"absolute",
        right:"15px",
        top:"0",
        outline:"none",
        backgroundColor:TitleColor(),
        fontSize:"2rem",
        border:"1px solid black",
        borderTop:"none",
        borderRadius:"0px 0px 20px 20px",
        padding:"5px 20px",
        color:"black"

    },
    forgetPasswrod:{
        position:"absolute",
        bottom:"10px",
        left:"10px",
    },
    forgetLink:{
        textDecoration:"none",

    },
    recaptcha:{
        display:"flex",
        margin:"10px 0px 10px 4.5rem",
        gap:"10px"
    },
    chackBox:{
        cursor:'pointer',
        transform:"scale(150%)"
    }

}


export { StyleSheet }