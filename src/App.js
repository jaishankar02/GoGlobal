
import './App.css';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Contact from './components/Contact';
import Buyerlogin from './components/Buyerlogin';
import Buyersignup from './components/Buyersignup';
import Billing from './components/Billing';
import Sellersignup from './components/Sellersignup';
import Cartlist from './components/Cartlist';
import Storypage from './components/Storypage';
import Productlist from './components/Productlist';
import Profile from './components/Profile';
import Productcategory from './components/Productcategory';
import Profileview from './components/Profileview';
import Productpreview from './components/Productpreview';
import Sellerdashboard from './components/Sellerdashboard';
const RouteJSX = (
  <>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/billing' element={<Billing />} />

      <Route path='/cartlist' element={<Cartlist />} />
      <Route path='/storypage' element={<Storypage />} />
      <Route path='/productlist' element={<Productlist />} />
      <Route path='/productcategory' element={<Productcategory />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profileview' element={<Profileview />} />
      <Route path='/sellerdashboard' element={<Sellerdashboard />} />
      <Route path='/productpreview/:productID' element={<Productpreview />} />
    </Route>
    <Route path='/login' element={<Login />} />
    <Route path='/sellersignup' element={<Sellersignup />} />
    <Route path='/buyerlogin' element={<Buyerlogin />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/buyersignup' element={<Buyersignup />} />
  </>
);
const routes = createRoutesFromElements(RouteJSX);
const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
