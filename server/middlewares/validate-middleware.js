
const validate = (schema)=> async(req,res,next)=>{ // ! this schema mainly signUp schema indicate krtese

    try {
        
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody;
        next();
    } catch (err) {
        const message = "Fill up the form"
        const details = err.errors[0].message;
        console.log(message);
        
        const error = {
            message,
            details
        }

        // res.status(400).json({mssgs: message})
        next(error);
    }
}

export default validate;