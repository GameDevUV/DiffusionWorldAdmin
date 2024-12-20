import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import { Home, Stacks } from './components';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home />} />
      <Route path='Stacks' element = {<Stacks />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
