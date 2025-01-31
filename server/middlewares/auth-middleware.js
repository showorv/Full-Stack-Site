
import  Jwt  from "jsonwebtoken";
import User from "../models/user-model.js";


export const authMiddleware = async(req,res,next)=>{

        const token = req.header("Authorization")

        if(!token){
            res.status(401).json({mssgs: " token not provided"})
        }

        const jwtToken = token.replace("Bearer","").trim()
        console.log(jwtToken);

       

        try {
            //verifying token
            const isverified = await Jwt.verify(jwtToken, process.env.JWT_SECRET_KEY )


            const userData = await User.findOne({email: isverified.email}).select({password:0})

            req.token = token
            req.user = userData
            // req.userId = user._id
            next()
          
        } catch (error) {
            console.log("error in middle", error);
        }
       
       
        

}