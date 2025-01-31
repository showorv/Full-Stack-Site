import mongoose from "mongoose";

const contactForm = new mongoose.Schema({

    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
})


const Contact = new mongoose.model("Contact", contactForm)

export default Contact;