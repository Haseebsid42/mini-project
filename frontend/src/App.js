
import { BrowserRouter, Navigate, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Contactus from './components/Contactus';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion'
import CartItem from './components/Cartitem';
import React from 'react';
import { UserProvider } from './UserContext';
import AddProduct from './components/AddProduct';
import CheckOut from './components/CheckOut';




function App() {
  return (
    <div>

      <Toaster position='top-center' />
      <AnimatePresence>
        <BrowserRouter>
          <UserProvider>
            <Navbar />
            <Routes>
              <Route element={<Navigate to="/home" />} path='/' />
              <Route element={<Home />} path='home' />
              <Route element={<Login />} path='login' />
              <Route element={<Contactus />} path='contactus' />
              <Route element={<CartItem />} path='cartitem/:id' />
              <Route element={<Signup />} path='signup' />
              <Route element={<NotFound />} path='*' />
              <Route element={<AddProduct />} path='addproduct' />
              <Route element={<CheckOut />} path='checkout/:id' />


            </Routes>
          </UserProvider>
        </BrowserRouter>
      </AnimatePresence>


    </div>

  );
}


export default App;
