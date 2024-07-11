import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/Projects",
        element: <Projects />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/Contact",
        element: <Contact />,
        errorElement:<ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
)
