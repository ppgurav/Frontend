import React from 'react';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ProductList from './Pages/ProductList';
import User from './Pages/User';
import UserCard from './Components/UserCard';
import Profilepage from './Pages/Profilepage';
import Compaign from './Pages/Compaign';
import EditModal from './Modal/EditModal';
import UpdatePasswordModal from './Modal/UpdatePasswordModal';
import ForgetPage from './Pages/ForgetPage';
import ConfirmOTP from './Pages/ConfirmOTP';
import HomePage from './Pages/HomePage';
import Device from './Pages/Device';
import DeviceCard from './Components/DeviceCard';
import DeviceModal from './Modal/DeviceModal';
import UserForm from './Modal/UserForm';

function App() {
  return (

<Router>
    <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/user" element={<User />} />
        <Route path="/compaign" element={<Compaign />} />
        
        <Route path="/ucard" element={<UserCard />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/update/:id" element={<EditModal />} />
        <Route path="/updatepas" element={<UpdatePasswordModal />} />
        <Route path="/forgetpas" element={<ForgetPage />} />
        <Route path="/confirmOTP" element={<ConfirmOTP />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/device" element={<Device />} />
        <Route path="/dcard" element={<DeviceCard />} />
        <Route path="/add" element={<DeviceModal />} />
        <Route path="/userForm" element={<UserForm />} />
      </Routes>
</Router>
    
  );
}

export default App;
