import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductAnimation from './pages/ProductAnimation.jsx'
import ProductVisualization from './pages/ProductVisualization.jsx'
import PersonalProject from './pages/PersonalProject.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path: '/productVisualization',
    element: <ProductVisualization />
  },
  {
    path: '/productAnimation',
    element: <ProductAnimation />
  },
  {
    path: '/personalProject',
    element: <PersonalProject />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      
    </RouterProvider>
    
  </React.StrictMode>,
)
