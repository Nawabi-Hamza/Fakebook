import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Main from './pages/More/Main';
import Home from './pages/More/Home';
import Profile from './pages/More/Profile';
import SinglePost from './pages/More/SinglePost';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RegisterVarify from './pages/Auth/RegisterVerify';
import PageNotFound from './pages/404/404';
// ================SetColor If User Didn't Set it====================
function SetThemes (){
    const color = localStorage.getItem("themes")
    if(color==null){
      localStorage.setItem("themes","light")
    }
    return color;
}
SetThemes();

function Router() {
  const storage = localStorage.getItem("token")
  return (
    <div >
      <BrowserRouter>
        <Routes>
          {storage?
            <Route path='/' element={<Main />} >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<SinglePost />} />
            </Route>:
          <Route path='*' element={<Login />} />
          }
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/varify' element={<RegisterVarify />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const StyleSheet = {
//   body:{
//     boxSizing: "border-box",
//     padding: "20px 20px",
//     backgroundColor: "#DFF8EB" ,
//     fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
//     height:"atuo"
//   },
//   bodyBlack:{
//     padding: "20px 20px",
//     backgroundColor:"#010409",
//     height:"auto",
//     color:"white",
//   }
  
// }

export default Router;