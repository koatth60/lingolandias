import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Courses from './pages/Courses.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter ([
  { 
    path : '/',
    element: <App />
   }, 
   { 
    path : '/courses',
    element: <Courses />
   },
   { 
    path : '/team',
    element: <Team />
   },
   { 
    path : '/contact',
    element: <Contact />
   }


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
