import api from "../api";
import axios from "axios";
const { createContext, useState, useEffect } = require("react");




export const AuthContext = createContext()


export default AuthContextProvider = ({children})=>{
    const [ currentUser,setCurrentUser ] = useState( JSON.parse(localStorage.getItem('token')) || null)
    const login = async(inputs)=>{
        const res = await axios.post(`${api}/authentication/login`,inputs)
        setCurrentUser(res.data)
    }
    const logout = async(inputs)=>{
        // alert("")
        await axios.post(`${api}/auth/logout`)
        setCurrentUser(null)
      //   setConfig({})
        alert("You Logout Successfuly")

     }

     useEffect(() => {
       localStorage.setItem("user",JSON.stringify(currentUser))
     }, [currentUser])
     
     return(
     <AuthContext.Provider value={{currentUser, login , logout}}>
        {children}
     </AuthContext.Provider>
        )
}    

