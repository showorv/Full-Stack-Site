import 'dotenv/config';
import express from "express";
import router from "./router/auth-router.js";
import connectDb from "./utils/db.js";
import errorHanadling from './middlewares/error-middleware.js';
import contactrouter from "./router/form- router.js"
import serviceRoute from "./router/service-router.js"
import adminRouter from "./router/admin-router.js"
import contactAdmin from "./router/admin-router.js"
import serviceAdmin from "./router/admin-router.js"
import cors from 'cors';


const app = express();
const PORT = 3100;


// !cors use for connect frontend and backend
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: " POST, GET, DELETE, PATCH,PUT, HEAD",
    credentials: true
}
app.use(cors(corsOptions))
//! use json before router as a middleware for handle json data in the request body

app.use(express.json());

//router for auth
app.use( "/api/auth", router)

//form route

app.use("/api/form", contactrouter)

//service route

app.use("/api/data", serviceRoute)

//admin user route

app.use("/api/admin", adminRouter)
//admin contact

app.use("/api/admin",contactAdmin)

//service admin
app.use("/api/admin",serviceAdmin)


// error handling

app.use(errorHanadling);

//connect with db
connectDb().then(()=>{

    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`);
    })

})

