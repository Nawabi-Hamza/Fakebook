

const theme = localStorage.getItem("themes")
function color(){
    if(theme==="dark") return "white"
    else return "black"
}
function BgColor(){
        if(theme==="dark") return "black"
        else return "white"
}



const StyleSheet = {
    form:{
        border:`1px solid ${color()}`,
        position:"relative",
        width:"400px",
        height:"87vh",
        borderRadius:"20px",
        boxSizeing:"border-box",
        padding:"50px 0px"

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
        border:"0px",
        padding:"10px" ,
        borderRadius:"20px",
        width:"260px",
        border:"none",
        backgroundColor:"rgb(209, 248, 229)",
        outline:"1px solid white",
        transition:".5s"
    },
    register:{
        position:"absolute",
        right:"15px",
        top:"0",
        // transform:"rotate(270deg)",
        outline:"none",
        backgroundColor:color(),
        fontSize:"2rem",
        border:"1px solid black",
        borderTop:"none",
        borderRadius:"0px 0px 20px 20px",
        padding:"5px 20px"
    },
    forgetPasswrod:{
        position:"absolute",
        bottom:"10px",
        left:"10px",
    },
    forgetLink:{
        textDecoration:"none"

    },
    recaptcha:{
        display:"flex",
        justifyContent:"space-around",
        margin:"20px auto",
    },
    chackBox:{
        cursor:'pointer',
        height:"15px",
        width:"15   px",
    }

}


const RegisterStyleSheet = {
    form:{
        border:`1px solid ${color()}`,
        position:"relative",
        width:"400px",
        height:"87vh",
        borderRadius:"20px",
        boxSizeing:"border-box",
        padding:"10px 0px"

    },
    header1:{
        margin:"30px auto",

    },
    input:{
        display:"block",
        margin:"5px auto",
        border:"0px",
        padding:"5px 10px" ,
        borderRadius:"20px",
        width:"260px"

    },
    button:{
        display:"block",
        margin:"5px auto",
        border:"0px",
        padding:"5px" ,
        borderRadius:"20px",
        width:"260px",
        border:"none",
        backgroundColor:"rgb(209, 248, 229)",
        outline:"1px solid white",
        transition:".5s"
    },
    register:{
        position:"absolute",
        right:"15px",
        top:"0",
        // transform:"rotate(270deg)",
        outline:"none",
        backgroundColor:color(),
        fontSize:"2rem",
        border:"1px solid black",
        borderTop:"none",
        borderRadius:"0px 0px 20px 20px",
        padding:"5px 20px"
    },
    forgetPasswrod:{
        position:"absolute",
        bottom:"10px",
        left:"10px",
    },
    forgetLink:{
        textDecoration:"none"

    },
    recaptcha:{
        display:"flex",
        justifyContent:"space-around",
        margin:"20px auto",
    },
    chackBox:{
        cursor:'pointer',
        height:"15px",
        width:"15   px",
    }

}
export { StyleSheet, RegisterStyleSheet }