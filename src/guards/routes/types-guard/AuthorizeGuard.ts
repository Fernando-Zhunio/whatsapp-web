import { useAuth } from '../../../context/AuthContext';
// import { RouteProps } from "react-router-dom";
import { GuardFunctionState } from "../types/GuardFunction";
import { Status } from '../../../shared/enums/status';
// import { environment } from '../../../environment/environment';
export const AuthorizeForStateGuard: GuardFunctionState = (_status: Status) => {
    const { status } = useAuth();
    if (status === _status) {
        return true;
    }
    return false
}