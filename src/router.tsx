import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { GalleryPage } from './Pages/GalleryPage';
import { ContactPage } from './Pages/ContactPage';
import { AboutUsPage } from './Pages/AboutUsPage';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path='/sobrenos' element={<AboutUsPage />} />
        </Routes>
    );
}