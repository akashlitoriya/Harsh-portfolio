
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProtectedRoute from './components/core/Auth/ProtectedRoute'
import Home from './pages/Home'
import ErrorPage from './components/core/ErrorPage'
import LoginPage from './pages/Login'
import { Provider } from 'react-redux'
import { store } from './store/store'
import AddProject from './pages/AddProject'
import ListProjects from './pages/ListProjects'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
    },
    {
      path: "/addProject",
      element: (
        <ProtectedRoute>
          <AddProject />
        </ProtectedRoute>
      )
    },
    {
      path: "/listProjects",
      element: (
        <ProtectedRoute>
          <ListProjects />
        </ProtectedRoute>
      )
    }
    
  ])
  return (
    <>
    <Provider store = {store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
    <ToastContainer/>
    </>
  )
}

export default App
