import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Views/index';
import AboutPage from './Views/about';
import NotFound from './Views/notfound';

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default MainRoutes;