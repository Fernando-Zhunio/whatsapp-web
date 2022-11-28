import { Routes, Route, Link } from 'react-router-dom';
import Login from '../modules/Authentication/Login/Login';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            {/* <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} /> */}
        </Routes>
    );
}

export default AppRouter;