const db = require("../database")



const LoginUser = (req,res)=>{
    const q = "SELECT u_name  , u_email , u_password , u_image , u_bio , u_type FROM users WHERE u_email = ? OR u_password = ?;"
    const value = [ req.body.email,req.body.password ]
    db.query(q,value,(err,data)=>{
        if(data[0].u_email === value[0]) {
            if(data[0].u_password === value[1]) return res.status(200).json(data[0])
            else return res.status(500).json({message:"Please check your password"})
        }
        else return res.status(500).json({message:"Your email dose not exist"})
    })
}
const Register = (req,res)=>{
    const q1 = "SELECT u_name , u_email FROM users WHERE u_email = ?"
    const q2 = "INSERT INTO `users` ( `u_name`, `u_email`, `u_password`, `u_image`, `u_bio`, `u_type`, `u_login_type`, `u_register_data`) VALUES (?, ?, ?, NULL, NULL, \'user\', \'form\', CURRENT_DATE());";
    const value1 = [ req.body.email ] 
    const value2 = [ req.body.name,req.body.email,req.body.password,req.body.try_password ]
    // -----------check email if exist in database---------------
    db.query(q1,value1,(error,data)=>{
        if(data[0]) return res.status(500).json({message:"This email exist please use another email ..."})
        // -----------------If email does not exist in database then can create account------------------
        else if(!data[0]) {
            if(value2[2]===value2[3]){
                db.query(q2,value2,(error,data)=>{
                    if(data){
                        res.status(200).json({message:"We Send You an email Please verify that ..."})
                    }else return res.status(404).json(error)
                })
            }else{
                res.status(500).json({message:"Please type same password ..."})
            }
        }
        else return res.status(404).json(error)
    })
}




module.exports = {
    LoginUser,
    Register
}