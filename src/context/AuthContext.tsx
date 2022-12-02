import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useSocket } from "../class/init";
import { environment } from "../environment/environment";
import { Status } from "../shared/enums/status";

const authContext = createContext<any>(null);
function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [status, setStatus] = useState<Status>(Status.IDLE);
    const { socket } = useSocket();
    return {
        isAuth,
        user,
        status,
        setStatus,
        setUser,
        socket,
    };
}

export const useAuth = () => {
    return useContext(authContext);
}

export function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
