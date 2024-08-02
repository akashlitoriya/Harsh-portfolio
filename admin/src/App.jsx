
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProtectedRoute from './components/core/Auth/ProtectedRoute'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      route: '/',
      element:(
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />
    },
    {
      route: '/login',
      element: <LoginPage />,
      errorElement: <ErrorPage />
    }
  ])
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
