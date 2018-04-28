import React from 'react';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';


export default [

    {
        ...App,
        routes: [
            {
                ...HomePage, // If Page without Redux connection use component: HomePage instead of ...HomePage
                path: '/',
                exact: true
            },
            {
                ...BlogDetailPage,
                path: '/post/:slug',
                exact: true
            },
            {
                ...CategoryPage,
                path: '/category/:category',
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

