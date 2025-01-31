
import { Router } from "express"
import services from "../controllers/service-controllers.js"

const router = Router()

router.route("/service").get(services)

export default router;