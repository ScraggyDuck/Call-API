import React from 'react';
import HomePage from './pages/MenuPage/MenuPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products-list',
        exact: false,
        main: () => <ProductsListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match}) => <ProductActionPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;