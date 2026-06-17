import './App.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <NoPage />
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
