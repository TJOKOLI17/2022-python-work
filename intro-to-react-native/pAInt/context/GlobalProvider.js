import { createContext, useContext, useState, useEffect } from "react";

import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();


/**
 * Get the current logged-in status of the user.
 * @returns global context of user logged-in status and the user object.
 */
export const useGlobalContext = () => useContext(GlobalContext);


const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true) // we are first loading that user in
    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if(res){
                    setIsLoggedIn(true)
                    setUser(res)
                }else{
                    setIsLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => {setIsLoading(false)}) // possibly causing unhandled rejection

    }, []);
    
    return(
        <GlobalContext.Provider
            value={{
                isLoggedIn, setIsLoggedIn,
                user, setUser,
                isLoading, setIsLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider