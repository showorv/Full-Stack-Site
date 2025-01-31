import { Router } from "express"
import ContactForm from "../controllers/form-controllers.js"
import validate from "../middlewares/validate-middleware.js";
import formSchema from "../validators/form-validator.js";


const router = Router()

router.route("/contact").post(validate(formSchema), ContactForm)

export default router;