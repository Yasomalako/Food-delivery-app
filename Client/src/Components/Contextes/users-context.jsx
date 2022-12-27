import { createContext, useState, useEffect } from "react";
import { GetUserS } from "../../services/users-Service";

export const UsersContext = createContext()

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([])
    console.log(users);
    // const [usersByCategory, setUsersByCategory] = useState([])

    useEffect(() => {
        GetUserS().then(result => {
            console.log(result)
            setUsers(result)
        })

    }, []);

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    )
}