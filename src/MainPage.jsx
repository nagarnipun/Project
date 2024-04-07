import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Website
import Header from './Component/Header'
import Footer from './Component/Footer'
import Index from './Pages/Index'
import AboutUs from './Pages/AboutUs'
import Galarry from './Pages/Galarry'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import Editprofile from './Pages/Editprofile'


//Admin
import Ad_header from './Admin/Component/Ad_header'
import Ad_footer from './Admin/Component/Ad_footer'
import Ad_index from './Admin/Pages/Ad_index'
import Ad_login from './Admin/Pages/Ad_login'
import Ad_signup from './Admin/Pages/Ad_signup'
import Add_categories from './Admin/Pages/Add_categories'
import Add_employee from './Admin/Pages/Add_employee'
import Add_service from './Admin/Pages/Add_service'
import Manage_categories from './Admin/Pages/Manage_categories'
import Manage_employee from './Admin/Pages/Manage_employee'
import Manage_service from './Admin/Pages/Manage_service'
import Manage_contact from './Admin/Pages/Manage_contact'
import Manage_user from './Admin/Pages/Manage_user'
import Ad_blog from './Admin/Pages/Ad_blog'
import Manage_blog from './Admin/Pages/Manage_blog'
import View_service from './Pages/View_service';
import Web_log from './Pages/Web_log';
import Web_signup from './Pages/Web_signup';
import View_galarry from './Pages/View_galarry';




function MainPage() {
  return (
    
    <BrowserRouter>
    <ToastContainer></ToastContainer>
        <Routes>
           <Route path='/' element={<><Header/><Index/><Footer/></>}></Route>
            <Route path='/about' element={<><Header/><AboutUs/><Footer/></>}></Route>
            <Route path='/galarry' element={<><Header/><Galarry/><Footer/></>}></Route>
            <Route path='/view_galarry/:id' element={<><Header/><View_galarry/><Footer/></>}></Route>    
            <Route path='/service' element={<><Header/><Service/><Footer/></>}></Route>
            <Route path='/view_service/:id' element={<><Header/><View_service/><Footer/></>}></Route>
            <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route> 
            <Route path='/profile' element={<><Header/><Profile/><Footer/></>}></Route> 
            <Route path='/editprofile/:id' element={<><Header/><Editprofile/><Footer/></>}></Route> 
            <Route path='/login' element={<><Header/><Web_log/><Footer/></>}></Route>
            <Route path='/signup' element={<><Ad_header/><Web_signup/><Ad_footer/></>}></Route>
            

            <Route path='/admin' element={<><Ad_header/><Ad_index/><Ad_footer/></>}></Route>
            <Route path='/adminlogin' element={<><Ad_login/></>}></Route>
            <Route path='/adminsignup' element={<><Ad_header/><Ad_signup/><Ad_footer/></>}></Route>
            

            <Route path='/addcategories' element={<><Ad_header/><Add_categories/><Ad_footer/></>}></Route>
            <Route path='/addemployee' element={<><Ad_header/><Add_employee/><Ad_footer/></>}></Route>
            <Route path='/addservice' element={<><Ad_header/><Add_service/><Ad_footer/></>}></Route>
            <Route path='/addblog' element={<><Ad_header/><Ad_blog/><Ad_footer/></>}></Route>
            
            <Route path='/managecategories' element={<><Ad_header/><Manage_categories/><Ad_footer/></>}></Route>
            <Route path='/manageemployee' element={<><Ad_header/><Manage_employee/><Ad_footer/></>}></Route>
            <Route path='/manageservice' element={<><Ad_header/><Manage_service/><Ad_footer/></>}></Route>

            <Route path='/managecontact' element={<><Ad_header/><Manage_contact/><Ad_footer/></>}></Route>
            <Route path='/manageuser' element={<><Ad_header/><Manage_user/><Ad_footer/></>}></Route>

            <Route path='/manageblog' element={<><Ad_header/><Manage_blog/><Ad_footer/></>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default MainPage