import User from "../models/user-model.js";
import bcryptjs from "bcryptjs"
// * home Logic
const home = async(req,res)=>{

    try {
        
        res
        .status(200)
        .send("Hello world")
    } catch (error) {
        console.log(error);
    }
}

// * registration logic
const registration= async(req,res)=>{

    try {
        
        console.log(req.body);

        //? derrived or destruction userdata
        const {username, email,phone, password} = req.body

    //validation

    const userExist = await User.findOne({email:email});
    if(userExist){
       return res.status(400).json({mssgs: "User already exist"})
    }

    const Userdata = await User.create({username, email,phone, password })
        
        res.status(200)
        .json({ message: Userdata, //or "registration successfull"
        token: await Userdata.generateToken(), 
        userId: Userdata._id.toString() // to string is a best practice in jwt
        })

    } catch (error) {
       res.status(404).json("internal server error")
    }
}


// login logic

const login = async(req, res)=>{

    try {

        const { email, password} = req.body;

        const userExists = await User.findOne({ email});

        if(!userExists){
          return  res.status(404).json({mssgs: "Invalid"})
        }

        // const passCheck = await bcryptjs.compare( password, userExists.password)

        const passCheck = await userExists.comparePassword(password)
        if(passCheck){
            res.status(200)
        .json({ message: "Login successfull", //or "registration successfull"
        token: await userExists.generateToken(), 
        userId: userExists._id.toString() // to string is a best practice in jwt
        
        })
        }else{
            res.status(400).json({messs: "Invalid email or password"})
        }
        
    } catch (error) {
        res.status(404).json("internal server error")
    }
}

// user route logic

const user = (req,res)=>{
    try {
        
        const userData = req.user  // req.user will be created in middleware
        console.log(userData);

        return res.status(200).json({userData})
    } catch (error) {
        console.log("error in user logic", error);
    }
}

export default {home,registration, login,user};