import mongoose from "mongoose";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
})

//! before data save its hash the password. worked as middleware

userSchema.pre("save", async function(next){

    const user = this;

    if( ! user.isModified("password")){
        next()
    }
    try {
        
        const saltround = await bcryptjs.genSalt(10);
        const hash_password = await bcryptjs.hash(user.password, saltround)
        user.password = hash_password;
    } catch (error) {
        next(error)
    }

})

// compare password middleware

 userSchema.methods.comparePassword= async function(password){

    return bcryptjs.compare( password, this.password)
 }

// jwt for authentication and authorization

userSchema.methods.generateToken = async function(){ //? methods is very pwerful. create instance function

    try {

        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d"
            }
        )
        
    } catch (error) {
        console.error(error)
    }
}

//create collection 
const User = new mongoose.model("User", userSchema);

export default User;