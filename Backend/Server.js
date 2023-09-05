const express = require("express")
const env = require("dotenv")
const app = express()
const db = require("./database")
const cors = require("cors")
app.use(express.json())
app.use(cors())
env.config()

app.get("/api",(req,res)=>{
   res.send("Acess Denied Here Is Backend ...")
})



// ===============ROUTES================
const authentication = require("./router/userRouter")
const urlNotFound = require("./router/404")



// ================USES=================
app.use("/authentication",authentication)


// if use any 
app.use("*",urlNotFound)


   
// ==================SERVER RUNNIG================================
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server Is Running In ${process.env.SERVER_PORT}`)
})