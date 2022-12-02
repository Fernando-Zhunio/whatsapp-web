import { useAuth } from '../../context/AuthContext';
import { Status } from '../../shared/enums/status';

export const GuardRoutes = ({ statusMatch= Status.CONNECTED, children, fallback }: any) => {
    const { status } = useAuth();
    return <>
        {
            status === statusMatch ? children : fallback()
        }
    </>
}