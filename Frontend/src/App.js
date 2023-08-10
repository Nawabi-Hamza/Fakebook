import { useEffect } from 'react';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './pages/Home';

// ================SetColor If User Didn't Set it====================
function SetThemes (){
    const color = localStorage.getItem("themes")
    if(color==null){
      localStorage.setItem("themes","light")
    }
    return color;
}
const color = SetThemes();

function App() {
  // const location = useLocation()
  // console.log(location)
  useEffect(()=>{
    console.log(color)

  },[])
  return (
    <div className="App" style={StyleSheet.body}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route path="/" element={<Home />} />
            
          </Route>
         
            
        </Routes>
      </BrowserRouter>
      <Main />
    </div>
  );
}




const StyleSheet = {
  body:{
    boxSizing: "border-box",
    padding: "20px 40px",
    backgroundColor: "#DFF8EB",
    fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    height:"auto"
    
  }
}

export default App;
