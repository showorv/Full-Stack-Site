import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [serviceDoc, setServiceDoc] = useState([])
    
    const tokenAuth = `Bearer ${token}`

    const API = import.meta.env.VITE_API_KEY 
   
    //* tackle the token set in localstorage
    const setTokenLocalSG = (serveTOken)=>{

        setToken(serveTOken) // local storage e add howar age token set kora nahole log in kore refresh dite hbe. age setoken korle re-render hbe
        return localStorage.setItem("token",serveTOken)
    }

     //! to tackle toogle log in and logout

     let isLoggIn = !!token // if token thake tahole true

     //tackle logout process
     const logoutUser = ()=>{
         setToken("")
         return localStorage.removeItem("token")
     }

     //! get user details

     const userAuthentication = async()=>{
        try {
            setIsLoading(true)
            const response = await fetch(`${API}/api/auth/user`,{
                method:"GET",
                headers:{ Authorization: tokenAuth }
            })
            if(response.ok){
                const data = await response.json()
                console.log("userdata",data);
                setUser(data.userData) // user er sob data setuser er mddhe store 
                setIsLoading(false)
            }else {
                console.error("Error fetching user data");
                setIsLoading(false)
                
              }
    
        } catch (error) {
            console.log("error in fetched", error);
        }
       
        
     }

     //! fetch services api from backend

     const servicesDetails = async()=>{

        try {
            
            const response = await fetch(`${API}/api/data/service`,{
                method:"GET"
            })

            if(response.ok){
                const data = await response.json()
                console.log(data);
               setServiceDoc(data.mssgs)

            }
        } catch (error) {
            console.log("error in servicesdetails",error);
        }
     }



     useEffect(() => {
        servicesDetails()
        userAuthentication();
      }, []);
    return(
        <AuthContext.Provider value={{setTokenLocalSG,logoutUser, isLoggIn, user, serviceDoc, tokenAuth,isLoading, API}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}