
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProtectedRoute from './components/core/Auth/ProtectedRoute'
import Home from './pages/Home'
import ErrorPage from './components/core/ErrorPage'
import LoginPage from './pages/Login'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    }
  ])
  return (
    <Provider store = {store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  )
}

export default App
