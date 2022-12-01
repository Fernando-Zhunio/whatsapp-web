import { Routes, Route, Link } from 'react-router-dom';
import Login from '../modules/Authentication/Login/Login';
import Home from '../pages/Home';
import InsertMassive from '../pages/InsertMassive';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="inserts" element={<InsertMassive />} />
        </Routes>
    );
}

export default AppRouter;