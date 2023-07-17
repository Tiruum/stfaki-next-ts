import { useEffect, useState } from "react";

export const useAuthUser = (cookies: any) => {
    let [loggedUser, setLoggedUser] = useState({} as {email: string, id: number, username: string, balance: string, banned: Boolean, banReason: string, roles: {id: number, value: string, description: string}, iat: number, exp: number})
    useEffect(() => {
        setLoggedUser(cookies.user)
    }, [cookies.user])
    return loggedUser
}