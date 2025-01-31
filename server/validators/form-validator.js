import { z } from "zod";

const formSchema = z.object({
    username: z.
    string({ required_error: "Name is required"})
    .trim()
    .min(5, {message: "Name must be at least 3 char"})
    .max(50, {message: "name can't be more than 50 characters"}),

    email: z.
    string({ required_error: "email is required"})
    .trim()
    .email({message:"Inavlid email"}),
    

    message: z.
    string({ required_error: "message is required"})
    .trim()
   
    .max(250, {message: "Invalid"}),

   

})

export default formSchema;