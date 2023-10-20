
import './App.css';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import SignUp from './components/SignUp';
import Home from './components/Home';
const RouteJSX = (
  <>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
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
