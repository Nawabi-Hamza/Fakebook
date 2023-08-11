
const themes = localStorage.getItem("themes")

// function TextColor(){
//     if(themes==="light") return "black"
//     else return "white"
// }
function BgColor(){
    if(themes==="light") return "#f8f9fa"
    else return "#101927a7"
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
        marginBottom: "20px",
        backgroundColor: BgColor(),
        borderRadius: "20px",
        boxSizing: "border-box",
        padding:"20px",
    }
}

export {StyleSheet}





