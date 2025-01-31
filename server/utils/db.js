import mongoose from "mongoose";

// const URI = "mongodb://127.0.0.1:27017/full_stack"

const URI = process.env.MONGODB_URI;



const connectDb = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connect with database");
    } catch (error) {
        connectDb.apply("connection failed with db ")
        process.exit(0)
    }
}

export default connectDb;