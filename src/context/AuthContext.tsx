import { createContext, useContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useSocket } from "../class/init";
// import { useApiChats } from "../services/whatsapp.service";

const authContext = createContext<any>(null);

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const { socket } = useSocket();

    const signIn = () => {
        socket.on('authenticated', (res: any) => {
            setIsAuth(true)
            return redirect("/home");
        })
    };

    useEffect(() => {
        signIn()
    }, []);

    return {
        isAuth,
        user,
        setUser,
    };
}

export const useAuth = () => {
    return useContext(authContext);
}

export function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
