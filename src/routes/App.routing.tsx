import { Routes, Route, Link } from 'react-router-dom';
import Login from '../modules/Authentication/Login/Login';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
        </Routes>
    );
}

export default AppRouter;