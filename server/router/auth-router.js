import express from "express"
import { Router } from "express"
import authControllers from "../controllers/auth-controllers.js";
const { home, registration , login,user} = authControllers;
import signUpSchema from "../validators/auth-validor.js";
import validate from "../middlewares/validate-middleware.js"
import { authMiddleware } from "../middlewares/auth-middleware.js";



const router = Router()

// home route
router.route("/").get(home)

//register route
router.route("/register").post(validate(signUpSchema), registration) // ? post for insert in database

//login route
router.route("/login").post(login)

// user route

router.route("/user").get(authMiddleware,user)
export default router;