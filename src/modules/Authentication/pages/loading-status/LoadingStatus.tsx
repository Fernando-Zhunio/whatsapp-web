import { Navigate } from "react-router-dom";
import { Status } from "../../../../shared/enums/status";
import { useApiStatus } from "../../services/loading-status.service"

 const LoadingStatus = () => {
    const { error, status, loading } = useApiStatus();

    if (loading) {
        return <div>Cargando espere...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    if (status === Status.CONNECTED) {
        console.log({ LoadingStatus: status });
        return <Navigate to="/home" />;
    }

    return <>Hola</>

    // return <Navigate to="/login" />;

 }

 export default LoadingStatus;