import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { AppLayout } from "./components/layout/AppLayout"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { Register } from "./pages/Register"
import { LogIn } from "./pages/LogIn"
import "./App.css"
import { Error } from "./pages/Error"
import { Logout } from "./pages/Logout"
import { Admin } from "./components/layout/Admin-layout"
import { Users } from "./pages/admin/Users"
import { Contacts } from "./pages/admin/Contacts"
import { ServicesAdmin } from "./pages/admin/Services-admin"
import { SingleEdit } from "./pages/admin/singleEdit"
export const App = ()=>{
  
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:< AppLayout />,
      errorElement:<Error />,

      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <LogIn />
        },
        {
          path: "/logout",
          element: <Logout />
        },
        {
          path:"/admin",
          element: <Admin />,
          children:[
            {
              path:"user", //?nested route er er path e / dewa lagbe na
              element:<Users />
            },
            {
              path:"contacts",
              element:<Contacts />
            },
            {
              path:"serviceAdmin",
              element:<ServicesAdmin />
            },
            {
              path:"user/:id/edit",
              element:<SingleEdit />
            },
          ]
        }
      ]
    }
  ])

  return(
    <RouterProvider router={router} />
  )
}