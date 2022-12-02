import { Routes, Route, Navigate } from 'react-router-dom';
import { GuardRoutes } from '../guards/guard-routes/GuardRoutes';
import { AuthorizeForStateGuard } from '../guards/routes/types-guard/AuthorizeGuard';
import LoadingStatus from '../modules/Authentication/pages/loading-status/LoadingStatus';
import Login from '../modules/Authentication/pages/Login/Login';
import Home from '../modules/Home/pages/Home';
import { Status } from '../shared/enums/status';
// import GuardRoute from '../guards/guard-routes/GuardRoutes';
// import { AuthGuard } from '../guards/routes/types-guard/AuthGuard';
const AppRouter = () => {
    return (

        <Routes>
            <Route path='before-authorize' element={<LoadingStatus />} />
            <Route path="login" element={
                <GuardRoutes
                    fallback={() => <Navigate to="/before-authorize" />}
                    >
                    <Login />
                </GuardRoutes>
            } />
            <Route path="home"
                element={
                    <GuardRoutes
                        fallback={() => <Navigate replace={true} to="../before-authorize" />}
                        >
                        <Home />
                     </GuardRoutes>
                }>
            </Route>
        </Routes>
    );
}

export default AppRouter;