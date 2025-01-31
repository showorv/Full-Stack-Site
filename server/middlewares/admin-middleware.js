
const adminMiddleware = async(req,res,next)=>{

   try {
    //  console.log(req.user);

     const admin_role = req.user.isAdmin; 
     
     //? req.user from auth middleware. Its use for not re-fetch.. in admin router we declare authmiddleware before adminmiddleware so req.user get from auth

     if(!admin_role){
        return res.status(401).json({mssgs: " Access denied"})
     }
     

    //  return res.status(200).json({mssgs: req.user})

     next()
   } catch (error) {
    console.log(error);
   }


}

export default adminMiddleware;