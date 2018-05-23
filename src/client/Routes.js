import React from 'react';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';
import TestPage from './pages/TestPage';
import HomePageWithPageNumber from './pages/HomePageWithPageNumber';


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
                ...HomePageWithPageNumber,
                path: '/pages',
                exact: true
            },
            {
                ...TestPage,
                path: '/test',
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

