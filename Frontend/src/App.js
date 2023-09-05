import './App.css';
import Router from './Router';
// ================SetColor If User Didn't Set it====================
function SetThemes (){
    const color = localStorage.getItem("themes")
    if(color==null){
      localStorage.setItem("themes","light")
    }
    return color;
}
SetThemes();

function App() {

   const theme = localStorage.getItem("themes")
  return (
    <div className="App" style={theme==="dark" ? StyleSheet.bodyBlack:StyleSheet.body}>
      <Router />
    </div>
  );
}

const StyleSheet = {
  body:{
    boxSizing: "border-box",
    padding: "20px 20px",
    backgroundColor: "#DFF8EB" ,
    fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    height:"atuo"
  },
  bodyBlack:{
    padding: "20px 20px",
    backgroundColor:"#010409",
    height:"auto",
    color:"white",
  }
  
}

export default App;