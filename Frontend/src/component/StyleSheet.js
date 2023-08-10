

const themes = localStorage.getItem("themes")

function TextColor(){
    if(themes==="light") return "black"
    else if(themes==="dark") return "black"
    else if(themes==="pink") return "pink"
    else return "white"
}
const boxShadow = "0px 0px 20px white , 1px 1px 12px white"
// rgb(135, 206, 235)
const StyleSheet = {
    title:{
        color:TextColor(),
        fontSize:"1em",
        fontWeight:700,
        marginLeft:"10px"
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
        alignItems:"center"

    },
    leftImage:{
        width: "4em",
        height: "4em",
        marginRight: "10px",
        borderRadius: "10px",
        objectFit: "cover",
        cursor: "pointer",
        transition:".5s",
    },
    leftSide:{
        width:"27%",
        height: "93vh",
        position: "sticky",
        left: "0px",
        top: "20px",
        bottom: "0px",               
        boxSizing: "border-box",
        padding: "0px 20px",
        overflowY: "auto",
    },
    leftSide_unFollower:{
        height: "88vh",
        boxSizing: "border-box",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "20px",
        boxShadow: boxShadow,
        margin:" 5px auto",
        overflowY: "auto",
        // border:"2px solid red"
    },
    button:{
        fontSize: "1em",
        padding: "10px 30px",
        borderRadius: "20px",
        cursor: "pointer",
        border:"1px solid white",
        color:"black",
        backgroundColor:"rgb(209, 248, 229)",
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
        color:"black",
        transition: ".4s",
    }

}     



export { StyleSheet }