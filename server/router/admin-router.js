import {Router} from "express"
import { adminUser, contactAdmin, deleteContact, deleteUser, serviceAdmin, updateUser, updateUserByID } from "../controllers/admin-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";



const router = Router()
//user route
router.route("/Users").get(authMiddleware,adminMiddleware,adminUser)


//?its for get user for updatw
router.route("/Users/:id").get(authMiddleware,adminMiddleware,updateUser)

//?its for  updatw
router.route("/Users/update/:id").patch(authMiddleware,adminMiddleware,updateUserByID)



router.route("/Users/delete/:id").delete(authMiddleware,adminMiddleware,deleteUser)

//contact route

router.route("/Contacts" ).get(authMiddleware,adminMiddleware,contactAdmin)

router.route("/Contacts/delete/:id" ).delete(authMiddleware,adminMiddleware,deleteContact)

//service route

router.route("/Services" ).get(serviceAdmin)

export default router;
