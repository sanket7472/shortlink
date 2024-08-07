import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './Global.css';
import Home from './views/Home/Home.js';
import Register from './views/Register/Register.js';
import Login from './views/Login/Login.js';
const router = createBrowserRouter([
 
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/register',
    element : <Register/>
  },
  {
    path : '/login',
    element : <Login/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/>);