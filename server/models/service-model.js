import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    service:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    provider:{
        type: String,
        require: true
    },
})

const Service = new mongoose.model("Service", serviceSchema)

export default Service;