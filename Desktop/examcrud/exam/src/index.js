import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { movies } from './data';
import Home from './Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Product from './Product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App details={movies} /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Product />}></Route>

    </Routes>
    </BrowserRouter>
    {/* <Home/> */}
  </React.StrictMode>
);


