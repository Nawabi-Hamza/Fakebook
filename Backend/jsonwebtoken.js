const { verify } =require("jsonwebtoken")
const env = require("dotenv");
env.config()


const checkToken = (req,res,next)=>{
    let token = req.get("Authorization")
    let jsonToken = process.env.JWT_SECRET_KEY
    if(token){
        token = token.slice(7);
        verify(token,jsonToken,(error,decoded)=>{
            if(error){
                res.json({
                    message:"Invalid Token do not cheat !"
                })
            }else{
                next();
                // return res.send(decoded)
            }
        })
    }else{
        res.json({
            message:"Access Denied..."
        })
    }
}


module.exports = { 
    checkToken
};