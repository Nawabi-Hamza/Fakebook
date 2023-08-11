

const themes = localStorage.getItem("themes")

function TextColor(){
    if(themes==="light") return "black"
    else return "white"
}
function BgColor(){
    if(themes==="light") return "#f8f9fa"
    else return "#0d1117"
}
// function BtnColor(){
//     if(themes==="light") return "#f8f9fa"
//     else return " black"
// }
function BtnBgColor(){
    if(themes==="light") return "rgb(209, 248, 229)"
    else return "#5eb088"
}

const shadow = "0px 0px 2px gray"


const StyleSheet = {
    title:{
        color:TextColor(),
        fontSize:"1em",
        fontWeight:700,
        marginLeft:"10px",

    },
    un_follow:{
        display:"flex",
        width:"100%",
        height:" 80px",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius:" 20px",
        margin: "5px auto",
    },
    left:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    },
    leftImage:{
        height: "3rem",
        width: "3rem",
        marginRight: "10px",
        borderRadius: "50%",
        objectFit: "cover",
        cursor: "pointer",
        transition:".5s",
    },
    leftSide:{
        width:"27%",
        height: "90vh",
        position: "sticky",
        left: "0px",
        top: "20px",
        bottom: "0px",               
        boxSizing: "border-box",
        padding: "0px 20px",
        overflowY: "auto",
    },
    leftSide_unFollower:{
        boxShadow:shadow,
        height: "85vh",
        boxSizing: "border-box",
        padding: "20px",
        marginTop:"20px",
        // backgroundColor: "#f8f9fa",
        borderRadius: "20px",
        // boxShadow: boxShadow,
        margin:" 1.2em auto",
        overflowY: "auto",
        color:"white",
        // border:"2px solid red"
        backgroundColor:BgColor(),
        
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
        // "^&hover":{
        //     backgroundColor: "red",
        //     color: "white",
        //     border:" 1px solid",
        //     outline: "2px solid red",
        //     outlineOffset: "1px",

        // }
    },
    link:{
        textDecoration: "none",
        transition: ".4s",
        color:TextColor(),
    },
    right:{
        backgroundColor:BgColor(),
        boxShadow:shadow

    },
    settings:{
        backgroundColor:BgColor() ,
        color:TextColor(),
        boxShadow:shadow
        
    },
    settingButton:{
        fontSize: "1em",
        padding: "10px 30px",
        borderRadius: "20px",
        cursor: "pointer",
        // border:"1px solid white",
        transition: ".3s",
    },
    settingSelect:{
      border:"none" ,
      outline:"none" ,
      background:"none",
      width:"100%",
      color:TextColor()
    },
    settingOptButton:{
      width:"300px",
      backgroundColor:BgColor()
    },
    settingLink:{
      textDecoration:"none",
      color:TextColor(),
    }

}     



export { StyleSheet }