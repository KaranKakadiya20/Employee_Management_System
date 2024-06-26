import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default CustomRoutes;
