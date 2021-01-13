import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Views/index';
import BlogPage from './Views/blog';
import NotFound from './Views/notfound';
import Day01 from './components/DaysCSS/Day01/index';


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/css" element={<Day01/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default MainRoutes;