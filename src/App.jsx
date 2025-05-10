import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Page/Landingpage.jsx';
import Signin from './component/Signin.jsx';
import Pay from './Page/Pay.jsx';
import Sidebar from './component/Sidebar.jsx';
import Login from './component/Login.jsx';
import Complete from "./component/Complete.jsx"; 
import Loader from "./component/Loader.jsx"
import Details from './Page/Details.jsx';
import Verify from './Page/Verify.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path='/login'element={<Login/>}/>
        <Route path='/complete'element={<Complete/>}/>
        <Route path='/loader'element={<Loader/>}/>
        <Route path='/details'element={<Details/>}/>
        <Route path='/verify'element={<Verify/>}/>

        {/* Add more routes as needed */}
       
      </Routes>
    </Router>
  );
}
export default App;