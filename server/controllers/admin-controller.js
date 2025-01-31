import User from "../models/user-model.js"
import Contact from "../models/form-model.js";
import Service from "../models/service-model.js";

export const adminUser =async (req,res)=>{
    try {
        
        const user_data = await User.find({},{password:0})
        console.log(user_data);
        if(!user_data){
            return res.status(401).json({mssgs: "User not found"})
        }
        return res.status(200).json(user_data)
    } catch (error) {
        console.log("error in admin controll", error);
    }
}


export  const contactAdmin=async(req,res)=>{
    try {
        
        const contact_data = await Contact.find()
        console.log(contact_data);
        if(!contact_data){
            return res.status(401).json({mssgs: "contact not found"})
        }
        return res.status(200).json(contact_data)
    } catch (error) {
        console.log("error in admin controll", error);
    }

}

export const serviceAdmin = async (req,res)=>{
    try {
        
        const service_data = await Service.find()
        console.log(service_data);
        if(!service_data){
            return res.status(401).json({mssgs: "service not found"})
        }
        return res.status(200).json(service_data)
    } catch (error) {
        console.log("error in admin controll", error);
    }

}

export const deleteUser =async (req,res)=>{

    try {
        
    const id = req.params.id // url theke id get korar jnne

    await User.deleteOne({_id:id})

    return res.status(200).json({messgs:"User deleted succestr"})
    } catch (error) {
        console.log('delete user',error);
    }

}

export const updateUser = async(req,res)=>{
     
    try {
        
        const id = req.params.id // url theke id get korar jnne
    
        const data= await User.findOne({_id:id},{password:0})
    
        return res.status(200).json(data)
        } catch (error) {
            console.log('update user',error);
        }
    
}

export const updateUserByID =async (req,res)=>{

    try {

        const id = req.params.id
        const updateUser = req.body //! to get user updated details in backend

        const updateduser = await User.updateOne({_id:id},
            {
                $set: updateUser
            })

            return res.status(200).json({mssgs:"updated succesfully",updateduser})

        
    } catch (error) {
        console.log(error);
    }
}


export const deleteContact = async(req,res)=>{

    try {
        
        const id = req.params.id

        await Contact.deleteOne({_id:id})
        return res.status(200).json({mssgs:"Delete contact Successfully"})

    } catch (error) {
        console.log("error in delete ", error);
    }
}