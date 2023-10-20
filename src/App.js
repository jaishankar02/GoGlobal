
import './App.css';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
const RouteJSX = (
  <>
    {/* <Route index element={<Button />} /> */}
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
