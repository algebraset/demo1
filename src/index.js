import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Addquiz from './pages/Addquiz';
import View from './pages/View';
import Login from './pages/Login';
import Register from './pages/Register';
import MainContext from './context/MainContext';
let routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/addquiz',
    element: <Addquiz/>
  },
  {
    path: '/view',
    element:<View/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/register',
    element:<Register/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContext>
       <RouterProvider router={routes}/>
    </MainContext>
  </React.StrictMode>
);


