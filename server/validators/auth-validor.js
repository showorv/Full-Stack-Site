import { z } from "zod";

const signUpSchema = z.object({
    username: z.
    string({ required_error: "Name is required"})
    .trim()
    .min(5, {message: "Name must be at least 3 char"})
    .max(50, {message: "name can't be more than 50 characters"}),

    email: z.
    string({ required_error: "email is required"})
    .trim()
    .email({message:"Inavlid email"}),
    

    phone: z.
    string({ required_error: "phone number is required"})
    .trim()
    .min(11, {message: "Invalid phone"})
    .max(11, {message: "Invalid"}),

    password: z.
    string({ required_error: "password is required"})
    .trim()
    .min(5, {message: " must be at least 3 char"})
    .max(50, {message: " can't be more than 50 characters"}),


})

export default signUpSchema;