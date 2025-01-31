import Contact from "../models/form-model.js"

const ContactForm = async(req,res)=>{

    try {

        const response = req.body
        await Contact.create(response);
        return res.status(200).json({ mssgs: "message send successfull"})
        
    } catch (error) {
        return res.status(400).json({mssgs: " error "})
    }
    
}

export default ContactForm