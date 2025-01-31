
const errorHanadling = (err, req,res,next)=>{

    const status = err.status || 400;
    const message = err.message || "Backend error"
    const details = err.details || "Backend problem"

    return res.status(status).json({ message, details})
}

export default errorHanadling;