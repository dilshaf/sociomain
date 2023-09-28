import React from 'react';
import ReactDOM from 'react-dom/client';
import Edit from './Edit'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Details';
import Form from './Form';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/Details' element={<Details/>}/>
        <Route path='/edit' element={<Edit/>}></Route>

      </Routes>
      </BrowserRouter>
    }
  </React.StrictMode>
);


