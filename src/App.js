import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Home from './components/Home';
import Academics from './components/Academics';
import StudentPortal from './components/student-portal/StudentPortal';
import PortalLayout from './components/student-portal/PortalLayout';
import StdProfile from './components/student-portal/StdProfile';
import StdResults from './components/student-portal/StdResults';
import StdPayments from './components/student-portal/StdPayments';
import StdBlog from './components/student-portal/StdBlog';
import PortalIndex from './components/student-portal/PortalIndex';
import Alumni from './components/Alumni';
import ContactUs from './components/ContactUs';
import Campus from './components/Campus';
import Admissions from './components/Admissions';
import Staff from './components/Staff';

function App() {
  return (
    <div className="app">     
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<Home />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/alumni' element={<Alumni />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/campus-life' element={<Campus />} />
          <Route path='/admissions' element={<Admissions />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/student-portal' element={<StudentPortal />} />
        </Route>       
        <Route path='/student-portal/home' element={<PortalLayout />}>
           <Route index element={<PortalIndex/>}/>
            <Route path='/student-portal/home/results' element={<StdResults/>}/>          
            <Route path='/student-portal/home/payments' element={<StdPayments />} />
            <Route path='/student-portal/home/myprofile' element={<StdProfile />} />
            <Route path='/student-portal/home/blog-page' element={<StdBlog/>} />
          </Route>  
      </Routes>    
    </div>
  );
}

export default App;
