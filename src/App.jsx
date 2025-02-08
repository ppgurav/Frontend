import React from 'react';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
      </Route>
      <Route path="/signup" element={<Signup />}>
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
