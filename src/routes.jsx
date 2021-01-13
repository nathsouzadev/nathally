import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Views/index';
import BlogPage from './Views/blog';
import NotFound from './Views/notfound';
import ChalengeCSS from './Views/chalengecss';


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/css" element={<ChalengeCSS/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default MainRoutes;