import React from 'react';
import ReactDOM from 'react-dom/client';
import Post from './Post';

import App from './App';
import ShopContextProvider from './context/ShopContext';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './Product';
import Cart from './Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Post/>}/>
        <Route path='/get' element={<App/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
    {/* <App /> */}
    </ShopContextProvider>
  </React.StrictMode>
);


