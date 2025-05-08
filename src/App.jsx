import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Page/Landingpage.jsx';
import Signin from './component/Signin.jsx';
import Pay from './Page/Pay.jsx';
import Sidebar from './component/Sidebar.jsx';
import Login from './component/Login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path='/login'element={<Login/>}/>
        {/* Add more routes as needed */}
       
      </Routes>
    </Router>
  );
}
export default App;