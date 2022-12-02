import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { environment } from "../../../environment/environment";
import { Status } from "../../../shared/enums/status";

export function useApiStatus() {
    const {status, setStatus} = useAuth();
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        console.log("useApiStatus");
        getStatus();
        
    }, []);

    function getStatus() {
        setLoading(true);
        axios.get(environment.serverApi + '/status')
            .then((response) => {
                setStatus(response.data.status);
                setLoading(false);
            }).catch((error) => {
                setStatus(Status.CONFLICT);
                setLoading(false);
                setError(error);
            });
    }


    return { status, setStatus, loading, error };
}