
import Service from "../models/service-model.js";

const services =async (req,res)=>{

    try {
        const response = await Service.find()
        console.log(response);

        if(!response){
            res.status(401).json({mssgs: " Service doc not found"})
        }

        return res.status(200).json({mssgs: response});
    } catch (error) {
        console.log("error in service controllers", error);
    }
}

export default services;