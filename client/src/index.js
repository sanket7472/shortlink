import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './views/Home/Home.js';
import './index.css';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);


