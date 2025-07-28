
import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../src/Layout/Layout';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>
    }
])





export default Router;