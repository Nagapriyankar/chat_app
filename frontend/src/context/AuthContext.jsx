import { createContext, useContext, useState } from 'react'


export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    //application is wrap using authcontext prvider, aandd entire app can use the value below
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
      
    
}




/* 
s1: create authcontext
s2: create authcontext.provider that wrp our application with values
    that can be used anywhre in the application
s3: in order to able to consume those values, create useContextHook
s4: wrap <App> with <AuthContextProvider></AuthContextProvider>
s5: once signup completed, set localstorage and and use it to update authcontext 
*/