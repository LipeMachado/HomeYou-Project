import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}