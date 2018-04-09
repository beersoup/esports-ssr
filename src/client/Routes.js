import React from 'react';
import HomePage from './pages/HomePage';
import App from './App';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import BlogListPage from './pages/BlogListPage';
import BlogPage from './pages/BlogPage';

export default [

    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...BlogListPage,
                path: '/blog',
                exact: true
            },
            {
                ...BlogPage,
                path: '/blog/:id'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

