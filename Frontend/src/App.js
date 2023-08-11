import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';

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
    <div className="App" style={theme==="dark" ?StyleSheet.bodyBlack:StyleSheet.body}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    {/* <Main/> */}
    </div>
  );
}

const StyleSheet = {
  body:{
    boxSizing: "border-box",
    padding: "20px 40px",
    backgroundColor: "#DFF8EB" ,
    fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    height:"atuo"
  },
  bodyBlack:{
    padding: "20px 40px",
    backgroundColor:"#010409",
    height:"auto",
    color:"white",
  }
  
}

export default App;