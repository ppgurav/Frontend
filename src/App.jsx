import React from 'react';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ProductList from './Pages/ProductList';
import User from './Pages/User';
import UserCard from './Components/UserCard';

function App() {
  return (

<Router>
    <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/user" element={<User />} />
        <Route path="/ucard" element={<UserCard />} />


      </Routes>
</Router>
    
  );
}

export default App;
